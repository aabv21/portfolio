'use client'

import { useRef, useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getIcon, TAG_ICONS } from '@/lib/icons'
import { FaAws } from 'react-icons/fa'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { useMobileTags } from '@/hooks/useMobileTags'
import { useInfiniteCarousel } from '@/hooks/useInfiniteCarousel'
import { CarouselDots } from '@/components/ui/carousel-dots'
import { CarouselProgressBar } from '@/components/ui/carousel-progress-bar'
import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/ui/section-heading'
import type { Project } from '@/types'


const TAG_CUSTOM_ICONS: Record<string, React.ComponentType<{ size: number; className: string }>> = {
  AWS: FaAws,
}

const MAX_CLONES = 3

function buildTrack(items: Project[]): Project[] {
  return [...items, ...items.slice(0, MAX_CLONES)]
}

const TRACK = buildTrack(projects)

function ProjectCard({
  project,
  lang,
}: {
  project: Project
  lang: 'es' | 'en'
}) {
  const { visibleTags, hiddenCount, expand } = useMobileTags(project.tags)

  return (
    <div className="glass-card overflow-hidden h-full flex flex-col">
      <div className="relative h-40 overflow-hidden group" style={project.image ? undefined : { background: project.gradient }}>
        {project.image ? (
          <Image src={project.image} alt={project.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[1.1rem] font-bold text-white/20 select-none px-4 text-center">
            {project.name}
          </span>
        )}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 z-10">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Live link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="GitHub">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-[0.95rem] font-bold text-white leading-tight">{project.name}</h3>
        <p className="text-[0.82rem] text-slate-400 leading-relaxed flex-1">
          {project.description[lang]}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => {
            const Icon =
              TAG_CUSTOM_ICONS[tag] ??
              (getIcon(TAG_ICONS[tag]) as React.ComponentType<{ size: number; className: string }> | null)
            return (
              <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[0.7rem] text-slate-400">
                {Icon && <Icon size={9} className="text-emerald" />}
                {tag}
              </span>
            )
          })}
          {hiddenCount > 0 && (
            <button
              onClick={expand}
              className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-subtle border border-emerald-border text-[0.68rem] font-bold text-emerald"
            >
              +{hiddenCount}
            </button>
          )}
        </div>
        <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              aria-label="Visit site"
              className="w-[30px] h-[30px] rounded-lg flex items-center justify-center bg-emerald-subtle border border-emerald-border text-emerald hover:bg-emerald/20 transition-all">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-[30px] h-[30px] rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-emerald hover:border-emerald-border transition-all">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function FeaturedProjects() {
  const { t, lang } = useLang()
  const { isDark } = useTheme()
  const trackRef = useRef<HTMLDivElement>(null)
  const [cardWidthPct, setCardWidthPct] = useState(100)
  const total = projects.length
  const isStatic = total <= 3

  useLayoutEffect(() => {
    function measure() {
      if (!trackRef.current) return
      const firstCard = trackRef.current.children[0] as HTMLElement
      if (!firstCard || trackRef.current.offsetWidth === 0) return
      setCardWidthPct((firstCard.offsetWidth / trackRef.current.offsetWidth) * 100)
    }
    measure()
    window.addEventListener('resize', measure, { passive: true })
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { current, displayIdx, animated, paused, goTo, pause, resume } =
    useInfiniteCarousel(isStatic ? 1 : total)

  return (
    <section id="proyectos" className="section-bg relative overflow-hidden py-14 md:py-24">
      <div className="geo-shape absolute top-[12%] right-[7%] w-24 h-24 opacity-[0.07] animate-float" style={{ animationDelay: '0.3s' }} />
      <div className="pulse-node absolute bottom-[18%] left-[6%]" style={{ animationDelay: '1.2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeading label={t.projects.sectionLabel} title={t.projects.sectionTitle} id="proyectos" />

        {isStatic ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} lang={lang} />
            ))}
          </div>
        ) : (
          <div onMouseEnter={pause} onMouseLeave={resume}>
            <CarouselProgressBar current={current} paused={paused} isDark={isDark} className="mb-6" />

            <div className="overflow-hidden">
              <div className="pr-[15%] md:pr-[8%] lg:pr-0">
                <div
                  ref={trackRef}
                  className="flex"
                  style={{
                    transform: `translateX(-${displayIdx * cardWidthPct}%)`,
                    transition: animated ? 'transform 480ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                  }}
                >
                  {TRACK.map((project, i) => (
                    <div
                      key={`${project.name}-${i}`}
                      className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] flex-shrink-0 px-2.5"
                    >
                      <ProjectCard project={project} lang={lang} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <CarouselDots total={total} current={current} isDark={isDark} onDotClick={goTo} ariaLabel="project" />
              {paused && (
                <span className="text-[0.72rem] font-semibold text-[#FC7C78] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FC7C78]" />
                  {t.experience.pausedLabel}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-emerald-border text-emerald text-[0.82rem] font-semibold hover:bg-emerald-subtle transition-all"
          >
            {t.projects.viewAll} →
          </Link>
        </div>
      </div>
    </section>
  )
}
