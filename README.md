# PhotoMed Website

An AI-powered traditional medicine mobile application.

## Overview

This is the public-facing website for PhotoMed, deployed at [photomed.kristianhans.com](https://photomed.kristianhans.com). It serves as the online presence for the platform, providing information about the project, download links for the mobile app, a donation portal, and a contact form.

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


## Connected Repositories

- **PhotoMed (main app)**: [KristianHans04/PhotoMed](https://github.com/KristianHans04/PhotoMed)
  - APK releases are pulled from GitHub Releases for the download page
  - The website auto-fetches the latest release at runtime

## License

All rights reserved.
