import {
  SiAnthropic, SiApachekafka, SiBootstrap, SiDatadog, SiDocker, SiExpress,
  SiFastapi, SiFirebase, SiFramer, SiGit, SiGithub, SiGraphql, SiHeroku,
  SiJavascript, SiJest, SiJsonwebtokens, SiLangchain, SiMongodb, SiMysql,
  SiNestjs, SiNextdotjs, SiNodedotjs, SiOpenai, SiPostgresql, SiPrisma,
  SiPython, SiRabbitmq, SiReact, SiRedis, SiRedux, SiRemix, SiShadcnui,
  SiStripe, SiSupabase, SiTailwindcss, SiTypescript, SiVercel, SiXstate, SiZod,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

const SI_MAP: Record<string, IconType> = {
  SiAnthropic, SiApachekafka, SiBootstrap, SiDatadog, SiDocker, SiExpress,
  SiFastapi, SiFirebase, SiFramer, SiGit, SiGithub, SiGraphql, SiHeroku,
  SiJavascript, SiJest, SiJsonwebtokens, SiLangchain, SiMongodb, SiMysql,
  SiNestjs, SiNextdotjs, SiNodedotjs, SiOpenai, SiPostgresql, SiPrisma,
  SiPython, SiRabbitmq, SiReact, SiRedis, SiRedux, SiRemix, SiShadcnui,
  SiStripe, SiSupabase, SiTailwindcss, SiTypescript, SiVercel, SiXstate, SiZod,
}

export function getIcon(name: string | undefined): IconType | null {
  if (!name) return null
  return SI_MAP[name] ?? null
}

export const TAG_ICONS: Record<string, string> = {
  // Languages
  'Node.js': 'SiNodedotjs',
  'Next.js': 'SiNextdotjs',
  'React': 'SiReact',
  'TypeScript': 'SiTypescript',
  'JavaScript': 'SiJavascript',
  'Python': 'SiPython',
  // Backend
  'NestJS': 'SiNestjs',
  'FastAPI': 'SiFastapi',
  'Express': 'SiExpress',
  'Express.js': 'SiExpress',
  'GraphQL': 'SiGraphql',
  'RabbitMQ': 'SiRabbitmq',
  'Kafka': 'SiApachekafka',
  'Prisma': 'SiPrisma',
  'XState': 'SiXstate',
  // Databases & infra
  'PostgreSQL': 'SiPostgresql',
  'MongoDB': 'SiMongodb',
  'Redis': 'SiRedis',
  'MySQL': 'SiMysql',
  'Firebase': 'SiFirebase',
  'Supabase': 'SiSupabase',
  'Docker': 'SiDocker',
  'Vercel': 'SiVercel',
  'Heroku': 'SiHeroku',
  // AI & LLM
  'Claude': 'SiAnthropic',
  'Anthropic SDK': 'SiAnthropic',
  'Anthropic': 'SiAnthropic',
  'OpenAI': 'SiOpenai',
  'LangChain': 'SiLangchain',
  // Tools
  'Stripe': 'SiStripe',
  'Git': 'SiGit',
  'GitHub': 'SiGithub',
  'Datadog': 'SiDatadog',
  'Jest': 'SiJest',
  'JWT': 'SiJsonwebtokens',
  // Frontend
  'Remix': 'SiRemix',
  'Redux': 'SiRedux',
  'Tailwind': 'SiTailwindcss',
  'TailwindCSS': 'SiTailwindcss',
  'Tailwind CSS': 'SiTailwindcss',
  'Shadcn/UI': 'SiShadcnui',
  'Shadcn': 'SiShadcnui',
  'Framer': 'SiFramer',
  'Bootstrap': 'SiBootstrap',
  'Zod': 'SiZod',
}
