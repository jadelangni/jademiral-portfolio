import type { LucideIcon } from 'lucide-react'

/* ---------- Skills ---------- */
export type SkillStatus = 'used' | 'learning'

export interface Skill {
  name: string
  status: SkillStatus
  /** Short, honest context shown on hover / to screen readers. */
  note?: string
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  icon: LucideIcon
  skills: Skill[]
}

/* ---------- Projects ---------- */
export interface Screenshot {
  /** File name inside /public/screenshots */
  file: string
  caption: string
  /** Figure reference from the capstone document, e.g. "Figure 16" */
  figure?: string
}

export interface ProjectFeature {
  title: string
  description: string
  icon: LucideIcon
}

export interface ProjectMetric {
  label: string
  value: string
  note: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  summary: string
  problem: string
  role: string
  contributions: string[]
  tech: string[]
  features: ProjectFeature[]
  metrics?: ProjectMetric[]
  metricsSource?: string
  screenshots: Screenshot[]
  links: {
    /** Leave undefined until a real URL exists. The button renders as disabled. */
    live?: string
    repo?: string
  }
  featured?: boolean
}

/* ---------- Experience & education ---------- */
export type ExperienceCategory = 'IT & TECHNICAL' | 'CUSTOMER SERVICE' | 'FREELANCE / REMOTE' | 'HOSPITALITY'

export interface Experience {
  id: string
  role: string
  organization: string
  location: string
  type: string
  period: string
  periodIsPlaceholder?: boolean
  category: ExperienceCategory
  summary: string
  responsibilities: string[]
  takeaways?: string[]
}

export interface Education {
  id: string
  degree: string
  school: string
  location: string
  graduation: string
  graduationIsPlaceholder?: boolean
  highlights: string[]
}

/* ---------- Profile ---------- */
export interface NavItem {
  id: string
  label: string
}

export interface Profile {
  name: string
  shortName: string
  initials: string
  headline: string
  intro: string
  status: string
  email: string
  location: string
  linkedin?: string
  github?: string
  resumeFile: string
  photo: string
}
