import { readFile, stat } from 'fs/promises'
import path from 'path'

const cache: Record<string, string> = {}

async function parsePdf(filePath: string): Promise<string> {
  const { size } = await stat(filePath)
  if (size > 5 * 1024 * 1024) throw new Error('CV file too large')
  const buffer = await readFile(filePath)
  // Import the internal lib directly — pdf-parse's index.js runs a test file
  // check on load (module.parent detection) that throws ENOENT in Next.js
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const pdfParse = require('pdf-parse/lib/pdf-parse.js') as (buf: Buffer) => Promise<{ text: string }>
  const { text } = await pdfParse(buffer)
  return text.trim()
}

export async function getCvText(lang?: string): Promise<string> {
  const isEs = lang === 'es'
  const fileName = isEs ? 'andres-buelvas-cv-es.pdf' : 'andres-buelvas-cv.pdf'

  if (cache[fileName]) return cache[fileName]

  const cvPath = path.join(process.cwd(), 'public', fileName)

  try {
    const text = await parsePdf(cvPath)
    cache[fileName] = text
    return text
  } catch {
    // Fallback to English CV if Spanish version is not available
    if (isEs) {
      const fallbackPath = path.join(process.cwd(), 'public', 'andres-buelvas-cv.pdf')
      const text = await parsePdf(fallbackPath)
      cache['andres-buelvas-cv.pdf'] = text
      return text
    }
    throw new Error('CV file not found')
  }
}
