# Next.js AI Portfolio Demo

Public demo of a Next.js AI portfolio with a Gemini-powered assistant. The assistant uses a server-side API route and a sanitized local demo knowledge base in `src/data/profile.md`.

No personal/private materials, real CV files, API keys, or secrets are included.

## Features

- Next.js App Router portfolio UI
- Interactive chat box that calls `fetch("/api/chat")`
- Server-side Gemini API integration
- API key handled through environment variables
- Local markdown demo knowledge base

## Local Development

Create `.env.local` in the project root using `.env.example` as a template:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Run the app:

```bash
npm install
npm run dev
```

The assistant calls Gemini from the server-side `/api/chat` route. Local testing requires your network to access `generativelanguage.googleapis.com`. If your local network cannot reach that domain, deploy to Vercel and test there.

## Vercel Deployment

In Vercel Project Settings -> Environment Variables, add the server-side environment variable:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

After adding or changing the variable, redeploy the project.

Do not use `NEXT_PUBLIC_GEMINI_API_KEY`. Do not commit real API keys to GitHub, README files, example files, frontend code, or any other tracked file.
