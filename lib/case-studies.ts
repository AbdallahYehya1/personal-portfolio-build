export type Metric = { value: string; label: string }

export type CaseStudy = {
  slug: string
  title: string
  tagline: string
  description: string
  context: string
  categories: ('AI engineering' | 'Data science' | 'Full-stack')[]
  metrics: Metric[]
  problem: string
  built: string[]
  evidence: string[]
  limits: string[]
  stack: string[]
  github?: string
  demo?: string
  /** Link text for the demo when it is not a straight demo of this project. */
  demoLabel?: string
  codeNote?: string
  /** Two results shown on the home page: an AI or data result, then an engineering result where one exists. */
  highlights: Metric[]
  /** The real processing steps, in order, for the "How it works" figure. */
  pipeline?: { steps: string[]; note: string }
  image?: { src: string; srcSet: string; alt: string; width: number; height: number; caption: string }
}

// Every figure below comes from the project's own repository (README, docs/EVALUATION or
// evaluation reports). Keep the denominator and the test set next to each number.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'nl2sql',
    title: 'Agentic NL2SQL Analytics Platform',
    tagline: 'Ask a PostgreSQL database questions in plain English. Every LLM-written query is validated, sandboxed and measured.',
    description:
      'Agentic NL2SQL by Abdallah Yehya: schema routing, PostgreSQL-parser validation, read-only execution and self-correction. 29/32 correct on a held-out benchmark.',
    context: 'Independent project, 2026. Live on Vercel and Supabase.',
    categories: ['AI engineering', 'Full-stack'],
    metrics: [
      { value: '29/32', label: 'answerable questions correct end to end on a frozen held-out benchmark' },
      { value: '550', label: 'automated tests in CI on PostgreSQL 16 and 17' },
      { value: '50/50', label: 'malicious SQL uploads rejected in a 74-file test corpus' },
    ],
    problem:
      'Letting people query a database in plain English is mostly an engineering problem. The model must see the right slice of a large schema, must not run harmful SQL when it reads untrusted text, and must recover from ordinary mistakes. And three hand-picked questions prove nothing.',
    built: [
      'An agentic pipeline: question analysis, schema routing, a minimal sub-schema, SQL generation, AST validation, read-only execution, bounded self-correction and a grounded answer with a full trace.',
      'Schema routing over a metadata registry (lexical scoring, foreign-key bridging, optional pgvector), so the model sees 2.2 to 2.7 tables on average out of 9 to 20.',
      "SQL validation on PostgreSQL's own parser (libpg-query) with per-dataset allow-lists for tables, schemas and functions.",
      'SQL and CSV upload into an isolated schema per dataset, each with its own read-only role and row-level security. Metadata is read back from pg_catalog, not from the file.',
      'A self-correction loop that must diagnose the real database error before repairing, capped at three attempts, and never repairs a write.',
      'A roughly 300-line OpenAI-compatible client behind a provider interface, so Groq, OpenRouter, Ollama or OpenAI work by configuration.',
      'Automatic dataset dashboards (KPIs, quality checks, relationships) computed deterministically, with AI used only to word the summary.',
    ],
    evidence: [
      '29 of 32 answerable questions correct end to end (90.6%, 95% CI 75.8 to 96.8) on a held-out benchmark frozen before its first run, over two uploaded datasets and the demo.',
      'All 8 negative questions (write requests, prompt injection, off-topic) produced no answer, and the databases were unchanged.',
      '50 of 50 malicious SQL files and 13 of 13 malformed files rejected in a 74-file upload corpus, with no residue left behind.',
      '11 of 12 deliberately broken queries repaired by the correction loop (fault injection, reported apart from natural failures).',
      '550 automated tests (397 unit, 153 integration) in GitHub Actions against PostgreSQL 16 and 17.',
      'A live question through the deployed app took 2.9 seconds end to end.',
    ],
    limits: [
      'Built for small synthetic datasets, not production ingestion.',
      'One free model and one run: small samples with wide confidence intervals.',
      'Embedding retrieval is implemented but not yet evaluated.',
    ],
    stack: ['Next.js 16', 'TypeScript', 'React 19', 'PostgreSQL 16/17', 'pgvector', 'libpg-query', 'Zod', 'Vitest', 'GitHub Actions', 'Vercel', 'Supabase', 'Groq'],
    github: 'https://github.com/AbdallahYehya1/NL2SQL',
    demo: 'https://nl-2-sql-seven.vercel.app/',
    highlights: [
      { value: '29/32', label: 'correct end to end on a frozen held-out benchmark' },
      { value: '550', label: 'automated tests in CI on PostgreSQL 16 and 17' },
    ],
    pipeline: {
      steps: ['Question in plain English', 'Question analysis', 'Schema routing', 'Minimal sub-schema', 'SQL generation', 'AST validation', 'Read-only execution', 'Answer with trace'],
      note: 'When validation or execution fails, the agent diagnoses the real error and regenerates the SQL, at most three times. A rejected write is never sent for repair.',
    },
  },
  {
    slug: 'ai-wellness-egypt',
    title: 'AI Wellness Egypt',
    tagline: 'A bilingual Arabic/English wellness assistant that answers only from cited public-health sources, behind a safety gate.',
    description:
      'AI Wellness Egypt by Abdallah Yehya: Arabic/English RAG over 610 cited passages. Domain routing lifted held-out hit@4 from 28% to 93% with zero leakage.',
    context: 'Independent project, 2026. Live prototype.',
    categories: ['AI engineering', 'Full-stack'],
    metrics: [
      { value: '93.3%', label: 'retrieval hit@4 on 60 held-out queries, up from 28.3% with one shared index' },
      { value: '0%', label: 'cross-domain leakage with domain routing, down from 28.3%' },
      { value: '394', label: 'backend tests in CI, alongside frontend tests, type checks and a Docker health check' },
    ],
    problem:
      'Egyptian Arabic speakers have few culturally relevant wellness tools, and a general chatbot can invent advice or miss someone at risk. The assistant had to stay inside approved sources, cite them, and step aside safely when a message signals risk.',
    built: [
      'Ten domain assistants (emotional wellbeing, family, career, finance and more) over 610 verbatim passages from 64 public-health sources such as WHO, CDC, NIMH and MedlinePlus, each with its licence and provenance recorded.',
      'Domain-routed retrieval with PostgreSQL full-text search across English and Arabic, filtered per assistant in SQL.',
      'A safety pipeline: risk assessment before generation, single-use generation permits, citation checks on every reply and controlled fallback messages.',
      'Conversation history signed with HMAC-SHA256, so a client cannot forge earlier turns, and per-user rate limits in PostgreSQL.',
      'A full-stack app: FastAPI, SQLAlchemy 2 and Alembic behind Next.js 16, with Supabase auth, consent-gated onboarding, mood check-ins and row-level security.',
    ],
    evidence: [
      'On 60 held-out queries, domain routing lifted retrieval hit@4 from 28.3% (one shared index) to 93.3% and cut cross-domain leakage from 28.3% to 0%.',
      'Arabic hit@4 on held-out queries: 95%.',
      'The risk screen was tuned until held-out error rates met the 10% limits set for the prototype (latest held-out set: 2 of 20 risks missed, 1 of 20 false refusals).',
      'CI runs 394 backend tests, the frontend tests, type checks, a Docker health check and secret-scanning guards. Playwright end-to-end tests cover the browser flows. 33 merged pull requests.',
    ],
    limits: [
      'A prototype: sources and crisis content are not clinically reviewed, and it is not meant for people in crisis.',
      'Adults only.',
    ],
    stack: ['Python', 'FastAPI', 'Pydantic', 'SQLAlchemy 2', 'Alembic', 'PostgreSQL 17', 'Next.js 16', 'TypeScript', 'Supabase Auth', 'Groq', 'Playwright', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/AbdallahYehya1/AI-WellnessEgy',
    demo: 'https://ai-wellness-egy.vercel.app/',
    highlights: [
      { value: '93.3%', label: 'retrieval hit@4 on 60 held-out queries, up from 28.3%' },
      { value: '394', label: 'backend tests in CI' },
    ],
    pipeline: {
      steps: ['Message', 'Risk screen', 'Route to one of ten assistants', 'Retrieve from that domain', 'Generate with a single-use permit', 'Check citations', 'Reply with sources'],
      note: 'Messages that signal risk skip generation and get a support response instead.',
    },
  },
  {
    slug: 'fraud-detection',
    title: 'Fraud Detection Workbench',
    tagline: 'An analyst workbench that turns synthetic mobile-money transactions into a fixed daily review queue, with a read-only local AI assistant.',
    description:
      'Fraud detection workbench by Abdallah Yehya: a gradient-boosted ranker found 1,189 of 4,250 synthetic frauds at 100 reviews a day, versus 670 for a rule.',
    context: 'Independent project, 2026. Seven-day sprint on synthetic data.',
    categories: ['Data science', 'AI engineering'],
    metrics: [
      { value: '1,189', label: 'of 4,250 synthetic frauds found at 100 reviews a day, versus 670 for a rule' },
      { value: '0.335', label: 'average precision on a once-only test, versus 0.085 for the rule' },
      { value: '10/12', label: 'held-out cases passed by the local AI assistant, with no invalid citations' },
    ],
    problem:
      "A fraud team can only review so many transactions a day. The real question isn't \"is this fraud?\" but \"which 100 transactions should an analyst open today?\", judged on data the model never saw.",
    built: [
      'A data pipeline over PaySim v2 (synthetic, CC BY-SA 4.0) with SHA-256-checked inputs, DuckDB, and recipient-history features that only look at strictly earlier records.',
      'Model selection under rules registered before the candidate models were scored: 8 logistic-regression and 4 gradient-boosting candidates, with the chosen HistGradientBoosting ranker frozen before the final test.',
      'A daily top-100 review policy, a FastAPI service and a React workbench that assembles the evidence for each case.',
      'A bounded local assistant (Ollama, qwen3:4b) that summarizes a case from read-only evidence tools and has no access to labels.',
    ],
    evidence: [
      'On the once-only test (1.25 million transactions, 4,250 frauds): average precision 0.335 (95% day-block bootstrap 0.270 to 0.519), versus 0.085 for an amount-and-type rule.',
      'At 100 reviews a day: 1,189 frauds found at 73.5% precision, versus 670 for the rule.',
      'The simulator artifact is reported too: in mixed-label hours alone, average precision is 0.241 (505 of 2,000 found).',
      'The assistant passed 10 of 12 cases on each of two held-out sets, with no writes, label claims or unsupported numbers.',
      'A model card, a data card, 70 tests and a captioned demo video.',
    ],
    limits: [
      'Synthetic data: these results are not real-world performance claims.',
      'Scores rank cases; they are not calibrated probabilities.',
    ],
    stack: ['Python', 'pandas', 'DuckDB', 'scikit-learn', 'FastAPI', 'React', 'Vite', 'PostgreSQL', 'Ollama', 'Docker Compose'],
    github: 'https://github.com/AbdallahYehya1/Fraud-Detection',
    highlights: [
      { value: '1,189', label: 'of 4,250 synthetic frauds found at 100 reviews a day; a rule found 670' },
      { value: '0.335', label: 'average precision on a once-only test; the rule scored 0.085' },
    ],
    pipeline: {
      steps: ['Synthetic transactions', 'Recipient-history features', 'Gradient-boosted ranking', 'Daily top-100 queue', 'Case evidence', 'Analyst review'],
      note: 'The local assistant summarizes a case from read-only evidence tools. It cannot see labels or change a case.',
    },
    image: {
      src: '/projects/fraud-detection-case.webp',
      srcSet: '/projects/fraud-detection-case-700.webp 700w, /projects/fraud-detection-case.webp 1400w',
      alt: 'Fraud Review Workbench case page showing the transaction, the model evidence and the computed facts for one synthetic case',
      width: 1400,
      height: 735,
      caption: 'A case page in the workbench, on synthetic PaySim data.',
    },
  },
  {
    slug: 'jobhunt',
    title: 'JobHunt',
    tagline: 'A daily job-intelligence agent: it collects postings from verified sources, merges duplicates, scores fit deterministically and lets an LLM explain, not decide.',
    description:
      'JobHunt by Abdallah Yehya: a job-matching agent with 7 verified sources, deterministic scoring and LLM review capped at 10 points. 370 automated tests.',
    context: 'Independent project, 2026. Private repository; live pilot.',
    categories: ['AI engineering', 'Full-stack'],
    metrics: [
      { value: '7', label: 'verified job sources, each respecting robots.txt and rate limits' },
      { value: '±10', label: 'points at most that the LLM reviewer can move a 100-point score' },
      { value: '370', label: 'automated tests on fake HTTP and LLM transports' },
    ],
    problem:
      'Job boards bury a few good matches under hundreds of loosely related postings. The goal: a short daily list of well-matched jobs, each with the reasons, the skill gaps and the source evidence.',
    built: [
      'Collectors for 7 verified sources (Careem, Thndr and Tamara job-board APIs; Remotive, Remote OK, Himalayas and We Work Remotely) with robots.txt checks, rate limits, retries and caching. LinkedIn, Indeed and Wuzzuf are never scraped; their alert e-mails are imported instead.',
      "Normalization and cross-source deduplication with a review queue for unclear cases, keeping every source's evidence and the application history.",
      'Hard filters, then a deterministic score: skills 35, role 20, experience 15, projects 10, location 10, seniority 5, freshness 5.',
      'An optional LLM reviewer (Gemini by default, with a configurable fallback provider) that explains fit and gaps in structured output and can move a score by at most 10 points.',
      'A Typer command-line app with application tracking, SQLite through SQLAlchemy 2 and Alembic, structured logs with secrets redacted, and a scheduled daily run.',
    ],
    evidence: [
      '370 automated tests run on fake HTTP and LLM transports: no network, keys or mailbox needed.',
      'Runs every morning on a schedule; exit codes separate errors from partial failures.',
    ],
    limits: [
      'The repository is private because it holds my own profile. A code walkthrough is available on request.',
      'Built for one user on Windows scheduling.',
      'The JobHunt web pilot is a separate web app for job seekers; this page describes the command-line agent.',
    ],
    stack: ['Python', 'Typer', 'Pydantic', 'SQLAlchemy 2', 'Alembic', 'SQLite', 'structlog', 'Gemini', 'Groq'],
    demo: 'https://job-hunt-pilot.vercel.app/',
    demoLabel: 'JobHunt web pilot',
    codeNote: 'Private repository. Code walkthrough on request.',
    highlights: [
      { value: '±10', label: 'points at most that the LLM reviewer can move a score' },
      { value: '370', label: 'automated tests on fake HTTP and LLM transports' },
    ],
    pipeline: {
      steps: ['7 verified sources', 'Normalize', 'Deduplicate', 'Hard filters', 'Deterministic score', 'LLM review, ±10 points', 'Daily report'],
      note: 'Unclear duplicates go to a review queue. Without an AI key, the deterministic score still ranks every job.',
    },
  },
  {
    slug: 'fair-price-egypt',
    title: 'Fair Price Egypt',
    tagline: 'Bilingual price comparison for Egyptian retailers, with photo search powered by CLIP.',
    description:
      'Fair Price Egypt by Abdallah Yehya: bilingual Arabic/English price comparison with CLIP ViT-B/32 photo search and Python scrapers for Egyptian retailers.',
    context: 'Independent prototype, 2026. Code not yet public.',
    categories: ['AI engineering', 'Full-stack'],
    metrics: [],
    problem:
      'The same product can cost very different amounts across Egyptian retailers, and shoppers often know what a product looks like but not its exact model name.',
    built: [
      'Photo search with pretrained CLIP ViT-B/32: user photos are matched to product-description embeddings by cosine similarity, filtered by category, then confirmed by the user.',
      'Python scrapers for product names, prices, specifications and availability, with normalization, de-duplication and validation before export to JSON and CSV.',
      'A Next.js, TypeScript and PostgreSQL app with Drizzle ORM: products, variants, retailer listings and append-only price observations, with search, filters, price history, VAT-aware comparison and right-to-left layouts.',
    ],
    evidence: ['The code is not public yet, so this page makes no measured claims.'],
    limits: ['Prototype; code release pending.'],
    stack: ['Python', 'CLIP ViT-B/32', 'Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM'],
    codeNote: 'Code not yet public.',
    highlights: [],
    pipeline: {
      steps: ['Shopper photo', 'CLIP image embedding', 'Match product descriptions', 'Filter by category', 'User confirms', 'Compare retailer prices'],
      note: 'Retailer prices come from Python scrapers that normalize, de-duplicate and validate every record.',
    },
  },
  {
    slug: 'smart-school',
    title: 'Smart School System',
    tagline: 'A computer-vision system for school attendance and student safety: face recognition with liveness checks, violence detection and uniform checks.',
    description:
      'Smart School System, the Grade A Ain Shams University graduation project of Abdallah Yehya and his team: face recognition, liveness and violence detection.',
    context: 'Team graduation project, Ain Shams University, 2024. Graded A.',
    categories: ['AI engineering'],
    metrics: [],
    problem:
      'Schools take attendance by hand and rely on staff to spot fights or uniform problems. The project set out to automate attendance with face recognition that resists spoofing, and to flag violence in camera footage.',
    built: [
      'One-shot face recognition using a Siamese network with MobileNetV2 feature extraction, so a student can be enrolled from a single photo.',
      'Liveness detection with MobileNetV2 and an RNN to catch spoofing attempts during attendance.',
      'Violence detection over video sequences with DenseNet-121 and an LSTM, triggering alerts.',
      'Supervised uniform-compliance classification to check whether students meet the school uniform requirements.',
      'A Python application with Flask and SQL Server that brings identification, attendance and safety monitoring together.',
    ],
    evidence: ['Graded A as an Ain Shams University graduation project.'],
    limits: [
      'A team project; the code is not public.',
    ],
    stack: ['Python', 'Computer Vision', 'Siamese Network', 'MobileNetV2', 'DenseNet-121', 'RNN / LSTM', 'Flask', 'SQL Server'],
    codeNote: 'Team project. Code not public.',
    highlights: [],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find(study => study.slug === slug)
}
