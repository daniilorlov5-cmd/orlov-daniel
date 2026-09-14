import { useEffect, useState } from 'react'
import Logo from './Logo'
import styles from './Header.module.css'

const NAV = [
  { href: '#about', label: 'Обо мне' },
  { href: '#projects', label: 'Проекты' },
  { href: '#experience', label: 'Опыт' },
  { href: '#speaking', label: 'Выступления' },
  { href: '#services', label: 'Услуги' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [open])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.bar}>
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo size={40} className={styles.logo} />
          <span className={styles.brandText}>
            <span className={styles.brandName}>Даниил Орлов</span>
            <span className={styles.brandRole}>Product Manager</span>
          </span>
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Разделы сайта">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href="https://t.me/orlovdaniel"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.cta} ${styles.ctaMobile}`}
          >
            Написать в Telegram
          </a>
        </nav>

        <div className={styles.actions}>
          <a
            href="mailto:dan0rlov@yandex.ru"
            className={styles.iconBtn}
            title="Написать на почту"
            aria-label="Написать на почту"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="M3.5 7l8.5 6 8.5-6" />
            </svg>
          </a>
          <a
            href="https://t.me/orlovdaniel"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span>Написать</span>
          </a>
          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
