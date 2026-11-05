import type { Metadata } from 'next'
import { CareerPage } from '@/components/portfolio-sections'
import { softwareProfile } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Software Engineer | Abdallah Yehya',
  description: softwareProfile.summary,
  openGraph: { title: 'Software Engineer | Abdallah Yehya', description: softwareProfile.summary },
}

export default function Page() {
  return <CareerPage profile={softwareProfile} />
}
