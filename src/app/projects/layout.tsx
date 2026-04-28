import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects — Andrés Buelvas',
  description: 'Full Stack projects by Andrés Buelvas: fintech systems, high-availability APIs, and event-driven architectures built with Node.js, React, TypeScript, and AWS.',
  openGraph: {
    title: 'Projects — Andrés Buelvas',
    description: 'Full Stack projects: fintech, distributed systems, high-availability APIs.',
    url: '/projects',
  },
  alternates: { canonical: '/projects' },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
