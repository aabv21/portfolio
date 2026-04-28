'use client'
import { useState, useLayoutEffect } from 'react'

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | null

function getBreakpoint(): Breakpoint {
  const w = window.innerWidth
  return w < 768 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop'
}

export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>(null)
  useLayoutEffect(() => {
    setBp(getBreakpoint())
    function update() { setBp(getBreakpoint()) }
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])
  return bp
}
