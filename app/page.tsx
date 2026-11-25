import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '@/lib/case-studies'
import {
  availability, certificates, education, experience, graduationProject, languages, skills, statement, workOrder,
} from '@/lib/portfolio-data'
import { profiles, siteTitle } from '@/lib/site'
import { pageGraph, profilePage } from '@/lib/structured-data'
import { ContactSection } from '@/components/contact-section'
import { JsonLd } from '@/components/json-ld'
import { WorkList } from '@/components/work-list'

const work = workOrder.flatMap(slug => caseStudies.filter(study => study.slug === slug))

export default function HomePage() {
  return <main id="main">
    <JsonLd data={pageGraph(profilePage('/', siteTitle))} />

    <section className="intro container" aria-labelledby="intro-name">
      <div className="intro-grid">
        <div className="intro-copy">
          <h1 id="intro-name">Abdallah Yehya</h1>
          <p className="intro-role">AI engineer and full-stack developer in Giza, Egypt</p>
          <p className="intro-statement">{statement}</p>
          <p className="intro-availability">{availability}</p>
          <p className="intro-actions">
            <a href="#work" className="button button-primary">See the work</a>
            <a href="#cv" className="button button-secondary">Download a CV</a>
          </p>
          <p className="intro-profiles">
            <a href={profiles.linkedin} target="_blank" rel="me noopener noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href={profiles.github} target="_blank" rel="me noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
          </p>
        </div>
        <div className="intro-portrait">
          {/* Pre-sized WebP files (images are served unoptimized). */}
          <img src="/abdallah-yehya-portrait.webp" srcSet="/abdallah-yehya-portrait-360.webp 360w, /abdallah-yehya-portrait.webp 720w"
            sizes="(max-width: 767px) 112px, 280px" width={720} height={960} fetchPriority="high" decoding="async" alt="Portrait of Abdallah Yehya Soliman" />
        </div>
      </div>
    </section>

    <section id="work" className="section container" aria-labelledby="work-heading">
      <div className="section-head">
        <h2 id="work-heading">Work</h2>
        <p className="section-lead">Each project shows an AI result next to the engineering behind it, and every number names the data it was measured on. The case studies give the method and the limits; <Link href="/projects">all projects</Link> are listed there.</p>
      </div>
      <WorkList studies={work} />
    </section>

    <section id="experience" className="section container" aria-labelledby="experience-heading">
      <div className="section-head"><h2 id="experience-heading">Experience</h2></div>
      <ol className="roles">
        {experience.map(role => <li key={role.company} className="role">
          <div className="role-meta"><p className="role-period">{role.period}</p><p className="role-company">{role.company}</p></div>
          <div className="role-body">
            <h3>{role.title}</h3>
            <ul className="detail-list">{role.details.map(item => <li key={item}>{item}</li>)}</ul>
            <ul className="tags" aria-label="Skills used">{role.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
            {role.website && <p className="role-link"><a href={role.website} target="_blank" rel="noopener noreferrer">{role.website.replace(/^https?:\/\//, '')} <ArrowUpRight size={14} aria-hidden="true" /></a></p>}
          </div>
        </li>)}
      </ol>
    </section>

    <section id="education" className="section container" aria-labelledby="education-heading">
      <div className="section-head"><h2 id="education-heading">Education and training</h2></div>
      <div className="edu-grid">
        <div>
          <h3>{education.degree}</h3>
          <p className="edu-school">{education.school}, {education.period}</p>
          <h4 className="edu-project">Graduation project: {graduationProject.title}</h4>
          <p className="edu-label">{graduationProject.label}</p>
          <ul className="detail-list">{graduationProject.details.map(item => <li key={item}>{item}</li>)}</ul>
          <ul className="tags" aria-label="Skills used">{graduationProject.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
          <p className="project-links"><Link href="/projects/smart-school">Read the case study<span className="visually-hidden">: Smart School System</span></Link></p>
        </div>
        <div>
          <h3>Certifications</h3>
          <ul className="cert-list">{certificates.map(cert => <li key={cert.title}>
            <p className="cert-title">{cert.title}</p>
            <p className="cert-meta">{cert.issuer}, {cert.date}</p>
            {cert.detail && <p className="cert-detail">{cert.detail}</p>}
          </li>)}</ul>
        </div>
      </div>
    </section>

    <section id="skills" className="section container" aria-labelledby="skills-heading">
      <div className="section-head"><h2 id="skills-heading">Skills</h2></div>
      <dl className="skills">{skills.map(skill => <div key={skill.group}><dt>{skill.group}</dt><dd>{skill.items}</dd></div>)}</dl>
    </section>

    <section id="about" className="section container" aria-labelledby="about-heading">
      <div className="section-head"><h2 id="about-heading">About</h2></div>
      <div className="about-text">
        <p>I&apos;m Abdallah Yehya Soliman, an AI engineer and full-stack developer based in Giza, Egypt. I earned my Bachelor&apos;s degree in Computer Science from Ain Shams University in 2024, and my team&apos;s graduation project, the Smart School System, received an A.</p>
        <p>Since then I have built AI products end to end and measured them: an <Link href="/projects/nl2sql">agentic NL2SQL platform</Link>, <Link href="/projects/ai-wellness-egypt">AI Wellness Egypt</Link>, a bilingual Arabic/English RAG assistant, and <Link href="/projects/jobhunt">JobHunt</Link>, a job-matching agent. I build the applications around them too, with Next.js, TypeScript, FastAPI and PostgreSQL, including a freelance product-management and checkout app for Modern Broadcast Center.</p>
        <p>My earlier experience includes a backend internship at Trans-IT and a business-intelligence internship at Coca-Cola Egypt. I recently completed a 150-hour AI Advanced Diploma covering AI agents, large language models, RAG, vector databases and MLOps.</p>
        <p>Languages: {languages}</p>
      </div>
    </section>

    <ContactSection />
  </main>
}
