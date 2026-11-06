import type { NavItem, Profile } from '../types'

/**
 * EDIT ME. Everything personal lives here.
 * Leave `linkedin` / `github` empty until you have real URLs; the site shows
 * a clearly marked placeholder instead of a broken link.
 */
export const profile: Profile = {
  name: 'Jade Jason Miral',
  shortName: 'Jade',
  initials: 'JJM',
  headline: 'Adaptable IT Graduate',
  intro:
    "A motivated IT graduate with diverse professional experience, practical technical exposure, and a willingness to learn, adapt, and contribute across different roles and industries.",
  status: 'Open to opportunities',
  email: 'jadejasonm@gmail.com',
  location: 'Cebu, Philippines',
  linkedin: 'https://www.linkedin.com/in/miral-jade-443445390/',
  github: 'https://github.com/jadelangni',
  resumeFile: 'Jade-Jason-Miral-Resume.pdf',
  photo: 'jade.jpg',
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

/** Sections that should highlight a different nav item. */
export const navAliases: Record<string, string> = {
  education: 'experience',
}
