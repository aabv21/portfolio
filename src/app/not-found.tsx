import type { Metadata } from 'next'
import { NotFoundContent } from './_not-found-content'

export const metadata: Metadata = {
  title: '404 — Andrés Buelvas',
}

export default function NotFound() {
  return <NotFoundContent />
}
