import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { copy } from '../data/content'
import { ProjectsSection } from './ProjectsSection'

describe('ProjectsSection', () => {
  it('filtra os projetos pela categoria selecionada', async () => {
    const user = userEvent.setup()
    render(<ProjectsSection text={copy.pt} />)

    expect(screen.getByRole('heading', { name: 'Diário Online' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Painel pedagógico' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Portfólio autoral' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Web' }))

    expect(screen.getByRole('button', { name: 'Web' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('heading', { name: 'Portfólio autoral' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Diário Online' })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Painel pedagógico' })).not.toBeInTheDocument()
  })
})
