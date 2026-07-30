import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { copy } from '../data/content'
import { AboutSection } from './AboutSection'
import { MetricsSection } from './MetricsSection'
import { ResumeSection } from './ResumeSection'
import { SiteFooter } from './SiteFooter'

describe('seções institucionais', () => {
  it('renderiza o conteúdo principal em português', () => {
    render(<><AboutSection text={copy.pt} /><MetricsSection text={copy.pt} /><ResumeSection text={copy.pt} /><SiteFooter text={copy.pt} /></>)

    expect(screen.getByRole('heading', { name: /Entre números, pessoas e possibilidades/ })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Indicadores profissionais' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(4)
    expect(screen.getByRole('link', { name: /Baixar currículo/ })).toHaveAttribute('download')
    expect(screen.getByText('Projetado e desenvolvido com intenção.')).toBeInTheDocument()
  })

  it('renderiza os mesmos elementos traduzidos para inglês', () => {
    render(<><AboutSection text={copy.en} /><MetricsSection text={copy.en} /><ResumeSection text={copy.en} /><SiteFooter text={copy.en} /></>)

    expect(screen.getByRole('heading', { name: /Between numbers, people and possibilities/ })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Professional indicators' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Download résumé/ })).toBeInTheDocument()
    expect(screen.getByText('Designed and developed with intention.')).toBeInTheDocument()
  })
})
