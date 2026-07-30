import type { PortfolioCopy } from '../data/content'
import { SectionHeading } from './SectionHeading'

type TechnologiesSectionProps = { text: PortfolioCopy }

export function TechnologiesSection({ text }: TechnologiesSectionProps) {
  return <section id="tecnologias" className="tech-section section-block">
    <div className="section-shell">
      <SectionHeading index="03" label={text.techLabel} title={text.techTitle} description={text.techDescription} />
      <div className="tech-grid">{text.technologies.map((group, index) => <article className="tech-group reveal" key={group.label}><div className="tech-number">0{index + 1}</div><h3>{group.label}</h3><ul>{group.items.map((item) => <li key={item}><span>✦</span>{item}</li>)}</ul></article>)}</div>
    </div>
  </section>
}
