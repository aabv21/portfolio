'use client'

import { useState } from 'react'
import { getIcon, TAG_ICONS } from '@/lib/icons'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { useMobileTags } from '@/hooks/useMobileTags'
import { experience } from '@/data/experience'
import { ExperienceModal } from '@/components/ui/experience-modal'
import { cn, formatPeriod } from '@/lib/utils'
import type { CompanyEntry } from '@/types'

function TagIcon({ tag, size }: { tag: string; size: number }) {
  const Icon = getIcon(TAG_ICONS[tag]) as React.ComponentType<{ size: number; className: string }> | null
  if (Icon) return <Icon size={size} className="text-emerald flex-shrink-0" />
  const initials = tag.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase()
  return (
    <span style={{ fontSize: size * 0.65, width: size, height: size }} className="rounded bg-emerald-subtle border border-emerald-border flex items-center justify-center text-emerald font-bold leading-none flex-shrink-0">
      {initials}
    </span>
  )
}

function TagRow({ tags }: { tags: string[] }) {
  const { t } = useLang()
  const { isDark } = useTheme()
  const { visibleTags, hiddenCount, canCollapse, expand, collapse } = useMobileTags(tags)
  const expandBtnCls = isDark
    ? 'bg-white/[0.07] border-white/[0.15] text-slate-400'
    : 'bg-black/[0.06] border-black/[0.12] text-slate-500'
  return (
    <div className="flex flex-wrap gap-1.5">
      {visibleTags.map((tag) => (
        <span
          key={tag}
          className={cn(
            'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[0.68rem] text-slate-400',
            isDark ? 'bg-white/5 border border-white/10' : 'bg-black/[0.04] border border-black/[0.1]',
          )}
        >
          <TagIcon tag={tag} size={8} />
          {tag}
        </span>
      ))}
      {hiddenCount > 0 && (
        <button
          onTouchEnd={(e) => { e.preventDefault(); expand() }}
          onClick={expand}
          className={cn('inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full border text-[0.68rem] font-semibold', expandBtnCls)}
        >
          +{hiddenCount} ›
        </button>
      )}
      {canCollapse && (
        <button
          onClick={collapse}
          className={cn('inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full border text-[0.68rem] font-semibold', expandBtnCls)}
        >
          {t.skills.showLess}
        </button>
      )}
    </div>
  )
}

function CompanyRow({
  entry,
  onSelect,
}: {
  entry: CompanyEntry
  onSelect: (e: CompanyEntry) => void
}) {
  const { t, lang } = useLang()
  const { isDark } = useTheme()

  return (
    <div className={cn(
      'glass-card overflow-hidden hover:border-emerald-border transition-colors duration-200',
    )}>
      {/* Company header */}
      <div className={cn(
        'flex items-center gap-4 p-5 border-b',
        isDark ? 'border-white/[0.06]' : 'border-black/[0.06]',
      )}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[1.4rem] bg-emerald-subtle border border-emerald-border flex-shrink-0">
          {entry.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className={cn('text-[0.95rem] font-bold leading-tight', isDark ? 'text-white' : 'text-slate-900')}>
            {entry.company}
          </h2>
          <p className="text-[0.72rem] font-semibold text-emerald mt-0.5">{formatPeriod(entry.totalPeriod, lang)}</p>
          {/* Tags: visible on md+ inline in header */}
          <div className="hidden md:flex flex-wrap gap-1.5 mt-2">
            {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[0.68rem] text-slate-400"
                >
                  <TagIcon tag={tag} size={8} />
                  {tag}
                </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => onSelect(entry)}
          className="flex-shrink-0 px-3 py-1.5 rounded-lg text-[0.75rem] font-semibold bg-emerald-subtle border border-emerald-border text-emerald hover:bg-emerald/20 transition-colors"
        >
          {t.experience.viewDetails}
        </button>
      </div>

      {/* Tags row: mobile only, with +N badge */}
      <div className={cn(
        'md:hidden px-5 py-3 border-b',
        isDark ? 'border-white/[0.06]' : 'border-black/[0.06]',
      )}>
        <TagRow tags={entry.tags} />
      </div>

      {/* Roles list */}
      <div className="flex flex-col divide-y divide-white/[0.04]">
        {entry.roles.map((role, i) => {
          const isLatest = i === 0
          return (
            <div key={i} className="px-5 py-3">
              {/* Role title + period */}
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1.5">
                <span className="inline-flex items-center gap-2 min-w-0">
                  <span className={cn(
                    'w-2 h-2 rounded-full flex-shrink-0 translate-y-px',
                    isLatest ? 'bg-emerald' : isDark ? 'bg-slate-600' : 'bg-slate-300',
                  )} />
                  <span className={cn(
                    'text-[0.82rem] font-semibold',
                    isLatest
                      ? isDark ? 'text-white' : 'text-slate-900'
                      : isDark ? 'text-slate-300' : 'text-slate-600',
                  )}>
                    {role.title[lang]}
                  </span>
                </span>
                <span className={cn(
                  'text-[0.68rem] font-medium',
                  isLatest ? 'text-emerald' : isDark ? 'text-slate-500' : 'text-slate-400',
                )}>
                  {formatPeriod(role.period, lang)}
                </span>
              </div>
              {/* Responsibility highlights — first 2, joined by · */}
              <p className={cn(
                'text-[0.72rem] leading-relaxed pl-4',
                isDark ? 'text-slate-500' : 'text-slate-400',
              )}>
                {role.responsibilities.slice(0, 2).map((r) => r[lang]).join(' · ')}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  const { t } = useLang()
  const [selectedEntry, setSelectedEntry] = useState<CompanyEntry | null>(null)

  return (
    <div className="section-bg min-h-screen relative overflow-hidden header-offset">
      <div className="geo-shape absolute top-[8%] right-[5%] w-24 h-24 opacity-[0.06] animate-float" />
      <div className="pulse-node absolute bottom-[20%] left-[6%]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 md:py-16">
        <div className="mb-10">
          <span className="section-label">{t.experience.sectionLabel}</span>
          <h1 className="section-title mt-2">{t.experience.sectionTitle}</h1>
        </div>

        <div className="flex flex-col gap-4">
          {experience.map((entry) => (
            <CompanyRow
              key={entry.company}
              entry={entry}
              onSelect={setSelectedEntry}
            />
          ))}
        </div>
      </div>

      <ExperienceModal entry={selectedEntry} onClose={() => setSelectedEntry(null)} />
    </div>
  )
}
