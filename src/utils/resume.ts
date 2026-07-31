import type { Language } from '../types'

const resumeFiles = {
  pt: 'curriculo-joao-augusto.pdf',
  en: 'curriculo-joao-augusto-en.pdf',
} satisfies Record<Language, string>

export function getResumeHref(language: Language) {
  return `${import.meta.env.BASE_URL}${resumeFiles[language]}`
}
