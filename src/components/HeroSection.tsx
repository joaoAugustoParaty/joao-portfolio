import { ArrowDownRight } from 'lucide-react'
import type { Language } from '../types'

type HeroSectionProps = {
  language: Language
  heroBefore: string
  heroEm: string
  heroAfter: string
  heroLead: string
  explore: string
  talk: string
  characterAlt: string
  scroll: string
  location: string
}

export function HeroSection(props: HeroSectionProps) {
  return <section id="inicio" className="hero section-shell">
    <div className="celestial-pulses" aria-hidden="true"><span className="pulse pulse-one" /><span className="pulse pulse-two" /><span className="pulse pulse-three" /></div>
    <div className="hero-copy reveal is-visible">
      <h1><span>João</span><span>Augusto</span></h1>
      <div className="hero-role">{props.language === 'pt' ? 'Desenvolvedor web & educador' : 'Web developer & educator'}</div>
      <p className="hero-manifesto">{props.heroBefore}<em>{props.heroEm}</em>{props.heroAfter}</p>
      <p className="hero-lead">{props.heroLead}</p>
      <div className="hero-actions"><a className="button button-primary" href="#projetos">{props.explore} <ArrowDownRight size={18} /></a><a className="button button-ghost" href="#contato">{props.talk}</a></div>
    </div>
    <div className="hero-visual reveal is-visible"><div className="portrait-frame"><img className="hero-character" src="/joao-personagem-recortado.webp" width="600" height="882" fetchPriority="high" alt={props.characterAlt} /></div></div>
    <div className="hero-foot reveal is-visible"><span>{props.scroll}</span><i /><span>{props.location}</span></div>
  </section>
}
