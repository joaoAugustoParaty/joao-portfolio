import { Sparkles } from 'lucide-react'
import type { PortfolioCopy } from '../data/content'
import { SectionHeading } from './SectionHeading'

type AboutSectionProps = { text: PortfolioCopy }

export function AboutSection({ text }: AboutSectionProps) {
  return <section id="sobre" className="section-shell section-block">
    <SectionHeading index="01" label={text.aboutLabel} title={text.aboutTitle} />
    <div className="about-layout">
      <div className="about-statement reveal"><Sparkles size={30} /><p>{text.aboutQuote}</p></div>
      <div className="about-copy reveal"><p>{text.aboutOne.before}<strong>{text.aboutOne.name}</strong>{text.aboutOne.after}</p><p>{text.aboutTwo}</p><div className="about-signature">JA <span>{text.signature}</span></div></div>
    </div>
  </section>
}
