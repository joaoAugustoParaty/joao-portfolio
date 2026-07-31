import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { whatsappUrl } from '../data/profile'
import { WhatsAppButton } from './WhatsAppButton'

describe('WhatsAppButton', () => {
  it('abre a conversa no número correto em uma nova aba', () => {
    render(<WhatsAppButton language="pt" />)

    const link = screen.getByRole('link', { name: /Conversar pelo WhatsApp/ })
    expect(link).toHaveAttribute('href', whatsappUrl)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('oferece um rótulo acessível em inglês', () => {
    render(<WhatsAppButton language="en" />)

    expect(screen.getByRole('link', { name: /Chat on WhatsApp/ })).toBeInTheDocument()
  })
})
