import type { Education, Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 'ece',
    role: 'IT Support Intern',
    organization: 'ECE Contact Center',
    location: 'Dumaguete City',
    type: 'Internship',
    period: '5 Months',
    category: 'IT & TECHNICAL',
    summary:
      'Supported the daily technical needs of a contact center, from agent PCs to network cabling, as part of the IT team.',
    responsibilities: [
      'Provided technical assistance for hardware and software issues.',
      'Troubleshot computer and system-related problems.',
      'Assisted with software installation and configuration.',
      'Performed basic computer maintenance.',
      'Assisted with networking tasks, including LAN cable installation and crimping.',
    ],
    takeaways: [
      'Diagnosing problems methodically under time pressure',
      'Explaining technical issues in plain language',
    ],
  },
]

export const earlierRoles = [
  {
    role: 'Customer Service Representative',
    organization: 'Qualfon, Dumaguete City',
    period: 'July - October 2026',
    category: 'CUSTOMER SERVICE' as const,
    responsibilities: [
      'Assisted customers with inquiries and concerns.',
      'Developed communication and customer service skills.',
      'Handled customer interactions professionally.',
    ],
  },
  {
    role: 'Remotask - Data Annotation',
    organization: 'Remote',
    period: '2025',
    category: 'FREELANCE / REMOTE' as const,
    responsibilities: [
      'Completed data annotation and labeling tasks.',
      'Analyzed visual information and identified objects.',
      'Followed detailed task guidelines while maintaining accuracy.',
    ],
  },
  {
    role: 'Assistant Caterer',
    organization: 'Santander, Cebu',
    period: '2021 - 2026',
    category: 'HOSPITALITY' as const,
    responsibilities: [
      'Assisted with food preparation and catering arrangements.',
      'Supported food service and event operations.',
      'Coordinated with team members to ensure smooth service.',
    ],
  },
]

export const education: Education[] = [
  {
    id: 'bsit',
    degree: 'Bachelor of Science in Information Technology',
    school: 'Negros Oriental State University',
    location: 'Dumaguete City, Negros Oriental',
    graduation: 'June 2026',
    highlights: [
      'Capstone: Business Process Optimization through a Point-of-Sale System for Icy\u2019s Simplicitea.',
      'Coursework applied in practice: Software Engineering, Database Management, Systems Analysis, Web Development.',
    ],
  },
]
