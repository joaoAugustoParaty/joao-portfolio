import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Languages, Menu, Moon, Sun, X } from 'lucide-react'
import type { Language, Theme } from '../types'

type HeaderText = {
  brandSubtitle: string
  menuOpen: string
  menuClose: string
  navLabel: string
  nav: readonly (readonly [label: string, href: string])[]
  themeLight: string
  themeDark: string
  language: string
  resume: string
}

type HeaderProps = {
  language: Language
  theme: Theme
  text: HeaderText
  onLanguage: () => void
  onTheme: () => void
}

export function Header({ language, theme, text, onLanguage, onTheme }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButtonRef.current?.focus()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px)')
    const closeOnDesktop = (event: MediaQueryListEvent) => event.matches && setOpen(false)
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  return <header className="site-header">
    <a className="brand" href="#inicio" aria-label={language === 'pt' ? 'Ir ao início' : 'Go to home'}><span className="brand-mark">JA</span><span>João Augusto<small>{text.brandSubtitle}</small></span></a>
    <button ref={menuButtonRef} className="menu-toggle" type="button" aria-label={open ? text.menuClose : text.menuOpen} aria-expanded={open} aria-controls="main-navigation" aria-haspopup="true" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="main-navigation" className={open ? 'main-nav is-open' : 'main-nav'} aria-label={text.navLabel}>
      {text.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <div className="nav-controls">
        <button className="utility-button" type="button" onClick={onTheme} aria-label={theme === 'dark' ? text.themeLight : text.themeDark} title={theme === 'dark' ? text.themeLight : text.themeDark}>{theme === 'dark' ? <Sun /> : <Moon />}</button>
        <button className="utility-button language-button" type="button" onClick={onLanguage} aria-label={text.language} title={text.language}><Languages /><span>{language === 'pt' ? 'EN' : 'PT'}</span></button>
      </div>
      <a className="nav-cta" href={`${import.meta.env.BASE_URL}curriculo-joao-augusto.pdf`} target="_blank" rel="noreferrer">{text.resume}<span className="sr-only"> — {language === 'pt' ? 'abre em nova aba' : 'opens in a new tab'}</span> <ArrowUpRight size={15} /></a>
    </nav>
  </header>
}
