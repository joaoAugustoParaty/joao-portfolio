import type { CategoryKey } from '../types'

type ProjectPreviewProps = {
  type: Exclude<CategoryKey, 'all'>
  featured?: boolean
}

export function ProjectPreview({ type, featured }: ProjectPreviewProps) {
  return <div className={`project-preview preview-${type} ${featured ? 'preview-featured' : ''}`} aria-hidden="true">
    <div className="preview-window"><div className="preview-top"><i /><i /><i /></div><div className="preview-body"><span className="preview-sidebar" /><div className="preview-content"><b /><b /><div><i /><i /><i /></div></div></div></div>
    <span className="preview-caption">interface preview</span>
  </div>
}
