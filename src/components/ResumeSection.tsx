import { Download } from 'lucide-react'
import type { PortfolioCopy } from '../data/content'
import type { Language } from '../types'
import { getResumeHref } from '../utils/resume'

type ResumeSectionProps = { language: Language; text: PortfolioCopy }

export function ResumeSection({ language, text }: ResumeSectionProps) {
  return <section id="curriculo" className="resume section-shell reveal">
    <div><p className="section-kicker"><span>05</span> {text.resumeLabel}</p><h2>{text.resumeBefore}<br /><em>{text.resumeEm}</em></h2></div>
    <a className="resume-button" href={getResumeHref(language)} download><Download /><span>{text.download}<small>{text.pdf}</small></span></a>
  </section>
}
