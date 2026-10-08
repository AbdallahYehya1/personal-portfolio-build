import { NextResponse } from 'next/server'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''

    if (!name || name.length > 100 || !emailPattern.test(email) || email.length > 100 || !message || message.length > 1000) {
      return NextResponse.json({ error: 'Please provide a valid name, email, and message.' }, { status: 400 })
    }

    // Fail closed until a verified provider is configured. No mock delivery is claimed.
    return NextResponse.json(
      { error: process.env.RESEND_API_KEY ? 'Contact delivery is not configured yet.' : 'Contact delivery requires Resend setup.' },
      { status: 503 },
    )
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const maxDuration = 10
