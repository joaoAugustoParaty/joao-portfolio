import { useState, type FormEvent } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Check, Code2, Copy, Mail } from 'lucide-react'
import type { PortfolioCopy } from '../data/content'
import { githubProfileUrl, linkedinProfileUrl } from '../data/profile'
import { buildMailtoLink, emailAddress } from '../utils/mailto'
import { SectionHeading } from './SectionHeading'

type ContactSectionProps = { text: PortfolioCopy }

export function ContactSection({ text }: ContactSectionProps) {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    window.location.href = buildMailtoLink(text, { name: form.get('name'), email: form.get('email'), message: form.get('message') })
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopyStatus('success')
    } catch {
      setCopyStatus('error')
    }
    window.setTimeout(() => setCopyStatus('idle'), 2200)
  }

  return <section id="contato" className="contact section-block">
    <div className="section-shell">
      <SectionHeading index="06" label={text.contactLabel} title={text.contactTitle} description={text.contactDescription} />
      <div className="contact-layout">
        <div className="contact-info reveal"><div className="contact-glyph" aria-hidden="true">✦</div><p>{text.direct}</p><a href={`mailto:${emailAddress}`}><Mail /> {emailAddress}</a><button className="copy-email" type="button" onClick={copyEmail}>{copyStatus === 'success' ? <Check /> : <Copy />}{copyStatus === 'success' ? text.copiedEmail : copyStatus === 'error' ? text.copyError : text.copyEmail}</button><span className="sr-only" aria-live="polite">{copyStatus === 'success' ? text.copiedEmail : copyStatus === 'error' ? text.copyError : ''}</span><div className="socials"><a href={githubProfileUrl} target="_blank" rel="noreferrer"><Code2 /> GitHub<span className="sr-only"> — {text.newTab}</span></a><a href={linkedinProfileUrl} target="_blank" rel="noreferrer"><BriefcaseBusiness /> LinkedIn<span className="sr-only"> — {text.newTab}</span></a></div></div>
        <form className="contact-form reveal" onSubmit={handleSubmit}><div className="field"><label htmlFor="name">{text.name}</label><input id="name" name="name" type="text" autoComplete="name" required placeholder={text.namePlaceholder} /></div><div className="field"><label htmlFor="email">{text.email}</label><input id="email" name="email" type="email" autoComplete="email" required placeholder={text.emailPlaceholder} /></div><div className="field"><label htmlFor="message">{text.message}</label><textarea id="message" name="message" rows={4} required placeholder={text.messagePlaceholder} /></div><p className="form-note">{text.formNote}</p><button className="button button-primary" type="submit">{text.send} <ArrowUpRight size={18} /></button></form>
      </div>
    </div>
  </section>
}
