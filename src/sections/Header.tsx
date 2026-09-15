import { useEffect, useState } from 'react'
import { IMG } from '../assets'
import { TG_LINK } from '../lib/constants'

type NavItem = { href: string; label: string; page?: boolean }
const NAV: NavItem[] = [
  { href: '#about', label: 'Обо мне' },
  { href: '#experience', label: 'Опыт' },
  { href: '#projects', label: 'Проекты' },
  { href: '#speaking', label: 'Выступления' },
  { href: '#oreon', label: 'Oreon' },
  { href: '#services', label: 'Услуги' },
  { href: '#miniapps', label: 'Mini Apps' },
  { href: '/price/', label: 'Прайс', page: true },
]

/* Хедер: на hero прозрачный с белым текстом, при скролле — бумажная плашка. */
export default function Header({ home = true }: { home?: boolean }) {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  /* На странице прайса якоря ведут на главную */
  const nav = NAV.map(n => ({ ...n, href: n.page || home ? n.href : `/${n.href}` }))

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${solid || open || !home ? 'is-solid' : ''}`}>
      <div className="container-x header-bar">
        <a href={home ? '#top' : '/'} className="brand" onClick={() => setOpen(false)}>
          <img src={IMG.logo} alt="" className="brand-logo" />
          <span className="brand-name">Даниил Орлов</span>
        </a>

        <nav className="nav" aria-label="Разделы">
          {nav.map(n => <a key={n.href} href={n.href} className={n.page ? 'nav-page' : ''}>{n.label}</a>)}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-white header-cta">
            Связаться
          </a>
          <button type="button" className="burger" aria-label={open ? 'Закрыть меню' : 'Меню'} aria-expanded={open} onClick={() => setOpen(v => !v)}>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {nav.map(n => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
          <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-acid">Написать в Telegram</a>
        </div>
      )}
    </header>
  )
}
