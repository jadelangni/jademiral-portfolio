import { Briefcase, Check } from 'lucide-react'
import { earlierRoles, experiences } from '../data/experience'
import { projects } from '../data/projects'
import { Reveal } from './Reveal'
import { Section } from './Section'

const categoryClass = 'mb-3 inline-flex rounded-full border border-jade-400/25 bg-jade-400/[0.07] px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-jade-200'

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience and practical work"
      intro="My technical training, academic project, and earlier professional experiences show how I solve problems, communicate clearly, and adapt to different working environments."
    >
      <ol className="relative space-y-10 border-l border-white/10 pl-8 sm:pl-10">
        {experiences.map((exp) => (
          <li key={exp.id} className="relative">
            <span
              aria-hidden
              className="absolute -left-[2.6rem] top-1.5 grid h-8 w-8 place-items-center rounded-full border border-jade-400/50 bg-ink-900 text-jade-300 sm:-left-[3.1rem]"
            >
              <Briefcase size={15} />
            </span>

            <Reveal>
              <div className="card p-6 sm:p-8">
                <span className={categoryClass}>{exp.category}</span>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-3xl text-white">{exp.role}</h3>
                    <p className="mt-1 text-jade-200">{exp.organization} · {exp.location}</p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="rounded-full bg-white/[0.06] px-3 py-1 text-mist">{exp.type}</p>
                    {exp.period && <p className="mt-2 text-xs text-fog">{exp.period}</p>}
                  </div>
                </div>

                <p className="mt-5 max-w-2xl leading-relaxed text-mist">{exp.summary}</p>

                <ul className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-[15px] leading-snug text-mist">
                      <Check size={16} className="mt-0.5 shrink-0 text-jade-400" aria-hidden />
                      {r}
                    </li>
                  ))}
                </ul>

                {exp.takeaways && (
                  <div className="mt-7 border-t hairline pt-5">
                    <p className="text-sm font-semibold text-white">What I took from it</p>
                    <ul className="mt-2 space-y-1 text-sm text-fog">
                      {exp.takeaways.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal>
        <div className="mt-12">
          <h3 className="font-display text-2xl text-white">Academic &amp; personal projects</h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.id} className="rounded-xl border border-white/[0.07] p-5">
                <span className={categoryClass}>ACADEMIC PROJECT</span>
                <p className="font-semibold text-white">{project.title} - {project.tagline}</p>
                <p className="mt-1 text-sm text-jade-200">Capstone Project · 3 Branches</p>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  System development team member contributing to planning, database design, interface
                  development, module implementation, and testing.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-12">
          <h3 className="font-display text-2xl text-white">Additional professional experience</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fog">
            These roles strengthened my communication, collaboration, accuracy, and ability to
            follow instructions in different working environments.
          </p>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {earlierRoles.map((r) => (
              <li key={r.role} className="rounded-xl border border-white/[0.07] p-5">
                <span className={categoryClass}>{r.category}</span>
                <p className="font-semibold text-white">{r.role}</p>
                <p className="text-sm text-jade-200">{r.organization}</p>
                <p className="mt-1 text-xs text-fog">{r.period}</p>
                <ul className="mt-3 space-y-2">
                  {r.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex gap-2 text-sm leading-relaxed text-fog">
                      <Check size={14} className="mt-1 shrink-0 text-jade-400" aria-hidden />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
