import { FaAws } from 'react-icons/fa'
import type { SkillCategory } from '@/types'

export const skills: SkillCategory[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Tailwind', icon: 'SiTailwindcss' },
      { name: 'Framer Motion', icon: 'SiFramer' },
      { name: 'Remix', icon: 'SiRemix' },
      { name: 'Redux', icon: 'SiRedux' },
      { name: 'Shadcn/UI', icon: 'SiShadcnui' },
    ],
  },
  {
    label: 'Backend',
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
    label: 'Infrastructure & DB',
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
    label: 'AI & Tools',
    items: [
      { name: 'Claude API', icon: 'SiAnthropic' },
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'Stripe', icon: 'SiStripe' },
      { name: 'Zod', icon: 'SiZod' },
      { name: 'Vercel', icon: 'SiVercel' },
    ],
  },
]
