'use client'

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import { es } from '@/locales/es'
import { en } from '@/locales/en'
import type { Lang, Translations } from '@/types'

export type { Translations }

interface LanguageContextValue {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readLangCookie(): Lang {
  const match = document.cookie.split(';').find((c) => c.trim().startsWith('lang='))
  return match?.split('=')[1] === 'es' ? 'es' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  // Sync with persisted cookie after hydration — no server involvement needed
  useEffect(() => {
    const saved = readLangCookie()
    if (saved !== lang) {
      setLang(saved)
      document.documentElement.lang = saved
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === 'es' ? 'en' : 'es'
      document.cookie = `lang=${next};path=/;max-age=31536000;SameSite=Lax`
      document.documentElement.lang = next
      return next
    })
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t: lang === 'es' ? es : en, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
