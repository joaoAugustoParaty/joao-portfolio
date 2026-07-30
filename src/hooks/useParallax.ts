import { useEffect } from 'react'

export function useParallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY, window.innerHeight * 1.15)
        document.documentElement.style.setProperty('--background-shift', `${progress * 0.11}px`)
        document.documentElement.style.setProperty('--pulse-shift', `${progress * 0.055}px`)
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', update)
      cancelAnimationFrame(frame)
    }
  }, [])
}
