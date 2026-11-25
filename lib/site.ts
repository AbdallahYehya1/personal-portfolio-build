// One setting controls every absolute URL (canonical links, sitemap, structured data).
// After connecting a custom domain in Vercel, set NEXT_PUBLIC_SITE_URL (for example
// https://abdallahyehya.com) and redeploy.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://abdallah-yehya-portfolio.vercel.app').replace(/\/+$/, '')

export const siteName = 'Abdallah Yehya'

// Update this date whenever the portfolio content changes; the sitemap reports it to search engines.
export const contentUpdatedAt = '2026-11-24'

export const siteTitle = 'Abdallah Yehya Portfolio – AI Engineer & Full-Stack Developer'

export const siteDescription =
  'Abdallah Yehya, AI engineer and full-stack developer in Giza, Egypt. Measured LLM systems: agentic NL2SQL, bilingual Arabic/English RAG and AI agents.'

export const projectsTitle = 'Projects – Abdallah Yehya'

export const projectsDescription =
  'Case studies by Abdallah Yehya: what each AI and full-stack project does, how it was built, how it was measured and where the code is.'

export const ogImage = { url: `${siteUrl}/og-image.jpg`, width: 1200, height: 630 }

export const portraitUrl = `${siteUrl}/abdallah-yehya.jpg`

export const fullName = 'Abdallah Yehya Soliman'

// Other ways people write the name. Shown once on the page and listed in the structured data.
export const nameVariants = [
  'Abdallah Yehya Soliman',
  'Abdullah Yehya',
  'Abdallah Yahya',
  'Abdullah Yahya',
  'Abdallah Yehia',
  'Abdalla Yehya',
  'Abdallah Yahia',
  'AbdallahYehya1',
]

export const arabicNameVariants = ['عبدالله يحيى', 'عبد الله يحيى', 'عبدالله يحيى سليمان']

export const email = 'abdallah.yehya02@gmail.com'

export const profiles = {
  github: 'https://github.com/AbdallahYehya1',
  linkedin: 'https://www.linkedin.com/in/abdallah-yehya',
  kaggle: 'https://www.kaggle.com/abdallahyehya20',
  huggingface: 'https://huggingface.co/abdallah-yehya',
}

export const profileLinks = Object.values(profiles)

export const personId = `${siteUrl}/#person`
