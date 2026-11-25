'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'
import { cvs } from '@/lib/portfolio-data'
import { email, profiles } from '@/lib/site'

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
    <section id="contact" className="section container contact" aria-labelledby="contact-heading">
      <div className="contact-intro">
        <h2 id="contact-heading">Contact and CV</h2>
        <p className="section-lead">Hiring for an AI, data or full-stack role? Send a message, or reach me directly.</p>
        <dl className="contact-direct">
          <div><dt>Email</dt><dd><a href={`mailto:${email}`}>{email}</a></dd></div>
          <div><dt>Phone</dt><dd><a href="tel:+201288728317">+20 128 872 8317</a></dd></div>
          <div><dt>LinkedIn</dt><dd><a href={profiles.linkedin} target="_blank" rel="me noopener noreferrer">linkedin.com/in/abdallah-yehya</a></dd></div>
        </dl>
        <div id="cv" className="cv-downloads">
          <h3>Download a CV</h3>
          <ul>
            {cvs.map(cv => <li key={cv.href}><a href={cv.href} download className="button button-secondary"><Download size={16} aria-hidden="true" /> {cv.label} (PDF)</a></li>)}
          </ul>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contact-form" aria-busy={isSubmitting}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" autoComplete="name" name="name" type="text" required maxLength={100} placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" autoComplete="email" name="email" type="email" required maxLength={100} placeholder="your@email.com" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required maxLength={1000} value={formMessage}
            onChange={(e) => setFormMessage(e.target.value)} placeholder="Tell me about the role" />
        </div>

        {/* Honeypot field */}
        <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

        {submitStatus === 'success' && (
          <p role="status" className="form-status form-status-ok">Thanks! Your message was sent. I’ll get back to you soon.</p>
        )}
        {submitStatus === 'error' && (
          <p role="alert" className="form-status form-status-error">
            Your message could not be sent. Please try again or email me at {email}. Your message is still here.
          </p>
        )}

        <button type="submit" disabled={isSubmitting} className="button button-primary">
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </section>
  )
}
