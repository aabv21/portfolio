'use client'
import { useState, useEffect, useLayoutEffect } from 'react'

type Breakpoint = 'mobile' | 'tablet' | 'desktop'

// useLayoutEffect on client (fires before paint), useEffect on server (SSR compat)
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

function getBreakpoint(): Breakpoint {
  const w = window.innerWidth
  return w < 768 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop'
}

export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>('desktop')
  useIsomorphicLayoutEffect(() => {
    setBp(getBreakpoint())
    function update() { setBp(getBreakpoint()) }
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])
  return bp
}
