'use client';
import { useState } from 'react';
import { useBreakpoint } from './useBreakpoint';

export function useMobileTags(tags: string[], maxVisible = 4) {
  const [expanded, setExpanded] = useState(false);
  const bp = useBreakpoint();
  const isSmall = bp === 'mobile' || bp === 'tablet';
  const shouldCollapse = isSmall && !expanded;
  const visibleTags = shouldCollapse ? tags.slice(0, maxVisible) : tags;
  const hiddenCount = shouldCollapse
    ? Math.max(0, tags.length - maxVisible)
    : 0;
  const canCollapse = isSmall && expanded;
  const expand = () => setTimeout(() => setExpanded(true), 350);
  const collapse = () => setExpanded(false);
  return { visibleTags, hiddenCount, canCollapse, expand, collapse };
}
