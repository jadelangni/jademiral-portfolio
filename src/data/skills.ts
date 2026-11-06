import { Braces, Database, Layers, Network, Palette, Server } from 'lucide-react'
import type { SkillCategory } from '../types'

/**
 * "used"     = I have used it in the capstone, my internship, or earlier work.
 * "learning" = I am actively learning it and have not shipped production work with it yet.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'support',
    title: 'IT Support',
    description: 'Hands-on technical support experience.',
    icon: Server,
    skills: [
      { name: 'Hardware & software troubleshooting', status: 'used' },
      { name: 'Software installation & configuration', status: 'used' },
      { name: 'Basic computer maintenance', status: 'used' },
    ],
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Foundational workplace networking skills.',
    icon: Network,
    skills: [
      { name: 'LAN cabling', status: 'used' },
      { name: 'Cable crimping', status: 'used' },
      { name: 'Networking fundamentals', status: 'learning' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Structuring and managing business data.',
    icon: Database,
    skills: [
      { name: 'MySQL', status: 'used', note: 'Database of the capstone POS' },
      { name: 'Database design', status: 'used', note: 'Designed for the capstone' },
      { name: 'ER diagram design', status: 'used', note: 'Designed for the capstone' },
    ],
  },
  {
    id: 'system-development',
    title: 'System Development',
    description: 'Academic project experience building business software.',
    icon: Braces,
    skills: [
      { name: 'Laravel', status: 'used', note: 'Core framework of the capstone POS' },
      { name: 'PHP', status: 'used', note: 'Capstone back end' },
      { name: 'Tailwind CSS', status: 'used', note: 'Styled the capstone interface' },
      { name: 'JavaScript', status: 'used', note: 'Interactive behavior in the POS' },
      { name: 'React', status: 'learning', note: 'Learning through this portfolio' },
      { name: 'TypeScript', status: 'learning', note: 'Learning through this portfolio' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Tools used for development and project work.',
    icon: Layers,
    skills: [
      { name: 'Git & GitHub', status: 'used' },
      { name: 'Visual Studio Code', status: 'used' },
      { name: 'XAMPP', status: 'used', note: 'Local MySQL/PHP environment' },
      { name: 'Composer', status: 'used' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional Skills',
    description: 'Transferable strengths from varied work experience.',
    icon: Palette,
    skills: [
      { name: 'Communication', status: 'used' },
      { name: 'Teamwork', status: 'used' },
      { name: 'Time management', status: 'used' },
      { name: 'Adaptability', status: 'used' },
      { name: 'Customer service', status: 'used', note: 'Qualfon, Dumaguete City' },
    ],
  },
]
