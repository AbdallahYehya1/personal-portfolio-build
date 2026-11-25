// One portfolio, AI-first, with full-stack engineering as the way the AI work ships.
// Long-form project content lives in lib/case-studies.ts.

export const statement =
  "I build LLM systems and the full-stack apps around them, and I measure them on data they weren't tuned on."

export const availability = 'Open to AI engineering, data science and full-stack roles. Open to relocation.'

// Projects in the order the home page's Work section shows them (slugs from lib/case-studies.ts).
// Fraud Detection stays off the home page until it is finalized; it is listed on /projects.
export const workOrder = ['nl2sql', 'ai-wellness-egypt', 'jobhunt', 'fair-price-egypt']

// Order of the /projects page and of the case studies' "Next project" links. Fraud Detection is last.
export const projectsOrder = ['nl2sql', 'ai-wellness-egypt', 'jobhunt', 'smart-school', 'fair-price-egypt', 'fraud-detection']

// The results table in the hero: each number with what it measures and the data it was measured on.
export const resultsLedger = [
  {
    slug: 'nl2sql',
    project: 'Agentic NL2SQL',
    result: '29/32',
    what: 'questions answered correctly end to end',
    measuredOn: 'a held-out benchmark frozen before its first run',
  },
  {
    slug: 'ai-wellness-egypt',
    project: 'AI Wellness Egypt',
    result: '93.3%',
    what: 'retrieval hit@4, up from 28.3% with one shared index',
    measuredOn: '60 held-out English and Arabic queries',
  },
]

export type Role = {
  title: string; company: string; period: string; details: string[]; technologies: string[]; website?: string
}

// Newest first.
export const experience: Role[] = [
  {
    title: 'Web Developer (Freelance)',
    company: 'Modern Broadcast Center',
    period: 'Jan 2025 – Mar 2025',
    details: [
      'Developed and deployed a full-stack web application using Next.js, Prisma ORM and PostgreSQL through Supabase.',
      'Implemented database-backed product management and checkout workflows.',
      'Built responsive layouts and optimized application performance across devices.',
    ],
    technologies: ['Next.js', 'Prisma ORM', 'PostgreSQL', 'Supabase'],
    website: 'https://mbcegypt.com',
  },
  {
    title: 'Backend Intern',
    company: 'Trans-IT',
    period: 'Sep 2023 – Nov 2023',
    details: [
      'Designed and managed relational databases using SQL Server for a Supermarket Management System.',
      'Developed backend functionality supporting inventory management and sales operations.',
      'Applied object-oriented programming, data structures and algorithms to backend development.',
    ],
    technologies: ['SQL Server', 'Database Design', 'Backend Development'],
  },
  {
    title: 'Business Intelligence Intern',
    company: 'Coca-Cola Egypt',
    period: 'Aug 2021 – Sep 2021',
    details: [
      'Applied machine learning techniques to an analytics project supporting fraud detection.',
      'Built and evaluated an image classification model to recognize product types, including data preprocessing and feature extraction.',
      'Analyzed structured datasets and created interactive Power BI dashboards to support business decisions.',
    ],
    technologies: ['Machine Learning', 'Image Classification', 'Power BI', 'Data Analysis'],
  },
]

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  school: 'Ain Shams University',
  period: '2020 – 2024',
}

export const graduationProject = {
  title: 'Smart School System',
  label: 'Team graduation project. Grade: A',
  details: [
    'One-shot face recognition using a Siamese network with MobileNetV2 feature extraction.',
    'Liveness detection with MobileNetV2 and an RNN to catch spoofing attempts during attendance.',
    'Violence detection with DenseNet-121 and an LSTM over video sequences, triggering alerts.',
    'Uniform-compliance classification, all integrated in a Flask and SQL Server application.',
  ],
  technologies: ['Computer Vision', 'MobileNetV2', 'DenseNet-121', 'RNN / LSTM', 'Flask', 'SQL Server'],
}

export const certificates = [
  {
    title: 'AI Advanced Diploma (150 hours)',
    issuer: 'Instant Software Solutions',
    date: 'October 2026',
    detail: 'AI agents, workflow automation with n8n, large language models, RAG, vector databases, GANs, multimodal AI and MLOps.',
  },
  { title: 'Practical Machine Learning for Data Scientists', issuer: 'Udemy', date: 'March 2026' },
  { title: 'Python for Data Science and Machine Learning', issuer: 'Udemy', date: 'February 2026' },
]

export const skills = [
  { group: 'AI and machine learning', items: 'Python, PyTorch, TensorFlow, scikit-learn, gradient boosting, NLP, computer vision, feature engineering, model evaluation' },
  { group: 'LLM engineering', items: 'AI agents, RAG, structured outputs, embeddings, pgvector, prompt engineering, guardrails, Groq, Gemini, Ollama' },
  { group: 'Evaluation', items: 'Held-out benchmarks, confidence intervals, fault injection, retrieval metrics (hit@k, leakage)' },
  { group: 'Backend and data', items: 'FastAPI, Flask, REST APIs, PostgreSQL (roles, row-level security), SQL Server, SQLite, DuckDB, SQLAlchemy, Alembic, Prisma, pandas, web scraping' },
  { group: 'Frontend', items: 'TypeScript, React, Next.js, Tailwind CSS, responsive and right-to-left layouts' },
  { group: 'Tooling and testing', items: 'Git and GitHub, GitHub Actions, Docker, Vitest, pytest, Playwright, Power BI, n8n. Basic Java, C++ and C#' },
]

export const cvs = [
  { label: 'AI and data science CV', href: '/Abdallah_Yehya_AI_Data_Science_CV.pdf' },
  { label: 'Software engineering CV', href: '/Abdallah_Yehya_Software_Engineering_CV.pdf' },
]

export const languages = 'Arabic (native) and English (professional proficiency).'
