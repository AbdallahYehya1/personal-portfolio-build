'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Send, Eye, Download, ArrowUpRight, MapPin, Code2, ArrowRight, Plus, Minus, GraduationCap } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')
  const [openProject, setOpenProject] = useState<string | null>(null)

  const projects = [
    {
      id: 'jobhunt',
      title: 'JobHunt',
      subtitle: 'Autonomous Job Discovery Agent',
      mainIdea: 'An automated job-discovery agent that searches multiple sources every morning and filters and ranks opportunities based on my profile.',
      problem: 'Searching for jobs manually means repeatedly checking different websites, removing irrelevant or closed positions, interpreting remote locations, and comparing listings against my background.',
      solution: 'I built a local automated pipeline that collects jobs from Greenhouse/Ashby boards, Remote OK, Remotive, Himalayas, and We Work Remotely. It normalizes different formats, filters old and closed listings, interprets remote locations, checks relevance, and scores the remaining opportunities so I can focus on the most relevant jobs.',
      technologies: ['AI Agents', 'LLMs', 'Job APIs', 'Next.js'],
      github: 'https://github.com/AbdallahYehya1/JobHunt',
      deployed: '',
      color: 'from-blue-50 to-indigo-50',
      accent: 'border-blue-200',
    },
    {
      id: 'fairprice',
      title: 'Fair Price Egypt',
      subtitle: 'Technology Pricing Intelligence',
      mainIdea: 'A product that helps Egyptian consumers understand whether a technology product price is reasonable compared with the local market.',
      problem: 'Prices vary across Egyptian sellers, and listings may represent different variants, storage or RAM configurations, or VAT conditions. Comparing numbers alone can therefore be misleading.',
      solution: 'I built the foundation for separating products, variants, and individual market listings so the system can support fair-price estimation. It also includes photo-based product search and keeps VAT-inclusive, VAT-exclusive, and unknown prices distinct. I explored collection with Crawlee and Playwright across Egyptian retailers; the current product experience uses mock data while the collection architecture is developed.',
      technologies: ['Data Analysis', 'ML Models', 'Price Forecasting', 'APIs'],
      github: 'https://github.com/AbdallahYehya1/FairPriceEgypt',
      deployed: '',
      color: 'from-amber-50 to-orange-50',
      accent: 'border-amber-200',
    },
    {
      id: 'wellness',
      title: 'AI Wellness Egy',
      subtitle: 'AI-Powered Wellness Platform',
      mainIdea: 'A wellness application that combines a structured user experience with AI capabilities instead of treating the product as a simple chatbot.',
      problem: 'AI wellness applications can expose personal information to an AI without enough structure around authentication, consent, or how that information is handled.',
      solution: 'I built the application progressively around Authentication → Consent → Profile → Mood Check-in → Dashboard. It uses Supabase authentication and a database-backed workflow, with a structured 1–5 mood scale and backend validation that rejects unsupported client data. The AI functionality is introduced within explicit boundaries rather than acting as a medical or diagnostic system.',
      technologies: ['AI/ML', 'User Profiles', 'Mood Analytics', 'Privacy'],
      github: 'https://github.com/AbdallahYehya1/AI-WellnessEgy',
      deployed: '',
      color: 'from-emerald-50 to-teal-50',
      accent: 'border-emerald-200',
    },
    {
      id: 'nl2sql',
      title: 'NL2SQL Analytics Platform',
      subtitle: 'Agentic Database Query System',
      mainIdea: 'An agentic analytics platform that lets users ask questions about a database in natural language and receive answers without writing SQL.',
      problem: 'Manual database work requires understanding schema and writing SQL. Direct LLM-generated SQL can reference the wrong tables, fail validation, or contain unsafe operations.',
      solution: 'I built a multi-step NL2SQL pipeline that uses metadata to identify relevant tables, generates and validates SQL, and executes it in a read-only environment. When a query fails, the system uses the error and previous context to correct it and retry. It includes a metadata registry for a 20-table shop database with approximately 94,000 deterministic rows, plus isolated CSV/SQL uploads, and is deployed with Next.js, TypeScript, Supabase/PostgreSQL, and Groq.',
      technologies: ['NL2SQL', 'LLMs', 'PostgreSQL', 'Next.js', 'Supabase'],
      github: 'https://github.com/AbdallahYehya1/NL2SQL',
      deployed: '',
      color: 'from-purple-50 to-pink-50',
      accent: 'border-purple-200',
    },
    {
      id: 'arabic-sentiment',
      title: 'Arabic Sentiment Analysis',
      subtitle: 'NLP Classification Pipeline',
      mainIdea: 'An end-to-end NLP system for classifying sentiment in Arabic text.',
      problem: 'Arabic language data needs specialized preprocessing, including tokenization, lemmatization, stop-word handling, augmentation, and emoji polarity interpretation.',
      solution: 'I built and evaluated a complete pipeline with RNN, LSTM, and Transformer-based models, comparing how different architectures handled sentiment classification across prepared Arabic datasets.',
      technologies: ['NLP', 'Arabic Text', 'RNN', 'LSTM', 'Transformers'],
      github: '',
      deployed: '',
      color: 'from-cyan-50 to-sky-50',
      accent: 'border-cyan-200',
    },
    {
      id: 'newsgroup',
      title: 'News Group Classification',
      subtitle: 'Classical NLP Text Classification',
      mainIdea: 'A text classification pipeline that assigns news content to its relevant group.',
      problem: 'Raw text is noisy and difficult for classical machine-learning models to use directly, so meaningful features and consistent evaluation are required.',
      solution: 'I applied NLTK preprocessing and data augmentation, extracted TF-IDF features, trained Logistic Regression, SVM, and KNN models, and evaluated them with Accuracy, Precision, Recall, and F1-score.',
      technologies: ['NLTK', 'Scikit-learn', 'TF-IDF', 'SVM'],
      github: '',
      deployed: '',
      color: 'from-slate-50 to-zinc-50',
      accent: 'border-slate-200',
    },
    {
      id: 'movies',
      title: 'Movies Popularity Prediction',
      subtitle: 'Machine Learning Regression',
      mainIdea: 'A regression system for predicting movie popularity from structured data.',
      problem: 'Popularity depends on multiple features with different scales and relationships, so the pipeline needs careful preprocessing, feature engineering, and model comparison.',
      solution: 'I developed a Scikit-learn regression workflow and compared Linear Regression, Ridge Regression, and Random Forest models to understand which approach best captured the available patterns.',
      technologies: ['Scikit-learn', 'Regression', 'Feature Engineering', 'Random Forest'],
      github: '',
      deployed: '',
      color: 'from-fuchsia-50 to-pink-50',
      accent: 'border-fuchsia-200',
    },
    {
      id: 'smartschool',
      title: 'Smart School',
      subtitle: 'End-to-End Student Monitoring System (Grade: A)',
      mainIdea: 'A school management system exploring how machine learning and computer vision could automate attendance and monitor specific activities.',
      problem: 'Traditional attendance requires manual work, while confirming presence and detecting events such as violence from images or video requires more than a simple image classifier.',
      solution: 'I built a Python and SQL Server application with several computer-vision models: Siamese-network one-shot face recognition using MobileNetV2 features, MobileNetV2 with an RNN for liveness detection, and DenseNet-121 with an LSTM for temporal violence detection. The project received Grade A as my graduation project.',
      technologies: ['Deep Learning', 'Computer Vision', 'Siamese Networks', 'Flask'],
      github: '',
      deployed: '',
      color: 'from-rose-50 to-red-50',
      accent: 'border-rose-200',
    },
  ]

  const experience = [
    {
      title: 'Web Developer (Freelance)',
  company: 'Modern Broadcast Center',
  website: 'https://mbcegypt.com',
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
    <div className="portfolio min-h-screen text-slate-900">
      <a href="#main" className="skip-link">Skip to content</a>
      {/* Navigation */}
      <nav className="site-nav sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#main" className="wordmark"><span className="monogram">AY<span>.</span></span><span>Abdallah Yehya Soliman<span className="wordmark-caption">AI ENGINEER & DATA SCIENTIST</span></span></a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu" aria-expanded={isMenuOpen} aria-controls="mobile-menu"
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
          <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-slate-50">
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
              <div className="grid grid-cols-2 gap-2">
                <a href="/abdallah-yehya-cv.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-2 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium text-center">View CV</a>
                <a href="/abdallah-yehya-cv.pdf" download className="px-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium text-center">Download</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main id="main">
      <section className="hero max-w-5xl mx-auto px-6">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</p>
          <p className="hero-intro">Hi, I’m Abdallah.</p>
          <h1>AI engineer.<br />Data scientist.<br /><span>Problem solver.</span></h1>

          <p className="hero-description">I am an entry-level data scientist and AI engineer building practical projects across machine learning, deep learning, NLP, computer vision, and LLM applications. I enjoy learning by turning real problems into clear, working solutions.</p>
          <p className="location"><MapPin size={15} aria-hidden="true" /> Agouza, Giza, Egypt</p>
          <div className="hero-actions">
            <a href="#work" className="primary-link">View my work <ArrowRight size={18} aria-hidden="true" /></a>
            <a href="#contact" className="secondary-link">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="cv-links">
            <a href="/abdallah-yehya-cv.pdf" target="_blank" rel="noopener noreferrer"><Eye size={15} aria-hidden="true" /> View CV</a>
            <a href="/abdallah-yehya-cv.pdf" download><Download size={15} aria-hidden="true" /> Download CV</a>
            <a href="https://github.com/AbdallahYehya1" target="_blank" rel="noopener noreferrer"><Code2 size={15} aria-hidden="true" /> GitHub</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-backdrop" aria-hidden="true" />
          <div className="portrait">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240703-WA0087-EpSPKE8v1917MgoT8U0sMizZHVjnuH.jpg" alt="Abdallah Yehya - AI Engineer" fill className="object-cover" priority sizes="(max-width: 768px) 90vw, 400px" />
          </div>
          <div className="portrait-caption"><span><strong>Abdallah Yehya Soliman</strong><small>AI Engineer & Data Scientist</small></span><span className="portrait-icon" aria-hidden="true"><Code2 size={22} /></span></div>
        </div>
      </section>
      <div className="skill-strip"><div className="max-w-5xl mx-auto px-6"><span>FOCUS AREAS</span><span>Machine Learning</span><span>LLM Applications</span><span>Computer Vision</span><span>Full-stack Engineering</span></div></div>

      {/* Selected Work Section */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="work-heading mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 mb-4">01 / SELECTED WORK</p>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Selected work<span className="blue-period">.</span></h3>
          <p className="work-lead">I build systems that make difficult work feel simple.</p>
          <p className="text-lg text-slate-600 leading-relaxed">These projects are not just demos. Each one started with a messy, real-world problem and became an exercise in making AI reliable, useful, and safe enough to ship.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => {
            const isOpen = openProject === project.id
            return (
              <article key={project.id} className={`project-row ${isOpen ? 'is-open' : ''}`}>
                <button type="button" onClick={() => setOpenProject(isOpen ? null : project.id)} aria-expanded={isOpen} aria-controls={`project-${project.id}`} className="project-toggle">
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="project-title"><span>{project.title}</span><small>{project.subtitle}</small></span>
                  <span className="project-expand"><span>{isOpen ? 'Close details' : 'View details'}</span>{isOpen ? <Minus size={19} aria-hidden="true" /> : <Plus size={19} aria-hidden="true" />}</span>
                </button>
                <div className="project-overview">
                  <p className="project-summary">{project.mainIdea}</p>
                  <div className="project-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
                  <div className="project-links">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">View GitHub repo <ArrowUpRight size={15} aria-hidden="true" /></a>}
                    {project.deployed && <a href={project.deployed} target="_blank" rel="noopener noreferrer">Open deployed project <ArrowUpRight size={15} aria-hidden="true" /></a>}
                  </div>
                </div>
                <div id={`project-${project.id}`} hidden={!isOpen} className="project-details">
                  <div className="project-case-study">
                    <div><h4>The problem</h4><p>{project.problem}</p></div>
                    <div><h4>The solution</h4><p>{project.solution}</p></div>
                  </div>
                  {!project.github && !project.deployed && <p className="project-pending">GitHub and deployment links will appear here once added</p>}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="text-3xl font-bold tracking-tight mb-8"><span className="section-index">02 / ABOUT</span>Engineering with purpose.</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I am a Computer Science graduate and AI engineer who enjoys taking ambiguous, high-friction problems and turning them into dependable products. My work sits at the intersection of machine learning, backend engineering, and thoughtful user experience: I do not stop at a model or a prototype; I think through the data, the failure cases, the security boundaries, and how a real person will use the result.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I have built agentic job-search workflows, natural-language database systems, computer-vision models for school safety, market-intelligence tools, and privacy-aware wellness applications. These projects taught me to make AI useful rather than ornamental: ground outputs in metadata, validate what the system is allowed to do, design for uncertain data, and keep the product understandable. I am now looking for opportunities where I can contribute across the full lifecycle—from problem framing and system design to implementation, evaluation, and deployment.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Core Strengths</h4>
              <p className="text-slate-600">
                Practical machine learning, LLM and agentic workflows, full-stack web development, backend foundations, database reasoning, and collaborative problem solving.
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

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="text-3xl font-bold tracking-tight mb-12"><span className="section-index">03 / EXPERIENCE</span>Experience.</h3>
        <div className="experience-timeline">
          {experience.map((role) => (
            <article key={role.company} className="experience-entry">
              <div className="experience-meta"><span className="timeline-dot" aria-hidden="true" /><p>{role.period}</p><span>{role.company}</span></div>
              <div className="experience-content"><h4>{role.title}</h4><p>{role.description}</p><div className="project-tags">{role.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>{role.website && <a className="text-link" href={role.website} target="_blank" rel="noopener noreferrer">Visit mbcegypt.com <ArrowUpRight size={15} aria-hidden="true" /></a>}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="text-3xl font-bold tracking-tight mb-8"><span className="section-index">04 / EDUCATION</span>A solid foundation.</h3>
        <div className="education-card">
          <div className="education-icon"><GraduationCap size={27} aria-hidden="true" /></div>
          <div><h4>Bachelor&apos;s Degree in Computer Science</h4><p className="education-school">Ain-Shams University, Cairo — 2020–2024</p><p className="education-gpa">GPA: 2.95 <span>Graduation Project · Grade A</span></p><p className="education-detail"><strong>Graduation Project (Grade: A):</strong> Smart School System — An end-to-end AI system for student monitoring and safety, combining face recognition, liveness detection, violence detection, and uniform compliance classification using deep learning.</p></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="contact-intro">
        <h3 className="text-3xl font-bold tracking-tight mb-4"><span className="section-index">05 / CONTACT</span>Let&apos;s work together.</h3>
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

      </main>
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
