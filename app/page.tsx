'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown, Send } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')

  const projects = [
    {
      id: 'jobhunt',
      title: 'JobHunt',
      subtitle: 'Autonomous Job Discovery Agent',
      description:
        'An autonomous agent that discovers and curates relevant job opportunities daily, analyzing market trends and matching positions to your profile.',
      technologies: ['AI Agents', 'LLMs', 'Job APIs', 'Next.js'],
      color: 'from-blue-50 to-indigo-50',
      accent: 'border-blue-200',
    },
    {
      id: 'fairprice',
      title: 'Fair Price Egypt',
      subtitle: 'Technology Pricing Intelligence',
      description:
        'An AI-driven product that estimates and predicts technology prices across Egyptian markets using data analysis and market intelligence.',
      technologies: ['Data Analysis', 'ML Models', 'Price Forecasting', 'APIs'],
      color: 'from-amber-50 to-orange-50',
      accent: 'border-amber-200',
    },
    {
      id: 'wellness',
      title: 'AI Wellness Egy',
      subtitle: 'AI-Powered Wellness Platform',
      description:
        'A wellness platform leveraging AI to provide personalized insights, mood tracking, and health recommendations with user consent and privacy by design.',
      technologies: ['AI/ML', 'User Profiles', 'Mood Analytics', 'Privacy'],
      color: 'from-emerald-50 to-teal-50',
      accent: 'border-emerald-200',
    },
    {
      id: 'nl2sql',
      title: 'NL2SQL Analytics Platform',
      subtitle: 'Agentic Database Query System',
      description:
        'A deployed agentic system that translates natural-language questions into executable SQL queries across multi-table databases, with self-correction and metadata-driven routing.',
      technologies: ['NL2SQL', 'LLMs', 'PostgreSQL', 'Next.js', 'Supabase'],
      color: 'from-purple-50 to-pink-50',
      accent: 'border-purple-200',
    },
    {
      id: 'smartschool',
      title: 'Smart School',
      subtitle: 'End-to-End Student Monitoring System (Grade: A)',
      description:
        'A graduation project applying deep learning for student monitoring: face recognition via Siamese networks, liveness detection to prevent spoofing, violence detection for safety, and uniform compliance classification.',
      technologies: ['Deep Learning', 'Computer Vision', 'Siamese Networks', 'Flask'],
      color: 'from-rose-50 to-red-50',
      accent: 'border-rose-200',
    },
  ]

  const experience = [
    {
      title: 'Web Developer (Freelance)',
      company: 'Modern Broadcast Center',
      period: 'Jan 2025 - Mar 2025',
      description:
        'Developed and deployed a full-stack web application with product management and checkout workflows. Focused on responsive design and performance optimization for scalable deployment.',
      technologies: ['Next.js', 'Prisma ORM', 'PostgreSQL', 'Supabase'],
    },
    {
      title: 'Backend Intern',
      company: 'Trans-IT',
      period: 'Sep 2023 - Nov 2023',
      description:
        'Strengthened backend development fundamentals and database design. Built a relational database-driven Supermarket Management System covering inventory and sales operations.',
      technologies: ['SQL Server', 'Backend Development', 'Database Design'],
    },
    {
      title: 'Business Intelligence Intern',
      company: 'Coca-Cola Egypt',
      period: 'Aug 2021 - Sep 2021',
      description:
        'Applied machine learning to an AI-based analytics project, contributing to fraud detection improvements and reducing fraudulent activity by 5%. Built image classification models and interactive dashboards.',
      technologies: ['ML', 'Image Classification', 'Power BI', 'Data Analysis'],
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    const honeypot = formData.get('website') as string

    // Honeypot check
    if (honeypot) {
      setIsSubmitting(false)
      setSubmitStatus('success')
      e.currentTarget.reset()
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormMessage('')
        e.currentTarget.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Abdallah Yehya</h1>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#work"
              className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              Work
            </a>
            <a
              href="#experience"
              className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              Contact
            </a>
            <a
              href="/abdallah-yehya-cv.pdf"
              download
              className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              CV
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-slate-50">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#work"
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                Work
              </a>
              <a
                href="#experience"
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                Experience
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                Contact
              </a>
              <a
                href="/abdallah-yehya-cv.pdf"
                download
                className="block px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center animate-in fade-in duration-700">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI Engineer & Full-Stack Developer
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            I build end-to-end AI systems, agentic workflows, and full-stack applications that solve real problems. Specialized in LLMs, RAG, NL2SQL, and production-ready Python backends.
          </p>
          <p className="text-sm text-slate-500 mb-8">
            <span className="font-semibold">Location:</span> Agouza, Giza, Egypt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-center"
            >
              Let&apos;s Talk
            </a>
            <a
              href="#work"
              className="px-6 py-3 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium text-center"
            >
              View Selected Work
            </a>
          </div>
          <a
            href="/abdallah-yehya-cv.pdf"
            download
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            Download CV
            <ChevronDown size={16} />
          </a>
        </div>
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-200">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240703-WA0087-EpSPKE8v1917MgoT8U0sMizZHVjnuH.jpg"
            alt="Abdallah Yehya - AI Engineer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="text-3xl font-bold tracking-tight mb-8">About</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Computer Science graduate from Ain-Shams University with hands-on experience building end-to-end AI systems, production backends, and full-stack applications. I focus on translating complex problems into scalable technical solutions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              My work spans machine learning, deep learning, NLP, computer vision, and LLM applications—with practical experience shipping agentic workflows, RAG pipelines, NL2SQL systems, and modern web applications to production.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Core Strengths</h4>
              <p className="text-slate-600">
                End-to-end AI system design, LLMs & agentic workflows, full-stack web development, backend architecture, database reasoning, and production deployment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Technologies</h4>
              <p className="text-slate-600">
                Python, TypeScript, Next.js, FastAPI, PostgreSQL, Supabase, TensorFlow, PyTorch, and modern AI frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="text-3xl font-bold tracking-tight mb-12">Selected Work</h3>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${project.color} animate-in fade-in slide-in-from-bottom-4 duration-700`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">
                    {project.title}
                  </h4>
                  <p className="text-slate-600">{project.subtitle}</p>
                </div>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white bg-opacity-60 text-slate-700 text-sm rounded-full border border-slate-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="text-3xl font-bold tracking-tight mb-12">Experience</h3>
        <div className="space-y-8">
          {experience.map((role, index) => (
            <div
              key={index}
              className="border-l-2 border-slate-300 pl-6 pb-8 last:pb-0 animate-in fade-in slide-in-from-left-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-2 gap-4">
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{role.title}</h4>
                  <p className="text-slate-600 font-medium">{role.company}</p>
                </div>
                <span className="text-sm text-slate-500 whitespace-nowrap">{role.period}</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-3">{role.description}</p>
              <div className="flex flex-wrap gap-2">
                {role.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="text-3xl font-bold tracking-tight mb-8">Education</h3>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
          <h4 className="text-xl font-bold text-slate-900 mb-2">
            Bachelor&apos;s Degree in Computer Science
          </h4>
          <p className="text-slate-600 font-medium mb-4">
            Ain-Shams University, Cairo — 2020–2024
          </p>
          <p className="text-slate-600 mb-4">GPA: 2.95</p>
          <p className="text-slate-700">
            <span className="font-semibold">Graduation Project (Grade: A):</span> Smart School System
            — An end-to-end AI system for student monitoring and safety, combining face recognition,
            liveness detection, violence detection, and uniform compliance classification using deep
            learning.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="text-3xl font-bold tracking-tight mb-4">Let&apos;s Connect</h3>
        <p className="text-lg text-slate-600 mb-12">
          Interested in discussing an opportunity? Send me a message or reach out directly.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                Name
              </label>
              <input
                id="name"
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
              <p className="text-green-600 font-medium">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 font-medium">
                Failed to send. Please try emailing directly.
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
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-200 mt-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Abdallah Yehya. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:abdallah.yehya02@gmail.com"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/abdallah-yehya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href="/abdallah-yehya-cv.pdf"
              download
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
