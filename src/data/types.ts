import type { CategoryKey, Language } from '../types'

export type NavItem = readonly [label: string, href: string]
export type MetricItem = readonly [value: string, title: string, subtitle: string]
export type ProjectCategory = Exclude<CategoryKey, 'all'>
export type JourneyIconKey = 'code' | 'education' | 'foundation'

export type AboutIntroduction = {
  before: string
  name: string
  after: string
}

export type ProjectContent = {
  title: string
  category: ProjectCategory
  description: string
  stack: string[]
  featured?: boolean
  href?: string
}

export type TechnologyGroup = {
  label: string
  items: string[]
}

export type JourneyItem = {
  period: string
  title: string
  description: string
  icon: JourneyIconKey
}

export type PortfolioCopy = {
  skip: string
  menuOpen: string
  menuClose: string
  navLabel: string
  nav: readonly NavItem[]
  resume: string
  themeLight: string
  themeDark: string
  language: string
  available: string
  overline: string
  heroBefore: string
  heroEm: string
  heroAfter: string
  heroLead: string
  explore: string
  talk: string
  characterAlt: string
  scroll: string
  location: string
  aboutLabel: string
  aboutTitle: string
  aboutQuote: string
  aboutOne: AboutIntroduction
  aboutTwo: string
  signature: string
  metricsLabel: string
  metrics: MetricItem[]
  projectsLabel: string
  projectsTitle: string
  projectsDescription: string
  filters: Record<CategoryKey, string>
  filterLabel: string
  projects: ProjectContent[]
  mainCase: string
  concept: string
  viewProject: string
  caseLabel: string
  caseTitle: string
  caseIntro: string
  caseProblemTitle: string
  caseProblem: string
  caseSolutionTitle: string
  caseSolution: string
  caseModulesTitle: string
  caseModules: string[]
  caseOutcomeTitle: string
  caseOutcome: string
  techLabel: string
  techTitle: string
  techDescription: string
  technologies: TechnologyGroup[]
  journeyLabel: string
  journeyTitle: string
  journey: JourneyItem[]
  resumeLabel: string
  resumeBefore: string
  resumeEm: string
  download: string
  pdf: string
  contactLabel: string
  contactTitle: string
  contactDescription: string
  direct: string
  copyEmail: string
  copiedEmail: string
  copyError: string
  name: string
  namePlaceholder: string
  email: string
  emailPlaceholder: string
  message: string
  messagePlaceholder: string
  send: string
  formNote: string
  footer: string
  top: string
  brandSubtitle: string
  mailSubject: string
  newMessage: string
  replyEmail: string
  newTab: string
}

export type PortfolioContent = Record<Language, PortfolioCopy>
