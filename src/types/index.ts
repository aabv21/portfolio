// src/types/index.ts
import type React from 'react'

export type Lang = 'es' | 'en'

export type { Translations } from '@/locales/es'

export interface WorkRole {
  period: string
  title: { en: string; es: string }
  responsibilities: { en: string; es: string }[]
}

export interface CompanyEntry {
  company: string
  totalPeriod: string
  icon: string
  tags: string[]
  roles: WorkRole[]
  description?: { en: string; es: string }
}

export interface SkillItem {
  name: string
  icon: string // react-icons/si component name e.g. 'SiReact'
  CustomIcon?: React.ComponentType<{ size: number; className: string }>
}

export interface SkillCategory {
  label: string
  items: SkillItem[]
}

export interface Project {
  name: string
  description: { en: string; es: string }
  tags: string[]
  link?: string
  github?: string
  featured: boolean
  gradient: string
  image?: string
  challenge?: { en: string; es: string }
  results?: { en: string; es: string }[]
  gallery?: string[]
  role?: { en: string; es: string }
  period?: string
}

export interface NavLink {
  label: string
  href: string
  isPage: boolean // true = router link, false = hash anchor
}

export interface SideNavItem {
  label: string
  href: string
  sectionId: string
}
