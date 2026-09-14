import { useEffect, useState, type ImgHTMLAttributes } from 'react'

type Item = { src: string; alt?: string }

/** Открыть картинку на весь экран. Вызывается из любого места: openImage(src, alt). */
export function openImage(src: string, alt = '') {
  window.dispatchEvent(new CustomEvent<Item>('lightbox:open', { detail: { src, alt } }))
}

/** Картинка, которая открывается по клику. Обёртка над <img>. */
export function Zoomable(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { src = '', alt = '', className, ...rest } = props
  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      className={`zoomable ${className ?? ''}`}
      onClick={() => openImage(src, alt)}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openImage(src, alt) } }}
    />
  )
}

export default function Lightbox() {
  const [item, setItem] = useState<Item | null>(null)

  useEffect(() => {
    const onOpen = (e: Event) => setItem((e as CustomEvent<Item>).detail)
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setItem(null) }
    window.addEventListener('lightbox:open', onOpen)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('lightbox:open', onOpen); window.removeEventListener('keydown', onKey) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = item ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [item])

  if (!item) return null
  return (
    <div className="lightbox" onClick={() => setItem(null)} role="dialog" aria-modal="true" aria-label={item.alt || 'Изображение'}>
      <button type="button" className="lightbox-close" aria-label="Закрыть" onClick={() => setItem(null)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      <img src={item.src} alt={item.alt} onClick={e => e.stopPropagation()} />
      {item.alt && <div className="lightbox-caption">{item.alt}</div>}
    </div>
  )
}
