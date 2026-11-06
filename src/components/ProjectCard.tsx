import type { ReactNode } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../types'
import { ButtonLink, UnavailableButton } from './Button'
import { Reveal } from './Reveal'
import { ScreenshotGallery } from './ScreenshotGallery'

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-2xl text-white">{title}</h4>
      <div className="mt-3 text-[15px] leading-relaxed text-mist">{children}</div>
    </div>
  )
}

/**
 * Reusable project card. Pass any Project from data/projects.ts.
 * The featured variant expands into the full case study.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { links } = project

  return (
    <Reveal>
      <article
        aria-labelledby={`${project.id}-title`}
        className="card relative overflow-hidden p-6 sm:p-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-jade-400/10 blur-3xl"
        />

        {/* Header */}
        <header className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {project.featured && (
              <p className="mb-3 inline-block rounded-full bg-sugar-400/15 px-3 py-1 text-xs font-semibold text-sugar-300">
                Featured capstone project
              </p>
            )}
            <h3
              id={`${project.id}-title`}
              className="font-display font-display-tight text-4xl text-white sm:text-5xl"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-lg text-jade-200">{project.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.live ? (
              <ButtonLink href={links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} aria-hidden /> Live Demo
              </ButtonLink>
            ) : (
              <UnavailableButton reason="Live demo link not added yet">
                <ExternalLink size={16} aria-hidden /> Live Demo
              </UnavailableButton>
            )}
            {links.repo ? (
              <ButtonLink
                variant="secondary"
                href={links.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} aria-hidden /> GitHub Repository
              </ButtonLink>
            ) : (
              <UnavailableButton reason="GitHub repository link not added yet">
                <Github size={16} aria-hidden /> GitHub Repository
              </UnavailableButton>
            )}
          </div>
        </header>

        <p className="relative mt-8 max-w-3xl text-lg leading-relaxed text-mist">{project.summary}</p>

        <ul className="relative mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-jade-400/25 bg-jade-400/[0.06] px-3 py-1 text-[13px] text-jade-200"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Problem / role */}
        <div className="relative mt-12 grid gap-10 border-t hairline pt-10 md:grid-cols-2">
          <Block title="The problem">
            <p>{project.problem}</p>
          </Block>
          <Block title="My role">
            <p>{project.role}</p>
            <ul className="mt-4 space-y-2">
              {project.contributions.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-jade-400" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </Block>
        </div>

        {/* Features */}
        <div className="relative mt-12 border-t hairline pt-10">
          <h4 className="font-display text-2xl text-white">What the system does</h4>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="rounded-xl border border-white/[0.07] bg-ink-900/60 p-5 transition-colors hover:border-jade-400/30"
              >
                <Icon size={20} className="text-jade-300" aria-hidden />
                <h5 className="mt-3 font-semibold text-white">{title}</h5>
                <p className="mt-1.5 text-sm leading-relaxed text-fog">{description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="relative mt-12 border-t hairline pt-10">
            <h4 className="font-display text-2xl text-white">How it was evaluated</h4>
            <dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="text-sm text-fog">{m.label}</dt>
                  <dd className="mt-1 font-display text-3xl text-white">{m.value}</dd>
                  <dd className="mt-1 text-xs text-fog">{m.note}</dd>
                </div>
              ))}
            </dl>
            {project.metricsSource && (
              <p className="mt-5 text-xs text-fog">{project.metricsSource}</p>
            )}
          </div>
        )}

        {/* Screenshots */}
        <div className="relative mt-12 border-t hairline pt-10">
          <h4 className="font-display text-2xl text-white">Inside the system</h4>
          <div className="mt-6">
            <ScreenshotGallery screenshots={project.screenshots} />
          </div>
        </div>
      </article>
    </Reveal>
  )
}
