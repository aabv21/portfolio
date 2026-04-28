/** Strips ALL HTML tags — returns plain text only. */
export function stripHtml(text: string): string {
  return text.replace(/<[\s\S]*?>/g, '')
}
