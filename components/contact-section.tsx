'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    const honeypot = formData.get('website') as string

    const form = e.currentTarget
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website: honeypot }),
        signal: AbortSignal.timeout(15000),
      })
      const result = await response.json()
      if (!response.ok || result.success !== true) throw new Error('Delivery failed')
      setSubmitStatus('success')
      setFormMessage('')
      form.reset()
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
      <section id="contact" className="contact-section max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="contact-intro">
        <h2 className="section-heading text-3xl font-bold tracking-tight mb-4"><span className="section-index">04 / CONTACT</span>Let&apos;s work together.</h2>
        <p className="text-lg text-slate-600 mb-12">
          Interested in discussing an opportunity? Send me a message or reach out directly.
        </p>

        <div className="contact-direct">
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Direct Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <a
                  href="mailto:abdallah.yehya02@gmail.com"
                  className="text-lg text-slate-900 hover:text-slate-600 transition-colors font-medium break-all"
                >
                  abdallah.yehya02@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Phone</p>
                <a
                  href="tel:+201288728317"
                  className="text-lg text-slate-900 hover:text-slate-600 transition-colors font-medium"
                >
                  +20 128 872 8317
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/abdallah-yehya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-slate-900 hover:text-slate-600 transition-colors font-medium"
                >
                  linkedin.com/in/abdallah-yehya
                </a>
              </div>
            </div>
          </div>

        </div>
        </div>
          <form onSubmit={handleSubmit} className="contact-form space-y-4" aria-busy={isSubmitting}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                Name
              </label>
              <input
                id="name"
                autoComplete="name"
                name="name"
                type="text"
                required
                maxLength={100}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                Email
              </label>
              <input
                id="email"
                autoComplete="email"
                name="email"
                type="email"
                required
                maxLength={100}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                maxLength={1000}
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent resize-none"
                placeholder="Tell me about your opportunity..."
              />
            </div>

            {/* Honeypot field */}
            <input
              type="text"
              name="website"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {submitStatus === 'success' && (
              <p role="status" className="text-green-600 font-medium">
                Thanks! Your message was sent successfully. I’ll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p role="alert" className="text-red-600 font-medium">
                Your message could not be sent. Please try again or email me at abdallah.yehya02@gmail.com. Your message is still here.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 disabled:bg-slate-400 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
      </section>

  )
}
