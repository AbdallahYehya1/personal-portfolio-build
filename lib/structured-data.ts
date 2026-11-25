import type { CaseStudy } from './case-studies'
import {
  arabicNameVariants, contentUpdatedAt, email, nameVariants, personId, portraitUrl, profileLinks,
  siteDescription, siteName, siteUrl,
} from './site'

const websiteId = `${siteUrl}/#website`

export const person = {
  '@type': 'Person',
  '@id': personId,
  name: 'Abdallah Yehya',
  alternateName: [...nameVariants, ...arabicNameVariants],
  givenName: 'Abdallah',
  familyName: 'Yehya',
  jobTitle: 'AI Engineer and Full-Stack Developer',
  description: siteDescription,
  url: siteUrl,
  image: portraitUrl,
  email: `mailto:${email}`,
  sameAs: profileLinks,
  address: { '@type': 'PostalAddress', addressLocality: 'Giza', addressCountry: 'EG' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Ain Shams University',
    sameAs: 'https://en.wikipedia.org/wiki/Ain_Shams_University',
  },
  knowsLanguage: [
    { '@type': 'Language', name: 'Arabic', alternateName: 'ar' },
    { '@type': 'Language', name: 'English', alternateName: 'en' },
  ],
  knowsAbout: [
    'Artificial Intelligence', 'Large Language Models', 'AI Agents', 'Retrieval-Augmented Generation', 'Text-to-SQL',
    'Machine Learning', 'Data Science', 'Computer Vision', 'Full-Stack Development', 'PostgreSQL', 'Next.js', 'FastAPI',
  ],
}

const website = {
  '@type': 'WebSite',
  '@id': websiteId,
  url: siteUrl,
  name: siteName,
  // Google's site-name guidance: name = preferred site name; the host name is the documented backup.
  alternateName: ['Abdallah Yehya Portfolio', 'Abdallah Yehya Soliman Portfolio', new URL(siteUrl).host],
  inLanguage: 'en',
  publisher: { '@id': personId },
}

function absolute(path: string) {
  return path === '/' ? siteUrl : `${siteUrl}${path}`
}

/** Every page carries the same Person and WebSite nodes plus its own nodes, in one graph. */
export function pageGraph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': [person, website, ...nodes] }
}

export function profilePage(path: string, name: string) {
  const url = absolute(path)
  return {
    '@type': 'ProfilePage',
    '@id': `${url}#profile`,
    url,
    name,
    dateModified: contentUpdatedAt,
    inLanguage: 'en',
    mainEntity: { '@id': personId },
    isPartOf: { '@id': websiteId },
  }
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem', position: index + 1, name: item.name, item: absolute(item.path),
    })),
  }
}

export function projectNodes(study: CaseStudy) {
  const url = absolute(`/projects/${study.slug}`)
  const work = {
    '@type': 'SoftwareSourceCode',
    '@id': `${url}#project`,
    name: study.title,
    description: study.tagline,
    url,
    author: { '@id': personId },
    creator: { '@id': personId },
    keywords: study.stack.join(', '),
    ...(study.github ? { codeRepository: study.github } : {}),
  }
  const page = {
    '@type': 'WebPage',
    '@id': `${url}#page`,
    url,
    name: `${study.title} – Abdallah Yehya`,
    description: study.description,
    inLanguage: 'en',
    dateModified: contentUpdatedAt,
    isPartOf: { '@id': websiteId },
    author: { '@id': personId },
    mainEntity: { '@id': `${url}#project` },
  }
  return [work, page, breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: study.title, path: `/projects/${study.slug}` }])]
}
