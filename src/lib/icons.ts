import {
  SiAnthropic, SiApachekafka, SiBootstrap, SiDocker, SiExpress,
  SiFastapi, SiFirebase, SiFramer, SiGit, SiGithub, SiGraphql,
  SiJavascript, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs,
  SiPostgresql, SiPython, SiRabbitmq, SiReact, SiRedis, SiRedux,
  SiRemix, SiShadcnui, SiStripe, SiSupabase, SiTailwindcss,
  SiTypescript, SiVercel, SiZod,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

const SI_MAP: Record<string, IconType> = {
  SiAnthropic, SiApachekafka, SiBootstrap, SiDocker, SiExpress,
  SiFastapi, SiFirebase, SiFramer, SiGit, SiGithub, SiGraphql,
  SiJavascript, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs,
  SiPostgresql, SiPython, SiRabbitmq, SiReact, SiRedis, SiRedux,
  SiRemix, SiShadcnui, SiStripe, SiSupabase, SiTailwindcss,
  SiTypescript, SiVercel, SiZod,
}

export function getIcon(name: string | undefined): IconType | null {
  if (!name) return null
  return SI_MAP[name] ?? null
}

export const TAG_ICONS: Record<string, string> = {
  'Node.js': 'SiNodedotjs',
  'Next.js': 'SiNextdotjs',
  React: 'SiReact',
  TypeScript: 'SiTypescript',
  JavaScript: 'SiJavascript',
  Python: 'SiPython',
  MongoDB: 'SiMongodb',
  Redis: 'SiRedis',
  Stripe: 'SiStripe',
  PostgreSQL: 'SiPostgresql',
  Docker: 'SiDocker',
  Redux: 'SiRedux',
  TailwindCSS: 'SiTailwindcss',
  Remix: 'SiRemix',
  Bootstrap: 'SiBootstrap',
  NestJS: 'SiNestjs',
  RabbitMQ: 'SiRabbitmq',
  Supabase: 'SiSupabase',
  Firebase: 'SiFirebase',
  FastAPI: 'SiFastapi',
  MySQL: 'SiMysql',
  GraphQL: 'SiGraphql',
  Git: 'SiGit',
  GitHub: 'SiGithub',
  Vercel: 'SiVercel',
  Framer: 'SiFramer',
  Express: 'SiExpress',
  Shadcn: 'SiShadcnui',
  Zod: 'SiZod',
  Anthropic: 'SiAnthropic',
  Kafka: 'SiApachekafka',
}
