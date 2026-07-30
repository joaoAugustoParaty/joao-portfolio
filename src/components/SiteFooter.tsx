import type { PortfolioCopy } from '../data/content'

type SiteFooterProps = { text: PortfolioCopy }

export function SiteFooter({ text }: SiteFooterProps) {
  return <footer className="footer section-shell">
    <div className="brand"><span className="brand-mark">JA</span><span>João Augusto<small>{text.brandSubtitle}</small></span></div>
    <p>{text.footer}</p>
    <a href="#inicio">{text.top}</a>
  </footer>
}
