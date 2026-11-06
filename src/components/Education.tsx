import { GraduationCap } from 'lucide-react'
import { education } from '../data/experience'
import { Reveal } from './Reveal'

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="pb-20 sm:pb-28">
      <div className="container-page">
        <Reveal>
          <h2 id="education-title" className="font-display font-display-tight text-3xl text-white sm:text-4xl">
            Education
          </h2>
        </Reveal>

        <div className="mt-8 space-y-5">
          {education.map((e) => (
            <Reveal key={e.id}>
              <article className="card flex flex-col gap-6 p-6 sm:flex-row sm:p-8">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sugar-400/15 text-sugar-300">
                  <GraduationCap size={24} aria-hidden />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{e.degree}</h3>
                      <p className="mt-1 text-jade-200">{e.school}</p>
                      <p className="text-sm text-fog">{e.location}</p>
                    </div>
                    <p
                      aria-label={`Attendance period: ${e.graduation}`}
                      className={
                        e.graduationIsPlaceholder
                          ? 'rounded-md border border-dashed border-sugar-400/50 px-2 py-0.5 text-xs text-sugar-300'
                          : 'rounded-md bg-white/[0.06] px-3 py-1 text-sm font-medium text-mist'
                      }
                    >
                      Graduated: {e.graduation}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-2 text-[15px] leading-relaxed text-mist">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sugar-400" aria-hidden />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
