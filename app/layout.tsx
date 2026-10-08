import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdallah Yehya | AI Engineer & Full-Stack Developer',
  description: 'Portfolio of Abdallah Yehya, an AI Engineer and Full-Stack Developer building practical AI systems, agentic workflows, and web applications.',
  generator: 'v0.app',
  openGraph: {
    title: 'Abdallah Yehya | AI Engineer & Full-Stack Developer',
    description: 'AI systems, agentic workflows, and full-stack applications by Abdallah Yehya.',
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
