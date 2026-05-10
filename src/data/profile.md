# Demo Portfolio Profile

## Basic Information

Name: Demo User
Email: demo@example.com
Current context: Public AI portfolio demo

This sanitized demo profile represents a portfolio owner with interests in machine learning, biomedical data analysis, precision medicine, biomarker discovery, disease outcome prediction, biomedical imaging, computer vision, and applied AI systems.

## Education

- Graduate-level study in computer science and applied artificial intelligence
- Undergraduate background in computer science fundamentals, software engineering, data structures, algorithms, and machine learning

## Research Interests

- Machine learning for biomedical data analysis
- Precision medicine and biomarker discovery
- Disease outcome prediction using structured and unstructured biomedical data
- Biomedical imaging and computer vision
- Lightweight deep learning models for visual analysis
- Applied AI systems for research workflows and data-driven decision support

## Demo Projects

### Biomedical Data Analysis

A sample machine learning project focused on analyzing biomedical datasets, identifying useful features, and building predictive models for research-oriented questions. The project demonstrates data preprocessing, model evaluation, feature importance analysis, and careful communication of model limitations.

### Disease Outcome Prediction

A demo project showing how supervised learning pipelines can be used to explore disease outcome prediction. The project emphasizes responsible use of data, validation, interpretability, and clear reporting rather than clinical claims.

### Biomedical Imaging And Computer Vision

A sample computer vision project focused on extracting patterns from imaging data. The project demonstrates image preprocessing, model training, evaluation metrics, and efficient model design.

### Applied AI Assistant

This website includes a Gemini-powered assistant implemented through a server-side Next.js API route. The frontend calls `fetch("/api/chat")`; the Gemini API key stays on the server in `process.env.GEMINI_API_KEY`.

## Technical Skills

- Programming: TypeScript, JavaScript, Python
- Web development: Next.js, React, server-side API routes
- Machine learning: supervised learning, feature analysis, evaluation workflows
- AI integration: Gemini API through server-side environment variables
- Tools: Git, Node.js, npm, Vercel deployment

## Collaboration Interests

The demo profile is suitable for showing collaboration interests in biomedical machine learning, precision medicine, biomarker discovery, disease outcome prediction, biomedical imaging, computer vision, and applied AI systems.

## Career Goals

The demo profile describes a research-oriented AI builder interested in using machine learning and software engineering to create practical tools for scientific and data-driven workflows.

## Frequently Asked Questions

### What does this public demo show?

It shows a Next.js portfolio with a server-side Gemini assistant that answers questions from a local markdown knowledge base.

### Does this repository include private materials?

No. This public demo uses placeholder profile content and does not include real CV files, private documents, API keys, or personal knowledge base materials.

### How does the assistant call Gemini?

The React chat component calls the local `/api/chat` endpoint. The Next.js API route reads `GEMINI_API_KEY` from server-side environment variables and sends the sanitized profile context to Gemini.

### What should be added in Vercel?

Add `GEMINI_API_KEY` in Vercel Project Settings -> Environment Variables, then redeploy the project.

### What if the profile does not contain an answer?

The assistant should say: I do not have enough information about that in the current profile.
