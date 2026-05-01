import { readFile, stat } from 'fs/promises'
import path from 'path'

let cached: string | null = null

export async function getCvText(): Promise<string> {
  if (cached) return cached

  const cvPath = path.join(process.cwd(), 'public', 'andres-buelvas-cv.pdf')
  const { size } = await stat(cvPath)
  if (size > 5 * 1024 * 1024) throw new Error('CV file too large')
  const buffer = await readFile(cvPath)
  // Import the internal lib directly — pdf-parse's index.js runs a test file
  // check on load (module.parent detection) that throws ENOENT in Next.js
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const pdfParse = require('pdf-parse/lib/pdf-parse.js') as (buf: Buffer) => Promise<{ text: string }>
  const { text } = await pdfParse(buffer)
  cached = text.trim()
  return cached
}
