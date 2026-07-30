import { Check } from 'lucide-react'
import type { PortfolioCopy } from '../data/content'
import { SectionHeading } from './SectionHeading'

type CaseStudySectionProps = { text: PortfolioCopy }

export function CaseStudySection({ text }: CaseStudySectionProps) {
  return <section className="case-study section-block">
    <div className="section-shell">
      <SectionHeading index="02.1" label={text.caseLabel} title={text.caseTitle} description={text.caseIntro} />
      <div className="case-grid">
        <article className="case-panel reveal"><span>01</span><h3>{text.caseProblemTitle}</h3><p>{text.caseProblem}</p></article>
        <article className="case-panel reveal"><span>02</span><h3>{text.caseSolutionTitle}</h3><p>{text.caseSolution}</p></article>
        <article className="case-panel case-modules reveal"><span>03</span><h3>{text.caseModulesTitle}</h3><ul>{text.caseModules.map((module) => <li key={module}><Check />{module}</li>)}</ul></article>
        <article className="case-panel case-outcome reveal"><span>04</span><h3>{text.caseOutcomeTitle}</h3><p>{text.caseOutcome}</p></article>
      </div>
    </div>
  </section>
}
