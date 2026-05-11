"use client";

import { FormEvent, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

type ChatMessage = {
  id: string;
  role: "assistant" | "visitor";
  content: string;
};

const suggestedQuestions = [
  "What is Xiyao's research direction?",
  "Which machine learning projects has he completed?",
  "What experience does he have in biomedical AI?",
];

const initialMessages: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Hi, I can help visitors learn about Xiyao Huang's education, research, projects, and technical background.",
  },
];

export function ChatBox() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendMessage(rawMessage: string) {
    const userMessage = rawMessage.trim();

    if (!userMessage || isLoading) {
      return;
    }

    const visitorMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "visitor",
      content: userMessage,
    };

    setMessages((current) => [...current, visitorMessage]);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = (await response.json()) as { answer?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "The assistant could not respond.");
      }

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            data.answer ||
            "I do not have enough information about that in the current profile.",
        },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function clearChat() {
    setMessages(initialMessages);
    setInput("");
    setError("");
  }

  return (
    <section className="assistant-panel" id="assistant" aria-label="AI assistant">
      <div className="assistant-heading">
        <span className="assistant-icon" aria-hidden="true">
          <Sparkles size={18} />
        </span>
        <div>
          <p className="eyebrow">AI Assistant</p>
          <h2>Ask about Xiyao's CV, projects, and research.</h2>
        </div>
      </div>

      <div className="chat-window" aria-live="polite">
        {messages.map((message) => (
          <div className={`message ${message.role}`} key={message.id}>
            {message.content}
          </div>
        ))}
        {isLoading ? <div className="message assistant">Thinking...</div> : null}
      </div>

      <div className="suggestions" aria-label="Suggested questions">
        {suggestedQuestions.map((question) => (
          <button
            disabled={isLoading}
            key={question}
            onClick={() => void sendMessage(question)}
            type="button"
          >
            {question}
          </button>
        ))}
      </div>

      <div className="chat-actions">
        <button disabled={isLoading} onClick={clearChat} type="button">
          Clear chat
        </button>
      </div>

      <form className="chat-input" onSubmit={handleSubmit} aria-label="Ask the assistant">
        <input
          maxLength={500}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask a question about Xiyao..."
          value={input}
        />
        <button
          disabled={isLoading || !input.trim()}
          type="submit"
          aria-label="Send message"
          title="Send message"
        >
          <ArrowUp size={18} />
        </button>
      </form>

      {error ? <p className="chat-error">{error}</p> : null}
    </section>
  );
}
