import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { aiProfile, softwareProfile, overviewIntroduction } from '@/lib/portfolio-data'
import { Hero, FocusStrip, Education } from '@/components/portfolio-sections'
import { ContactSection } from '@/components/contact-section'

export default function OverviewPage() {
  return <main id="main">
    <Hero overview lines={['AI Engineer.', 'Full-Stack Developer.']} description={overviewIntroduction} subtitle="AI Engineer & Full-Stack Developer" />
    <FocusStrip items={['AI Engineering', 'Data Science', 'Full-Stack Development', 'Computer Science']} />
    <section id="overview" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
      <h2 className="section-heading mb-8"><span className="section-index">01 / OVERVIEW</span>Explore my work.</h2>
      <div className="career-paths">{[aiProfile, softwareProfile].map(profile => <Link key={profile.slug} href={`/${profile.slug}`} className="career-path">
        <span className="section-index">{profile.role}</span><h3>{profile.subtitle.replace(' | ', ' & ')}</h3><p>{profile.summary}</p><span className="text-link">View {profile.role} portfolio <ArrowUpRight size={16} aria-hidden="true" /></span>
      </Link>)}</div>
    </section>
    <section id="about" className="home-about max-w-5xl mx-auto px-6 py-16 border-t border-slate-200" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-heading mb-8"><span className="section-index">02 / ABOUT</span>About Abdallah Yehya.</h2>
      <div className="home-about-text">
        <p>I&apos;m Abdallah Yehya Soliman, an AI engineer and full-stack developer based in Giza, Egypt. I earned my Bachelor&apos;s degree in Computer Science from Ain Shams University in 2024. My graduation project, the Smart School System, received an A for combining face recognition, liveness detection, violence detection and uniform-compliance classification in one application.</p>
        <p>Since then I have built AI products end to end: an <Link href="/ai-engineer#work">agentic NL2SQL analytics platform</Link> that turns plain-English questions into validated SQL, JobHunt, an AI job-matching agent, and AI Wellness Egypt, a bilingual Arabic/English RAG assistant. Alongside AI, I build <Link href="/software-engineer">full-stack web applications</Link> with Next.js, TypeScript, FastAPI and PostgreSQL, including a freelance web application with product management and checkout for Modern Broadcast Center.</p>
        <p>My earlier experience includes a backend internship at Trans-IT and a business-intelligence internship at Coca-Cola Egypt. I recently completed a 150-hour AI Advanced Diploma covering AI agents, large language models, RAG, vector databases and MLOps.</p>
      </div>
    </section>
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-heading mb-8"><span className="section-index">03 / FEATURED PROJECTS</span>Featured projects.</h2>
      <div className="career-paths">{aiProfile.projects.map(project => <article key={project.id} className="career-path project-card">
        <span className="section-index">{project.subtitle}</span><h3>{project.title}</h3><p>{project.summary}</p>
        <div className="project-card-links">
          {project.github && <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">Code <ArrowUpRight size={15} aria-hidden="true" /></a>}
          {project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={15} aria-hidden="true" /></a>}
        </div>
      </article>)}</div>
    </section>
    <Education index="04" />
    <section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-200" aria-labelledby="languages-heading"><h2 id="languages-heading" className="section-heading mb-5"><span className="section-index">05 / LANGUAGES</span>Languages.</h2><p className="overview-languages">Arabic: Native | English: Professional proficiency</p></section>
    <ContactSection index="06" />
  </main>
}
