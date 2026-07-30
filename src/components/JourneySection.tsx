import { BookOpen, Code2, GraduationCap } from 'lucide-react'
import type { PortfolioCopy } from '../data/content'
import type { JourneyIconKey } from '../data/types'
import { SectionHeading } from './SectionHeading'

type JourneySectionProps = { text: PortfolioCopy }

const journeyIcons: Record<JourneyIconKey, typeof Code2> = {
  code: Code2,
  education: GraduationCap,
  foundation: BookOpen,
}

export function JourneySection({ text }: JourneySectionProps) {
  return <section id="trajetoria" className="section-shell section-block">
    <SectionHeading index="04" label={text.journeyLabel} title={text.journeyTitle} />
    <div className="journey">{text.journey.map((item, index) => { const Icon = journeyIcons[item.icon]; return <article className="journey-item reveal" key={item.title}><div className="journey-marker"><Icon /><span>0{index + 1}</span></div><div className="journey-period">{item.period}</div><div><h3>{item.title}</h3><p>{item.description}</p></div></article> })}</div>
  </section>
}
