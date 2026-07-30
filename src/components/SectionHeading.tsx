type SectionHeadingProps = {
  index: string
  label: string
  title: string
  description?: string
}

export function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return <div className="section-heading reveal">
    <div className="section-kicker"><span>{index}</span>{label}</div>
    <div className="section-title-row"><h2>{title}</h2>{description && <p>{description}</p>}</div>
  </div>
}
