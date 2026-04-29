'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

export const AUTOPLAY_INTERVAL = 5500

interface AutoplayCarouselReturn {
  current: number
  paused: boolean
  goTo: (index: number) => void
  pause: () => void
  resume: () => void
}

export function useAutoplayCarousel(total: number): AutoplayCarouselReturn {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const pausedRef = useRef(false)

  const restartRef = useRef<(() => void) | null>(null)

  const goTo = useCallback(
    (index: number) => setCurrent(((index % total) + total) % total),
    [total],
  )

  const pause = useCallback(() => {
    pausedRef.current = true
    setIsPaused(true)
  }, [])

  const resume = useCallback(() => {
    pausedRef.current = false
    setIsPaused(false)
    restartRef.current?.()
  }, [])

  useEffect(() => {
    let id = setInterval(() => {
      if (!pausedRef.current) setCurrent((c) => (c + 1) % total)
    }, AUTOPLAY_INTERVAL)

    restartRef.current = () => {
      clearInterval(id)
      id = setInterval(() => {
        if (!pausedRef.current) setCurrent((c) => (c + 1) % total)
      }, AUTOPLAY_INTERVAL)
    }

    return () => clearInterval(id)
  }, [total])

  return { current, paused: isPaused, goTo, pause, resume }
}
