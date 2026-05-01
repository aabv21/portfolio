import { readFile, stat } from 'fs/promises';
import path from 'path';

let cached: string | null = null;

export async function getCvText(): Promise<string> {
  if (cached) return cached;

  const cvPath = path.join(process.cwd(), 'public', 'andres-buelvas-cv.pdf');
  const { size } = await stat(cvPath);
  if (size > 5 * 1024 * 1024) throw new Error('CV file too large');
  const buffer = await readFile(cvPath);
  const pdfParse = require('pdf-parse/lib/pdf-parse.js') as (
    buf: Buffer,
  ) => Promise<{ text: string }>;
  const { text } = await pdfParse(buffer);
  cached = text.trim();
  return cached;
}
