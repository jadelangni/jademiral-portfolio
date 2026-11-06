import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, intro, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${className}`}>
      <div className="container-page">
        <Reveal>
          <header className="mb-12 max-w-2xl sm:mb-16">
            <h2
              id={`${id}-title`}
              className="font-display font-display-tight text-4xl text-white sm:text-5xl"
            >
              {title}
            </h2>
            {intro && <p className="mt-4 text-base leading-relaxed text-fog sm:text-lg">{intro}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
