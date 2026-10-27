import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Andrés Buelvas',
  description: 'Get in touch with Andrés Buelvas, freelance full stack developer. Tell me what you need and I will reply with a simple plan and a fixed price.',
  openGraph: {
    title: 'Contact — Andrés Buelvas',
    description: 'Freelance full stack developer: API integrations, n8n automation, AI, Shopify and WordPress.',
    url: '/contact',
  },
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
