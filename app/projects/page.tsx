import type { Metadata } from 'next'
import Link from 'next/link'
import { caseStudies } from '@/lib/case-studies'
import { projectsOrder } from '@/lib/portfolio-data'
import { ogImage, projectsDescription, projectsTitle, siteName, siteUrl } from '@/lib/site'
import { breadcrumbs, pageGraph } from '@/lib/structured-data'
import { JsonLd } from '@/components/json-ld'
import { WorkList } from '@/components/work-list'

export const metadata: Metadata = {
  title: projectsTitle,
  description: projectsDescription,
  alternates: { canonical: '/projects' },
  openGraph: {
    type: 'website',
    url: '/projects',
    siteName,
    title: projectsTitle,
    description: projectsDescription,
    images: [{ ...ogImage, alt: 'Projects by Abdallah Yehya' }],
  },
  twitter: { card: 'summary_large_image', title: projectsTitle, description: projectsDescription, images: [ogImage.url] },
}

const studies = projectsOrder.flatMap(slug => caseStudies.filter(study => study.slug === slug))

const collection = {
  '@type': 'CollectionPage',
  '@id': `${siteUrl}/projects#page`,
  url: `${siteUrl}/projects`,
  name: projectsTitle,
  description: projectsDescription,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: studies.map((study, index) => ({
      '@type': 'ListItem', position: index + 1, url: `${siteUrl}/projects/${study.slug}`, name: study.title,
    })),
  },
}

export default function ProjectsPage() {
  return <main id="main" className="container page">
    <JsonLd data={pageGraph(collection, breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }]))} />
    <nav aria-label="Breadcrumb" className="breadcrumb"><ol><li><Link href="/">Home</Link></li><li aria-current="page">Projects</li></ol></nav>
    <header className="page-header">
      <h1>Projects</h1>
      <p className="page-lead">What each project does, how it was built, how it was measured and where the code is. By <Link href="/">Abdallah Yehya</Link>.</p>
    </header>
    <WorkList studies={studies} headingLevel={2} />
  </main>
}
