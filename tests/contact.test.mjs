import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'

// Compile the actual handler, replacing only NextResponse with the web Response API.
const source = readFileSync(new URL('../app/api/contact/route.ts', import.meta.url), 'utf8')
  .replace("import { NextResponse } from 'next/server'", 'const NextResponse = Response')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)
const valid = { name: 'Visitor', email: 'visitor@example.com', message: 'Hello from the portfolio' }
const request = body => new Request('http://localhost/api/contact', { method: 'POST', body: JSON.stringify(body) })

test('contact endpoint validates input, sends through Resend, and handles failures', async t => {
  const originalFetch = globalThis.fetch
  const originalEnv = { RESEND_API_KEY: process.env.RESEND_API_KEY, RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL, CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL }
  try {
    process.env.RESEND_API_KEY = 'test-key'
    process.env.RESEND_FROM_EMAIL = 'Portfolio <contact@example.com>'
    process.env.CONTACT_TO_EMAIL = 'owner@example.com'
    let calls = 0
    globalThis.fetch = async (url, options) => {
      calls++
      assert.equal(url, 'https://api.resend.com/emails')
      const payload = JSON.parse(options.body)
      assert.equal(payload.reply_to, valid.email)
      assert.equal(payload.from, process.env.RESEND_FROM_EMAIL)
      assert.deepEqual(payload.to, ['owner@example.com'])
      assert.ok(payload.text.includes(valid.message))
      assert.equal(options.headers.Authorization, 'Bearer test-key')
      return Response.json({ id: 'message-id' })
    }
    await t.test('valid message is accepted', async () => {
      const response = await POST(request(valid))
      assert.equal(response.status, 200)
      assert.deepEqual(await response.json(), { success: true })
      assert.equal(calls, 1)
    })
    await t.test('invalid input and honeypot do not call provider', async () => {
      for (const body of [null, [], {}, { ...valid, email: 'invalid' }, { ...valid, message: ' ' }, { ...valid, name: 'a\nb' }]) {
        assert.equal((await POST(request(body))).status, 400)
      }
      assert.equal((await POST(request({ ...valid, website: 'spam' }))).status, 200)
      assert.equal(calls, 1)
    })
    await t.test('malformed JSON is rejected', async () => {
      assert.equal((await POST(new Request('http://localhost', { method: 'POST', body: '{' }))).status, 400)
    })
    await t.test('missing configuration returns 503', async () => {
      delete process.env.RESEND_API_KEY
      assert.equal((await POST(request(valid))).status, 503)
      process.env.RESEND_API_KEY = 'test-key'
    })
    await t.test('provider rejection never claims success', async () => {
      globalThis.fetch = async () => Response.json({ error: 'rejected' }, { status: 403 })
      assert.equal((await POST(request(valid))).status, 502)
      globalThis.fetch = async () => Response.json({})
      assert.equal((await POST(request(valid))).status, 502)
      globalThis.fetch = async () => { throw new Error('Network failure') }
      assert.equal((await POST(request(valid))).status, 502)
    })
  } finally {
    globalThis.fetch = originalFetch
    for (const [key, value] of Object.entries(originalEnv)) {
      if (value === undefined) delete process.env[key]
      else process.env[key] = value
    }
  }
})
