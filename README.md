# Andrés Buelvas — Portfolio

> Production-grade personal portfolio with a built-in AI assistant powered by Claude Haiku, bilingual support (EN/ES), dark/light mode, and a custom design system.

🌐 **Live:** [portfolio-tau-seven-46.vercel.app](https://portfolio-tau-seven-46.vercel.app)

---

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Claude](https://img.shields.io/badge/Claude_Haiku-D4A574?style=flat-square&logo=anthropic&logoColor=white)
![Shadcn/UI](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=shadcnui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) · React 19 · TypeScript 5 |
| Styling | Tailwind CSS v3 · custom design tokens · CSS variables |
| UI Components | shadcn/ui · custom carousel · modals · progress bar |
| AI | Anthropic SDK — Claude Haiku via `/api/chat` |
| i18n | Custom `LanguageContext` — bilingual ES / EN |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Key Features

- 🤖 **AI Chat Assistant** — Claude Haiku with tool-calling, fetches CV content and GitHub data in real time
- 🌍 **Bilingual** — full EN/ES support via custom i18n system using React Context + cookie persistence
- 🌙 **Dark / Light mode** — CSS class toggle with smooth transitions, respects system preference
- 🔒 **Security** — in-memory rate limiting (10 req/min per IP) + XSS input sanitization on chat
- 📱 **Mobile-first** — safe-area aware layout with notch/Dynamic Island support
- 🎠 **Infinite carousel** — loop illusion via cloned slides, synced progress bar, pause-on-hover
- 📊 **Vercel Analytics** — real-time performance and visitor tracking

---

## Architecture & Patterns

- **App Router** — server components for layouts and pages; client components at the leaf level
- **Context API** — `LanguageContext`, `ThemeContext`, `ChatContext` for global state
- **Custom hooks** — `useAutoplayCarousel`, `useInfiniteCarousel`, `useScrollSpy`, `useMobileTags`, `useBreakpoint`
- **In-memory rate limiting** — per-IP throttling on the `/api/chat` route (`src/lib/rateLimit.ts`)
- **Input sanitization** — XSS protection on chat input (`src/lib/sanitize.ts`)

---

## Project Structure

```
src/
  app/
    api/chat/       # Claude Haiku endpoint with rate limiting + prompt injection protection
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

---

## Design System

| Token | Value |
|---|---|
| Primary color | `#10B981` (emerald) |
| Dark background | `#0a1628` |
| Light background | `#f8fafc` |
| Path alias | `@/*` → `src/*` |

Custom tokens — `text-emerald`, `bg-emerald-subtle`, `border-emerald-border`, `glass-card`, `section-bg` — defined in `tailwind.config.ts` and `globals.css`.

---

## Local Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

> Requires `ANTHROPIC_API_KEY` in `.env.local` for the AI chat feature.

```env
ANTHROPIC_API_KEY=your_api_key_here
```

---

## Related Projects

- [cqrs-blog-app](https://github.com/aabv21/cqrs-blog-app) — CQRS microservices blog
- [photo-post](https://github.com/aabv21/photo-post) — Microservices with Kafka & Redis
- [microservices-js-node](https://github.com/aabv21/microservices-js-node) — Node.js microservices with Kubernetes

---

<div align="center">
  <sub>Built by <a href="https://github.com/aabv21">Andrés Buelvas</a> · Full Stack Engineer</sub>
</div>
