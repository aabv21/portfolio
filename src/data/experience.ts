import type { CompanyEntry } from '@/types'

export const experience: CompanyEntry[] = [
  {
    company: 'NextFaze',
    totalPeriod: 'Apr 2025 – Present',
    icon: '🤖',
    tags: ['NestJS', 'FastAPI', 'LangChain', 'AWS', 'Claude'],
    description: {
      en: 'Backend engineering focused on AI-powered document intelligence and enterprise systems integration, working across LLM pipelines, OCR providers, and middleware automation.',
      es: 'Ingeniería backend enfocada en inteligencia documental con IA e integración de sistemas empresariales, trabajando en pipelines LLM, proveedores OCR y automatización middleware.',
    },
    roles: [
      {
        period: 'Apr 2025 – Present',
        title: { en: 'Backend Engineer', es: 'Backend Engineer' },
        responsibilities: [
          {
            en: 'Designed, implemented and delivered the AR System — a middleware integration between ServiceChannel and FSG automating the full work order lifecycle (requests, responses, invoicing, notifications)',
            es: 'Diseñé, implementé y entregué el AR System — una integración middleware entre ServiceChannel y FSG que automatiza el ciclo de vida completo de órdenes de trabajo (solicitudes, respuestas, facturación, notificaciones)',
          },
          {
            en: 'Led the refactoring, implementation, testing and maintenance of the Document Parser, enabling intelligent extraction, detection and classification of 18+ document types for ERP client integrations',
            es: 'Lideré la refactorización, implementación, pruebas y mantenimiento del Document Parser, habilitando extracción, detección y clasificación inteligente de más de 18 tipos de documentos para integraciones con clientes ERP',
          },
          {
            en: 'Engineered integrations with AI/OCR providers (Datalab, DeepSeek, Mistral) to automate document information extraction from images and PDFs',
            es: 'Desarrollé integraciones con proveedores de IA/OCR (Datalab, DeepSeek, Mistral) para automatizar la extracción de información documental desde imágenes y PDFs',
          },
          {
            en: 'Served as primary decision-maker for AI model and provider selection, evaluating Claude, GPT, Mistral and DeepSeek against business constraints, cost and accuracy requirements',
            es: 'Actué como principal tomador de decisiones en la selección de modelos y proveedores de IA, evaluando Claude, GPT, Mistral y DeepSeek según restricciones del modelo de negocio, costo y precisión',
          },
        ],
      },
    ],
  },
  {
    company: 'SmartHop',
    totalPeriod: 'Apr 2019 – Jan 2025',
    icon: '🚛',
    tags: ['Node.js', 'React', 'MongoDB', 'Redis', 'Stripe'],
    description: {
      en: 'Six years across three roles growing from engineer to tech lead, building a Fintech platform for trucking fleet management.',
      es: 'Seis años en tres roles creciendo de ingeniero a líder técnico, construyendo una plataforma Fintech para gestión de flotas de camiones.',
    },
    roles: [
      {
        period: 'Feb 2021 – Jan 2025',
        title: {
          en: 'Software Engineer IC5 / Engineering Manager',
          es: 'Software Engineer IC5 / Engineering Manager',
        },
        responsibilities: [
          {
            en: 'Led a fintech engineering team that scaled from 1 to 4 developers, designing and delivering modules for invoicing, payroll, wallets, fuel and billing',
            es: 'Lideré un equipo de ingeniería fintech que escaló de 1 a 4 desarrolladores, diseñando y entregando módulos de facturación, nómina, billeteras, combustible y pagos',
          },
          {
            en: 'Co-designed and implemented SmartPay — an ACH-based payment mechanism serving 30–50 active SaaS clients',
            es: 'Codiseñé e implementé SmartPay — un mecanismo de pago basado en ACH que sirve a 30–50 clientes SaaS activos',
          },
          {
            en: 'Implemented 2FA enforcement as a security requirement for UNIT API compliance, including bank account creation, debit card generation and ACH/internal fund transfers',
            es: 'Implementé autenticación en dos pasos (2FA) como requisito de seguridad para el cumplimiento de la API de UNIT, incluyendo creación de cuentas bancarias, generación de tarjetas débito y transferencias ACH/internas',
          },
          {
            en: 'Architected a double-entry ledger system accurately recording income and expenses across client portfolios handling up to 70 records per carrier',
            es: 'Arquiteté un sistema de libro mayor de doble entrada que registra con precisión ingresos y gastos en carteras de clientes con hasta 70 registros por transportista',
          },
          {
            en: 'Led Payroll V2 redesign with the full team, delivering the module within a single quarter with on-demand income/expense generation and PDF reporting',
            es: 'Lideré el rediseño de Payroll V2 con el equipo completo, entregando el módulo en un solo trimestre con generación de ingresos/gastos bajo demanda y reportes en PDF',
          },
          {
            en: 'Integrated Onramp for fuel card generation and transaction visualization',
            es: 'Integré Onramp para la generación de tarjetas de combustible y visualización de transacciones',
          },
          {
            en: 'Implemented gas station geolocation mapping using GraphQL, Google Maps and Trimble Maps API',
            es: 'Implementé mapeo de geolocalización de gasolineras usando GraphQL, Google Maps y Trimble Maps API',
          },
        ],
      },
      {
        period: 'Aug 2020 – Feb 2021',
        title: { en: 'Senior Full Stack Engineer', es: 'Senior Full Stack Engineer' },
        responsibilities: [
          {
            en: 'Sole developer responsible for all e-commerce, fuel and insurance products across the platform',
            es: 'Desarrollador único responsable de todos los productos de e-commerce, combustible y seguros en la plataforma',
          },
          {
            en: 'Integrated EFS/WEX API via SOAP for fuel card generation and transaction tracking, serving 5–10 users under an OOP architecture',
            es: 'Integré la API EFS/WEX vía SOAP para generación de tarjetas de combustible y seguimiento de transacciones, atendiendo 5–10 usuarios bajo arquitectura OOP',
          },
          {
            en: 'Integrated Plaid OAuth to enable secure bank authentication across 20–30 connected banking institutions',
            es: 'Integré Plaid OAuth para habilitar autenticación bancaria segura en 20–30 instituciones bancarias conectadas',
          },
          {
            en: 'Designed and delivered Payroll V1 infrastructure end-to-end in under 3 months',
            es: 'Diseñé y entregué la infraestructura de Payroll V1 de principio a fin en menos de 3 meses',
          },
        ],
      },
      {
        period: 'Apr 2019 – Aug 2020',
        title: { en: 'Full Stack Engineer', es: 'Full Stack Engineer' },
        responsibilities: [
          {
            en: 'Built an interactive profit dashboard using Chart.js and React for an early client base of 5–15 active accounts',
            es: 'Construí un dashboard de ganancias interactivo usando Chart.js y React para una base de clientes inicial de 5–15 cuentas activas',
          },
          {
            en: 'Integrated Stripe for subscription plan management and secure payment handling across 10–100 active users including free trial conversions',
            es: 'Integré Stripe para gestión de planes de suscripción y manejo seguro de pagos con 10–100 usuarios activos incluyendo conversiones desde prueba gratuita',
          },
          {
            en: 'Implemented geolocation queries with Redis set operations for efficient resource retrieval',
            es: 'Implementé consultas de geolocalización con operaciones de conjuntos en Redis para recuperación eficiente de recursos',
          },
          {
            en: 'Developed transactional email flows using Mandrill and Mailchimp',
            es: 'Desarrollé flujos de email transaccional usando Mandrill y Mailchimp',
          },
        ],
      },
    ],
  },
  {
    company: 'CIDITEL-VE / Latinux Inc',
    totalPeriod: 'Jul 2018 – Apr 2019',
    icon: '🏢',
    tags: ['Python', 'Web2py', 'Bootstrap'],
    description: {
      en: 'Backend development for academic systems at a Venezuelan technology company.',
      es: 'Desarrollo backend de sistemas académicos en una empresa de tecnología venezolana.',
    },
    roles: [
      {
        period: 'Jul 2018 – Apr 2019',
        title: { en: 'Backend Engineer', es: 'Ingeniero Backend' },
        responsibilities: [
          {
            en: 'Built the MECE system — an alternative admission pathway for students applying to Simon Bolivar University',
            es: 'Construí el sistema MECE — una vía alternativa de admisión para aspirantes a la Universidad Simón Bolívar',
          },
          {
            en: 'Implemented a timed online academic exam platform with separate categories for numerical and verbal ability',
            es: 'Implementé una plataforma de exámenes académicos en línea con tiempo límite con categorías separadas de habilidad numérica y verbal',
          },
          {
            en: 'Enabled real-time exam control for teachers, including session initiation and instant results feedback',
            es: 'Habilité control de exámenes en tiempo real para docentes, incluyendo inicio de sesión y retroalimentación instantánea de resultados',
          },
        ],
      },
    ],
  },
  {
    company: 'Simon Bolivar University',
    totalPeriod: 'Apr 2018 – Jul 2018',
    icon: '🎓',
    tags: ['Python', 'Web2py', 'Bootstrap'],
    description: {
      en: "Support role developing internal academic management systems at Venezuela's top engineering university.",
      es: 'Rol de soporte desarrollando sistemas internos de gestión académica en la principal universidad de ingeniería de Venezuela.',
    },
    roles: [
      {
        period: 'Apr 2018 – Jul 2018',
        title: { en: 'Support Assistant', es: 'Asistente de Soporte' },
        responsibilities: [
          {
            en: 'Built SisPIO — a platform that helped students prepare for university entrance exams',
            es: 'Construí SisPIO — una plataforma que ayudó a estudiantes a prepararse para los exámenes de admisión universitaria',
          },
          {
            en: 'Supported administrative operations including student tracking and PIO program activity management',
            es: 'Apoyé operaciones administrativas incluyendo seguimiento de estudiantes y gestión de actividades del programa PIO',
          },
        ],
      },
    ],
  },
]
