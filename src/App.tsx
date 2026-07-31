import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { CaseStudySection } from './components/CaseStudySection'
import { ContactSection } from './components/ContactSection'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { JourneySection } from './components/JourneySection'
import { MetricsSection } from './components/MetricsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ResumeSection } from './components/ResumeSection'
import { SiteFooter } from './components/SiteFooter'
import { TechnologiesSection } from './components/TechnologiesSection'
import { WhatsAppButton } from './components/WhatsAppButton'
import { copy } from './data/content'
import { useParallax } from './hooks/useParallax'
import { useReveal } from './hooks/useReveal'
import type { Language, Theme } from './types'
import './App.css'

const readPreference = (key: string) => {
  try { return localStorage.getItem(key) } catch { return null }
}

const savePreference = (key: string, value: string) => {
  try { localStorage.setItem(key, value) } catch { /* O site continua funcional sem persistência. */ }
}

const getStoredLanguage = (): Language => readPreference('portfolio-language') === 'en' ? 'en' : 'pt'
const getStoredTheme = (): Theme => {
  const saved = readPreference('portfolio-theme')
  if (saved === 'dark' || saved === 'light') return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}


function App() {
  const [language, setLanguage] = useState<Language>(getStoredLanguage)
  const [theme, setTheme] = useState<Theme>(getStoredTheme)
  const t = copy[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    savePreference('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    savePreference('portfolio-language', language)
    document.title = language === 'pt' ? 'João Augusto — Desenvolvedor & Educador' : 'João Augusto — Developer & Educator'
  }, [language])

  useReveal(language)
  useParallax()

  return <div className="portfolio">
    <a className="skip-link" href="#conteudo">{t.skip}</a><div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
    <Header language={language} theme={theme} text={t} onLanguage={() => setLanguage(language === 'pt' ? 'en' : 'pt')} onTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
    <main id="conteudo">
      <HeroSection language={language} heroBefore={t.heroBefore} heroEm={t.heroEm} heroAfter={t.heroAfter} heroLead={t.heroLead} explore={t.explore} talk={t.talk} characterAlt={t.characterAlt} scroll={t.scroll} location={t.location} />

      <AboutSection text={t} />
      <MetricsSection text={t} />

      <ProjectsSection key={language} text={t} />
      <CaseStudySection text={t} />
      <TechnologiesSection text={t} />
      <JourneySection text={t} />

      <ResumeSection language={language} text={t} />
      <ContactSection text={t} />
    </main>
    <WhatsAppButton language={language} />
    <SiteFooter text={t} />
  </div>
}

export default App
