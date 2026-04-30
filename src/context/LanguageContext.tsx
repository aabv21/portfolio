'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
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

export function LanguageProvider({ children, initialLang = 'en' }: { children: ReactNode; initialLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === 'es' ? 'en' : 'es'
      document.cookie = `lang=${next};path=/;max-age=31536000;SameSite=Lax;Secure`
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
