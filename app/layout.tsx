import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { portraitUrl, profileLinks, siteDescription, siteName, siteTitle, siteUrl } from '@/lib/site'
import './globals.css'

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
    images: [{ url: portraitUrl, alt: 'Abdallah Yehya - AI Engineer & Data Scientist' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [portraitUrl],
  },
  // Set GOOGLE_SITE_VERIFICATION in Vercel to the code from Google Search Console.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
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
      alternateName: ['Abdallah Yehya Soliman', 'عبدالله يحيى'],
      givenName: 'Abdallah',
      familyName: 'Yehya',
      jobTitle: 'AI Engineer & Data Scientist',
      description: siteDescription,
      url: siteUrl,
      image: portraitUrl,
      sameAs: profileLinks,
      address: { '@type': 'PostalAddress', addressLocality: 'Giza', addressCountry: 'EG' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Ain Shams University' },
      knowsAbout: ['Artificial Intelligence', 'Data Science', 'Machine Learning', 'Large Language Models', 'NLP', 'Computer Vision'],
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
