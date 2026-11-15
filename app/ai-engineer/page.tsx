import type { Metadata } from 'next'
import { CareerPage } from '@/components/portfolio-sections'
import { aiProfile } from '@/lib/portfolio-data'
import { portraitUrl, siteName } from '@/lib/site'

const title = 'Abdallah Yehya | AI Engineer & Data Scientist'

export const metadata: Metadata = {
  title,
  description: aiProfile.summary,
  alternates: { canonical: '/ai-engineer' },
  openGraph: {
    type: 'profile',
    url: '/ai-engineer',
    siteName,
    title,
    description: aiProfile.summary,
    images: [{ url: portraitUrl, alt: 'Abdallah Yehya - AI Engineer & Data Scientist' }],
  },
  twitter: { card: 'summary_large_image', title, description: aiProfile.summary, images: [portraitUrl] },
}

export default function Page() {
  return <CareerPage profile={aiProfile} />
}
