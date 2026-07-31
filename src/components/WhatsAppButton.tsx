import type { Language } from '../types'
import { whatsappUrl } from '../data/profile'

type WhatsAppButtonProps = {
  language: Language
}

export function WhatsAppButton({ language }: WhatsAppButtonProps) {
  const label = language === 'pt' ? 'Conversar pelo WhatsApp' : 'Chat on WhatsApp'

  return <a
    className="whatsapp-button"
    href={whatsappUrl}
    target="_blank"
    rel="noreferrer"
    aria-label={`${label} — ${language === 'pt' ? 'abre em nova aba' : 'opens in a new tab'}`}
    title={label}
  >
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M27.3 4.7A15.8 15.8 0 0 0 2.5 23.8L.3 31.7l8.1-2.1A15.7 15.7 0 0 0 16 31.5h.1A15.8 15.8 0 0 0 27.3 4.7Zm-11.2 24a13 13 0 0 1-6.6-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5A13 13 0 1 1 16 28.7Zm7.1-9.7c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-2.3-1.1-3.8-2-5.3-4.6-.4-.7.4-.7 1.1-2.1.1-.3 0-.5-.1-.7l-1.2-2.9c-.3-.7-.7-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 4 1.7 4.2c.2.3 2.9 4.5 7.1 6.3 2.6 1.1 3.6 1.2 4.9 1 1.5-.2 2.3-1 2.6-1.9.3-.9.3-1.7.2-1.9-.1-.3-.4-.4-.8-.6Z" />
    </svg>
  </a>
}
