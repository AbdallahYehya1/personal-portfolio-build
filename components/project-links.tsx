import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type LinkableProject = { slug?: string; title: string; github?: string; demo?: string; demoLabel?: string; codeNote?: string }

export function ProjectLinks({ project, caseStudy = true }: { project: LinkableProject; caseStudy?: boolean }) {
  return (
    <p className="project-links">
      {caseStudy && project.slug && <Link href={`/projects/${project.slug}`}>Read the case study<span className="visually-hidden">: {project.title}</span></Link>}
      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Code on GitHub<span className="visually-hidden"> (opens in a new tab)</span> <ArrowUpRight size={14} aria-hidden="true" /></a>}
      {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">{project.demoLabel ?? 'Live demo'}<span className="visually-hidden"> (opens in a new tab)</span> <ArrowUpRight size={14} aria-hidden="true" /></a>}
      {project.codeNote && <span className="code-note">{project.codeNote}</span>}
    </p>
  )
}
