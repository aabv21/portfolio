import { FaAws } from 'react-icons/fa'
import type { SkillCategory } from '@/types'

export const skills: SkillCategory[] = [
  {
    label: { en: 'Frontend', es: 'Frontend' },
    items: [
      { name: 'React', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Tailwind', icon: 'SiTailwindcss' },
      { name: 'Remix', icon: 'SiRemix' },
      { name: 'Redux', icon: 'SiRedux' },
      { name: 'Shadcn/UI', icon: 'SiShadcnui' },
    ],
  },
  {
    label: { en: 'Backend', es: 'Backend' },
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'NestJS', icon: 'SiNestjs' },
      { name: 'Python', icon: 'SiPython' },
      { name: 'FastAPI', icon: 'SiFastapi' },
      { name: 'Express', icon: 'SiExpress' },
      { name: 'Kafka', icon: 'SiApachekafka' },
      { name: 'RabbitMQ', icon: 'SiRabbitmq' },
      { name: 'GraphQL', icon: 'SiGraphql' },
    ],
  },
  {
    label: { en: 'Infrastructure & DB', es: 'Infraestructura y BD' },
    items: [
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'Redis', icon: 'SiRedis' },
      { name: 'MySQL', icon: 'SiMysql' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'AWS', icon: '', CustomIcon: FaAws },
      { name: 'Supabase', icon: 'SiSupabase' },
      { name: 'Firebase', icon: 'SiFirebase' },
    ],
  },
  {
    label: { en: 'AI & LLM', es: 'IA y LLM' },
    items: [
      { name: 'Claude', icon: 'SiAnthropic' },
      { name: 'OpenAI', icon: 'SiOpenai' },
      { name: 'LangChain', icon: 'SiLangchain' },
      { name: 'Langfuse', icon: '' },
      { name: 'MCP', icon: '' },
    ],
  },
  {
    label: { en: 'Automation & CMS', es: 'Automatización y CMS' },
    items: [
      { name: 'n8n', icon: '' },
      { name: 'WordPress', icon: 'SiWordpress' },
      { name: 'WooCommerce', icon: 'SiWoocommerce' },
      { name: 'Shopify', icon: 'SiShopify' },
      { name: 'Wix', icon: 'SiWix' },
    ],
  },
  {
    label: { en: 'Tools', es: 'Herramientas' },
    items: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'Stripe', icon: 'SiStripe' },
      { name: 'Vercel', icon: 'SiVercel' },
      { name: 'Datadog', icon: 'SiDatadog' },
      { name: 'Jest', icon: 'SiJest' },
      { name: 'Playwright', icon: '' },
    ],
  },
]
