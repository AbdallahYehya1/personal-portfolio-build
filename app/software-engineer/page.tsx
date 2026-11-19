import type { Metadata } from 'next'
import { CareerPage } from '@/components/portfolio-sections'
import { softwareProfile } from '@/lib/portfolio-data'
import { softwareDescription, ogImage, siteName } from '@/lib/site'

const title = 'Abdallah Yehya | Software Engineer & Full-Stack Developer'

export const metadata: Metadata = {
  title,
  description: softwareDescription,
  alternates: { canonical: '/software-engineer' },
  openGraph: {
    type: 'profile',
    url: '/software-engineer',
    siteName,
    title,
    description: softwareDescription,
    images: [{ ...ogImage, alt: 'Abdallah Yehya - Software Engineer & Full-Stack Developer' }],
  },
  twitter: { card: 'summary_large_image', title, description: softwareDescription, images: [ogImage.url] },
}

export default function Page() {
  return <CareerPage profile={softwareProfile} />
}
