import { describe, expect, it } from 'vitest'
import indexHtml from '../../index.html?raw'

const portfolioUrl = 'https://joaoaugustoparaty.github.io/joao-portfolio/'
const socialImageUrl = `${portfolioUrl}og.png`

describe('metadados públicos', () => {
  it('usa URLs absolutas para a página e a imagem de compartilhamento', () => {
    expect(indexHtml).toContain(`<link rel="canonical" href="${portfolioUrl}" />`)
    expect(indexHtml).toContain(`<meta property="og:url" content="${portfolioUrl}" />`)
    expect(indexHtml).toContain(`<meta property="og:image" content="${socialImageUrl}" />`)
    expect(indexHtml).toContain(`<meta name="twitter:image" content="${socialImageUrl}" />`)
    expect(indexHtml).not.toContain('content="/og.png"')
  })
})
