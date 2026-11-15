import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

const paths = [
  { path: '', priority: 1 },
  { path: '/ai-engineer', priority: 0.9 },
  { path: '/software-engineer', priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return paths.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))
}
