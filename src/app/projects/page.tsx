'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { getIcon, TAG_ICONS } from '@/lib/icons'
import { FaAws } from 'react-icons/fa'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { useMobileTags } from '@/hooks/useMobileTags'
import { projects } from '@/data/projects'
import { ProjectModal } from '@/components/ui/project-modal'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

const TAG_CUSTOM_ICONS: Record<string, React.ComponentType<{ size: number; className: string }>> = {
  AWS: FaAws,
}

function ProjectRow({
  project,
  onSelect,
}: {
  project: Project
  onSelect: (p: Project) => void
}) {
  const { t, lang } = useLang()
  const { isDark } = useTheme()
  const { visibleTags, hiddenCount, canCollapse, expand, collapse } = useMobileTags(project.tags)

  return (
    <div
      className={cn(
        'glass-card overflow-hidden flex flex-col md:flex-row',
        'hover:border-emerald-border transition-colors duration-200',
      )}
    >
      {/* image pane */}
      <div
        className="relative w-full h-[120px] md:w-[240px] md:h-auto flex-shrink-0 overflow-hidden"
        style={project.image ? undefined : { background: project.gradient }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 240px"
            className="object-cover object-top"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[0.8rem] font-bold text-white/20 select-none px-4 text-center">
            {project.name}
          </span>
        )}
      </div>

      {/* content pane */}
      <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
        {/* name + featured badge */}
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className={cn('text-[0.95rem] font-bold', isDark ? 'text-white' : 'text-slate-900')}>
            {project.name}
          </h3>
          {project.featured && (
            <span className="px-2 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wider bg-emerald-subtle border border-emerald-border text-emerald">
              Featured
            </span>
          )}
        </div>

        {/* description */}
        <p className="text-[0.82rem] text-slate-400 leading-relaxed flex-1">
          {project.description[lang]}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => {
            const Icon =
              TAG_CUSTOM_ICONS[tag] ??
              (getIcon(TAG_ICONS[tag]) as React.ComponentType<{ size: number; className: string }> | null)
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[0.7rem] text-slate-400"
              >
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
          {canCollapse && (
            <button
              onClick={collapse}
              className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-subtle border border-emerald-border text-[0.68rem] font-bold text-emerald"
            >
              {t.skills.showLess}
            </button>
          )}
        </div>

        {/* footer row */}
        <div className={cn(
          'flex items-center justify-between pt-3 border-t',
          isDark ? 'border-white/[0.06]' : 'border-black/[0.06]',
        )}>
          <button
            onClick={() => onSelect(project)}
            className="px-3 py-1.5 rounded-lg text-[0.75rem] font-semibold bg-emerald-subtle border border-emerald-border text-emerald hover:bg-emerald/20 transition-colors"
          >
            {t.projects.viewDetails}
          </button>
          <div className="flex gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit site"
                className="w-[34px] h-[34px] rounded-lg flex items-center justify-center bg-emerald-subtle border border-emerald-border text-emerald hover:bg-emerald/20 transition-all"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                className="w-[34px] h-[34px] rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-emerald hover:border-emerald-border transition-all"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const ALL = '__all__'

export default function ProyectosPage() {
  const { t } = useLang()
  const [activeTag, setActiveTag] = useState<string>(ALL)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const techTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach((p) => p.tags.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
  }, [])

  const filtered = useMemo(
    () => (activeTag === ALL ? projects : projects.filter((p) => p.tags.includes(activeTag))),
    [activeTag],
  )

  const { visibleTags: visibleFilters, hiddenCount: filterHiddenCount, canCollapse: filterCanCollapse, expand: expandFilters, collapse: collapseFilters } = useMobileTags(techTags, 5)

  return (
    <div className="section-bg min-h-screen relative overflow-hidden pt-[calc(62px+env(safe-area-inset-top))]">
      <div className="geo-shape absolute top-[8%] right-[5%] w-24 h-24 opacity-[0.06] animate-float" />
      <div className="pulse-node absolute bottom-[20%] left-[6%]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 md:py-16">
        <div className="mb-10">
          <span className="section-label">{t.projects.sectionLabel}</span>
          <h1 className="section-title mt-2">{t.projects.sectionTitle}</h1>
        </div>

        {/* filter bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTag(ALL)}
            className={cn(
              'px-3 py-1.5 rounded-full text-[0.75rem] font-medium border transition-all',
              activeTag === ALL
                ? 'bg-emerald-subtle border-emerald-border text-emerald'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-emerald hover:bg-emerald-subtle',
            )}
          >
            {t.projects.filterAll}
          </button>
          {visibleFilters.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                'px-3 py-1.5 rounded-full text-[0.75rem] font-medium border transition-all',
                activeTag === tag
                  ? 'bg-emerald-subtle border-emerald-border text-emerald'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-emerald hover:bg-emerald-subtle',
              )}
            >
              {tag}
            </button>
          ))}
          {filterHiddenCount > 0 && (
            <button
              onClick={expandFilters}
              className="px-3 py-1.5 rounded-full text-[0.75rem] font-bold border bg-emerald-subtle border-emerald-border text-emerald"
            >
              +{filterHiddenCount}
            </button>
          )}
          {filterCanCollapse && (
            <button
              onClick={() => {
                const willBeHidden = activeTag !== ALL && !techTags.slice(0, 5).includes(activeTag)
                if (willBeHidden) setActiveTag(ALL)
                collapseFilters()
              }}
              className="px-3 py-1.5 rounded-full text-[0.75rem] font-bold border bg-emerald-subtle border-emerald-border text-emerald"
            >
              {t.skills.showLess}
            </button>
          )}
        </div>

        {/* project list */}
        <div className="flex flex-col gap-4">
          {filtered.map((project) => (
            <ProjectRow
              key={project.name}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
