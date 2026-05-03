'use client'

import NextTopLoader from 'nextjs-toploader'

export function TopLoader() {
  return (
    <NextTopLoader
      color="#10B981"
      shadow="0 0 10px #10B981,0 0 5px #10B981"
      showSpinner={false}
      height={2}
    />
  )
}
