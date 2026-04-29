# Andrés Buelvas — Portfolio

Personal portfolio of Andrés Buelvas, Full Stack Engineer. Built with Next.js 15 App Router, TypeScript, and Tailwind CSS.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript 5 |
| Styling | Tailwind CSS v3, custom design tokens, CSS variables |
| UI Components | shadcn/ui, custom carousel, modals, progress bar |
| AI | Anthropic SDK — Claude Haiku via `/api/chat` |
| i18n | Custom `LanguageContext` — bilingual ES / EN |
| Icons | `react-icons/si`, `react-icons/fa` |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

## Architecture & Patterns

- **App Router** — server components for layouts and pages; client components at the leaf level
- **Context API** — `LanguageContext`, `ThemeContext`, `ChatContext` for global state
- **Custom hooks** — `useAutoplayCarousel`, `useInfiniteCarousel`, `useScrollSpy`, `useMobileTags`, `useBreakpoint`
- **In-memory rate limiting** — 10 req/min per IP on the `/api/chat` route (`src/lib/rateLimit.ts`)
- **Input sanitization** — XSS protection on chat input (`src/lib/sanitize.ts`)
- **Responsive design** — mobile-first, safe-area aware (notch/Dynamic Island support)
- **Dark/light theme** — CSS class toggle (`html.dark` / `html.light`) with smooth transitions
- **Infinite carousel** — loop illusion via cloned slides, synced progress bar, pause-on-hover

## Project Structure

```
src/
  app/              # Pages and API routes (App Router)
    api/chat/       # Claude Haiku chat endpoint with rate limiting
    experience/     # /experience page
    projects/       # /projects page
    contact/        # /contact page
  components/
    layout/         # AppShell, Navbar, SideNav, Footer
    modals/         # ChatModal
    sections/       # Hero, Experience, Skills, FeaturedProjects
    ui/             # shadcn/ui + carousel-dots, carousel-progress-bar, experience-modal
  context/          # LanguageContext, ThemeContext, ChatContext
  data/             # experience.ts, projects.ts, skills.ts
  hooks/            # useAutoplayCarousel, useInfiniteCarousel, useScrollSpy, useMobileTags, useBreakpoint
  lib/              # utils.ts, rateLimit.ts, sanitize.ts, icons.ts
  locales/          # es.ts, en.ts
  types/            # index.ts
```

## Local Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design System

- **Primary color**: `#10B981` (emerald)
- **Dark background**: `#0a1628`
- **Light background**: `#f8fafc`
- **Custom tokens**: `text-emerald`, `bg-emerald-subtle`, `border-emerald-border`, `glass-card`, `section-bg` — defined in `tailwind.config.ts` and `globals.css`
- **Path alias**: `@/*` → `src/*`
