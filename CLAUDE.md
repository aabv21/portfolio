# Portfolio Dev — Claude Code Context

## Project
Next.js 15 App Router portfolio for Andrés Buelvas. TypeScript strict mode. Tailwind CSS v3 with emerald/slate design system.

## Stack
- **Framework**: Next.js 15, React 19, TypeScript 6
- **Styling**: Tailwind CSS v3, `tailwindcss-animate`, custom CSS vars in `globals.css`
- **UI**: shadcn/ui components in `src/components/ui/` — install with `pnpm dlx shadcn@latest add <name>`
- **Icons**: `react-icons/si` via `getIcon()` in `src/lib/icons.ts` — a new icon needs both the import and an `SI_MAP` entry
- **AI**: Anthropic SDK (`@anthropic-ai/sdk`), Claude Haiku, `/api/chat` route
- **i18n**: `LanguageContext` + `useLang()`, locales at `src/locales/es.ts` and `src/locales/en.ts`

## Key Conventions
- Path alias `@/*` → `src/*`
- `cn()` from `src/lib/utils.ts` (clsx + twMerge)
- "7+" years is hardcoded: locales (`yearsValue`, `bio`), root and experience metadata, OG image, chat prompt. Update together
- Icons missing from react-icons/si (AWS, n8n, Langfuse, MCP): use `icon: ''` and the UI falls back to a text badge
- Section anchors come from `t.anchors` (EN `#services`, ES `#servicios`, ...); `useHashScroll` also resolves the other language's anchor
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
In-memory rate limiter at `src/lib/rateLimit.ts`. `/api/chat`: 10/min and 50/day per IP, 500/day global. `/api/contact`: 1/min and 3/day per IP, 30/day global.

## Do Not
- Do not add AWS/Amazon icons from react-icons/si (they don't exist)
- Do not commit `.env.local` or API keys
- Do not use `output: "export"` in next.config (breaks API routes)
- Do not skip shadcn CLI — always `pnpm dlx shadcn@latest add` for new components
