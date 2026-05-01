import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export const CAREER_START_YEAR = 2019

const EN_TO_ES_MONTHS: Record<string, string> = {
  Jan: 'Ene', Feb: 'Feb', Mar: 'Mar', Apr: 'Abr',
  May: 'May', Jun: 'Jun', Jul: 'Jul', Aug: 'Ago',
  Sep: 'Sep', Oct: 'Oct', Nov: 'Nov', Dec: 'Dic',
}

export function formatPeriod(period: string, lang: 'en' | 'es'): string {
  if (lang === 'en') return period
  return period.replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g, (m) => EN_TO_ES_MONTHS[m] ?? m)
}
