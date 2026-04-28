'use client'

import Link from 'next/link'
import { getIcon, TAG_ICONS } from '@/lib/icons'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { useMobileTags } from '@/hooks/useMobileTags'
import { useInfiniteCarousel } from '@/hooks/useInfiniteCarousel'
import { CarouselDots } from '@/components/ui/carousel-dots'
import { CarouselProgressBar } from '@/components/ui/carousel-progress-bar'
import { experience } from '@/data/experience'
import { SectionHeading } from '@/components/ui/section-heading'
import type { CompanyEntry } from '@/types'
import { cn, formatPeriod } from '@/lib/utils'

function DefaultTagIcon({ size, className }: { size: number; className: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function TagBadge({ name }: { name: string }) {
  const Icon = (getIcon(TAG_ICONS[name]) as React.ComponentType<{ size: number; className: string }> | null) ?? DefaultTagIcon
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[0.72rem] text-slate-400">
      <Icon size={10} className="text-emerald" />
      {name}
    </span>
  )
}

function WorkCard({ entry }: { entry: CompanyEntry }) {
  const { lang } = useLang()
  const latestRole = entry.roles[0]
  const { t } = useLang()
  const { visibleTags, hiddenCount, canCollapse, expand, collapse } = useMobileTags(entry.tags)

  return (
    <div className="glass-card p-6 h-full flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[1.4rem] bg-emerald-subtle border border-emerald-border flex-shrink-0">
          {entry.icon}
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[0.72rem] font-semibold text-emerald uppercase tracking-wide">
            {formatPeriod(entry.totalPeriod, lang)}
          </span>
          <h3 className="text-[0.95rem] font-bold text-white mt-0.5 leading-tight">{entry.company}</h3>
          <p className="text-[0.82rem] text-slate-500">{latestRole.title[lang]}</p>
        </div>
      </div>

      {entry.description && (
        <p className="text-[0.82rem] text-slate-400 leading-relaxed flex-1">
          {entry.description[lang]}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 pt-1">
        {visibleTags.map((tag) => (
          <TagBadge key={tag} name={tag} />
        ))}
        {hiddenCount > 0 && (
          <button
            onClick={expand}
            className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-subtle border border-emerald-border text-[0.68rem] font-bold text-emerald"
          >
            +{hiddenCount}
          </button>
        )}
        {canCollapse && (
          <button
            onClick={collapse}
            className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-subtle border border-emerald-border text-[0.68rem] font-bold text-emerald"
          >
            {t.skills.showLess}
          </button>
        )}
      </div>

    </div>
  )
}

const SLIDES = [...experience, experience[0]]

export function Experience() {
  const { t } = useLang()
  const { isDark } = useTheme()
  const total = experience.length
  const { current, displayIdx, animated, paused, goTo, pause, resume } = useInfiniteCarousel(total)
  function handlePrev() { goTo(current - 1) }
  function handleNext() { goTo(current + 1) }

  return (
    <section id="experiencia" className="section-bg relative overflow-hidden py-14 md:py-24">
      <div className="geo-shape absolute bottom-[10%] right-[6%] w-20 h-20 opacity-[0.07] animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="pulse-node absolute top-[15%] left-[10%]" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeading label={t.experience.sectionLabel} title={t.experience.sectionTitle} id="experiencia" />

        <div onMouseEnter={pause} onMouseLeave={resume}>
          <CarouselProgressBar current={current} paused={paused} isDark={isDark} className="mb-6" />

          {/* Slider */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex"
              style={{
                transform: `translateX(-${displayIdx * 100}%)`,
                transition: animated ? 'transform 480ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              }}
            >
              {SLIDES.map((entry, i) => (
                <div key={i} className="min-w-full">
                  <WorkCard entry={entry} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-5">
            <CarouselDots total={total} current={current} isDark={isDark} onDotClick={goTo} ariaLabel="slide" />

            {paused && (
              <span className="text-[0.72rem] font-semibold text-[#FC7C78] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FC7C78]" />
                {t.experience.pausedLabel}
              </span>
            )}

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className={cn(
                  'w-8 h-8 rounded-full border flex items-center justify-center transition-all',
                  isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10' : 'bg-black/5 border-black/10 text-slate-500 hover:text-slate-900 hover:bg-black/10',
                )}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className={cn(
                  'w-8 h-8 rounded-full border flex items-center justify-center transition-all',
                  isDark ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10' : 'bg-black/5 border-black/10 text-slate-500 hover:text-slate-900 hover:bg-black/10',
                )}
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-border text-emerald text-[0.82rem] font-semibold hover:bg-emerald-subtle transition-all"
          >
            {t.experience.viewAll} →
          </Link>
        </div>
      </div>

    </section>
  )
}
