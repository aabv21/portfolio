'use client'

import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { getIcon, TAG_ICONS } from '@/lib/icons'
import { FaAws } from 'react-icons/fa'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

const TAG_CUSTOM_ICONS: Record<string, React.ComponentType<{ size: number; className: string }>> = {
  AWS: FaAws,
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-[3px] h-[11px] rounded-full bg-emerald flex-shrink-0" />
      <span className="text-[0.63rem] font-bold uppercase tracking-[0.1em] text-emerald">
        {children}
      </span>
    </div>
  )
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, lang } = useLang()
  const { isDark } = useTheme()

  const handleEscape = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() },
    [onClose],
  )

  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [project, handleEscape])

  if (!project) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={cn(
          'relative w-full max-w-4xl max-h-[78vh] flex flex-col rounded-2xl shadow-2xl animate-in zoom-in-95 fade-in duration-200',
          isDark
            ? 'bg-[#0f1b2d] border border-[rgba(16,185,129,0.4)]'
            : 'bg-white border border-[rgba(16,185,129,0.4)]',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className={cn(
          'flex gap-4 items-start p-4 md:p-6 border-b',
          isDark ? 'border-white/[0.06]' : 'border-black/[0.06]',
        )}>
          {/* inline image card */}
          {project.image ? (
            <div className="relative w-[90px] h-[65px] md:w-[160px] md:min-h-[110px] flex-shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 90px, 160px"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div
              className="w-[90px] h-[65px] md:w-[160px] md:min-h-[110px] flex-shrink-0 rounded-xl border border-white/10 shadow-lg flex items-center justify-center"
              style={{ background: project.gradient }}
            >
              <span className="text-[0.55rem] text-white/30 font-semibold text-center px-2">{project.name}</span>
            </div>
          )}

          {/* title + meta + links */}
          <div className="flex-1 min-w-0 flex flex-col gap-1.5">
            {project.featured && (
              <span className="inline-block w-fit px-2.5 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wider bg-emerald-subtle border border-emerald-border text-emerald">
                Featured
              </span>
            )}
            <h2 className={cn('text-[1rem] md:text-[1.15rem] font-extrabold leading-tight pr-2', isDark ? 'text-white' : 'text-slate-900')}>
              {project.name}
            </h2>
            {project.role && (
              <p className="text-[0.73rem] text-slate-400">{project.role[lang]}</p>
            )}
            <div className="flex gap-2 mt-1">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit site"
                  className="w-[30px] h-[30px] rounded-lg flex items-center justify-center bg-emerald-subtle border border-emerald-border text-emerald hover:bg-emerald/20 transition-all"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className={cn('w-[30px] h-[30px] rounded-lg flex items-center justify-center hover:text-emerald hover:border-emerald-border transition-all', isDark ? 'bg-white/5 border border-white/10 text-slate-400' : 'bg-black/5 border border-black/10 text-slate-500')}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* close button */}
          <button
            onClick={onClose}
            aria-label={t.projects.close}
            className={cn(
              'w-7 h-7 rounded-full flex items-center justify-center transition-colors flex-shrink-0 self-start',
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

        {/* ── Body ── */}
        <div className="flex flex-col md:flex-row flex-1 overflow-y-auto">

          {/* Main column */}
          <div className={cn(
            'flex-1 p-6 flex flex-col gap-6',
            isDark
              ? 'border-b md:border-b-0 md:border-r border-white/[0.06]'
              : 'border-b md:border-b-0 md:border-r border-black/[0.06]',
          )}>

            {/* Overview — always */}
            <p className={cn('text-[0.83rem] leading-relaxed', isDark ? 'text-slate-400' : 'text-slate-600')}>
              {project.description[lang]}
            </p>

            {/* Challenge — optional */}
            {project.challenge && (
              <div>
                <SectionLabel>{t.projects.challenge}</SectionLabel>
                <p className={cn('text-[0.83rem] leading-relaxed', isDark ? 'text-slate-400' : 'text-slate-600')}>
                  {project.challenge[lang]}
                </p>
              </div>
            )}

            {/* Key Results — optional */}
            {project.results && project.results.length > 0 && (
              <div>
                <SectionLabel>{t.projects.keyResults}</SectionLabel>
                <div className="flex flex-col gap-2">
                  {project.results.map((r, i) => (
                    <div
                      key={i}
                      className={cn(
                        'text-[0.8rem] px-3 py-2 rounded-r-md border-l-2 border-emerald/40 bg-emerald/[0.04]',
                        isDark ? 'text-slate-400' : 'text-slate-600',
                      )}
                    >
                      {r[lang]}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery — optional */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <SectionLabel>{t.projects.gallery}</SectionLabel>
                <div className="flex gap-2">
                  {project.gallery.map((src, i) => (
                    <div
                      key={i}
                      className="relative flex-1 h-[60px] rounded-lg overflow-hidden border border-white/10"
                    >
                      <Image
                        src={src}
                        alt={`${project.name} screenshot ${i + 1}`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-[220px] p-6 flex-shrink-0 flex flex-col gap-5">

            {/* Stack — always */}
            <div>
              <SectionLabel>{t.projects.stack}</SectionLabel>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => {
                  const Icon =
                    TAG_CUSTOM_ICONS[tag] ??
                    (getIcon(TAG_ICONS[tag]) as React.ComponentType<{ size: number; className: string }> | null)
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.7rem] bg-emerald-subtle border border-emerald-border text-emerald"
                    >
                      {Icon && <Icon size={9} className="text-emerald" />}
                      {tag}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* My Role — optional */}
            {project.role && (
              <div>
                <SectionLabel>{t.projects.myRole}</SectionLabel>
                <p className={cn('text-[0.8rem]', isDark ? 'text-slate-400' : 'text-slate-600')}>
                  {project.role[lang]}
                </p>
              </div>
            )}

            {/* Period — optional */}
            {project.period && (
              <div>
                <SectionLabel>{t.projects.period}</SectionLabel>
                <p className={cn('text-[0.8rem]', isDark ? 'text-slate-400' : 'text-slate-600')}>
                  {project.period}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
