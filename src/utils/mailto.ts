import type { PortfolioCopy } from '../data/content'

const emailAddress = 'joao.augusto.neto@gmail.com'

export type MailtoFields = {
  name: FormDataEntryValue | null
  email: FormDataEntryValue | null
  message: FormDataEntryValue | null
}

export function buildMailtoLink(text: PortfolioCopy, fields: MailtoFields) {
  const subject = encodeURIComponent(`${text.mailSubject} — ${fields.name || text.newMessage}`)
  const body = encodeURIComponent(`${fields.message || ''}\n\n${text.replyEmail}: ${fields.email || ''}`)
  return `mailto:${emailAddress}?subject=${subject}&body=${body}`
}

export { emailAddress }
