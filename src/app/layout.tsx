import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const initialTheme = cookieStore.get('theme')?.value === 'light' ? 'light' : 'dark'
  const initialLang = cookieStore.get('lang')?.value === 'es' ? 'es' : 'en'

  return (
    <html lang={initialLang} className={initialTheme} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen`}>
        <NextTopLoader color="#10B981" shadow="0 0 10px #10B981,0 0 5px #10B981" showSpinner={false} height={2} />
        <ThemeProvider initialTheme={initialTheme}>
          <LanguageProvider initialLang={initialLang}>
            <AppShell>{children}</AppShell>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
