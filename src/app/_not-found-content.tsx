'use client'

import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'

export function NotFoundContent() {
  const { t } = useLang()

  return (
    <div className="section-bg min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="section-label mb-4">{t.notFound.label}</p>
        <h1 className="section-title text-[3rem] sm:text-[4rem] mb-4">{t.notFound.title}</h1>
        <p className="text-[0.95rem] text-slate-400 mb-8 max-w-sm mx-auto">
          {t.notFound.subtitle}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-subtle border border-emerald-border text-emerald text-[0.875rem] hover:bg-emerald/20 transition-colors"
        >
          {t.notFound.back}
        </Link>
      </div>
    </div>
  )
}
