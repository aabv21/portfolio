'use client'

import { useState, useRef, useEffect } from 'react'
import { useAutoplayCarousel } from './useAutoplayCarousel'

interface InfiniteCarouselReturn {
  current: number
  displayIdx: number
  animated: boolean
  paused: boolean
  goTo: (index: number) => void
  pause: () => void
  resume: () => void
}

export function useInfiniteCarousel(total: number): InfiniteCarouselReturn {
  const { current, paused, goTo, pause, resume } = useAutoplayCarousel(total)
  const [displayIdx, setDisplayIdx] = useState(0)
  const [animated, setAnimated] = useState(true)
  const prevRef = useRef(current)

  useEffect(() => {
    const prev = prevRef.current
    prevRef.current = current

    if (prev === total - 1 && current === 0) {
      setAnimated(true)
      setDisplayIdx(total)
      const id = setTimeout(() => {
        setAnimated(false)
        setDisplayIdx(0)
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)))
      }, 480)
      return () => clearTimeout(id)
    }

    setAnimated(true)
    setDisplayIdx(current)
  }, [current, total])

  return { current, displayIdx, animated, paused, goTo, pause, resume }
}
