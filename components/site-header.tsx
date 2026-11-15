'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navigation = [
  { href: '/', label: 'Overview' },
  { href: '/ai-engineer', label: 'AI Engineer' },
  { href: '/software-engineer', label: 'Software Engineer' },
  { href: '/#contact', label: 'Contact Me' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = navigation.map(({ href, label }) => (
    <Link key={href} href={href} onClick={() => setIsMenuOpen(false)}
      aria-current={pathname === href ? 'page' : undefined}
      className="nav-link text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium">
      {label}
    </Link>
  ))
  return (
    <nav className="site-nav sticky top-0 z-40" aria-label="Main navigation">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
        <Link href="/" className="wordmark" onClick={() => setIsMenuOpen(false)}>
          <span className="monogram">AY<span>.</span></span>
          <span>Abdallah Yehya Soliman<span className="wordmark-caption">AI ENGINEER & SOFTWARE ENGINEER</span></span>
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} aria-controls="mobile-menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden lg:flex gap-7 items-center">{links}</div>
      </div>
      {isMenuOpen && <div id="mobile-menu" className="lg:hidden border-t border-slate-200 bg-slate-50"><div className="mobile-nav max-w-5xl mx-auto px-6 py-4">{links}</div></div>}
    </nav>
  )
}
