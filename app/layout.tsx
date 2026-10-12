import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdallah Yehya Portfolio',
  description: 'Abdallah Yehya Portfolio — Data Scientist and AI Engineer building practical AI systems, agentic workflows, NLP and computer vision applications, and full-stack products.',
  generator: 'v0.app',
  openGraph: {
    title: 'Abdallah Yehya Portfolio',
    description: 'Data science, AI systems, NLP, computer vision, LLM workflows, and full-stack applications by Abdallah Yehya.',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
