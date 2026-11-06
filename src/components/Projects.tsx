import { Sprout } from 'lucide-react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Projects() {
  return (
    <Section
      id="projects"
      title="Something I built, end to end"
      intro="My main practical software project so far is a real system for a real business. More will appear here as I build them."
    >
      <div className="space-y-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}

        <Reveal>
          <div className="flex items-center gap-4 rounded-2xl border border-dashed border-white/15 p-6 text-sm text-fog">
            <Sprout size={20} className="shrink-0 text-jade-400" aria-hidden />
            <p>
              This portfolio itself is my current practice project, built with React, TypeScript,
              Tailwind CSS, and Framer Motion while I learn them.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
