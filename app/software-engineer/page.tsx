import type { Metadata } from 'next'
import { CareerPage } from '@/components/portfolio-sections'
import { softwareProfile } from '@/lib/portfolio-data'
import { portraitUrl, siteName } from '@/lib/site'

const title = 'Abdallah Yehya | Software Engineer & Full-Stack Developer'

export const metadata: Metadata = {
  title,
  description: softwareProfile.summary,
  alternates: { canonical: '/software-engineer' },
  openGraph: {
    type: 'profile',
    url: '/software-engineer',
    siteName,
    title,
    description: softwareProfile.summary,
    images: [{ url: portraitUrl, alt: 'Abdallah Yehya - Software Engineer & Full-Stack Developer' }],
  },
  twitter: { card: 'summary_large_image', title, description: softwareProfile.summary, images: [portraitUrl] },
}

export default function Page() {
  return <CareerPage profile={softwareProfile} />
}
