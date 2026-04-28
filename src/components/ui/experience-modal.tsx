'use client'

import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { getIcon, TAG_ICONS } from '@/lib/icons'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { cn, formatPeriod } from '@/lib/utils'
import type { CompanyEntry } from '@/types'

function DefaultTagIcon({ size, className }: { size: number; className: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

interface ExperienceModalProps {
  entry: CompanyEntry | null
  onClose: () => void
}

export function ExperienceModal({ entry, onClose }: ExperienceModalProps) {
  const { t, lang } = useLang()
  const { isDark } = useTheme()

  const handleEscape = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() },
    [onClose],
  )

  useEffect(() => {
    if (!entry) return
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [entry, handleEscape])

  if (!entry) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={cn(
          'relative w-full max-w-2xl max-h-[78vh] flex flex-col rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-200',
          isDark
            ? 'bg-[#0f1b2d] border border-[rgba(16,185,129,0.4)]'
            : 'bg-white border border-[rgba(16,185,129,0.4)]',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className={cn(
          'relative flex items-center gap-4 p-6 pr-14 border-b',
          isDark ? 'border-white/[0.06]' : 'border-black/[0.06]',
        )}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-emerald-subtle border border-emerald-border flex-shrink-0">
            {entry.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className={cn('text-[1.1rem] font-extrabold leading-tight', isDark ? 'text-white' : 'text-slate-900')}>
              {entry.company}
            </h2>
            <p className="text-[0.72rem] text-emerald font-semibold mt-0.5">{formatPeriod(entry.totalPeriod, lang)}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {entry.tags.map((tag) => {
                const Icon = (getIcon(TAG_ICONS[tag]) as React.ComponentType<{ size: number; className: string }> | null) ?? DefaultTagIcon
                return (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.65rem] bg-emerald-subtle border border-emerald-border text-emerald"
                  >
                    <Icon size={8} className="text-emerald" />
                    {tag}
                  </span>
                )
              })}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t.experience.close}
            className={cn(
              'absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center transition-colors',
              isDark
                ? 'bg-black/20 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                : 'bg-black/5 border border-black/10 text-slate-500 hover:bg-black/10 hover:text-slate-900',
            )}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto">

        {/* ── Timeline ── */}
        <div className="p-6 flex flex-col gap-0">
          {entry.roles.map((role, i) => {
            const isLatest = i === 0
            return (
              <div key={i} className="flex gap-4 relative">
                {/* connector line */}
                {i < entry.roles.length - 1 && (
                  <div className="absolute left-[15px] top-[24px] bottom-0 w-px bg-emerald/20" />
                )}

                {/* dot */}
                <div className="flex-shrink-0 mt-1">
                  <div className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center border',
                    isLatest
                      ? 'bg-emerald-subtle border-emerald-border'
                      : isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10',
                  )}>
                    <div className={cn(
                      'w-2.5 h-2.5 rounded-full',
                      isLatest ? 'bg-emerald' : isDark ? 'bg-slate-600' : 'bg-slate-300',
                    )} />
                  </div>
                </div>

                {/* content */}
                <div className={cn('flex-1 pb-8', i === entry.roles.length - 1 && 'pb-2')}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className={cn(
                      'text-[0.88rem] font-bold leading-tight',
                      isLatest
                        ? isDark ? 'text-white' : 'text-slate-900'
                        : isDark ? 'text-slate-300' : 'text-slate-600',
                    )}>
                      {role.title[lang]}
                    </h3>
                    <span className={cn(
                      'text-[0.62rem] font-semibold whitespace-nowrap',
                      isLatest ? 'text-emerald' : isDark ? 'text-slate-500' : 'text-slate-400',
                    )}>
                      {formatPeriod(role.period, lang)}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-2">
                    {role.responsibilities.map((r, j) => (
                      <div
                        key={j}
                        className={cn(
                          'text-[0.76rem] px-3 py-1.5 rounded-r-md border-l-2 leading-relaxed',
                          isLatest
                            ? 'border-emerald/40 bg-emerald/[0.04]'
                            : isDark ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.02]',
                          isDark ? 'text-slate-400' : 'text-slate-500',
                        )}
                      >
                        {r[lang]}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>


        </div> {/* end scrollable body */}
      </div>
    </div>,
    document.body,
  )
}
