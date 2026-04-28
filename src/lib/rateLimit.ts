interface Entry {
  count: number
  resetAt: number
}

const store = new Map<string, Entry>()

// Prune expired entries every 5 minutes to avoid unbounded memory growth
setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of store) {
    if (now > entry.resetAt) store.delete(key)
  }
}, 5 * 60_000)

interface Window {
  key: string
  limit: number
  windowMs: number
}

export function checkLimits(windows: Window[]): { allowed: boolean } {
  const now = Date.now()

  // First pass: check all windows before mutating any
  for (const w of windows) {
    const entry = store.get(w.key)
    if (entry && now <= entry.resetAt && entry.count >= w.limit) {
      return { allowed: false }
    }
  }

  // Second pass: increment counters
  for (const w of windows) {
    const entry = store.get(w.key)
    if (!entry || now > entry.resetAt) {
      store.set(w.key, { count: 1, resetAt: now + w.windowMs })
    } else {
      entry.count++
    }
  }

  return { allowed: true }
}

const MIN = 60_000
const DAY = 86_400_000

export function chatLimits(ip: string): { allowed: boolean } {
  return checkLimits([
    { key: `chat:min:${ip}`,      limit: 10,  windowMs: MIN },
    { key: `chat:day:${ip}`,      limit: 50,  windowMs: DAY },
    { key: `chat:day:__global__`, limit: 500, windowMs: DAY },
  ])
}

export function contactLimits(ip: string): { allowed: boolean } {
  return checkLimits([
    { key: `contact:min:${ip}`,      limit: 1,  windowMs: MIN },
    { key: `contact:day:${ip}`,      limit: 3,  windowMs: DAY },
    { key: `contact:day:__global__`, limit: 30, windowMs: DAY },
  ])
}
