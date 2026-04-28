import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Andrés Buelvas',
  description: 'Get in touch with Andrés Buelvas, Full Stack Engineer available for remote full-time or part-time opportunities.',
  openGraph: {
    title: 'Contact — Andrés Buelvas',
    description: 'Get in touch for remote Full Stack engineering opportunities.',
    url: '/contact',
  },
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
