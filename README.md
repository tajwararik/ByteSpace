# ByteSpace

ByteSpace is a modern course marketplace and learning platform landing page built with Next.js.

## Overview

This app includes:
- a homepage with hero content and marketing sections
- a course catalog page with search and filtering UI
- course detail pages and tabs for lessons, reviews, and about information
- sign-in and sign-up flows
- creator-focused landing content
- reusable UI components and asset-driven design

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Local custom font integration

## Project Structure

```bash
.
├── app/
│   ├── components/
│   ├── course-details/
│   ├── courses/
│   ├── creators/
│   ├── log-in/
│   ├── sign-up/
│   ├── fonts/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── public/
│   ├── cards/
│   ├── categories/
│   ├── course/
│   ├── courses/
│   ├── logos/
│   ├── posters/
│   ├── profiles/
│   ├── shapes/
│   └── shapesTwo/
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or another package manager

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Production build

```bash
npm run build
```

### Start production server

```bash
npm run start
```

## Available Scripts

```bash
npm run dev     # start development server
npm run build   # create production build
npm run start   # run production build locally
npm run lint    # run ESLint checks
```

## Design Notes

- blue and lime accents
- rounded cards and forms
- layered graphic shapes and background gradients
- responsive grid layouts for desktop and tablet views
