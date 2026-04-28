'use client'
import { useState } from 'react'
import { useBreakpoint } from './useBreakpoint'

export function useMobileTags(tags: string[], maxVisible = 4) {
  const [expanded, setExpanded] = useState(false)
  const bp = useBreakpoint()
  // bp === null means breakpoint not yet measured — show all tags, no +N button
  const isSmall = bp === 'mobile' || bp === 'tablet'
  const shouldCollapse = isSmall && !expanded
  const visibleTags = shouldCollapse ? tags.slice(0, maxVisible) : tags
  const hiddenCount = shouldCollapse ? Math.max(0, tags.length - maxVisible) : 0
  const canCollapse = isSmall && expanded
  // Small delay on expand so iOS touch release fires before new tags mount (prevents ghost :active state)
  const expand = () => setTimeout(() => setExpanded(true), 50)
  const collapse = () => setExpanded(false)
  return { visibleTags, hiddenCount, canCollapse, expand, collapse }
}
