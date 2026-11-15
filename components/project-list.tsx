'use client'

import { useState } from 'react'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'

export function ProjectList({ projects }: { projects: Project[] }) {
  const [openProject, setOpenProject] = useState<string | null>(null)
  return <div className="project-list">{projects.map((project, index) => {
    const isOpen = openProject === project.id
    return <article key={project.id} id={`work-${project.id}`} className={`project-row ${isOpen ? 'is-open' : ''}`}>
      <button type="button" onClick={() => setOpenProject(isOpen ? null : project.id)} aria-expanded={isOpen} aria-controls={`project-${project.id}`} className="project-toggle">
        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-title"><span>{project.title}</span><small>{project.subtitle}</small></span>
        <span className="project-expand"><span>{isOpen ? 'Close details' : 'View details'}</span>{isOpen ? <Minus size={19} /> : <Plus size={19} />}</span>
      </button>
      <div className="project-overview">
        <p className="project-summary">{project.summary}</p>
        <div className="project-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
        <div className="project-links">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">View GitHub repo <ArrowUpRight size={15} aria-hidden="true" /></a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Open deployed project <ArrowUpRight size={15} aria-hidden="true" /></a>}
        </div>
      </div>
      <div id={`project-${project.id}`} hidden={!isOpen} className="project-details">
        <h4 className="detail-heading">Implementation</h4>
        <ul className="detail-list">{project.details.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
    </article>
  })}</div>
}
