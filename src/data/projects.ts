import type { Project } from '@/types'

export const projects: Project[] = [
  {
    name: 'SmartHop Fintech',
    description: {
      en: 'Fintech platform with ACH payments (SmartPay), accounting ledger, UNIT API integration, fuel cards, payroll and billing modules serving trucking fleets.',
      es: 'Plataforma fintech con pagos ACH (SmartPay), libro contable, integración UNIT API, tarjetas de combustible, nómina y módulos de facturación para flotas de camiones.',
    },
    tags: ['Node.js', 'React', 'MongoDB', 'Redis', 'Stripe'],
    link: 'https://app.smarthop.co',
    featured: true,
    gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    image: '/projects/smarthop.png',
    challenge: {
      en: 'Trucking fleets lacked unified financial tooling — ACH transfers, fuel card reconciliation and driver payroll lived in separate systems, causing errors and delayed payments.',
      es: 'Las flotas de camiones carecían de herramientas financieras unificadas — transferencias ACH, conciliación de tarjetas de combustible y nómina vivían en sistemas separados, causando errores y pagos tardíos.',
    },
    results: [
      {
        en: 'Automated ACH processing pipeline handling high-volume transactions',
        es: 'Pipeline ACH automatizado manejando transacciones de alto volumen',
      },
      {
        en: 'Reduced payroll reconciliation time by over 80%',
        es: 'Reducción del tiempo de conciliación de nómina en más del 80%',
      },
      {
        en: 'Real-time fuel card tracking integrated across the fleet',
        es: 'Seguimiento en tiempo real de tarjetas de combustible integrado en toda la flota',
      },
    ],
    role: { en: 'Full Stack Engineer', es: 'Full Stack Engineer' },
    period: '2021 – 2024',
  },
  {
    name: 'Document Parser',
    description: {
      en: 'Automated document ingestion pipeline using Python and FastAPI, deployed on AWS Lambda with S3 triggers for high-throughput processing.',
      es: 'Pipeline automatizado de ingesta de documentos con Python y FastAPI, desplegado en AWS Lambda con triggers S3 para procesamiento de alto volumen.',
    },
    tags: ['Python', 'FastAPI', 'AWS'],
    featured: true,
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
    challenge: {
      en: 'Manual document processing created bottlenecks and human errors in a high-volume ingestion workflow.',
      es: 'El procesamiento manual de documentos generaba cuellos de botella y errores humanos en un flujo de ingesta de alto volumen.',
    },
    results: [
      {
        en: 'Fully serverless pipeline with automatic scaling via AWS Lambda',
        es: 'Pipeline completamente serverless con escalado automático vía AWS Lambda',
      },
      {
        en: 'S3 event triggers eliminate polling and reduce processing latency',
        es: 'Triggers de eventos S3 eliminan el polling y reducen la latencia de procesamiento',
      },
    ],
    role: { en: 'Backend Engineer', es: 'Ingeniero Backend' },
    period: '2022 – 2023',
  },
  {
    name: 'AR Management System',
    description: {
      en: 'Accounts receivable microservice built with NestJS and CQRS pattern, using RabbitMQ for event-driven communication and PostgreSQL for audit trails.',
      es: 'Microservicio de cuentas por cobrar construido con NestJS y patrón CQRS, usando RabbitMQ para comunicación event-driven y PostgreSQL para auditoría.',
    },
    tags: ['NestJS', 'PostgreSQL', 'RabbitMQ', 'Docker'],
    featured: true,
    gradient: 'linear-gradient(135deg, #0a1628, #0f1f1a, #0a1628)',
    challenge: {
      en: 'Accounts receivable data was tightly coupled to the monolith, making it impossible to audit or replay financial events independently.',
      es: 'Los datos de cuentas por cobrar estaban acoplados al monolito, imposibilitando auditar o reproducir eventos financieros de forma independiente.',
    },
    results: [
      {
        en: 'CQRS separation enables independent read/write scaling',
        es: 'Separación CQRS permite escalado independiente de lectura/escritura',
      },
      {
        en: 'Full audit trail via PostgreSQL event log',
        es: 'Auditoría completa mediante log de eventos en PostgreSQL',
      },
    ],
    role: { en: 'Backend Architect', es: 'Arquitecto Backend' },
    period: '2023',
  },
  {
    name: 'ClueGarden',
    description: {
      en: 'Self-discovery platform with Stripe subscriptions, Firebase real-time sync and Supabase for structured user data.',
      es: 'Plataforma de autodescubrimiento con suscripciones Stripe, sincronización en tiempo real con Firebase y Supabase para datos estructurados.',
    },
    tags: ['TypeScript', 'Supabase', 'Firebase', 'Stripe'],
    link: 'https://cluegarden.com',
    featured: false,
    gradient: 'linear-gradient(135deg, #0d1117, #161b22, #21262d)',
    image: '/projects/cluegarden.png',
    role: { en: 'Full Stack Engineer', es: 'Full Stack Engineer' },
    period: '2023 – 2024',
  },
  {
    name: 'Developer Portfolio',
    description: {
      en: 'Personal portfolio built with Next.js 15, TypeScript and Tailwind CSS. Features AI chat assistant powered by Claude, bilingual support (ES/EN) and glassmorphism design system.',
      es: 'Portafolio personal construido con Next.js 15, TypeScript y Tailwind CSS. Incluye asistente de chat con IA impulsado por Claude, soporte bilingüe (ES/EN) y sistema de diseño glassmorphism.',
    },
    tags: ['Next.js', 'TypeScript', 'React'],
    github: 'https://github.com/aabv21',
    featured: false,
    gradient: 'linear-gradient(135deg, #0a1628, #0f2027, #0a1628)',
    image: '/projects/portafolio.png',
    role: { en: 'Full Stack Engineer', es: 'Full Stack Engineer' },
    period: '2024 – 2025',
  },
  {
    name: 'CQRS Blog Engine',
    description: {
      en: 'Event-sourced blog engine using CQRS pattern, Docker Compose for local dev, MySQL for read models and a Node.js event bus.',
      es: 'Motor de blog con event sourcing y patrón CQRS, Docker Compose para desarrollo local, MySQL para modelos de lectura y bus de eventos en Node.js.',
    },
    tags: ['Node.js', 'MySQL', 'Docker'],
    github: 'https://github.com/aabv21',
    featured: false,
    gradient: 'linear-gradient(135deg, #1a0533, #2d1b69, #11998e)',
    role: { en: 'Full Stack Engineer', es: 'Full Stack Engineer' },
    period: '2022',
  },
]
