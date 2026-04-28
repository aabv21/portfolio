import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://andres-buelvas.dev'

const LAST_MODIFIED = process.env.VERCEL_GIT_COMMIT_TIMESTAMP
  ? new Date(process.env.VERCEL_GIT_COMMIT_TIMESTAMP)
  : new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/projects`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/experience`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.7 },
  ]
}
