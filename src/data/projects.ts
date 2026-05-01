import type { Project } from '@/types'

export const projects: Project[] = [
  {
    name: 'EzzyGas',
    description: {
      en: 'Fuel management and fintech platform built as a multi-app monorepo (backend, mobile, admin web, station gateway) with a multi-tenant financial system, real-time hardware communication and full cloud infrastructure on AWS.',
      es: 'Plataforma de gestión de combustible y fintech construida como monorepo multi-aplicación (backend, móvil, web admin, gateway de estación) con sistema financiero multi-tenant, comunicación en tiempo real con hardware y infraestructura cloud completa en AWS.',
    },
    tags: ['NestJS', 'Next.js', 'React Native', 'PostgreSQL', 'Redis', 'AWS', 'Stripe', 'Plaid'],
    featured: true,
    gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    image: '/projects/ezzygas.png',
    challenge: {
      en: 'Building a fuel fintech product from scratch required coordinating a mobile app, admin panel, station gateway and backend — all sharing type-safe API contracts — while handling real-time pump communication and compliant financial flows.',
      es: 'Construir un producto fintech de combustible desde cero requería coordinar una app móvil, panel admin, gateway de estación y backend — todos compartiendo contratos de API type-safe — mientras se manejaba comunicación en tiempo real con bombas y flujos financieros.',
    },
    results: [
      {
        en: 'Modular backend with 30+ domain-driven modules, repository pattern, ABAC authorization and XState workflow orchestration',
        es: 'Backend modular con más de 30 módulos orientados al dominio, patrón repositorio, autorización ABAC y orquestación de flujos mediante XState',
      },
      {
        en: 'Multi-tenant immutable ledger with account-group-scoped wallets; Stripe Issuing, Plaid ACH and Marqeta digital wallet integrations',
        es: 'Libro mayor inmutable multi-tenant con billeteras por grupo de cuentas; integraciones Stripe Issuing, Plaid ACH y billetera digital Marqeta',
      },
      {
        en: 'Real-time backend-to-pump communication via Redis command queues and WebSockets; CloudFormation IaC with zero static credentials',
        es: 'Comunicación en tiempo real backend-bomba vía colas de comandos Redis y WebSockets; IaC con CloudFormation sin credenciales estáticas',
      },
    ],
    role: { en: 'Full Stack Engineer', es: 'Full Stack Engineer' },
    period: '2023 – Present',
  },
  {
    name: 'Document Parser',
    description: {
      en: 'AI-powered document processing pipeline supporting 18+ document types using a 10-stage orchestration architecture, hybrid LLM classification and a self-training loop with LLM-as-Judge evaluation.',
      es: 'Pipeline de procesamiento documental con IA que soporta 18+ tipos de documentos usando una arquitectura de orquestación de 10 etapas, clasificación LLM híbrida y un bucle de auto-entrenamiento con evaluación LLM-as-Judge.',
    },
    tags: ['Python', 'FastAPI', 'OpenAI', 'Claude', 'LangChain', 'Langfuse', 'AWS', 'Docker'],
    featured: true,
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
    challenge: {
      en: 'Manual document processing created bottlenecks and errors across 18 document types. Classification accuracy on complex multi-document PDFs was the core technical challenge.',
      es: 'El procesamiento manual de documentos generaba cuellos de botella y errores en más de 18 tipos de documentos. La precisión de clasificación en PDFs complejos multi-documento era el desafío técnico central.',
    },
    results: [
      {
        en: 'Hybrid LLM classification combining universal and binary classifiers achieving over 90% accuracy on complex multi-document PDFs',
        es: 'Clasificación LLM híbrida combinando clasificadores universales y binarios logrando más del 90% de precisión en PDFs complejos de múltiples documentos',
      },
      {
        en: 'Bidirectional graph-based algorithm to detect and link supporting documents across PDF pages with conflict resolution and full retry/reclassification flow',
        es: 'Algoritmo bidireccional basado en grafos para detectar y enlazar documentos de soporte entre páginas de PDF con resolución de conflictos y flujo completo de reintentos/reclasificación',
      },
      {
        en: 'AWS Lambda email ingestion pipeline (SES → S3 → Parser API) and self-training loop with Langfuse datasets and automated prompt experimentation',
        es: 'Pipeline de ingesta de emails vía AWS Lambda (SES → S3 → Parser API) y bucle de auto-entrenamiento con datasets de Langfuse y experimentación automática de prompts',
      },
    ],
    role: { en: 'Backend Engineer', es: 'Ingeniero Backend' },
    period: '2024 – Present',
  },
  {
    name: 'SmartHop Fintech',
    description: {
      en: 'Fintech platform with ACH payments (SmartPay), double-entry accounting ledger, UNIT API integration, fuel cards, payroll and billing modules serving trucking fleets across 30–50 active SaaS clients.',
      es: 'Plataforma fintech con pagos ACH (SmartPay), libro contable de doble entrada, integración UNIT API, tarjetas de combustible, nómina y módulos de facturación para flotas de camiones con 30–50 clientes SaaS activos.',
    },
    tags: ['Node.js', 'React', 'MongoDB', 'GraphQL', 'Redis', 'Stripe', 'Plaid'],
    link: 'https://app.smarthop.co',
    featured: true,
    gradient: 'linear-gradient(135deg, #0f2027, #1a3a4a, #2c5364)',
    image: '/projects/smarthop.png',
    challenge: {
      en: 'Trucking fleets lacked unified financial tooling — ACH transfers, fuel card reconciliation and driver payroll lived in separate systems, causing errors and delayed payments.',
      es: 'Las flotas de camiones carecían de herramientas financieras unificadas — transferencias ACH, conciliación de tarjetas de combustible y nómina vivían en sistemas separados, causando errores y pagos tardíos.',
    },
    results: [
      {
        en: 'SmartPay ACH mechanism serving 30–50 active SaaS clients with 2FA compliance via UNIT API',
        es: 'Mecanismo ACH SmartPay sirviendo 30–50 clientes SaaS activos con cumplimiento 2FA vía UNIT API',
      },
      {
        en: 'Double-entry ledger handling up to 70 records per carrier; Payroll V2 delivered in a single quarter',
        es: 'Libro mayor de doble entrada manejando hasta 70 registros por transportista; Payroll V2 entregado en un solo trimestre',
      },
      {
        en: 'Gas station geolocation via GraphQL + Google Maps + Trimble Maps; fuel card integration via Onramp and EFS/WEX SOAP API',
        es: 'Geolocalización de gasolineras vía GraphQL + Google Maps + Trimble Maps; integración de tarjetas de combustible vía Onramp y API SOAP EFS/WEX',
      },
    ],
    role: { en: 'Full Stack Engineer → Engineering Manager', es: 'Full Stack Engineer → Engineering Manager' },
    period: '2019 – 2025',
  },
  {
    name: 'AR Management System',
    description: {
      en: 'Bidirectional AR integration system connecting ServiceChannel (facility management) with FSG (ERP), automating work order data flow end-to-end using Hexagonal Architecture and XState state machines.',
      es: 'Sistema de integración AR bidireccional que conecta ServiceChannel (gestión de instalaciones) con FSG (ERP), automatizando el flujo de datos de órdenes de trabajo de extremo a extremo usando Arquitectura Hexagonal y máquinas de estado XState.',
    },
    tags: ['NestJS', 'TypeScript', 'RabbitMQ', 'Prisma', 'PostgreSQL', 'Redis', 'Docker', 'Datadog'],
    featured: false,
    gradient: 'linear-gradient(135deg, #0a1628, #0f1f1a, #0a1628)',
    challenge: {
      en: 'Work order data had to flow reliably between two enterprise systems with different data models, requiring idempotent async messaging, complex multi-step workflows and full observability.',
      es: 'Los datos de órdenes de trabajo debían fluir de manera confiable entre dos sistemas empresariales con modelos de datos diferentes, requiriendo mensajería asíncrona idempotente, flujos multi-paso complejos y observabilidad completa.',
    },
    results: [
      {
        en: 'Hexagonal Architecture keeping business logic decoupled from external services; XState machines across inbound, core and outbound processing layers',
        es: 'Arquitectura Hexagonal manteniendo la lógica de negocio desacoplada de servicios externos; máquinas XState a través de capas de procesamiento entrante, central y saliente',
      },
      {
        en: 'RabbitMQ with retry policies, dead letter queues and idempotent message processing; real-time monitoring dashboard with DLQ replay',
        es: 'RabbitMQ con políticas de reintentos, colas de mensajes fallidos y procesamiento idempotente; dashboard de monitoreo en tiempo real con reproducción DLQ',
      },
      {
        en: 'Datadog APM with custom metrics, distributed tracing and structured logging for full observability',
        es: 'Datadog APM con métricas personalizadas, rastreo distribuido y registro estructurado para observabilidad completa',
      },
    ],
    role: { en: 'Backend Engineer', es: 'Ingeniero Backend' },
    period: '2025',
  },
  {
    name: 'Photo Post',
    description: {
      en: 'Social media REST API with 5 independent microservices (auth, users, posts, likes, gateway), Kafka for async event-driven communication, per-service Redis caching and Docker Compose containerization.',
      es: 'API REST de redes sociales con 5 microservicios independientes (auth, usuarios, publicaciones, likes, gateway), Kafka para comunicación asíncrona orientada a eventos, caché Redis por servicio y contenedorización con Docker Compose.',
    },
    tags: ['Node.js', 'Express.js', 'Kafka', 'Redis', 'Docker', 'JWT', 'Jest'],
    github: 'https://github.com/aabv21',
    featured: false,
    gradient: 'linear-gradient(135deg, #1a0533, #2d1b69, #11998e)',
    role: { en: 'Full Stack Engineer', es: 'Full Stack Engineer' },
    period: '2023',
  },
  {
    name: 'CQRS Blog Engine',
    description: {
      en: 'CQRS-based blog platform with an API Gateway as single entry point, MongoDB for reads, MySQL for writes and RabbitMQ for event-driven synchronization between services. React + TypeScript frontend.',
      es: 'Plataforma de blog basada en CQRS con un API Gateway como punto de entrada único, MongoDB para lectura, MySQL para escritura y RabbitMQ para sincronización orientada a eventos entre servicios. Frontend React + TypeScript.',
    },
    tags: ['Node.js', 'TypeScript', 'React', 'MySQL', 'MongoDB', 'RabbitMQ'],
    github: 'https://github.com/aabv21',
    featured: false,
    gradient: 'linear-gradient(135deg, #0d1117, #161b22, #21262d)',
    role: { en: 'Full Stack Engineer', es: 'Full Stack Engineer' },
    period: '2022',
  },
  {
    name: 'ClueGarden',
    description: {
      en: 'SaaS subscription platform with Stripe Checkout, Billing Portal and webhook event processing for full subscription lifecycle management, Firebase Authentication and Firestore mirroring for low-latency reads.',
      es: 'Plataforma SaaS de suscripciones con Stripe Checkout, Portal de Facturación y procesamiento de eventos webhook para gestión completa del ciclo de vida de suscripciones, Firebase Authentication y sincronización en Firestore para lecturas de baja latencia.',
    },
    tags: ['Node.js', 'Express.js', 'Firebase', 'Stripe', 'Heroku'],
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
      en: 'Personal portfolio built with Next.js 15 App Router, hybrid SSR/CSR architecture, AI chat assistant powered by Claude Haiku with tool-calling, bilingual support (ES/EN) and custom design system.',
      es: 'Portafolio personal construido con Next.js 15 App Router, arquitectura híbrida SSR/CSR, asistente de chat con IA impulsado por Claude Haiku con tool-calling, soporte bilingüe (ES/EN) y sistema de diseño personalizado.',
    },
    tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Anthropic SDK'],
    github: 'https://github.com/aabv21',
    featured: false,
    gradient: 'linear-gradient(135deg, #0a1628, #0f2027, #0a1628)',
    image: '/projects/portfolio.png',
    role: { en: 'Full Stack Engineer', es: 'Full Stack Engineer' },
    period: '2024 – 2025',
  },
]
