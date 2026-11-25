import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies, getCaseStudy } from '@/lib/case-studies'
import { projectsOrder } from '@/lib/portfolio-data'
import { ogImage, siteName } from '@/lib/site'
import { pageGraph, projectNodes } from '@/lib/structured-data'
import { JsonLd } from '@/components/json-ld'
import { MetricList } from '@/components/metric-list'
import { Pipeline } from '@/components/pipeline'
import { ProjectLinks } from '@/components/project-links'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map(study => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  const title = `${study.title} – Abdallah Yehya`
  const path = `/projects/${study.slug}`
  return {
    title,
    description: study.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      url: path,
      siteName,
      title,
      description: study.description,
      authors: ['Abdallah Yehya'],
      images: [{ ...ogImage, alt: `${study.title} by Abdallah Yehya` }],
    },
    twitter: { card: 'summary_large_image', title, description: study.description, images: [ogImage.url] },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()
  const order = projectsOrder.indexOf(study.slug)
  const next = getCaseStudy(projectsOrder[(order + 1) % projectsOrder.length])

  return <main id="main" className="container page case">
    <JsonLd data={pageGraph(...projectNodes(study))} />
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li aria-current="page">{study.title}</li>
      </ol>
    </nav>
    <header className="page-header">
      <p className="case-byline">Built by <Link href="/">Abdallah Yehya</Link>. {study.context}</p>
      <h1>{study.title}</h1>
      <p className="page-lead">{study.tagline}</p>
      <ProjectLinks project={study} caseStudy={false} />
    </header>

    {study.metrics.length > 0 && <section className="case-results" aria-labelledby="results-heading">
      <h2 id="results-heading" className="visually-hidden">Headline results</h2>
      <MetricList metrics={study.metrics} />
    </section>}

    {study.image && <figure className="case-image">
      {/* Pre-sized WebP files (images are served unoptimized); the image sits near the top, so it loads eagerly. */}
      <img src={study.image.src} srcSet={study.image.srcSet} sizes="(max-width: 1120px) calc(100vw - 48px), 1072px" alt={study.image.alt}
        width={study.image.width} height={study.image.height} loading="eager" fetchPriority="high" decoding="async" />
      <figcaption>{study.image.caption}</figcaption>
    </figure>}

    {study.pipeline && <section className="case-section" aria-labelledby="how-heading">
      <h2 id="how-heading">How it works</h2>
      <Pipeline steps={study.pipeline.steps} note={study.pipeline.note} label={`${study.title} pipeline`} />
    </section>}
    <section className="case-section" aria-labelledby="problem-heading">
      <h2 id="problem-heading">The problem</h2>
      <div><p>{study.problem}</p></div>
    </section>
    <section className="case-section" aria-labelledby="built-heading">
      <h2 id="built-heading">What I built</h2>
      <ul className="detail-list">{study.built.map(item => <li key={item}>{item}</li>)}</ul>
    </section>
    <section className="case-section" aria-labelledby="evidence-heading">
      <h2 id="evidence-heading">How it was measured</h2>
      <ul className="detail-list">{study.evidence.map(item => <li key={item}>{item}</li>)}</ul>
    </section>
    <section className="case-section" aria-labelledby="limits-heading">
      <h2 id="limits-heading">Limits</h2>
      <ul className="detail-list">{study.limits.map(item => <li key={item}>{item}</li>)}</ul>
    </section>
    <section className="case-section" aria-labelledby="stack-heading">
      <h2 id="stack-heading">Stack</h2>
      <ul className="tags" aria-label="Stack">{study.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
    </section>

    {next && <nav className="case-next" aria-label="Next project">
      <p>Next project</p>
      <Link href={`/projects/${next.slug}`}>{next.title}</Link>
    </nav>}
  </main>
}
