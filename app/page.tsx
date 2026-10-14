'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown, Send, Eye, Download } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formMessage, setFormMessage] = useState('')
  const [openProject, setOpenProject] = useState<string | null>(null)
  const [openExperience, setOpenExperience] = useState<number | null>(null)
  const [isEducationOpen, setIsEducationOpen] = useState(false)

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
  const subject = encodeURIComponent(`Portfolio message from ${name}`)
  const body = encodeURIComponent(`${message}\n\nReply to: ${email}`)
  window.location.href = `mailto:abdallah.yehya02@gmail.com?subject=${subject}&body=${body}`
  setSubmitStatus('success')
  setFormMessage('')
  e.currentTarget.reset()
  }
  } catch {
  const subject = encodeURIComponent(`Portfolio message from ${name}`)
  const body = encodeURIComponent(`${message}\n\nReply to: ${email}`)
  window.location.href = `mailto:abdallah.yehya02@gmail.com?subject=${subject}&body=${body}`
  setSubmitStatus('success')
  setFormMessage('')
  e.currentTarget.reset()
  } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Abdallah Yehya Soliman</h1>

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
              <div className="grid grid-cols-2 gap-2">
                <a href="/abdallah-yehya-cv.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-2 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium text-center">View CV</a>
                <a href="/abdallah-yehya-cv.pdf" download className="px-3 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium text-center">Download</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center animate-in fade-in duration-700">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI Engineer & Data Scientist  
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            I am an entry-level data scientist and AI engineer building practical projects across machine learning, deep learning, NLP, computer vision, and LLM applications. I enjoy learning by turning real problems into clear, working solutions.
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
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/abdallah-yehya-cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-300 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium">
              <Eye size={16} aria-hidden="true" /> View CV
            </a>
            <a href="/abdallah-yehya-cv.pdf" download className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium">
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
          </div>
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

      {/* Selected Work Section */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-700 mb-4">SELECTED WORK</p>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">I build systems that make difficult work feel simple.</h3>
          <p className="text-lg text-slate-600 leading-relaxed">These projects are not just demos. Each one started with a messy, real-world problem and became an exercise in making AI reliable, useful, and safe enough to ship.</p>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {projects.map((project, index) => {
            const isOpen = openProject === project.id
            return (
              <article key={project.id} className="py-6">
                <button type="button" onClick={() => setOpenProject(isOpen ? null : project.id)} aria-expanded={isOpen} className="w-full text-left flex items-center justify-between gap-5 group">
                  <span className="flex items-start gap-5">
                    <span className="text-sm font-bold text-slate-400 pt-1">0{index + 1}</span>
                    <span>
                      <span className="block text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{project.title}</span>
                      <span className="block text-slate-600 mt-1">{project.subtitle}</span>
                    </span>
                  </span>
                  <ChevronDown className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {isOpen && (
                  <div className="mt-7 ml-9 md:ml-12 max-w-4xl animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="grid gap-6 md:grid-cols-3 mb-7">
                      <div><h5 className="text-xs font-bold tracking-[0.18em] text-blue-700 mb-2">MAIN IDEA</h5><p className="text-slate-700 leading-relaxed">{project.mainIdea}</p></div>
                      <div><h5 className="text-xs font-bold tracking-[0.18em] text-blue-700 mb-2">THE PROBLEM</h5><p className="text-slate-700 leading-relaxed">{project.problem}</p></div>
                      <div><h5 className="text-xs font-bold tracking-[0.18em] text-blue-700 mb-2">THE SOLUTION</h5><p className="text-slate-700 leading-relaxed">{project.solution}</p></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">{project.technologies.map((tech) => <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-semibold">{tech}</span>)}</div>
                    <div className="flex flex-wrap gap-4 text-sm font-semibold">
                      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">View GitHub repo ↗</a>}
                      {project.deployed && <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">Open deployed project ↗</a>}
                      {!project.github && !project.deployed && <span className="text-slate-500 font-normal">GitHub and deployment links will appear here once added</span>}
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="text-3xl font-bold tracking-tight mb-12">Experience</h3>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {experience.map((role, index) => {
            const isOpen = openExperience === index
            return <div key={index} className="py-6">
              <button type="button" onClick={() => setOpenExperience(isOpen ? null : index)} aria-expanded={isOpen} className="w-full text-left flex items-center justify-between gap-4 group">
                <span><span className="block text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{role.title}</span><span className="block text-slate-600 font-medium mt-1">{role.company}</span></span>
                <span className="flex items-center gap-4"><span className="text-sm text-slate-500 whitespace-nowrap">{role.period}</span><ChevronDown className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" /></span>
              </button>
              {isOpen && <div className="mt-5 max-w-3xl pl-0 animate-in fade-in slide-in-from-top-2 duration-300"><p className="text-slate-600 leading-relaxed mb-4">{role.description}</p><div className="flex flex-wrap gap-2 mb-4">{role.technologies.map((tech) => <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium">{tech}</span>)}</div>{role.website && <a href={role.website} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-700 hover:underline">Visit mbcegypt.com ↗</a>}</div>}
            </div>
          })}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <h3 className="text-3xl font-bold tracking-tight mb-8">Education</h3>
        <div className="border-y border-slate-200">
          <button type="button" onClick={() => setIsEducationOpen(!isEducationOpen)} aria-expanded={isEducationOpen} className="w-full text-left py-6 flex items-center justify-between gap-4 group">
            <span><span className="block text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Bachelor&apos;s Degree in Computer Science</span><span className="block text-slate-600 font-medium mt-1">Ain-Shams University, Cairo — 2020–2024</span></span>
            <ChevronDown className={`shrink-0 transition-transform ${isEducationOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {isEducationOpen && <div className="pb-7 max-w-3xl animate-in fade-in slide-in-from-top-2 duration-300"><p className="text-slate-600 mb-4">GPA: 2.95</p><p className="text-slate-700"><span className="font-semibold">Graduation Project (Grade: A):</span> Smart School System — An end-to-end AI system for student monitoring and safety, combining face recognition, liveness detection, violence detection, and uniform compliance classification using deep learning.</p></div>}
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
                Your email app should open with the message ready to send. If it doesn&apos;t, email me directly.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 font-medium">
                Could not open your email app. Please email me directly at abdallah.yehya02@gmail.com.
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
