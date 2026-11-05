import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { overviewIntroduction } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Abdallah Yehya Portfolio',
  description: overviewIntroduction,
  openGraph: {
    title: 'Abdallah Yehya Portfolio',
    description: overviewIntroduction,
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
        <div className="portfolio min-h-screen text-slate-900"><a href="#main" className="skip-link">Skip to content</a><SiteHeader />{children}<SiteFooter /></div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
