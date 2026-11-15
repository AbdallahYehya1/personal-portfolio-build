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
    <Education index="02" />
    <section className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-200" aria-labelledby="languages-heading"><h2 id="languages-heading" className="section-heading mb-5"><span className="section-index">03 / LANGUAGES</span>Languages.</h2><p className="overview-languages">Arabic: Native | English: Professional proficiency</p></section>
    <ContactSection />
  </main>
}
