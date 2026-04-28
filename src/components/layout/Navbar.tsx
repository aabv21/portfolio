'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const PAGE_LINKS = [
  { labelKey: 'home' as const, href: '/' },
  { labelKey: 'experience' as const, href: '/experience' },
  { labelKey: 'projects' as const, href: '/projects' },
  { labelKey: 'contact' as const, href: '/contact' },
]

interface NavbarProps {
  onChatOpen?: () => void
}

export function Navbar({ onChatOpen }: NavbarProps) {
  const { t, lang, toggleLang } = useLang()
  const { isDark, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[62px] flex items-center justify-between px-6 lg:px-8',
        'backdrop-blur-xl border-b transition-all duration-300',
        isDark ? 'bg-[rgba(10,22,40,0.75)]' : 'bg-[rgba(248,250,252,0.9)]',
        scrolled
          ? 'border-emerald-border shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
          : 'border-[rgba(16,185,129,0.12)] shadow-[0_4px_24px_rgba(0,0,0,0.25)]',
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 flex-shrink-0">
        <div className="w-9 h-9 rounded-[9px] flex items-center justify-center text-[0.95rem] font-black text-emerald bg-[linear-gradient(135deg,rgba(16,185,129,0.3),rgba(16,185,129,0.08))] border border-emerald-border shadow-[0_0_14px_rgba(16,185,129,0.18)]">
          AB
        </div>
        <span className={cn('text-[0.9rem] font-bold', isDark ? 'text-white' : 'text-slate-900')}>
          Andrés <span className="text-emerald">Buelvas</span>
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-1">
        {PAGE_LINKS.map(({ labelKey, href }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'text-[0.82rem] font-medium px-3 py-1.5 rounded-lg border transition-all duration-200 relative',
                active
                  ? 'text-emerald bg-emerald-subtle border-emerald-border after:absolute after:bottom-[-1px] after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-emerald after:rounded-full'
                  : cn('border-transparent', isDark ? 'text-slate-400 hover:text-emerald' : 'text-slate-600 hover:text-emerald'),
              )}
            >
              {t.nav[labelKey]}
            </Link>
          )
        })}
      </nav>

      {/* Controls */}
      <div className="flex items-center gap-2">
        {/* Language toggle */}
        <div className={cn(
          'hidden lg:flex items-center rounded-full p-0.5 border',
          isDark ? 'bg-[rgba(30,41,59,0.7)] border-white/10' : 'bg-black/[0.06] border-black/10',
        )}>
          {(['es', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={toggleLang}
              className={cn(
                'text-[0.72rem] font-semibold px-2.5 py-1 rounded-full transition-all duration-200 uppercase',
                lang === l
                  ? 'bg-emerald-subtle text-emerald border border-emerald-border'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900',
              )}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="hidden lg:flex w-[34px] h-[34px] items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Toggle theme"
        >
          {isDark ? '🌙' : '☀️'}
        </button>

        {/* AI Chat button */}
        <button
          onClick={onChatOpen}
          className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-subtle border border-emerald-border text-emerald text-[0.78rem] font-semibold shadow-[0_0_12px_rgba(16,185,129,0.1)] hover:bg-emerald/20 transition-all"
        >
          <span className="text-[0.9rem]">🤖</span>
          {t.nav.chat}
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pdot" />
        </button>

        {/* Mobile/tablet hamburger */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden flex flex-col gap-[5px] p-1" aria-label="Open menu">
              <span className="w-5 h-0.5 bg-slate-400 rounded-full" />
              <span className="w-5 h-0.5 bg-slate-400 rounded-full" />
              <span className="w-5 h-0.5 bg-slate-400 rounded-full" />
            </button>
          </SheetTrigger>
          <SheetContent className={cn('border-l border-emerald-border flex flex-col p-0', isDark ? 'bg-[#071020]' : 'bg-[#f8fafc]')}>
            {/* Logo + name header */}
            <div className={cn('flex items-center gap-2 px-5 py-4 border-b', isDark ? 'border-white/[0.08]' : 'border-black/[0.06]')}>
              <div className="w-8 h-8 rounded-[8px] flex items-center justify-center text-[0.85rem] font-black text-emerald bg-[linear-gradient(135deg,rgba(16,185,129,0.3),rgba(16,185,129,0.08))] border border-emerald-border">
                AB
              </div>
              <span className={cn('text-[0.85rem] font-bold', isDark ? 'text-white' : 'text-slate-900')}>
                Andrés <span className="text-emerald">Buelvas</span>
              </span>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-1 px-3 pt-4">
              {PAGE_LINKS.map(({ labelKey, href }) => (
                <SheetClose asChild key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'text-[0.95rem] px-4 py-3 rounded-lg transition-all block font-medium',
                      pathname === href
                        ? 'text-emerald bg-emerald-subtle'
                        : isDark
                          ? 'text-slate-400 hover:text-emerald hover:bg-white/[0.04]'
                          : 'text-slate-500 hover:text-emerald hover:bg-black/[0.04]',
                    )}
                  >
                    {t.nav[labelKey]}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Controls footer */}
            <div className={cn('px-5 pb-8 flex flex-col gap-4 border-t pt-5', isDark ? 'border-white/[0.08]' : 'border-black/[0.06]')}>
              {/* Lang + Theme in one row */}
              <div className="flex items-center justify-between">
                <div className={cn(
                  'flex items-center rounded-full p-0.5 border',
                  isDark ? 'bg-[rgba(30,41,59,0.7)] border-white/10' : 'bg-black/[0.06] border-black/10',
                )}>
                  {(['es', 'en'] as const).map((l) => (
                    <button
                      key={l}
                      onClick={toggleLang}
                      className={cn(
                        'text-[0.72rem] font-semibold px-2.5 py-1 rounded-full transition-all uppercase',
                        lang === l
                          ? 'bg-emerald-subtle text-emerald border border-emerald-border'
                          : isDark ? 'text-slate-400' : 'text-slate-500',
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <button
                  onClick={toggleTheme}
                  className={cn(
                    'w-[34px] h-[34px] flex items-center justify-center rounded-lg border transition-all',
                    isDark
                      ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                      : 'bg-black/5 border-black/10 text-slate-500 hover:text-slate-900 hover:bg-black/10',
                  )}
                >
                  {isDark ? '🌙' : '☀️'}
                </button>
              </div>

              {/* Chat AI button — same style as desktop, full width */}
              <SheetClose asChild>
                <button
                  onClick={onChatOpen}
                  className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-subtle border border-emerald-border text-emerald text-[0.82rem] font-semibold shadow-[0_0_12px_rgba(16,185,129,0.1)] hover:bg-emerald/20 transition-all"
                >
                  <span className="text-[0.9rem]">🤖</span>
                  {t.nav.chat}
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pdot" />
                </button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
