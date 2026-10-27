'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Plug, Workflow, Sparkles, Layers, ShoppingBag, GraduationCap } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'

const SERVICES = [
  { key: 'api', Icon: Plug },
  { key: 'automation', Icon: Workflow },
  { key: 'ai', Icon: Sparkles },
  { key: 'fullstack', Icon: Layers },
  { key: 'cms', Icon: ShoppingBag },
  { key: 'mentoring', Icon: GraduationCap },
] as const

export function Services() {
  const { t } = useLang()

  // Next scrolls to the hash before this dynamic page mounts (e.g. /projects -> /#servicios), so retry once mounted
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <section id="servicios" className="section-bg relative overflow-hidden py-24">
      <div className="geo-shape absolute top-[12%] left-[5%] w-20 h-20 opacity-[0.06] animate-float" style={{ animationDelay: '0.6s' }} />
      <div className="pulse-node absolute bottom-[12%] right-[8%]" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeading label={t.services.sectionLabel} title={t.services.sectionTitle} id="servicios" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ key, Icon }) => (
            <div key={key} className="glass-card p-5 flex flex-col gap-3 hover:border-emerald-border transition-colors duration-200">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center bg-emerald-subtle border border-emerald-border">
                <Icon size={18} strokeWidth={1.8} className="text-emerald" aria-hidden="true" />
              </div>
              <h3 className="text-[0.95rem] font-bold text-white">{t.services.items[key].title}</h3>
              <p className="text-[0.82rem] text-slate-400 leading-relaxed">{t.services.items[key].description}</p>
            </div>
          ))}
        </div>

        <div className="emerald-card mt-10 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[0.95rem] font-semibold text-white">{t.services.cta}</p>
          <Button asChild size="lg" variant="emerald" className="flex-shrink-0">
            <Link href="/contact">{t.services.ctaButton} →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
