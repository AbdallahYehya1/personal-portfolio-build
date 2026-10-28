import { NextResponse } from 'next/server'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
  const input = body as Record<string, unknown>
  if (typeof input.website === 'string' && input.website.trim()) {
    return NextResponse.json({ success: true })
  }
  const name = typeof input.name === 'string' ? input.name.trim() : ''
  const email = typeof input.email === 'string' ? input.email.trim() : ''
  const message = typeof input.message === 'string' ? input.message.trim() : ''
  if (!name || name.length > 100 || /[\r\n]/.test(name) || !emailPattern.test(email) || email.length > 100 || !message || message.length > 1000) {
    return NextResponse.json({ error: 'Please provide a valid name, email, and message.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL || 'abdallah.yehya02@gmail.com'
  if (!apiKey || !from) {
    return NextResponse.json({ error: 'Contact delivery is temporarily unavailable.' }, { status: 503 })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(8000),
    })
    const result = await response.json()
    if (!response.ok || typeof result.id !== 'string' || !result.id) {
      console.error('Contact provider rejected delivery', { status: response.status })
      return NextResponse.json({ error: 'Message could not be sent. Please try again.' }, { status: 502 })
    }
    return NextResponse.json({ success: true })
  } catch {
    console.error('Contact provider could not be reached')
    return NextResponse.json({ error: 'Message could not be sent. Please try again.' }, { status: 502 })
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const maxDuration = 10
