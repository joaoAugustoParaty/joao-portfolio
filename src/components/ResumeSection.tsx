import { Download } from 'lucide-react'
import type { PortfolioCopy } from '../data/content'

type ResumeSectionProps = { text: PortfolioCopy }

export function ResumeSection({ text }: ResumeSectionProps) {
  return <section id="curriculo" className="resume section-shell reveal">
    <div><p className="section-kicker"><span>05</span> {text.resumeLabel}</p><h2>{text.resumeBefore}<br /><em>{text.resumeEm}</em></h2></div>
    <a className="resume-button" href={`${import.meta.env.BASE_URL}curriculo-joao-augusto.pdf`} download><Download /><span>{text.download}<small>{text.pdf}</small></span></a>
  </section>
}
