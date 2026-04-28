'use client'

import { useEffect } from 'react'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center section-bg">
      <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FC7C78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div>
        <p className="text-white font-bold text-[1rem] mb-1">Something went wrong</p>
        <p className="text-[0.82rem] text-slate-400">An unexpected error occurred. Please try again.</p>
      </div>
      <button
        onClick={reset}
        className="px-5 py-2 rounded-full border border-emerald-border text-emerald text-[0.82rem] font-semibold hover:bg-emerald-subtle transition-all"
      >
        Try again
      </button>
    </div>
  )
}
