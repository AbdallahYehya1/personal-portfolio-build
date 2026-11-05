import type { Metadata } from 'next'
import { CareerPage } from '@/components/portfolio-sections'
import { aiProfile } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'AI Engineer | Abdallah Yehya',
  description: aiProfile.summary,
  openGraph: { title: 'AI Engineer | Abdallah Yehya', description: aiProfile.summary },
}

export default function Page() {
  return <CareerPage profile={aiProfile} />
}
