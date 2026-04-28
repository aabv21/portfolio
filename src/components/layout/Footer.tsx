'use client'

import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/aabv21',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aabv211996/',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:andres.buelvas.2102@gmail.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'CV',
    href: '/andres-buelvas-cv.pdf',
    download: true,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
]

const PAGE_LINKS = [
  { labelKey: 'home' as const, href: '/' },
  { labelKey: 'experience' as const, href: '/experience' },
  { labelKey: 'projects' as const, href: '/projects' },
  { labelKey: 'contact' as const, href: '/contact' },
]

export function Footer() {
  const { t, lang } = useLang()
  const { isDark } = useTheme()
  const linkedInHref = lang === 'es'
    ? 'https://www.linkedin.com/in/aabv211996/?locale=es-ES'
    : 'https://www.linkedin.com/in/aabv211996/'
  const hoverText = 'hover:text-emerald'

  return (
    <footer
      className="relative z-10 border-t border-[rgba(16,185,129,0.18)]"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(16,185,129,0.06) 0%, transparent 70%), linear-gradient(180deg, #0a1628 0%, #071020 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          {/* Col 1 — Brand + socials: row on mobile, column on md+ */}
          <div className="flex items-center justify-between md:flex-col md:justify-between md:gap-0">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-[9px] flex items-center justify-center text-[0.95rem] font-black text-emerald bg-[linear-gradient(135deg,rgba(16,185,129,0.3),rgba(16,185,129,0.08))] border border-emerald-border shadow-[0_0_14px_rgba(16,185,129,0.18)]">
                AB
              </div>
              <span className="text-[0.88rem] font-bold text-white">
                Andrés <span className="text-emerald">Buelvas</span>
              </span>
            </div>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon, download }) => (
                <a
                  key={label}
                  href={label === 'LinkedIn' ? linkedInHref : href}
                  download={download ? true : undefined}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-[34px] h-[34px] rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-emerald hover:border-emerald-border hover:bg-emerald-subtle transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Cols 2+3: 2-col grid on mobile, slots into parent 3-col grid on md+ */}
          <div className="grid grid-cols-2 md:contents gap-8 md:gap-0">
            {/* Col 2 — Pages */}
            <div>
              <h4 className="section-label mb-4">{t.footer.pages}</h4>
              <ul className="flex flex-col gap-2">
                {PAGE_LINKS.map(({ labelKey, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn("flex items-center gap-2 text-[0.8rem] text-slate-500 transition-colors before:content-['→'] before:text-[0.65rem] before:text-emerald before:opacity-50", hoverText)}
                    >
                      {t.nav[labelKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact */}
            <div>
              <h4 className="section-label mb-4">{t.footer.contact}</h4>
              <div className="flex flex-col gap-2.5">
                <a
                  href="mailto:andres.buelvas.2102@gmail.com"
                  className={cn("flex items-center gap-2 text-[0.8rem] text-slate-500 transition-colors", hoverText)}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  andres.buelvas.2102@gmail.com
                </a>
                <span className="flex items-center gap-2 text-[0.8rem] text-slate-500">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {t.footer.location}
                </span>
                <a
                  href={linkedInHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("flex items-center gap-2 text-[0.8rem] text-slate-500 transition-colors", hoverText)}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#10B981">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  linkedin.com/in/andres-buelvas
                </a>
                <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1.5 rounded-full bg-emerald-subtle border border-emerald-border text-[0.72rem] text-emerald font-medium self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pdot" />
                  {t.footer.availability}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-2">
          <span className="text-[0.72rem] text-slate-600">{t.footer.copyright}</span>
          <a
            href="https://github.com/aabv21/portafolio-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] text-emerald hover:underline"
          >
            {t.footer.github}
          </a>
        </div>
      </div>
    </footer>
  )
}
