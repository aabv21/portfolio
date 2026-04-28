import { cn } from '@/lib/utils'

interface CarouselDotsProps {
  total: number
  current: number
  isDark: boolean
  onDotClick: (i: number) => void
  ariaLabel?: string
}

export function CarouselDots({ total, current, isDark, onDotClick, ariaLabel = 'slide' }: CarouselDotsProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={cn(
            'rounded-full transition-all duration-300',
            i === current
              ? 'w-5 h-2 bg-emerald'
              : isDark ? 'w-2 h-2 bg-white/20 hover:bg-white/40' : 'w-2 h-2 bg-black/15 hover:bg-black/30',
          )}
          aria-label={`${ariaLabel} ${i + 1}`}
        />
      ))}
    </div>
  )
}
