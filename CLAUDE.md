# Portfolio Dev — Claude Code Context

## Project
Next.js 15 App Router portfolio for Andrés Buelvas. TypeScript strict mode. Tailwind CSS v3 with emerald/slate design system.

## Stack
- **Framework**: Next.js 15, React 19, TypeScript 5
- **Styling**: Tailwind CSS v3, `tailwindcss-animate`, custom CSS vars in `globals.css`
- **UI**: shadcn/ui components in `src/components/ui/` — install with `pnpm dlx shadcn@latest add <name>`
- **Icons**: `react-icons/si` — dynamic lookup via `SI[iconName as keyof typeof SI]`
- **AI**: Anthropic SDK (`@anthropic-ai/sdk`), Claude Haiku, `/api/chat` route
- **i18n**: `LanguageContext` + `useLang()`, locales at `src/locales/es.ts` and `src/locales/en.ts`

## Key Conventions
- Path alias `@/*` → `src/*`
- `cn()` from `src/lib/utils.ts` (clsx + twMerge)
- `CAREER_START_YEAR = 2018` in `src/lib/utils.ts`
- No AWS icon in react-icons/si — use empty string and fall back to text badge
- `Mutable<T>` helper in `es.ts` makes locale types mutable for `en.ts` to satisfy
- All client components at the leaf level — server components for layouts and pages when possible
- `AppShell` (`src/components/layout/AppShell.tsx`) owns chatOpen state and renders Navbar/SideNav/Footer/ChatModal

## Design Tokens
Defined in `tailwind.config.ts`:
- `text-emerald` → `#10B981`
- `bg-emerald-subtle` → `rgba(16,185,129,0.08)`
- `border-emerald-border` → `rgba(16,185,129,0.2)`
- `section-bg`, `glass-card`, `section-label`, `section-title` — CSS classes in `globals.css`

## Rate Limiting
In-memory rate limiter at `src/lib/rateLimit.ts` — 10 req/min per IP. Used in `/api/chat`.

## Do Not
- Do not add AWS/Amazon icons from react-icons/si (they don't exist)
- Do not commit `.env.local` or API keys
- Do not use `output: "export"` in next.config (breaks API routes)
- Do not skip shadcn CLI — always `pnpm dlx shadcn@latest add` for new components
