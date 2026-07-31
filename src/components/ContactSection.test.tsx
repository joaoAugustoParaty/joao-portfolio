import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { copy } from '../data/content'
import { buildMailtoLink } from '../utils/mailto'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('copia o endereço de e-mail e informa o sucesso', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    const user = userEvent.setup()
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } })
    render(<ContactSection text={copy.pt} />)

    await user.click(screen.getByRole('button', { name: 'Copiar e-mail' }))

    expect(writeText).toHaveBeenCalledWith('joaodrow@gmail.com')
    expect(screen.getByRole('button', { name: 'E-mail copiado' })).toBeInTheDocument()
    expect(screen.getByText('E-mail copiado', { selector: '[aria-live]' })).toBeInTheDocument()
  })

  it('monta o link de contato com os dados codificados', () => {
    const link = buildMailtoLink(copy.pt, { name: 'João Teste', email: 'joao@exemplo.com', message: 'Olá, gostaria de conversar.' })

    expect(link).toContain('mailto:joaodrow@gmail.com')
    expect(decodeURIComponent(link)).toContain('Contato pelo portfólio — João Teste')
    expect(decodeURIComponent(link)).toContain('E-mail para retorno: joao@exemplo.com')
  })
})
