import Link from 'next/link'
import type { CaseStudy } from '@/lib/case-studies'
import { ProjectLinks } from './project-links'

// Server-rendered list; implementation details open with a native <details>, so no client JavaScript.
export function WorkList({ studies, headingLevel = 3 }: { studies: CaseStudy[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <ol className="work-list">
      {studies.map(study => (
        <li key={study.slug} className="work-item">
          <div className="work-head">
            <Heading className="work-title"><Link href={`/projects/${study.slug}`}>{study.title}</Link></Heading>
            <p className="work-context">{study.context}</p>
          </div>
          <p className="work-summary">{study.tagline}</p>
          {study.highlights.length > 0 && (
            <dl className="results">
              {study.highlights.map(metric => (
                <div key={metric.value}>
                  <dt className="result-value">{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
          )}
          <ul className="tags" aria-label="Stack">{study.stack.slice(0, 7).map(tech => <li key={tech}>{tech}</li>)}</ul>
          <ProjectLinks project={study} />
          <details className="work-details">
            <summary>How it&apos;s built<span className="visually-hidden">: {study.title}</span></summary>
            <ul className="detail-list">{study.built.map(item => <li key={item}>{item}</li>)}</ul>
          </details>
        </li>
      ))}
    </ol>
  )
}
