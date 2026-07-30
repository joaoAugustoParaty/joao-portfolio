import type { PortfolioCopy } from '../data/content'

type MetricsSectionProps = { text: PortfolioCopy }

export function MetricsSection({ text }: MetricsSectionProps) {
  return <section className="metrics-wrap" aria-label={text.metricsLabel}>
    <div className="metrics section-shell">
      {text.metrics.map(([value, title, subtitle]) => <article className="metric reveal" key={title}><strong>{value}</strong><div><span>{title}</span><small>{subtitle}</small></div></article>)}
    </div>
  </section>
}
