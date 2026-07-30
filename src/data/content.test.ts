import { describe, expect, it } from 'vitest'
import { copy } from './content'

function contentShape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(contentShape)
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, child]) => [key, contentShape(child)]),
    )
  }
  return typeof value
}

describe('conteúdo bilíngue', () => {
  it('mantém a mesma estrutura em português e inglês', () => {
    expect(contentShape(copy.en)).toEqual(contentShape(copy.pt))
  })

  it('mantém projetos e trajetória na mesma ordem semântica', () => {
    expect(copy.en.projects.map(({ category }) => category)).toEqual(copy.pt.projects.map(({ category }) => category))
    expect(copy.en.journey.map(({ icon }) => icon)).toEqual(copy.pt.journey.map(({ icon }) => icon))
  })
})
