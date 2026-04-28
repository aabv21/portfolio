'use client'

import { useState } from 'react'
import { getIcon } from '@/lib/icons'
import { useLang } from '@/context/LanguageContext'
import { skills } from '@/data/skills'
import { SectionHeading } from '@/components/ui/section-heading'
import type { SkillCategory, SkillItem } from '@/types'
import { cn } from '@/lib/utils'

const VISIBLE_DEFAULT = 6

function SkillBadge({ item }: { item: SkillItem }) {
  const Icon = item.CustomIcon
    ?? (item.icon ? getIcon(item.icon) as React.ComponentType<{ size: number; className: string }> : null)
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-border hover:bg-emerald-subtle transition-all duration-200 group">
      {Icon ? (
        <Icon size={16} className="text-emerald opacity-80 group-hover:opacity-100 flex-shrink-0" />
      ) : (
        <span className="w-4 h-4 rounded bg-emerald-subtle border border-emerald-border flex-shrink-0 flex items-center justify-center text-emerald text-[0.5rem] font-bold leading-none">
          {item.name.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="text-[0.78rem] font-medium text-slate-400 group-hover:text-emerald transition-colors whitespace-nowrap">
        {item.name}
      </span>
    </div>
  )
}

function CategoryBlock({
  category,
  tSkills,
}: {
  category: SkillCategory
  tSkills: { showMore: string; showLess: string }
}) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = category.items.length > VISIBLE_DEFAULT
  const visible = expanded ? category.items : category.items.slice(0, VISIBLE_DEFAULT)
  const hiddenCount = category.items.length - VISIBLE_DEFAULT

  return (
    <div className="glass-card p-5">
      <h3 className="text-[0.72rem] font-semibold text-emerald uppercase tracking-widest mb-4">
        {category.label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {visible.map((item) => (
          <SkillBadge key={item.name} item={item} />
        ))}
      </div>
      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className={cn('mt-3 text-[0.72rem] font-semibold text-emerald hover:underline transition-all')}
        >
          {expanded ? tSkills.showLess : `${tSkills.showMore} (${hiddenCount})`}
        </button>
      )}
    </div>
  )
}

export function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="section-bg relative overflow-hidden py-24">
      <div
        className="geo-shape absolute top-[8%] left-[4%] w-28 h-28 opacity-[0.06] animate-float"
        style={{ animationDelay: '1.2s' }}
      />
      <div className="pulse-node absolute bottom-[15%] right-[10%]" style={{ animationDelay: '0.4s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeading label={t.skills.sectionLabel} title={t.skills.sectionTitle} id="skills" />

        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((category) => (
            <CategoryBlock key={category.label} category={category} tSkills={t.skills} />
          ))}
        </div>
      </div>
    </section>
  )
}
