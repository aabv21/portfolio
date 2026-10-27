'use client'

import { useEffect } from 'react'
import { es } from '@/locales/es'
import { en } from '@/locales/en'

// Scrolls to the URL hash once the home page mounts: Next tries before this dynamic page renders
// (e.g. /projects -> /#services), and a link shared in the other language uses the other anchor.
export function useHashScroll() {
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1))
    if (!hash) return
    const key = (Object.keys(es.anchors) as (keyof typeof es.anchors)[]).find(
      (k) => es.anchors[k] === hash || en.anchors[k] === hash,
    )
    const target = key
      ? document.getElementById(es.anchors[key]) ?? document.getElementById(en.anchors[key])
      : document.getElementById(hash)
    target?.scrollIntoView()
  }, [])
}
