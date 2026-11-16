import type { MetadataRoute } from 'next'
import { siteDescription, siteName, siteTitle } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteTitle,
    short_name: siteName,
    description: siteDescription,
    start_url: '/',
    display: 'browser',
    background_color: '#ffffff',
    theme_color: '#1e3a5f',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
