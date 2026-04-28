'use client'

import { useState, useCallback } from 'react'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label: string
  title: string
  id: string
}

export function SectionHeading({ label, title, id }: SectionHeadingProps) {
  const { lang } = useLang()
  const { isDark } = useTheme()
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const url = `${window.location.origin}${window.location.pathname}#${id}`
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [id])

  return (
    <div className="mb-12">
      <span className="section-label">{label}</span>
      <div className="group flex items-center gap-3 mt-2">
        <h2
          className="section-title cursor-pointer"
          onClick={handleCopy}
        >
          {title}
        </h2>
        <div className="relative flex-shrink-0">
          <a
            href={`#${id}`}
            onClick={handleCopy}
            aria-label={`Link to ${title}`}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slate-500 hover:text-emerald flex items-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </a>
          {copied && (
            <span
              className={cn(
                'absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2.5 py-1 rounded-md text-[0.7rem] font-semibold whitespace-nowrap pointer-events-none animate-in fade-in duration-150',
                isDark
                  ? 'bg-slate-800 text-emerald border border-emerald-border shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                  : 'bg-white text-emerald border border-emerald-border shadow-md'
              )}
            >
              {lang === 'es' ? '¡Copiado!' : 'Copied!'}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
