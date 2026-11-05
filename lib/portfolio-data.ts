export type Project = {
  id: string; title: string; subtitle: string; summary: string; details: string[];
  technologies: string[]; github: string; demo: string;
}
export type CareerProfile = {
  slug: string; role: string; subtitle: string; heroLines: string[]; summary: string;
  focus: string[]; skills: string[]; projects: Project[]; graduationProject: Project;
  experience: { title: string; company: string; period: string; details: string[]; technologies: string[]; website?: string }[];
  certificates: { title: string; issuer: string; date: string; detail?: string }[];
  cv: string;
}

export const overviewIntroduction = "I'm a Computer Science graduate building AI applications and full-stack web systems. My work spans RAG assistants, computer vision, data pipelines, and web applications with APIs and relational databases."

export const aiProfile: CareerProfile = {
  "slug": "ai-engineer",
  "role": "AI Engineer",
  "subtitle": "AI Engineer | Data Scientist",
  "heroLines": [
    "AI Engineer.",
    "Data Scientist."
  ],
  "summary": "Computer Science graduate focused on AI engineering and data science, with hands-on experience in Python, SQL, machine learning, deep learning, NLP, and computer vision. Built projects in natural-language database querying, automated job matching, and student identification and safety monitoring. Applies data preprocessing, model evaluation, and LLM workflows to solve practical problems.",
  "focus": [
    "Machine Learning",
    "LLM Applications",
    "RAG",
    "Computer Vision"
  ],
  "skills": [
    "Programming and Analytics: Python, SQL, pandas, NumPy, statistics, Power BI.",
    "Machine Learning and Deep Learning: scikit-learn, TensorFlow, PyTorch, NLP, computer vision, feature engineering, model evaluation.",
    "Generative AI: LLMs, AI agents, RAG, prompt engineering, embeddings, semantic search.",
    "Data and Automation: web scraping, n8n, PostgreSQL, pgvector.",
    "AI Engineering Tools: Hugging Face, FastAPI, Docker, Git/GitHub.",
    "Advanced AI Training: GANs, multimodal AI, MLOps, AWS."
  ],
  "projects": [
    {
      "id": "nl2sql",
      "title": "Agentic NL2SQL Analytics Platform",
      "subtitle": "Natural-Language Analytics and Schema RAG",
      "summary": "Developed an agentic AI pipeline combining LLM-based question understanding, SQL generation, self-correction, and natural-language answers.",
      "details": [
        "Built a schema-based retrieval-augmented generation (RAG) workflow that grounds SQL generation in relevant table and column descriptions, relationships, and business-metric definitions.",
        "Implemented hybrid metadata retrieval with lexical matching and optional embedding-based similarity search using pgvector.",
        "Designed an AI correction loop that diagnoses failed queries using validation errors, execution feedback, and previous attempts before generating a revised query."
      ],
      "technologies": [
        "LLMs",
        "RAG",
        "PostgreSQL",
        "pgvector"
      ],
      "github": "https://github.com/AbdallahYehya1/NL2SQL",
      "demo": "https://nl-2-sql-seven.vercel.app/"
    },
    {
      "id": "jobhunt",
      "title": "JobHunt",
      "subtitle": "AI-Assisted Job Matching Agent",
      "summary": "Built an AI-assisted job-discovery and matching agent that evaluates job requirements against a structured profile of skills, experience, and projects.",
      "details": [
        "Combined weighted relevance scoring with LLM review of top matches to rank opportunities and explain strengths, skill gaps, and uncertainties.",
        "Implemented structured LLM outputs, bounded score adjustments, and Gemini-to-Groq fallback, preserving deterministic scoring when AI review is unavailable."
      ],
      "technologies": [
        "AI Agents",
        "LLMs",
        "Gemini",
        "Groq"
      ],
      "github": "https://github.com/AbdallahYehya1/JobHunt",
      "demo": "https://job-hunt-pilot.vercel.app/"
    },
    {
      "id": "wellness",
      "title": "AI Wellness Egypt",
      "subtitle": "RAG Wellness Assistant Prototype",
      "summary": "Developed an Arabic/English RAG wellness assistant prototype that retrieves relevant knowledge passages and generates responses with source citations.",
      "details": [
        "Integrated a Groq LLM provider with retrieved context, conversation history, and structured response validation.",
        "Implemented safety-aware generation controls, including risk screening, citation verification, and controlled fallback responses.",
        "Created multilingual retrieval evaluation cases covering Egyptian Arabic, mixed-language queries, and follow-up questions."
      ],
      "technologies": [
        "RAG",
        "Groq",
        "Arabic / English",
        "Retrieval Evaluation"
      ],
      "github": "https://github.com/AbdallahYehya1/AI-WellnessEgy",
      "demo": "https://ai-wellness-egy.vercel.app/"
    },
    {
      "id": "fairprice",
      "title": "Fair Price Egypt",
      "subtitle": "Image Search and Web Scraping",
      "summary": "Implemented image-based product search using pretrained CLIP ViT-B/32 to match user photos with product-description embeddings.",
      "details": [
        "Applied cosine-similarity ranking and category filtering to suggest relevant products for user confirmation.",
        "Developed Python web scrapers to extract product names, prices, specifications, and availability from Egyptian retailer pages.",
        "Normalized product attributes and prices, removed duplicates, and validated scraped records before exporting structured JSON/CSV datasets."
      ],
      "technologies": [
        "CLIP ViT-B/32",
        "Embeddings",
        "Python",
        "Web Scraping"
      ],
      "github": "https://github.com/AbdallahYehya1/FairPriceEgypt",
      "demo": ""
    }
  ],
  "experience": [
    {
      "title": "Business Intelligence Intern",
      "company": "Coca-Cola Egypt",
      "period": "Aug 2021 - Sep 2021",
      "details": [
        "Applied machine learning techniques to an analytics project supporting fraud detection.",
        "Built and evaluated an image classification model to recognize product types, including data preprocessing and feature extraction.",
        "Analyzed structured datasets and created interactive Power BI dashboards to support business decisions."
      ],
      "technologies": [
        "Machine Learning",
        "Image Classification",
        "Power BI",
        "Data Analysis"
      ]
    }
  ],
  "certificates": [
    {
      "title": "AI Advanced Diploma (150 Hours)",
      "issuer": "Instant Software Solutions",
      "date": "27 October 2026",
      "detail": "Completed 150 hours of hands-on training covering AI agents, workflow automation with n8n, large language models, retrieval-augmented generation (RAG), vector databases, GANs, multimodal AI, and MLOps."
    },
    {
      "title": "Practical Machine Learning for Data Scientists",
      "issuer": "Udemy",
      "date": "March 2026"
    },
    {
      "title": "Python for Data Science and Machine Learning",
      "issuer": "Udemy",
      "date": "February 2026"
    }
  ],
  "cv": "/Abdallah_Yehya_AI_Data_Science_CV.pdf",
  "graduationProject": {
    "id": "smartschool",
    "title": "Smart School System",
    "subtitle": "Graduation Project | Grade: A",
    "summary": "Implemented one-shot face recognition using a Siamese network with MobileNetV2 feature extraction.",
    "details": [
      "Integrated liveness detection using MobileNetV2 and an RNN to detect spoofing attempts during attendance.",
      "Built violence detection using DenseNet-121 and an LSTM to analyze video sequences and trigger alerts.",
      "Implemented supervised uniform-compliance classification to identify whether students met school uniform requirements."
    ],
    "technologies": [
      "Computer Vision",
      "MobileNetV2",
      "DenseNet-121",
      "RNN / LSTM"
    ],
    "github": "",
    "demo": ""
  }
}

export const softwareProfile: CareerProfile = {
  "slug": "software-engineer",
  "role": "Software Engineer",
  "subtitle": "Software Engineer | Full-Stack Developer",
  "heroLines": [
    "Software Engineer.",
    "Full-Stack Developer."
  ],
  "summary": "Computer Science graduate with hands-on experience developing full-stack web applications, REST APIs, and relational database systems. Builds applications using TypeScript, Next.js, Python, FastAPI, and PostgreSQL, with project work spanning authentication, product management, data processing, and third-party integrations.",
  "focus": [
    "Full-Stack Development",
    "REST APIs",
    "Relational Databases",
    "Automated Testing"
  ],
  "skills": [
    "Programming: Python, TypeScript, JavaScript, SQL; basic Java, C++, C#.",
    "Frontend: React, Next.js, HTML/CSS, Tailwind CSS, responsive and RTL layouts.",
    "Backend: FastAPI, Flask, REST APIs, Supabase, authentication and authorization.",
    "Databases: PostgreSQL, SQL Server, SQLite, Prisma, SQLAlchemy.",
    "CS Fundamentals: object-oriented programming, data structures, algorithms, relational database design.",
    "Tools and Testing: Git/GitHub, Docker, GitHub Actions, CI/CD, unit and integration testing."
  ],
  "projects": [
    {
      "id": "nl2sql",
      "title": "NL2SQL Analytics Platform",
      "subtitle": "Full-Stack Analytics Application",
      "summary": "Built and deployed a full-stack analytics application using Next.js, TypeScript, and PostgreSQL, with dataset management, query results, and execution history.",
      "details": [
        "Implemented SQL/CSV ingestion with file validation, transactional imports, and isolated PostgreSQL schemas for each dataset.",
        "Enforced session-based dataset ownership and query safeguards, including SQL validation, read-only roles, timeouts, and row limits.",
        "Wrote unit and integration tests covering file validation, dataset isolation, access controls, and query failures."
      ],
      "technologies": [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "SQL / CSV Ingestion"
      ],
      "github": "https://github.com/AbdallahYehya1/NL2SQL",
      "demo": "https://nl-2-sql-seven.vercel.app/"
    },
    {
      "id": "jobhunt",
      "title": "JobHunt",
      "subtitle": "Job Data Pipeline and Application Tracking",
      "summary": "Built a Python pipeline that collects job listings from ATS APIs, remote-job feeds, and imported job-alert emails.",
      "details": [
        "Implemented data normalization, canonical URL matching, and staged deduplication while preserving source evidence and application history.",
        "Designed a SQLite persistence layer using SQLAlchemy and Alembic migrations for job listings, source status, and application tracking.",
        "Implemented retries and isolated source failures, with scheduled runs, structured logs, and automated pipeline tests."
      ],
      "technologies": [
        "Python",
        "SQLite",
        "SQLAlchemy",
        "Alembic"
      ],
      "github": "https://github.com/AbdallahYehya1/JobHunt",
      "demo": "https://job-hunt-pilot.vercel.app/"
    },
    {
      "id": "wellness",
      "title": "AI Wellness Egypt",
      "subtitle": "Full-Stack Wellness Application Prototype",
      "summary": "Built a full-stack wellness application prototype using Next.js, TypeScript, FastAPI, and PostgreSQL.",
      "details": [
        "Implemented Supabase authentication, protected routes, consent-based onboarding, and user profile management.",
        "Developed validated REST APIs for mood check-ins and history, with access restricted to each user's own records.",
        "Added database migrations, audit logging, automated tests, and Docker development workflows."
      ],
      "technologies": [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Supabase Auth"
      ],
      "github": "https://github.com/AbdallahYehya1/AI-WellnessEgy",
      "demo": "https://ai-wellness-egy.vercel.app/"
    },
    {
      "id": "fairprice",
      "title": "Fair Price Egypt",
      "subtitle": "Bilingual Price-Comparison Prototype",
      "summary": "Built a bilingual Arabic/English price-comparison prototype using Next.js, TypeScript, PostgreSQL, and Drizzle ORM.",
      "details": [
        "Designed relational models for products, variants, retailer listings, and append-only price observations.",
        "Implemented product search, filtering, price-history views, VAT-aware comparisons, and responsive RTL layouts.",
        "Added validated, rate-limited APIs and data-import pipelines with quality checks and automated tests."
      ],
      "technologies": [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "RTL Layouts"
      ],
      "github": "https://github.com/AbdallahYehya1/FairPriceEgypt",
      "demo": ""
    }
  ],
  "experience": [
    {
      "title": "Web Developer (Freelance)",
      "company": "Modern Broadcast Center",
      "period": "Jan 2025 - Mar 2025",
      "details": [
        "Developed and deployed a full-stack web application using Next.js, Prisma ORM, and PostgreSQL through Supabase.",
        "Implemented database-backed product management and checkout workflows.",
        "Built responsive layouts and optimized application performance across devices."
      ],
      "technologies": [
        "Next.js",
        "Prisma ORM",
        "PostgreSQL",
        "Supabase"
      ],
      "website": "https://mbcegypt.com"
    },
    {
      "title": "Backend Intern",
      "company": "Trans-IT",
      "period": "Sep 2023 - Nov 2023",
      "details": [
        "Designed and managed relational databases using SQL Server for a Supermarket Management System.",
        "Developed backend functionality supporting inventory management and sales operations.",
        "Applied object-oriented programming, data structures, and algorithms to backend development."
      ],
      "technologies": [
        "SQL Server",
        "Database Design",
        "Backend Development"
      ]
    }
  ],
  "certificates": [],
  "cv": "/Abdallah_Yehya_Software_Engineering_CV.pdf",
  "graduationProject": {
    "id": "smartschool",
    "title": "Smart School System",
    "subtitle": "Graduation Project | Grade: A",
    "summary": "Developed a Python application using Flask and SQL Server for student identification, attendance, and safety monitoring.",
    "details": [
      "Integrated student identity verification and liveness checks into the attendance workflow.",
      "Connected safety-monitoring components for violence detection and uniform compliance within the application."
    ],
    "technologies": [
      "Python",
      "Flask",
      "SQL Server",
      "Application Integration"
    ],
    "github": "",
    "demo": ""
  }
}
