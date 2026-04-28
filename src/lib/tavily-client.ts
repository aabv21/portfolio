const ALLOWED_DOMAINS = ['linkedin.com', 'github.com']

interface TavilyResult {
  title: string
  content: string
}

interface TavilyResponse {
  results: TavilyResult[]
}

// Word-boundary check prevents substring false matches (e.g. "est**andres**" matching "andres")
const ANCHOR_RE = /\b(andr[eé]s|buelvas|aabv21)\b/i

export async function searchWeb(rawQuery: string): Promise<string> {
  const apiKey = process.env.TAVILY_API_KEY
  if (!apiKey) return 'Web search is not available right now.'

  // Reject queries that don't reference Andrés — even if the model was induced to send something else
  if (!ANCHOR_RE.test(rawQuery)) return 'Search restricted to Andrés Buelvas profile only.'

  // Always prepend the name so Tavily results stay on-profile
  const query = `Andrés Buelvas ${rawQuery}`.slice(0, 200)

  const res = await fetch('https://api.tavily.com/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal: AbortSignal.timeout(5000),
    body: JSON.stringify({
      api_key: apiKey,
      query,
      search_depth: 'basic',
      max_results: 3,
      include_domains: ALLOWED_DOMAINS,
    }),
  })

  if (!res.ok) return 'Web search unavailable.'

  const data = (await res.json()) as TavilyResponse

  if (!data.results?.length) return 'No results found.'

  return data.results
    .map((r) => `[${r.title}]\n${r.content.slice(0, 500)}`)
    .join('\n\n')
}
