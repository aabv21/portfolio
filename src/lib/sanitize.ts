/**
 * Sanitizes a string using DOMPurify before it is inserted into the DOM.
 * Only call this on the client — DOMPurify requires a browser window.
 */
export async function sanitizeHtml(dirty: string): Promise<string> {
  if (typeof window === 'undefined') return ''

  const DOMPurify = (await import('dompurify')).default
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'code', 'br'],
    ALLOWED_ATTR: [],
  })
}

/** Strips ALL HTML tags — returns plain text only. */
export function stripHtml(text: string): string {
  return text.replace(/<[\s\S]*?>/g, '')
}
