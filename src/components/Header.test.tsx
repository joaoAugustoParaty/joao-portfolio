import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { copy } from '../data/content'
import { Header } from './Header'

describe('Header', () => {
  const onLanguage = vi.fn()
  const onTheme = vi.fn()

  beforeEach(() => {
    onLanguage.mockClear()
    onTheme.mockClear()
  })

  it('abre o menu e permite fechá-lo com Escape', async () => {
    const user = userEvent.setup()
    render(<Header language="pt" theme="dark" text={copy.pt} onLanguage={onLanguage} onTheme={onTheme} />)

    const menuButton = screen.getByRole('button', { name: 'Abrir menu' })
    await user.click(menuButton)

    expect(screen.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toHaveFocus()
  })

  it('aciona os controles de tema e idioma', async () => {
    const user = userEvent.setup()
    render(<Header language="pt" theme="dark" text={copy.pt} onLanguage={onLanguage} onTheme={onTheme} />)

    await user.click(screen.getByRole('button', { name: 'Ativar tema claro' }))
    await user.click(screen.getByRole('button', { name: 'Mudar idioma para inglês' }))

    expect(onTheme).toHaveBeenCalledOnce()
    expect(onLanguage).toHaveBeenCalledOnce()
  })
})
