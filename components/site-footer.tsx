import { email, profiles } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Abdallah Yehya</p>
        <p className="footer-links">
          <a href={`mailto:${email}`}>Email</a>
          <a href={profiles.linkedin} target="_blank" rel="me noopener noreferrer">LinkedIn</a>
          <a href={profiles.github} target="_blank" rel="me noopener noreferrer">GitHub</a>
        </p>
      </div>
    </footer>
  )
}
