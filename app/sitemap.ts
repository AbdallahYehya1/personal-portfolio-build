import type { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/case-studies'
import { contentUpdatedAt, siteUrl } from '@/lib/site'

const paths = [
  { path: '', priority: 1 },
  { path: '/projects', priority: 0.8 },
  ...caseStudies.map(study => ({ path: `/projects/${study.slug}`, priority: 0.7 })),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(contentUpdatedAt)
  return paths.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))
}
