/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // The separate role pages were merged into the home page (council round 2, Nov 2026).
  async redirects() {
    return [
      { source: '/ai-engineer', destination: '/', permanent: true },
      { source: '/software-engineer', destination: '/', permanent: true },
      // The old CV was replaced on 2026-11-08; links already sent out open the current AI CV.
      { source: '/abdallah-yehya-cv.pdf', destination: '/Abdallah_Yehya_AI_Data_Science_CV.pdf', permanent: true },
    ]
  },
}

export default nextConfig
