'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { cn } from '@/lib/utils'

const SECTION_IDS = ['hero', 'sobre-mi', 'experiencia', 'skills', 'proyectos']

export function SideNav() {
  const { t } = useLang()
  const { isDark } = useTheme()
  const activeId = useScrollSpy(SECTION_IDS)
  const [footerVisible, setFooterVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const labels: Record<string, string> = {
    hero: t.sideNav.inicio,
    'sobre-mi': t.sideNav.sobreMi,
    experiencia: t.sideNav.experiencia,
    skills: t.sideNav.skills,
    proyectos: t.sideNav.proyectos,
  }

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.1 },
    )
    observerRef.current.observe(footer)
    return () => observerRef.current?.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={cn(
        'fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end',
        'transition-opacity duration-300',
        footerVisible ? 'opacity-0 pointer-events-none' : 'opacity-100',
      )}
      aria-label="Section navigation"
    >
      {SECTION_IDS.map((id, i) => {
        const isActive = activeId === id
        return (
          <div key={id} className="flex flex-col items-end">
            <button
              onClick={() => scrollTo(id)}
              className="flex items-center gap-2 py-1 group"
              aria-label={labels[id]}
            >
              <span
                className={cn(
                  'text-[0.72rem] px-2 py-0.5 rounded-md border backdrop-blur-lg',
                  'transition-all duration-200 pointer-events-none whitespace-nowrap',
                  isActive
                    ? cn('opacity-100 translate-x-0 font-semibold text-emerald border-emerald-border', isDark ? 'bg-[rgba(10,22,40,0.92)]' : 'bg-white/90')
                    : cn('opacity-0 translate-x-1.5 font-medium group-hover:opacity-100 group-hover:translate-x-0',
                        isDark ? 'text-slate-300 border-white/[0.08] bg-[rgba(10,22,40,0.5)]' : 'text-slate-600 border-black/[0.06] bg-white/60'),
                )}
              >
                {labels[id]}
              </span>
              <span
                className={cn(
                  'rounded-full border transition-all duration-300 flex-shrink-0',
                  isActive
                    ? 'w-2.5 h-2.5 bg-emerald border-emerald shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                    : cn('w-2 h-2 border-emerald-border group-hover:bg-emerald/40 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.3)]',
                        isDark ? 'bg-white/10' : 'bg-black/10'),
                )}
              />
            </button>
            {i < SECTION_IDS.length - 1 && (
              <div className="w-px h-4 ml-auto mr-[4.5px] bg-gradient-to-b from-emerald/20 to-emerald/05" />
            )}
          </div>
        )
      })}
    </nav>
  )
}
