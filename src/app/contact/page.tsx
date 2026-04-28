'use client'

import { useState, useCallback } from 'react'
import { z } from 'zod'
import { useLang } from '@/context/LanguageContext'
import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type ContactForm = { name: string; email: string; subject: string; message: string }
type ErrorKey = 'errMin2' | 'errEmail' | 'errMin10'
type FormErrors = Partial<Record<keyof ContactForm, ErrorKey>>

function useCopyToClipboard(text: string) {
  const [copied, setCopied] = useState(false)
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [text])
  return { copied, copy }
}

function CopyRow({ icon, value, isDark, lang }: { icon: React.ReactNode; value: string; isDark: boolean; lang: string }) {
  const { copied, copy } = useCopyToClipboard(value)
  return (
    <button
      onClick={copy}
      className="flex items-center gap-3 text-[0.9rem] text-slate-500 hover:text-emerald transition-colors relative text-left"
    >
      {icon}
      <span>{value}</span>
      {copied && (
        <span className={cn(
          'absolute -top-7 left-8 px-2.5 py-1 rounded-md text-[0.7rem] font-semibold whitespace-nowrap pointer-events-none animate-in fade-in duration-150',
          isDark ? 'bg-slate-800 text-emerald border border-emerald-border shadow-[0_0_12px_rgba(16,185,129,0.15)]' : 'bg-white text-emerald border border-emerald-border shadow-md'
        )}>
          {lang === 'es' ? '¡Copiado!' : 'Copied!'}
        </span>
      )}
    </button>
  )
}

function InfoRow({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <span className="flex items-center gap-3 text-[0.9rem] text-slate-500 cursor-default">{icon}{value}</span>
  )
}

function inputCls(isDark: boolean, error?: string) {
  return cn(
    'w-full rounded-xl border px-3 py-2.5 text-[0.85rem] focus:outline-none transition-all resize-none',
    'focus:border-emerald-border',
    isDark
      ? 'bg-white/5 text-white placeholder:text-slate-500 focus:bg-emerald-subtle/10'
      : 'bg-black/[0.04] text-slate-900 placeholder:text-slate-400 focus:bg-emerald-subtle/20',
    error
      ? 'border-[#FC7C78]/60'
      : isDark ? 'border-white/10' : 'border-black/10',
  )
}

export default function ContactPage() {
  const { t, lang } = useLang()
  const { isDark } = useTheme()
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'rate_limit'>('idle')

  const fieldSchemas: Record<keyof ContactForm, z.ZodString> = {
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(2),
    message: z.string().min(10),
  }

  function validateField(field: keyof ContactForm, value: string): ErrorKey | undefined {
    const result = fieldSchemas[field].safeParse(value)
    if (result.success) return undefined
    const issue = result.error.issues[0]
    if (issue.code === 'too_small') return issue.minimum === 10 ? 'errMin10' : 'errMin2'
    return 'errEmail'
  }

  function handleChange(field: keyof ContactForm, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) {
      const err = validateField(field, value)
      setErrors((e) => ({ ...e, [field]: err }))
    }
  }

  function validate(): boolean {
    const fieldErrors: FormErrors = {}
    for (const field of Object.keys(fieldSchemas) as (keyof ContactForm)[]) {
      const err = validateField(field, form[field])
      if (err) fieldErrors[field] = err
    }
    setErrors(fieldErrors)
    return Object.keys(fieldErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({})) as { error?: string }
        setStatus(data.error === 'rate_limit' ? 'rate_limit' : 'error')
        return
      }
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="section-bg min-h-screen relative overflow-hidden pt-[62px] flex flex-col">
      <div className="geo-shape absolute top-[8%] left-[5%] w-28 h-28 opacity-[0.06] animate-float" style={{ animationDelay: '1s' }} />
      <div className="geo-shape absolute bottom-[15%] right-[4%] w-20 h-20 opacity-[0.05] animate-float" />
      <div className="pulse-node absolute top-[40%] right-[12%]" />

      <div className="relative z-10 flex-1 flex items-start md:items-center">
        <div className="w-full max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-center">

            {/* Left */}
            <div>
              <span className="section-label mb-4 block">{t.contact.sectionLabel}</span>
              <h1 className="section-title text-[3.2rem] md:text-[2.8rem] lg:text-[4.8rem] mb-6">
                {t.contact.headline}
              </h1>
              <p className="text-[0.95rem] text-slate-400 leading-relaxed mb-10 max-w-sm">
                {t.contact.subtitle}
              </p>

              <div className="flex flex-col gap-5">
                <CopyRow
                  value="andres.buelvas.2102@gmail.com"
                  isDark={isDark}
                  lang={lang}
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  }
                />
                <InfoRow
                  value={t.contact.locationValue}
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  }
                />
                <CopyRow
                  value="linkedin.com/in/andres-buelvas"
                  isDark={isDark}
                  lang={lang}
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#10B981" className="flex-shrink-0">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  }
                />
              </div>
            </div>

            {/* Right: form card */}
            <div
              className="glass-card p-6 sm:p-8 lg:p-10"
              style={{ borderColor: 'rgba(16,185,129,0.2)', boxShadow: '0 0 60px rgba(16,185,129,0.1), 0 0 120px rgba(16,185,129,0.05)' }}
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-subtle border border-emerald-border flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-[1rem]">{t.contact.success}</p>
                    <p className="text-[0.82rem] text-slate-400 mt-1">{t.contact.successSub}</p>
                  </div>
                  <button onClick={() => setStatus('idle')} className="mt-2 text-[0.8rem] text-emerald hover:underline">
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <input
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder={t.contact.namePlaceholder}
                      className={inputCls(isDark, errors.name)}
                    />
                    {errors.name && <p className="text-[0.7rem] text-error">{t.contact[errors.name]}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      className={inputCls(isDark, errors.email)}
                    />
                    {errors.email && <p className="text-[0.7rem] text-error">{t.contact[errors.email]}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <input
                      value={form.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder={t.contact.subjectPlaceholder}
                      className={inputCls(isDark, errors.subject)}
                    />
                    {errors.subject && <p className="text-[0.7rem] text-error">{t.contact[errors.subject]}</p>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      rows={5}
                      className={inputCls(isDark, errors.message)}
                    />
                    {errors.message && <p className="text-[0.7rem] text-error">{t.contact[errors.message]}</p>}
                  </div>

                  {status === 'error' && (
                    <p className="text-[0.82rem] text-error">{t.contact.errorGeneric}</p>
                  )}
                  {status === 'rate_limit' && (
                    <p className="text-[0.82rem] text-error">{t.contact.errorRate}</p>
                  )}

                  <Button
                    type="submit"
                    variant="emerald"
                    size="lg"
                    disabled={status === 'loading'}
                    className="w-full mt-1 bg-emerald-subtle hover:bg-emerald/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                  >
                    {status === 'loading' ? t.contact.sending : t.contact.submit}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
