import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience — Andrés Buelvas',
  description: '8+ years of Full Stack engineering experience across fintech, distributed systems, and high-availability platforms. Node.js, React, TypeScript, PostgreSQL, AWS.',
  openGraph: {
    title: 'Experience — Andrés Buelvas',
    description: '8+ years Full Stack engineering: fintech, distributed systems, Node.js, React, AWS.',
    url: '/experience',
  },
  alternates: { canonical: '/experience' },
}

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
