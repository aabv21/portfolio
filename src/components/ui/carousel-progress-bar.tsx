'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { AUTOPLAY_INTERVAL } from '@/hooks/useAutoplayCarousel'

interface CarouselProgressBarProps {
  current: number
  paused: boolean
  isDark: boolean
  className?: string
}

export function CarouselProgressBar({ current, paused, isDark, className }: CarouselProgressBarProps) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    if (paused) {
      bar.style.width = '0%'
      return
    }

    let startTime: number | null = null
    let rafId: number

    function tick(ts: number) {
      if (!startTime) startTime = ts
      const pct = Math.min(((ts - startTime) / AUTOPLAY_INTERVAL) * 100, 100)
      if (bar) bar.style.width = `${pct}%`
      if (pct < 100) rafId = requestAnimationFrame(tick)
    }

    bar.style.width = '0%'
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [current, paused])

  return (
    <div className={cn('h-0.5 w-full rounded-full overflow-hidden', isDark ? 'bg-white/5' : 'bg-black/10', className)}>
      <div ref={barRef} className="h-full bg-emerald rounded-full" style={{ width: '0%' }} />
    </div>
  )
}
