import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  it('alterna tema e idioma preservando as preferências', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Ativar tema claro' }))
    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(localStorage.getItem('portfolio-theme')).toBe('light')

    await user.click(screen.getByRole('button', { name: 'Mudar idioma para inglês' }))
    expect(document.documentElement).toHaveAttribute('lang', 'en')
    expect(localStorage.getItem('portfolio-language')).toBe('en')
    expect(screen.getByRole('heading', { name: /Between numbers, people and possibilities/ })).toBeInTheDocument()
  })
})
