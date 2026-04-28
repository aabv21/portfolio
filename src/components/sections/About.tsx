'use client'

import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { cn, CAREER_START_YEAR } from '@/lib/utils'
import { SectionHeading } from '@/components/ui/section-heading'

const EDUCATION = [
  {
    year: '2013–2019',
    title: { es: 'Ing. de Computación', en: 'Computer Engineering' },
    school: 'Universidad Simón Bolívar',
  },
  {
    year: '2025',
    title: { es: 'Diploma en Soft Skills', en: 'Soft Skills Diploma' },
    school: 'Pontificia Universidad Javeriana',
  },
]

export function About() {
  const { t, lang } = useLang()
  const { isDark } = useTheme()
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR

  return (
    <section id="sobre-mi" className="section-bg relative overflow-hidden py-24">
      <div
        className="geo-shape absolute top-[10%] right-[5%] w-20 h-20 opacity-[0.07] animate-float"
        style={{ animationDelay: '1s' }}
      />
      <div className="pulse-node absolute bottom-[20%] left-[8%]" style={{ animationDelay: '0.8s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeading label={t.about.sectionLabel} title={t.about.sectionTitle} id="sobre-mi" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-baseline gap-3">
              <span className="text-[3.5rem] font-extrabold text-emerald leading-none">
                +{yearsOfExperience}
              </span>
              <span className="text-[1rem] text-slate-400">{t.about.yearsLabel}</span>
            </div>

            <p className="text-[0.9rem] text-slate-400 leading-relaxed">{t.about.bio}</p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-subtle border border-emerald-border text-[0.78rem] text-emerald font-semibold w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pdot" />
              {t.about.availability}
            </div>

            <a
              href="/andres-buelvas-cv.pdf"
              download
              className={cn(
                'inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-[0.82rem] font-medium transition-all w-fit',
                isDark
                  ? 'border-white/15 text-slate-300 hover:bg-white/5 hover:text-white'
                  : 'border-slate-300 text-slate-700 hover:bg-black/5 hover:text-slate-900',
              )}
            >
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.about.cvBtn}
            </a>
          </div>

          {/* Right — education timeline */}
          <div>
            <h3 className="section-label mb-6">{t.about.education}</h3>
            <div className="relative flex flex-col gap-0">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald/40 via-emerald/20 to-transparent" />
              {EDUCATION.map(({ year, title, school }, i) => (
                <div key={i} className="flex gap-5 pb-8 last:pb-0">
                  <div className="relative flex-shrink-0 mt-1.5">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-emerald bg-[#0a1628] shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  </div>
                  <div>
                    <span className="text-[0.72rem] font-semibold text-emerald uppercase tracking-wide">
                      {year}
                    </span>
                    <p className="text-[0.9rem] font-semibold text-white mt-0.5">{title[lang]}</p>
                    <p className="text-[0.8rem] text-slate-500">{school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
