'use client'
import { useState } from 'react'
import { useBreakpoint } from './useBreakpoint'

export function useMobileTags(tags: string[], maxVisible = 4) {
  const [expanded, setExpanded] = useState(false)
  const bp = useBreakpoint()
  const isMobile = bp === 'mobile'
  const visibleTags = isMobile && !expanded ? tags.slice(0, maxVisible) : tags
  const hiddenCount = isMobile && !expanded ? Math.max(0, tags.length - maxVisible) : 0
  return { visibleTags, hiddenCount, expand: () => setExpanded(true) }
}
