# Miss Vey's Classroom

A playful, neo-brutalist landing page for a public speaking school for kids aged 5–14. Built with React, TypeScript, Tailwind CSS v4, and Vite. Supports English, Indonesian, and Chinese.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm test` | Run Playwright tests |
| `npm run test:ui` | Playwright UI mode |
| `npm run lint` | TypeScript type-check |

## Tech Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4** with design tokens (light/dark mode via `.dark` class)
- **Motion** (Framer Motion successor) for animations
- **i18next** for EN / ID / ZH translations
- **Lucide React** for icons
- **Playwright** for E2E testing

## Project Structure

```
src/
├── components/     # Page sections and UI components
├── i18n/
│   └── locales/    # Translation JSON files (en, id, zh)
├── assets/
│   └── images/     # Static images and brand assets
├── App.tsx         # Root component
├── constants.ts    # Email, phone, config
├── data.ts         # Course, testimonial, and FAQ data
├── types.ts        # TypeScript interfaces
└── index.css       # Tailwind imports and design tokens
tests/              # Playwright E2E tests
public/             # Static files (favicons, robots.txt, sitemap)
```

## Deployment

This is a static SPA — run `npm run build` and deploy the `dist/` folder to Vercel, Netlify, or Cloudflare Pages.

## License

Private — all rights reserved.
