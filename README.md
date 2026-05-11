# Personal AI Portfolio Website

## 1. Project Overview

Personal AI Portfolio Website is a responsive personal portfolio built with Next.js, React, TypeScript, the Google Gemini API, Vercel, and a local Markdown knowledge base.

The website presents profile information, research interests, publications, work experience, projects, technical skills, and contact information. It also includes an AI Assistant that can answer questions about the portfolio owner's education, research direction, publications, projects, experience, skills, and contact rules.

The current version is not a general web-search AI assistant. It answers from local Markdown files stored in `src/data/`. The assistant should only use the provided knowledge base and should not invent information that is not present there.

## 2. Features

- Responsive personal portfolio website
- Mobile hamburger navigation
- Research interests section
- Publications section with DOI link
- Work experience and internship section
- Horizontally scrollable project cards
- Horizontally scrollable experience cards
- Gemini-powered AI Assistant
- Local Markdown knowledge base
- Server-side API route for AI calls
- Vercel deployment support
- Secure environment variable handling

## 3. Tech Stack

- Next.js
- React
- TypeScript
- CSS
- lucide-react
- Google Gemini API
- `@google/generative-ai`
- Vercel
- Markdown knowledge base

## 4. Project Structure

```text
personal-ai-web/
├── public/
│   └── (optional public assets)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ChatBox.tsx
│   │   └── Navbar.tsx
│   └── data/
│       ├── profile.md
│       ├── education.md
│       ├── academic-record.md
│       ├── awards.md
│       ├── publications.md
│       ├── projects.md
│       ├── experience.md
│       ├── skills.md
│       ├── phd-direction.md
│       ├── faq.md
│       └── contact.md
├── .env.local.example
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## 5. How the AI Assistant Works

The AI Assistant follows this flow:

```text
User question
→ ChatBox frontend
→ POST /api/chat
→ Next.js server route reads Markdown files from src/data/
→ Markdown files are combined into a knowledge context
→ Prompt is sent to Gemini API
→ Gemini returns an answer
→ Frontend displays the answer
```

Important limitations:

- It only answers based on the local knowledge base.
- It should not invent information.
- If information is missing, it should say it does not have enough information.
- It does not browse the internet.
- It does not use Supabase, pgvector, or RAG in the current version.

## 6. Local Setup

### 6.1 Clone the Repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 6.2 Install Dependencies

```bash
npm install
```

### 6.3 Create Environment File

```bash
cp .env.local.example .env.local
```

Add your Gemini API key to `.env.local`:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Do not use `NEXT_PUBLIC_GEMINI_API_KEY`. The Gemini API key must only be used by the server-side API route.

### 6.4 Run the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 6.5 Build Locally

```bash
npm run build
```

## 7. How to Get a Gemini API Key

1. Go to Google AI Studio.
2. Sign in with a Google account.
3. Open the API Keys page.
4. Create a new API key.
5. Copy the API key.
6. Paste it into `.env.local` as `GEMINI_API_KEY`.
7. Never commit the real API key.

## 8. Vercel Deployment Guide

### 8.1 Push the Project to GitHub

```bash
git add .
git commit -m "Initial commit"
git push
```

### 8.2 Import the GitHub Repository in Vercel

1. Go to Vercel.
2. Click **Add New Project**.
3. Import the GitHub repository.
4. Select **Framework Preset: Next.js**.
5. Keep **Root Directory** as `./` if `package.json` is in the repository root.
6. Keep **Build Command** as `npm run build` or the Next.js default.
7. Keep **Output Directory** as the Next.js default.

### 8.3 Add Environment Variables in Vercel

In the Vercel project settings or import deployment page, add:

```text
Name:
GEMINI_API_KEY

Value:
your actual Gemini API key

Environment:
Production and Preview
```

Important:

- Do not use `NEXT_PUBLIC_GEMINI_API_KEY`.
- Do not paste the key into frontend code.
- Do not commit `.env.local`.
- After adding or changing environment variables, redeploy the project.

### 8.4 Deploy

Click **Deploy** and wait for the build to complete.

### 8.5 Redeploy After Environment Variable Changes

If `GEMINI_API_KEY` is added after the first deployment, redeploy:

```text
Project → Deployments → Latest Deployment → Redeploy
```

## 9. Updating the Knowledge Base

The AI Assistant reads public-safe Markdown files from `src/data/`.

To update the knowledge base:

1. Edit Markdown files in `src/data/`.
2. Add only public-safe information.
3. Keep sections structured and concise.
4. Run `npm run build`.
5. Commit and push.
6. Vercel redeploys automatically after pushing to `main`.

Recommended knowledge base files:

- `profile.md`
- `education.md`
- `academic-record.md`
- `awards.md`
- `publications.md`
- `projects.md`
- `experience.md`
- `skills.md`
- `phd-direction.md`
- `faq.md`
- `contact.md`

## 10. Adding a New Project

To add a new project:

1. Update the `projects` array in `src/app/page.tsx`.
2. Add title, description, technologies, and GitHub link if available.
3. Update `src/data/projects.md`.
4. Optionally update `src/data/faq.md`.
5. Run:

```bash
npm run build
```

## 11. Adding a New Publication

To add a new publication:

1. Update the Publications section in `src/app/page.tsx`.
2. Update `src/data/publications.md`.
3. Include title, authors, journal, year, and DOI.
4. Clearly state author role if relevant, such as first author.
5. Run:

```bash
npm run build
```

## 12. Security and Privacy Notes

Do not commit:

- `.env.local`
- API keys
- Gemini API key
- secrets
- tokens
- `private-docs/`
- transcripts
- ranking proof
- award certificate originals
- passport or ID documents
- full official PDF records
- files containing student ID, address, date of birth, certificate numbers, QR codes, or verification links

Original sensitive files should stay local or private. Only public-safe summaries should be added to Markdown files.

If private documents are used to create knowledge base summaries, place them in `private-docs/` and make sure `private-docs/` is included in `.gitignore`.

## 13. Common Deployment Problems

### GEMINI_API_KEY is not configured

Possible causes:

- Missing Vercel environment variable
- Wrong variable name
- Forgot to redeploy after adding the variable

Fix:

- Add `GEMINI_API_KEY` in Vercel.
- Redeploy the project.

### API key not valid

Possible causes:

- Wrong or deleted Gemini API key
- Key was copied incorrectly

Fix:

- Generate a new key.
- Update local `.env.local`.
- Update the Vercel environment variable.
- Redeploy the project.

### fetch failed locally

Possible cause:

- Local network cannot access `generativelanguage.googleapis.com`.

Fix:

- Use another network, VPN, or proxy.
- Test after deploying to Vercel.

### model not found

Possible cause:

- Gemini model name is unavailable or deprecated.

Fix:

- Change `MODEL_NAME` in `src/app/api/chat/route.ts` to an available Flash model.

### Vercel deployment blocked because commit email is not matched

Possible cause:

- Git commit email is not verified in GitHub.

Fix:

- Add and verify the commit email in GitHub Settings → Emails.
- Or change local git `user.email` to a verified GitHub email:

```bash
git config user.email "your-verified-email@example.com"
git config user.name "Your Name"
```

- Push a new commit or redeploy.

## 14. Git Workflow

Recommended workflow:

```bash
git status
npm run build
git add .
git commit -m "Meaningful commit message"
git push
```

After pushing to `main`, Vercel automatically starts a new deployment if the repository is connected to Vercel.

## 15. Future Improvements

- Supabase + pgvector RAG
- Admin upload page
- Source citations
- Contact form
- Multi-language answers
- Analytics
- Custom domain
- Better project filtering
- Dark mode

## 16. License / Usage

This project is intended as a personal portfolio and AI assistant template. Please remove or replace personal information before reuse.
