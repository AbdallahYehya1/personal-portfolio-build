import type { Metadata } from 'next'
import { CareerPage } from '@/components/portfolio-sections'
import { aiProfile } from '@/lib/portfolio-data'
import { aiDescription, ogImage, siteName } from '@/lib/site'

const title = 'Abdallah Yehya | AI Engineer & Data Scientist'

export const metadata: Metadata = {
  title,
  description: aiDescription,
  alternates: { canonical: '/ai-engineer' },
  openGraph: {
    type: 'profile',
    url: '/ai-engineer',
    siteName,
    title,
    description: aiDescription,
    images: [{ ...ogImage, alt: 'Abdallah Yehya - AI Engineer & Data Scientist' }],
  },
  twitter: { card: 'summary_large_image', title, description: aiDescription, images: [ogImage.url] },
}

export default function Page() {
  return <CareerPage profile={aiProfile} />
}
