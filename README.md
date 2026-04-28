# Andrés Buelvas — Portfolio

Personal portfolio built with Next.js 15, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 15 App Router, React 19, TypeScript 5
- **Styling**: Tailwind CSS v3, glassmorphism design system (emerald/slate)
- **AI**: Claude Haiku via Anthropic SDK — `/api/chat` route with rate limiting
- **i18n**: Bilingual ES/EN via `LanguageContext`
- **Icons**: `react-icons/si`, `react-icons/fa`

## Dev

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  app/          # Next.js pages and API routes
  components/
    layout/     # AppShell, Navbar, SideNav, Footer
    modals/     # ChatModal
    sections/   # Hero, About, Experience, Skills, FeaturedProjects
    ui/         # shadcn components + carousel-dots, carousel-progress-bar
  context/      # LanguageContext, ThemeContext, ChatContext
  data/         # experience.ts, projects.ts, skills.ts
  hooks/        # useAutoplayCarousel, useInfiniteCarousel, useScrollSpy, useTypewriter
  lib/          # utils.ts, rateLimit.ts, sanitize.ts
  locales/      # es.ts, en.ts
  types/        # index.ts
```
