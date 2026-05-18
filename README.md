# PhotoMed Website

An AI-powered traditional medicine mobile application.

## Overview

This is the public-facing website for PhotoMed, deployed at [photomed.app](https://photomed.app). It serves as the online presence for the platform, providing information about the project, download links for the mobile app, a donation portal, and a contact form.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4
- **Email**: Resend
- **Payments**: Paystack
- **AI Chat**: OpenRouter

## Project Structure

```
src/
  components/
    layout/       Header, Footer, Layout wrapper
    sections/     Home page section components
    shared/       Reusable components (ChatAssistant)
    ui/           Base UI primitives (Button, Section)
  hooks/          Custom React hooks
  lib/            Utilities and constants
  pages/          Route-level page components
  styles/         Global CSS with Tailwind theme
functions/
  api/            Cloudflare Pages Functions (contact, chat)
public/           Static assets
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Local Testing with Functions

```bash
npm run build
npm run cf:dev
```

## Deployment

Deployment happens automatically on push to `main` . Manual deploy:

```bash
npm run deploy
```

## Automated Daily Blog Publishing

This repo includes a scheduled workflow that can generate and publish one AI-assisted blog post every morning.

### How it works

1. GitHub Actions runs `.github/workflows/daily-blog.yml` on schedule.
2. `npm run blog:generate:daily` executes `scripts/blog/generate-daily-post.mjs`.
3. The generator:
   - reads existing `public/content/blog-posts.json`,
   - selects a topic/category rotation,
   - grounds statistics in `scripts/blog/verified-facts.json`,
   - generates narrative text with OpenRouter,
   - enforces validation gates (schema + verified statistic/citation matching),
   - appends the post to `public/content/blog-posts.json`.
4. If content changed, the workflow commits/pushes it to `main`, which triggers normal deployment.

### Required GitHub repository secrets

- `OPENROUTER_API_KEY` (required)
- `OPENROUTER_MODEL` (optional, defaults to `openrouter/free`)

### Editorial quality controls

- Numeric/statistical claims are restricted to curated facts in `scripts/blog/verified-facts.json`.
- Every statistic block includes a source citation and URL.
- The script fails closed: if validation fails, it does not write or commit changes.
- API generation includes retry + timeout handling for transient provider/network failures.
- Generated posts include rich content blocks (headings, quotes, statistics, lists, callouts, and dividers).

### Manual run

```bash
npm run blog:generate:daily
```

To bypass same-day duplicate protection when testing:

```bash
node scripts/blog/generate-daily-post.mjs --force
```


## APK Distribution

The mobile app repository is private. The website serves APK downloads through a Cloudflare Pages Function endpoint:

- `GET /api/apk-latest` → redirects to the latest configured APK URL
- `GET /api/apk-latest?meta=1` → returns download metadata used by the Download page

Set these environment variables in Cloudflare Pages:

- `APK_DOWNLOAD_URL`
- `APK_VERSION` (optional)
- `APK_UPDATED_AT` (optional ISO timestamp)
- `APK_SIZE_BYTES` (optional)

## License

All rights reserved.
