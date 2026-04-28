import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import { contactLimits } from '@/lib/rateLimit'

export const maxDuration = 10

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/[\r\n]/g, ' ')
}

// \x00 null byte; \u200B-\u200F zero-width/directional marks;
// \u202A-\u202E bidi embeds/overrides; \u2066-\u2069 bidi isolates; \uFEFF BOM
function clean(s: unknown): unknown {
  return typeof s === 'string'
    ? s.replace(/[\x00\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/gu, '')
    : s
}

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(5000),
})

export async function POST(req: NextRequest) {
  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) return NextResponse.json({ error: 'Service unavailable' }, { status: 503 })
  const resend = new Resend(resendApiKey)
  const ip =
    req.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    '127.0.0.1'
  if (!contactLimits(ip).allowed) {
    return NextResponse.json({ error: 'rate_limit' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const parsed = schema.safeParse(
    typeof body === 'object' && body !== null
      ? Object.fromEntries(Object.entries(body as Record<string, unknown>).map(([k, v]) => [k, clean(v)]))
      : body,
  )
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid fields' }, { status: 400 })
  }

  const { name, email, subject, message } = parsed.data

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'andres.buelvas.2102@gmail.com',
    replyTo: email,
    subject: `[Portfolio] ${esc(subject)}`,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <p style="font-size:13px;color:#94a3b8;margin:0 0 16px">New message from your portfolio contact form</p>
        <h2 style="font-size:18px;color:#0f172a;margin:0 0 4px">${esc(subject)}</h2>
        <p style="font-size:13px;color:#64748b;margin:0 0 24px">${esc(name)} · <a href="mailto:${esc(email)}" style="color:#10b981">${esc(email)}</a></p>
        <div style="background:#f8fafc;border-left:3px solid #10b981;padding:16px 20px;border-radius:0 8px 8px 0">
          <p style="font-size:14px;color:#334155;margin:0;white-space:pre-wrap">${esc(message)}</p>
        </div>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } })
}
