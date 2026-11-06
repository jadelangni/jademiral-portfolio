import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skillCategories } from '../data/skills'
import type { SkillStatus } from '../types'
import { cn } from '../lib/utils'
import { Reveal } from './Reveal'
import { Section } from './Section'

type Filter = 'all' | SkillStatus

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'used', label: 'Used in projects or work' },
  { id: 'learning', label: 'Currently learning' },
]

function StatusDot({ status }: { status: SkillStatus }) {
  return status === 'used' ? (
    <span className="h-2 w-2 shrink-0 rounded-full bg-jade-400" aria-hidden />
  ) : (
    <span className="h-2 w-2 shrink-0 rounded-full border-[1.5px] border-sugar-400" aria-hidden />
  )
}

export function Skills() {
  const [filter, setFilter] = useState<Filter>('all')

  return (
    <Section
      id="skills"
      title="Technical Skills & Tools"
      intro="Technologies I've applied in practical projects and tools I'm currently exploring to expand my capabilities."
    >
      <Reveal>
        <div
          role="group"
          aria-label="Filter skills by experience level"
          className="mb-10 flex flex-wrap gap-2"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                filter === f.id
                  ? 'border-jade-400 bg-jade-400 text-ink-950'
                  : 'border-white/10 text-fog hover:border-white/30 hover:text-white',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const visible = cat.skills.filter((s) => filter === 'all' || s.status === filter)
          const Icon = cat.icon
          return (
            <Reveal key={cat.id} delay={(i % 3) * 0.06}>
              <article
                className={cn(
                  'card h-full p-6 transition-all duration-300 hover:border-jade-400/25',
                  visible.length === 0 && 'opacity-40',
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.05] text-jade-300">
                    <Icon size={20} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{cat.title}</h3>
                    <p className="text-xs text-fog">{cat.description}</p>
                  </div>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {visible.map((s) => (
                      <motion.li
                        key={s.name}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        title={s.note}
                        className="flex items-center gap-2 rounded-full border border-white/[0.09] bg-ink-900/70 px-3 py-1.5 text-[13px] text-mist"
                      >
                        <StatusDot status={s.status} />
                        {s.name}
                        <span className="sr-only">
                          {s.status === 'used' ? ' (used)' : ' (learning)'}
                        </span>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
                {visible.length === 0 && (
                  <p className="mt-5 text-sm text-fog">Nothing in this group yet.</p>
                )}
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
