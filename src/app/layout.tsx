import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Analytics } from '@vercel/analytics/next'
import '@/app/globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { AppShell } from '@/components/layout/AppShell'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://andres-buelvas.dev'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Andrés Buelvas — Full Stack Engineer',
  description:
    'Portfolio of Andrés Buelvas, Full Stack Engineer specializing in fintech, distributed systems and high-availability APIs. +7 years of experience.',
  keywords: ['Full Stack', 'Engineer', 'Fintech', 'Node.js', 'React', 'TypeScript'],
  authors: [{ name: 'Andrés Buelvas' }],
  openGraph: {
    title: 'Andrés Buelvas — Full Stack Engineer',
    description: 'Full Stack Engineer with 7+ years building fintech products, distributed systems and high-availability APIs.',
    url: SITE_URL,
    siteName: 'Andrés Buelvas',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrés Buelvas — Full Stack Engineer',
    description: 'Full Stack Engineer with 7+ years building fintech products, distributed systems and high-availability APIs.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrés Buelvas',
  jobTitle: 'Full Stack Engineer',
  url: 'https://andres-buelvas.dev',
  sameAs: [
    'https://linkedin.com/in/aabv211996/',
    'https://github.com/aabv21',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen`}>
        <NextTopLoader color="#10B981" shadow="0 0 10px #10B981,0 0 5px #10B981" showSpinner={false} height={2} />
        <ThemeProvider>
          <LanguageProvider>
            <AppShell>{children}</AppShell>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
