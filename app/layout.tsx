import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { ogImage, portraitUrl, profileLinks, siteDescription, siteName, siteTitle, siteUrl } from '@/lib/site'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: 'Abdallah Yehya', url: siteUrl }],
  creator: 'Abdallah Yehya',
  keywords: [
    'Abdallah Yehya',
    'Abdallah Yehya Soliman',
    'عبدالله يحيى',
    'AI Engineer',
    'Data Scientist',
    'Full-Stack Developer',
    'Software Engineer',
    'Machine Learning',
    'LLM',
    'NL2SQL',
    'Computer Vision',
    'Egypt',
    'Portfolio',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    firstName: 'Abdallah',
    lastName: 'Yehya',
    images: [{ ...ogImage, alt: 'Abdallah Yehya - AI Engineer & Full-Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },
  // Set GOOGLE_SITE_VERIFICATION in Vercel to the code from Google Search Console.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-icon.png', sizes: '180x180' },
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Abdallah Yehya',
      alternateName: ['Abdallah Yehya Soliman', 'Abdallah Yahya', 'عبدالله يحيى'],
      givenName: 'Abdallah',
      familyName: 'Yehya',
      jobTitle: ['AI Engineer', 'Data Scientist', 'Full-Stack Developer'],
      description: siteDescription,
      url: siteUrl,
      image: portraitUrl,
      sameAs: profileLinks,
      address: { '@type': 'PostalAddress', addressLocality: 'Giza', addressCountry: 'EG' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Ain Shams University' },
      knowsAbout: ['Artificial Intelligence', 'Data Science', 'Machine Learning', 'Large Language Models', 'NLP', 'Computer Vision', 'Full-Stack Development', 'Software Engineering'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      alternateName: 'Abdallah Yehya Portfolio',
      publisher: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profile`,
      url: siteUrl,
      name: siteTitle,
      mainEntity: { '@id': `${siteUrl}/#person` },
      isPartOf: { '@id': `${siteUrl}/#website` },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
        />
        <div className="portfolio min-h-screen text-slate-900"><a href="#main" className="skip-link">Skip to content</a><SiteHeader />{children}<SiteFooter /></div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
