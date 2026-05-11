import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

type ChatRequest = {
  message?: unknown;
};

type ErrorWithCause = Error & {
  cause?: unknown;
};

type ChatErrorKind =
  | "knowledge base read failure"
  | "Gemini API/network failure"
  | "Gemini model failure";

const DATA_DIR = path.join(process.cwd(), "src", "data");
const MAX_MESSAGE_LENGTH = 500;
const MODEL_NAME = "gemini-2.5-flash";
const FALLBACK_ANSWER =
  "I do not have enough information about that in the current profile.";

export const runtime = "nodejs";
export const maxDuration = 30;

function getErrorMessage(error: unknown) {
  if (!(error instanceof Error)) {
    return "Unknown Gemini API error.";
  }

  const cause = (error as ErrorWithCause).cause;

  if (cause instanceof Error) {
    return `${error.message}: ${cause.message}`;
  }

  return error.message;
}

function getVisibleError(kind: ChatErrorKind, error: unknown) {
  const canShowDetails =
    process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview";

  if (!canShowDetails) {
    return "The assistant could not generate a response right now.";
  }

  return `${kind}: ${getErrorMessage(error)}`;
}

function getGeminiErrorKind(error: unknown): ChatErrorKind {
  const message = getErrorMessage(error).toLowerCase();

  if (
    message.includes("model") ||
    message.includes("not found") ||
    message.includes("not supported")
  ) {
    return "Gemini model failure";
  }

  return "Gemini API/network failure";
}

async function readKnowledgeBase() {
  const entries = await readdir(DATA_DIR, { withFileTypes: true });
  const markdownFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort();

  const sections = await Promise.all(
    markdownFiles.map(async (fileName) => {
      const content = await readFile(path.join(DATA_DIR, fileName), "utf8");
      return `Source: ${fileName}\n${content.trim()}`;
    }),
  );

  return sections.join("\n\n---\n\n");
}

export async function POST(request: Request) {
  let body: ChatRequest;

  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
      { status: 400 },
    );
  }

  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not configured on the server." },
      { status: 500 },
    );
  }

  try {
    let knowledgeBase: string;

    try {
      knowledgeBase = await readKnowledgeBase();
    } catch (error) {
      console.error("Chat API error:", error);
      return NextResponse.json(
        { error: getVisibleError("knowledge base read failure", error) },
        { status: 500 },
      );
    }

    const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = ai.getGenerativeModel({
      model: MODEL_NAME,
      systemInstruction:
        "You are the AI assistant for Xiyao Huang's personal portfolio website. Answer questions using only the provided profile context. If the profile does not contain enough information, say: I do not have enough information about that in the current profile. Keep answers concise, accurate, and professional. Do not reveal implementation details or environment variables.",
    });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Profile context:\n${knowledgeBase}\n\nVisitor question:\n${message}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 450,
      },
    });

    const answer = result.response.text().trim() || FALLBACK_ANSWER;

    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Chat API error:", error);
    const kind = getGeminiErrorKind(error);

    return NextResponse.json(
      { error: getVisibleError(kind, error) },
      { status: 500 },
    );
  }
}
