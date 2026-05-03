'use client'

import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
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
          'relative w-full max-w-2xl max-h-[90dvh] md:max-h-[78vh] flex flex-col rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-200',
          isDark
            ? 'bg-[#0f1b2d] border border-[rgba(16,185,129,0.4)]'
            : 'bg-white border border-[rgba(16,185,129,0.4)]',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className={cn(
          'flex items-center gap-3 px-4 py-3 border-b flex-shrink-0',
          isDark ? 'border-white/[0.06]' : 'border-black/[0.06]',
        )}>
          <div className={cn(
            'w-9 h-9 rounded-lg flex items-center justify-center text-lg border flex-shrink-0 overflow-hidden',
            entry.logo ? 'bg-white border-white/20 p-1' : 'bg-emerald-subtle border-emerald-border',
          )}>
            {entry.logo ? (
              <Image src={entry.logo} alt={entry.company} width={36} height={36} className="w-full h-full object-contain" />
            ) : (
              entry.icon
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className={cn('text-[0.95rem] font-extrabold leading-tight truncate pr-2', isDark ? 'text-white' : 'text-slate-900')}>
              {entry.company}
            </h2>
            <p className="text-[0.68rem] text-emerald font-semibold">{formatPeriod(entry.totalPeriod, lang)}</p>
          </div>
          <button
            onClick={onClose}
            aria-label={t.experience.close}
            className={cn(
              'flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors self-start mt-0.5',
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

        {/* ── Tags (horizontal scroll, single line) ── */}
        <div className={cn(
          'flex gap-1.5 px-4 py-2 border-b overflow-x-auto flex-shrink-0 scrollbar-none',
          isDark ? 'border-white/[0.06]' : 'border-black/[0.06]',
        )}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {entry.tags.map((tag) => {
            const Icon = (getIcon(TAG_ICONS[tag]) as React.ComponentType<{ size: number; className: string }> | null) ?? DefaultTagIcon
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.65rem] bg-emerald-subtle border border-emerald-border text-emerald whitespace-nowrap flex-shrink-0"
              >
                <Icon size={8} className="text-emerald" />
                {tag}
              </span>
            )
          })}
        </div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto">

        {/* ── Roles ── */}
        <div className="flex flex-col divide-y divide-white/[0.04]">
          {entry.roles.map((role, i) => {
            const isLatest = i === 0
            return (
              <div key={i} className="px-4 py-4">
                <h3 className={cn(
                  'text-[0.88rem] font-bold leading-snug mb-1',
                  isLatest
                    ? isDark ? 'text-white' : 'text-slate-900'
                    : isDark ? 'text-slate-300' : 'text-slate-600',
                )}>
                  {role.title[lang]}
                </h3>
                <p className={cn(
                  'text-[0.72rem] font-semibold mb-3',
                  isLatest ? 'text-emerald' : isDark ? 'text-slate-500' : 'text-slate-400',
                )}>
                  {formatPeriod(role.period, lang)}
                </p>
                <div className="flex flex-col gap-1.5">
                  {role.responsibilities.map((r, j) => (
                    <p
                      key={j}
                      className={cn(
                        'text-[0.76rem] leading-relaxed px-3 py-1.5 border-l-2 rounded-r-md',
                        isLatest
                          ? 'border-emerald/40 bg-emerald/[0.04]'
                          : isDark ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.02]',
                        isDark ? 'text-slate-400' : 'text-slate-500',
                      )}
                    >
                      {r[lang]}
                    </p>
                  ))}
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
