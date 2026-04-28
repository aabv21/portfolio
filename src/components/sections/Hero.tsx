'use client'

import Link from 'next/link'
import { useTypewriter } from '@/hooks/useTypewriter'
import { useLang } from '@/context/LanguageContext'
import { useChat } from '@/context/ChatContext'
import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  const { t } = useLang()
  const { openChat } = useChat()
  const { isDark } = useTheme()
  const typewriterText = useTypewriter(t.hero.typewriterQuestions)

  return (
    <section
      id="hero"
      className="section-bg relative min-h-screen flex items-center justify-center overflow-hidden pt-[62px]"
    >
      <div className="geo-shape absolute top-[15%] right-[10%] w-24 h-24 opacity-[0.08] animate-float" style={{ animationDelay: '0s' }} />
      <div className="geo-shape absolute bottom-[20%] left-[8%] w-16 h-16 opacity-[0.06] animate-float" style={{ animationDelay: '2s' }} />
      <div className="pulse-node absolute top-[35%] left-[15%]" />
      <div className="pulse-node absolute bottom-[30%] right-[18%]" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-subtle border border-emerald-border text-[0.75rem] text-emerald font-semibold mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pdot" />
          {t.hero.badge}
        </div>

        <h1 className="text-[2.8rem] md:text-[3.8rem] font-extrabold text-white tracking-tight leading-[1.1] mb-3">
          {t.hero.title}
        </h1>
        <p className="text-[1.15rem] md:text-[1.35rem] text-emerald font-semibold mb-8 tracking-wide">
          {t.hero.subtitle}
        </p>

        {/* Typewriter search bar */}
        <div className="relative max-w-xl mx-auto mb-10">
          <button
            onClick={openChat}
            className={cn(
              'w-full flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-lg transition-all duration-200 text-left cursor-pointer hover:border-emerald-border',
              isDark
                ? 'bg-[rgba(30,41,59,0.7)] border-white/10 hover:bg-[rgba(30,41,59,0.9)] shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                : 'bg-black/[0.04] border-black/10 hover:bg-black/[0.07] shadow-[0_4px_16px_rgba(0,0,0,0.08)]',
            )}
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="flex-shrink-0 opacity-70"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span className={cn('text-[0.85rem] flex-1 text-left min-h-[1.25rem]', isDark ? 'text-slate-300' : 'text-slate-600')}>
              {typewriterText}
              <span className="inline-block w-0.5 h-[0.9em] bg-emerald ml-0.5 animate-pulse align-middle" />
            </span>
            <span className={cn('text-[0.7rem] hidden sm:block flex-shrink-0', isDark ? 'text-slate-600' : 'text-slate-400')}>
              {t.hero.searchPlaceholder}
            </span>
          </button>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
          <Button asChild size="lg" variant="emerald" className="bg-transparent hover:bg-emerald-subtle">
            <Link href="#proyectos">{t.hero.cta}</Link>
          </Button>
          <Button
            asChild size="lg" variant="ghost"
            className={isDark ? '' : 'border-slate-300 text-slate-700 hover:bg-black/5 hover:text-slate-900'}
          >
            <a href="/andres-buelvas-cv.pdf" download>{t.hero.cv}</a>
          </Button>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {['Node.js', 'React', 'TypeScript', 'Python', 'AWS'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-[0.72rem] font-medium text-slate-400 bg-white/5 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
