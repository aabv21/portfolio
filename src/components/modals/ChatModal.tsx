'use client'

import { useState, useRef, useEffect, useCallback, memo } from 'react'
import { useLang } from '@/context/LanguageContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
  isGreeting?: boolean
}

const MarkdownText = memo(function MarkdownText({ text }: { text: string }) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => {
        const trimmed = line.trimStart()
        const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('• ')
        const content = isBullet ? trimmed.slice(2) : line

        const parts = content.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
        const rendered = parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**'))
            return <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
          if (part.startsWith('*') && part.endsWith('*'))
            return <em key={j}>{part.slice(1, -1)}</em>
          return part
        })

        return (
          <span key={i} className={cn('block', isBullet && 'pl-3 relative before:absolute before:left-0 before:content-["·"] before:text-emerald', i > 0 && !isBullet && 'mt-1.5')}>
            {rendered}
          </span>
        )
      })}
    </>
  )
})

interface ChatModalProps {
  open: boolean
  onClose: () => void
}

export function ChatModal({ open, onClose }: ChatModalProps) {
  const { t } = useLang()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: '', isGreeting: true }])
    }
  }, [open, messages.length])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (!open) return
    // Delay focus on iOS to prevent automatic zoom (iOS zooms on focus if font-size < 16px)
    const id = setTimeout(() => textareaRef.current?.focus(), 100)
    return () => clearTimeout(id)
  }, [open])

  const send = useCallback(async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    setMessages((prev) => [...prev, { role: 'user', content: trimmed }])
    setInput('')
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      })

      const data = (await res.json()) as { reply?: string; error?: string }

      if (!res.ok) {
        setError(data.error === 'rate_limit' ? t.chat.errorRate : t.chat.errorGeneric)
        setMessages((prev) => prev.slice(0, -1))
        return
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply ?? '' }])
    } catch {
      setError(t.chat.errorGeneric)
      setMessages((prev) => prev.slice(0, -1))
    } finally {
      setLoading(false)
    }
  }, [loading, t.chat.errorRate, t.chat.errorGeneric])

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-end p-0 md:p-6 pointer-events-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
        onTouchMove={(e) => e.preventDefault()}
      />

      {/* Panel */}
      <div className="relative pointer-events-auto w-full md:max-w-[420px] h-[90dvh] md:h-[580px] flex flex-col glass-card overflow-hidden shadow-[0_8px_64px_rgba(0,0,0,0.6)] border border-white/10 rounded-t-2xl rounded-b-none md:rounded-2xl pb-[env(safe-area-inset-bottom)] md:pb-0">
        {/* Drag handle — mobile only */}
        <div className="md:hidden flex justify-center pt-2 pb-1 flex-shrink-0">
          <div className="w-8 h-1 rounded-full bg-white/20" />
        </div>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-subtle border border-emerald-border flex items-center justify-center text-[0.9rem]">
              🤖
            </div>
            <div>
              <p className="text-[0.82rem] font-semibold text-white leading-none">{t.chat.title}</p>
              <p className="text-[0.7rem] text-slate-500 mt-0.5">{t.chat.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[0.65rem] font-semibold text-emerald border border-emerald-border bg-emerald-subtle px-2 py-0.5 rounded-full">
              {t.chat.badge}
            </span>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald hover:bg-emerald-subtle transition-all"
              aria-label="Close chat"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 scroll-smooth">
          <div className="text-center">
            <span className="text-[0.65rem] text-slate-600 border border-white/[0.06] px-2 py-0.5 rounded-full">
              {t.chat.start}
            </span>
          </div>

          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}
            >
              <div
                className={cn(
                  'max-w-[82%] px-3 py-2 rounded-2xl text-[0.8rem] leading-relaxed',
                  msg.role === 'user'
                    ? 'bg-emerald-subtle border border-emerald-border text-white rounded-br-sm'
                    : 'bg-white/5 border border-white/10 text-slate-300 rounded-bl-sm',
                )}
              >
                {msg.isGreeting
                  ? t.chat.greeting
                  : msg.role === 'assistant'
                    ? <MarkdownText text={msg.content} />
                    : msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <span className="sr-only" aria-live="polite" aria-atomic="true">Loading response</span>
              <div className="bg-white/5 border border-white/10 px-3 py-2.5 rounded-2xl rounded-bl-sm flex items-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-emerald/60 animate-pdot"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          {error && (
            <p className="text-[0.72rem] text-error text-center px-2">{error}</p>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick chips */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
            {(t.chat.chips as readonly string[]).map((chip) => (
              <button
                key={chip}
                onClick={() => send(chip)}
                disabled={loading}
                className="text-[0.68rem] px-2.5 py-1 rounded-full border border-white/10 text-slate-400 hover:text-emerald hover:border-emerald-border hover:bg-emerald-subtle transition-all disabled:opacity-50"
              >
                {chip}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="border-t border-white/[0.07] px-3 py-3 flex gap-2 items-end flex-shrink-0">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.chat.placeholder}
            rows={1}
            disabled={loading}
            className={cn(
              'flex-1 resize-none rounded-xl bg-white/5 border border-white/10 px-3 py-2',
              'text-white placeholder:text-slate-500',
              'outline-none focus:outline-none focus:ring-0 focus:border-emerald-border',
              'transition-colors max-h-28 overflow-y-auto disabled:opacity-60',
            )}
            style={{ lineHeight: '1.5', fontSize: '16px' }}
          />
          <Button
            variant="emerald"
            size="sm"
            onClick={() => send(input)}
            disabled={loading || !input.trim()}
            className="rounded-xl flex-shrink-0 px-3 py-2 h-auto"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </Button>
        </div>

        {/* Footer hint */}
        <p className="text-[0.62rem] text-slate-600 text-center pb-2 px-4 leading-relaxed flex-shrink-0">
          {t.chat.hint} · {t.chat.disclaimer}
        </p>
      </div>
    </div>
  )
}
