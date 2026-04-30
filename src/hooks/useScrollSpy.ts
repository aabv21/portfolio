'use client'

import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 80): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (sectionIds.length === 0) return

    function onScroll() {
      const scrollY = window.scrollY

      // At the very top, always highlight the first section
      if (scrollY === 0) {
        setActiveId(sectionIds[0])
        return
      }

      const threshold = scrollY + offset
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= threshold) {
          current = id
        }
      }

      setActiveId(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Defer initial call so DOM layout is complete before measuring offsetTops
    const rafId = requestAnimationFrame(onScroll)
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [sectionIds, offset])

  return activeId
}
