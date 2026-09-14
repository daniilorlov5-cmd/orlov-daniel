import { useEffect, useRef, useState } from 'react'

const DEFAULT_ROOT_MARGIN = '0px 0px -120px 0px'

/** Один раз становится true, когда элемент заходит во вьюпорт. */
export function useInView<T extends HTMLElement>(rootMargin: string = DEFAULT_ROOT_MARGIN) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setInView(true); return }
    let io: IntersectionObserver
    try {
      io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setInView(true); io.disconnect() }
      }, { threshold: 0, rootMargin })
    } catch {
      setInView(true)
      return
    }
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])
  return { ref, inView }
}
