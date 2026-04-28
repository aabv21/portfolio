const GITHUB_USER = 'aabv21'
const TTL = 60 * 60 * 1000 // 1 hour

let cache: { data: string; at: number } | null = null

interface GithubRepo {
  name: string
  description: string | null
  language: string | null
  stargazers_count: number
  html_url: string
  fork: boolean
}

interface GithubProfile {
  login: string
  name: string | null
  bio: string | null
  public_repos: number
  followers: number
  location: string | null
}

export async function getGithubProfile(): Promise<string> {
  if (cache && Date.now() - cache.at < TTL) return cache.data

  const token = process.env.GITHUB_TOKEN
  const headers: Record<string, string> = { 'User-Agent': 'andres-buelvas-portfolio' }
  if (token) headers['Authorization'] = `Bearer ${token}`

  try {
  const [profileRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USER}`, { headers, signal: AbortSignal.timeout(5000) }),
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=10&type=public`, { headers, signal: AbortSignal.timeout(5000) }),
  ])

  if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub API error')

  const profile = (await profileRes.json()) as GithubProfile
  const rawRepos = await reposRes.json()
  const repos = Array.isArray(rawRepos) ? (rawRepos as GithubRepo[]) : []

  // Only expose safe public fields — no emails, no internal metadata
  const safe = {
    username: profile.login,
    name: profile.name,
    bio: profile.bio,
    location: profile.location,
    public_repos: profile.public_repos,
    followers: profile.followers,
    url: `https://github.com/${GITHUB_USER}`,
    recent_repos: repos
      .filter((r) => !r.fork)
      .map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        url: r.html_url,
      })),
  }

  cache = { data: JSON.stringify(safe, null, 2), at: Date.now() }
  return cache.data
  } catch {
    return 'GitHub profile temporarily unavailable.'
  }
}
