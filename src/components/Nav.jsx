import { useState, useEffect } from 'react'
import './Nav.css'

const links = [
  { href: '#about',      label: '關於我' },
  { href: '#skills',     label: '技能' },
  { href: '#experience', label: '經歷' },
  { href: '#projects',   label: '專案' },
]

export default function Nav() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 160) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className="nav">
        <a href="#hero" className="nav-logo">GY<span>.</span>LIN</a>
        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href.slice(1) ? 'nav-a active' : 'nav-a'}
              >
                {label}
              </a>
            </li>
          ))}
          <li><a href="#contact" className="nav-cta">聯絡我</a></li>
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="開啟選單">
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
          {[...links, { href: '#contact', label: '聯絡我' }].map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
      )}
    </>
  )
}