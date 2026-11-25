'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navigation = [
  { href: '/#work', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = navigation.map(({ href, label }) => {
    const current = href === '/projects' && pathname.startsWith('/projects')
    return (
      <Link key={href} href={href} onClick={() => setIsMenuOpen(false)} aria-current={current ? 'page' : undefined} className="nav-link">
        {label}
      </Link>
    )
  })
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" onClick={() => setIsMenuOpen(false)}>
          <span className="monogram" aria-hidden="true">AY</span>
          <span className="wordmark-name">Abdallah Yehya</span>
        </Link>
        <nav aria-label="Main" className="nav-desktop">{links}</nav>
        <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} aria-controls="mobile-menu">
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      {isMenuOpen && <nav id="mobile-menu" aria-label="Main" className="nav-mobile container">{links}</nav>}
    </header>
  )
}
