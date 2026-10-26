import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { Analytics } from '@vercel/analytics/next'
import { TopLoader } from '@/components/layout/TopLoader'
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

const META = {
  en: {
    title: 'Andrés Buelvas | Freelance Full Stack Developer',
    description:
      'Freelance full stack developer with 7+ years of experience. API integrations, n8n automation, AI features, and Shopify and WordPress development.',
    locale: 'en_US',
  },
  es: {
    title: 'Andrés Buelvas | Desarrollador Full Stack Freelance',
    description:
      'Desarrollador full stack freelance con más de 7 años de experiencia. Integraciones de APIs, automatización con n8n, funcionalidades con IA y desarrollo en Shopify y WordPress.',
    locale: 'es_ES',
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const lang = (await cookies()).get('lang')?.value === 'es' ? 'es' : 'en'
  const { title, description, locale } = META[lang]
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: ['Freelance', 'Full Stack Developer', 'API integrations', 'n8n', 'Automation', 'AI', 'Shopify', 'WordPress', 'Node.js', 'Python', 'Next.js'],
    authors: [{ name: 'Andrés Buelvas' }],
    openGraph: { title, description, url: SITE_URL, siteName: 'Andrés Buelvas', type: 'website', locale },
    twitter: { card: 'summary_large_image', title, description },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Andrés Buelvas',
  jobTitle: 'Freelance Full Stack Developer',
  url: 'https://andres-buelvas.dev',
  sameAs: [
    'https://www.linkedin.com/in/aabv211996/',
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
        <TopLoader />
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
