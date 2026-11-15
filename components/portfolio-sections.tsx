import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, MapPin, Code2, Eye, Download, GraduationCap } from 'lucide-react'
import type { CareerProfile } from '@/lib/portfolio-data'
import { ProjectList } from './project-list'

export function Hero({ lines, description, subtitle, overview = false }: { lines: string[]; description: string; subtitle: string; overview?: boolean }) {
  return <section id={overview ? undefined : 'summary'} className="hero max-w-5xl mx-auto px-6">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot" /> {overview ? 'OPEN TO OPPORTUNITIES' : '01 / PROFESSIONAL SUMMARY'}</p>
      <p className="hero-intro">Hi, I’m Abdallah.</p>
      <h1>{lines.map((line, index) => index === lines.length - 1 ? <span key={line} className="hero-title-line">{line}</span> : <span key={line} className="hero-title-line hero-title-primary">{line}</span>)}</h1>
      <p className="hero-description">{description}</p>
      <p className="location"><MapPin size={15} aria-hidden="true" /> Agouza, Giza, Egypt</p>
      <div className="hero-actions">
        {overview ? <><Link href="/ai-engineer" className="primary-link">AI Engineer <ArrowRight size={18} aria-hidden="true" /></Link><Link href="/software-engineer" className="secondary-link">Software Engineer <ArrowRight size={18} aria-hidden="true" /></Link></> : <><a href="#work" className="primary-link">View my work <ArrowRight size={18} aria-hidden="true" /></a><Link href="/#contact" className="secondary-link">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></Link></>}
      </div>
      <div className="cv-links profile-links">
        <a href="https://linkedin.com/in/abdallah-yehya" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>
        <a href="https://github.com/AbdallahYehya1" target="_blank" rel="noopener noreferrer"><Code2 size={15} aria-hidden="true" /> GitHub</a>
      </div>
    </div>
    <div className="portrait-wrap">
      <div className="portrait-backdrop" aria-hidden="true" />
      <div className="portrait"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240703-WA0087-EpSPKE8v1917MgoT8U0sMizZHVjnuH.jpg" alt="Abdallah Yehya Soliman" fill className="object-cover" priority sizes="(max-width: 768px) 90vw, 400px" /></div>
      <div className="portrait-caption"><span><strong>Abdallah Yehya Soliman</strong><small>{subtitle}</small></span><span className="portrait-icon" aria-hidden="true"><Code2 size={22} /></span></div>
    </div>
  </section>
}

export function FocusStrip({ items }: { items: string[] }) {
  return <div className="skill-strip"><div className="max-w-5xl mx-auto px-6"><span>FOCUS AREAS</span>{items.map(item => <span key={item}>{item}</span>)}</div></div>
}

export function Education({ index = '03' }: { index?: string }) {
  return <section id="education" className="education-section max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
    <h2 className="section-heading mb-8"><span className="section-index">{index} / EDUCATION</span>A solid foundation.</h2>
    <div className="education-card">
      <div className="education-icon"><GraduationCap size={27} aria-hidden="true" /></div>
      <div><h3>Bachelor&apos;s Degree in Computer Science</h3><p className="education-school">Ain Shams University | 2020 - 2024 | Department: Computer Science</p><p className="education-gpa">GPA: 2.95 <span>Graduation Project · Grade A</span></p><p className="education-detail"><strong>Graduation Project:</strong> Smart School System</p></div>
    </div>
  </section>
}

export function CareerPage({ profile }: { profile: CareerProfile }) {
  const skillGroups = [profile.skills.slice(0, 3), profile.skills.slice(3)]
  const hasCertificates = profile.certificates.length > 0
  const graduation = profile.graduationProject
  return <main id="main">
    <Hero lines={profile.heroLines} description={profile.summary} subtitle={profile.subtitle} />
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
      <h2 className="section-heading mb-12"><span className="section-index">02 / PROFESSIONAL EXPERIENCE</span>Experience.</h2>
      <div className="experience-timeline">{profile.experience.map(role => <article key={role.company} className="experience-entry">
        <div className="experience-meta"><span className="timeline-dot" aria-hidden="true" /><p>{role.period}</p><span>{role.company}</span></div>
        <div className="experience-content"><h3>{role.title}</h3><ul className="detail-list">{role.details.map(item => <li key={item}>{item}</li>)}</ul><div className="project-tags">{role.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>{role.website && <a className="text-link" href={role.website} target="_blank" rel="noopener noreferrer">Visit mbcegypt.com <ArrowUpRight size={15} aria-hidden="true" /></a>}</div>
      </article>)}</div>
    </section>
    <Education />
    <section id="graduation-project" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
      <h2 className="section-heading mb-8"><span className="section-index">04 / GRADUATION PROJECT</span>Graduation project.</h2>
      <article id="work-smartschool" className="graduation-project project-row">
        <h3>{graduation.title}</h3><p className="project-summary">{graduation.subtitle}</p>
        <ul className="detail-list">{[graduation.summary, ...graduation.details].map(item => <li key={item}>{item}</li>)}</ul>
        <div className="project-tags">{graduation.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
      </article>
    </section>
    <section id="work" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200">
      <div className="work-heading mb-12"><p className="text-sm font-semibold tracking-[0.2em] text-blue-700 mb-4">05 / SELECTED PROJECTS</p><h2 className="section-heading">Selected work<span className="blue-period">.</span></h2></div>
      <ProjectList projects={profile.projects} />
    </section>
    {hasCertificates && <section id="certifications" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
      <h2 className="section-heading mb-8"><span className="section-index">06 / CERTIFICATIONS</span>Certifications.</h2>
      <div className="certificate-list">{profile.certificates.map(certificate => <article key={certificate.title} className="certificate-entry"><h3>{certificate.title}</h3><p className="certificate-meta">{certificate.issuer} | {certificate.date}</p>{certificate.detail && <p className="certificate-detail">{certificate.detail}</p>}</article>)}</div>
    </section>}
    <section id="skills" className="about-section max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
      <h2 className="section-heading mb-8"><span className="section-index">{hasCertificates ? '07' : '06'} / TECHNICAL SKILLS</span>Technical skills.</h2>
      <div className="grid md:grid-cols-2 gap-12">{skillGroups.map((group, index) => <div key={index} className="space-y-6">{group.map(item => {
        const colon = item.indexOf(': ')
        return <div key={item}><h3 className="skill-label">{item.slice(0, colon)}</h3><p className="text-slate-600">{item.slice(colon + 2)}</p></div>
      })}</div>)}</div>
    </section>
    <section id="languages" className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-200">
      <h2 className="section-heading mb-5"><span className="section-index">{hasCertificates ? '08' : '07'} / LANGUAGES</span>Languages.</h2>
      <p className="overview-languages">Arabic: Native | English: Professional proficiency</p>
    </section>
    <section id="cv" className="cv-section max-w-5xl mx-auto px-6 py-16 border-t border-slate-200" aria-labelledby="cv-heading">
      <div><span className="section-index">{hasCertificates ? '09' : '08'} / CV</span><h2 id="cv-heading" className="section-heading">{profile.role} CV.</h2></div>
      <div className="hero-actions"><a href={profile.cv} target="_blank" rel="noopener noreferrer" className="secondary-link"><Eye size={18} aria-hidden="true" /> View CV</a><a href={profile.cv} download className="primary-link"><Download size={18} aria-hidden="true" /> Download CV</a></div>
    </section>
  </main>
}
