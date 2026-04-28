import type { CompanyEntry } from '@/types'

export const experience: CompanyEntry[] = [
  {
    company: 'Juristat',
    totalPeriod: 'May 2025 – Sep 2025',
    icon: '⚖️',
    tags: ['TypeScript', 'Remix', 'PostgreSQL', 'TailwindCSS'],
    description: {
      en: 'Frontend engineering focused on high-volume data tooling and reusable UI components for a legal analytics platform.',
      es: 'Ingeniería frontend enfocada en herramientas de datos de alto volumen y componentes UI reutilizables para una plataforma de análisis legal.',
    },
    roles: [
      {
        period: 'May 2025 – Sep 2025',
        title: { en: 'Frontend Engineer', es: 'Frontend Engineer' },
        responsibilities: [
          {
            en: 'Optimized high-volume data queries using synchronization and caching strategies',
            es: 'Optimicé consultas de datos de alto volumen usando estrategias de sincronización y caché',
          },
          {
            en: 'Built data visualizations (charts, tables, reports) with Remix',
            es: 'Desarrollé visualizaciones de datos (gráficos, tablas, reportes) con Remix',
          },
          {
            en: 'Created a reusable inline filter with Shadcn/UI + Tailwind supporting multiple data types across the app',
            es: 'Creé un filtro inline reutilizable con Shadcn/UI + Tailwind para múltiples tipos de datos en toda la app',
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
        period: 'Feb 2022 – Jan 2025',
        title: {
          en: 'Software Engineer IC5 / Engineering Manager',
          es: 'Software Engineer IC5 / Engineering Manager',
        },
        responsibilities: [
          {
            en: 'Led a team of up to 4 developers as junior technical leader, designing and maintaining Fintech modules (invoices, payroll, wallet, fuel, billing)',
            es: 'Lideré un equipo de hasta 4 desarrolladores como líder técnico junior, diseñando y manteniendo módulos Fintech (facturas, nómina, wallet, combustible, facturación)',
          },
          {
            en: 'Created SmartPay — a secure ACH-based funding mechanism for user payments',
            es: 'Creé SmartPay — un mecanismo de financiamiento seguro basado en ACH para pagos de usuarios',
          },
          {
            en: 'Integrated UNIT API for bank account creation, debit card generation and ACH transfers with 2-Factor security',
            es: 'Integré UNIT API para creación de cuentas bancarias, generación de tarjetas débito y transferencias ACH con seguridad 2-Factor',
          },
          {
            en: 'Built Onramp integration for fuel card generation and transaction visualization',
            es: 'Implementé integración Onramp para generación de tarjetas de combustible y visualización de transacciones',
          },
          {
            en: 'Used GraphQL to map gas stations via Google Maps and Trimble Maps API within a distance radius',
            es: 'Usé GraphQL para mapear gasolineras vía Google Maps y Trimble Maps API dentro de un radio de distancia',
          },
          {
            en: 'Deployed and maintained Payroll V2 with on-demand PDF report generation',
            es: 'Desplegué y mantuve Payroll V2 con generación de reportes PDF bajo demanda',
          },
          {
            en: 'Created a double-entry ledger system following standard accounting principles',
            es: 'Creé un sistema de libro contable de doble entrada siguiendo principios contables estándar',
          },
        ],
      },
      {
        period: 'Aug 2020 – Feb 2022',
        title: { en: 'Senior Full Stack Engineer', es: 'Senior Full Stack Engineer' },
        responsibilities: [
          {
            en: 'Sole developer responsible for all e-commerce, fuel and insurance products',
            es: 'Único desarrollador responsable de todos los productos de e-commerce, combustible y seguros',
          },
          {
            en: 'Integrated EFS/WEX API via SOAP for fuel card generation and transaction visualization (OOP architecture)',
            es: 'Integré EFS/WEX API vía SOAP para generación de tarjetas de combustible y visualización de transacciones (arquitectura OOP)',
          },
          {
            en: 'Integrated PLAID for secure OAuth bank authentication handling sensitive banking information',
            es: 'Integré PLAID para autenticación bancaria segura OAuth manejando información bancaria sensible',
          },
          {
            en: 'Designed, implemented and maintained Payroll V1 infrastructure',
            es: 'Diseñé, implementé y mantuve la infraestructura de Payroll V1',
          },
        ],
      },
      {
        period: 'Apr 2019 – Aug 2020',
        title: { en: 'Full Stack Engineer', es: 'Full Stack Engineer' },
        responsibilities: [
          {
            en: 'Built a dynamic profit dashboard using Chart.js and React with interactive visualizations',
            es: 'Construí un dashboard dinámico de rentabilidad con Chart.js y React con visualizaciones interactivas',
          },
          {
            en: 'Integrated Stripe API for subscription plans and secure payment method management',
            es: 'Integré Stripe API para planes de suscripción y gestión segura de métodos de pago',
          },
          {
            en: 'Implemented geolocation queries using Redis set theory for efficient resource retrieval',
            es: 'Implementé consultas de geolocalización usando teoría de conjuntos en Redis para recuperación eficiente de recursos',
          },
          {
            en: 'Built email sending pipeline using Mandrill and Mailchimp',
            es: 'Construí pipeline de envío de correos usando Mandrill y Mailchimp',
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
            en: 'Developed the MECE system — an alternative admission method for Universidad Simón Bolívar',
            es: 'Desarrollé el sistema MECE — un método alternativo de admisión para la Universidad Simón Bolívar',
          },
          {
            en: 'Built an online academic exam system with per-category time limits (numerical and verbal ability)',
            es: 'Construí un sistema de examen académico en línea con límites de tiempo por categoría (habilidad numérica y verbal)',
          },
          {
            en: 'Implemented teacher-initiated exam flow with real-time result feedback upon completion',
            es: 'Implementé flujo de examen iniciado por el profesor con retroalimentación de resultados en tiempo real al completarse',
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
      en: 'Support role developing internal academic management systems at Venezuela\'s top engineering university.',
      es: 'Rol de soporte desarrollando sistemas internos de gestión académica en la principal universidad de ingeniería de Venezuela.',
    },
    roles: [
      {
        period: 'Apr 2018 – Jul 2018',
        title: { en: 'Support Assistant', es: 'Asistente de Soporte' },
        responsibilities: [
          {
            en: 'Developed SisPIO — a system to help students strengthen skills for university admission exams',
            es: 'Desarrollé SisPIO — un sistema para ayudar a estudiantes a fortalecer habilidades para exámenes de admisión universitaria',
          },
          {
            en: 'Built administrative tooling for student tracking, control and PIO program activities',
            es: 'Construí herramientas administrativas para seguimiento de estudiantes, control y actividades del programa PIO',
          },
        ],
      },
    ],
  },
]
