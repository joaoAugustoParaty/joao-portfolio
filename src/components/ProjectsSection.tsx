import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { PortfolioCopy } from '../data/content'
import type { CategoryKey } from '../types'
import { ProjectPreview } from './ProjectPreview'
import { SectionHeading } from './SectionHeading'

const categories: CategoryKey[] = ['all', 'education', 'web', 'management']

type ProjectsSectionProps = {
  text: PortfolioCopy
}

export function ProjectsSection({ text }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<CategoryKey>('all')
  const projects = filter === 'all'
    ? text.projects
    : text.projects.filter((project) => project.category === filter)

  return <section id="projetos" className="section-shell section-block">
    <SectionHeading index="02" label={text.projectsLabel} title={text.projectsTitle} description={text.projectsDescription} />
    <div className="filter-bar reveal" role="group" aria-label={text.filterLabel}>
      {categories.map((category) => <button key={category} type="button" className={filter === category ? 'active' : ''} aria-pressed={filter === category} onClick={() => setFilter(category)}>{text.filters[category]}</button>)}
    </div>
    <div className="projects-grid">
      {projects.map((project, index) => <article className={`project-card reveal ${project.featured ? 'featured' : ''}`} key={project.title}>
        <div className="project-index">0{index + 1} / {text.filters[project.category]}</div>
        <ProjectPreview type={project.category} featured={project.featured} />
        <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
        {project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${text.viewProject} ${project.title} — ${text.newTab}`}><ArrowUpRight /></a> : <span className="case-label">{project.featured ? text.mainCase : text.concept}</span>}
      </article>)}
    </div>
  </section>
}
