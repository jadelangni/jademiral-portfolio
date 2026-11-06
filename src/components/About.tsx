import { Eye, Lightbulb, Puzzle, ScanSearch, Sprout, Wrench } from 'lucide-react'
import { Reveal } from './Reveal'
import { Section } from './Section'

const strengths = [
  {
    icon: Lightbulb,
    title: 'Creativity',
    text: 'Thinking beyond the usual approach.',
  },
  {
    icon: Puzzle,
    title: 'Adaptability',
    text: 'Adjusting to different environments.',
  },
  {
    icon: Eye,
    title: 'Communication',
    text: 'Connecting and working with people.',
  },
  {
    icon: Wrench,
    title: 'Problem-solving',
    text: 'Finding practical solutions.',
  },
  {
    icon: ScanSearch,
    title: 'Attention to Detail',
    text: 'Maintaining accuracy and quality.',
  },
  {
    icon: Sprout,
    title: 'Continuous Learning',
    text: 'Always improving and exploring.',
  },
]

export function About() {
  return (
    <Section
      id="about"
      title="Ready to contribute and keep growing"
      intro="My technical foundation and varied professional experiences have prepared me to contribute across different roles and working environments."
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <div className="max-w-prose space-y-5 text-[1.05rem] leading-[1.8] text-mist">
            <p>
              I am a Bachelor of Science in Information Technology graduate from Negros Oriental
              State University with experience in IT support, customer service, data annotation, and
              business operations.
            </p>
            <p>
              Throughout my academic and professional journey, I have developed an appreciation for
              technology, problem-solving, teamwork, and continuous learning. My experiences have
              taught me to adapt to different responsibilities, communicate effectively, and approach
              challenges with an open mind.
            </p>
            <p>
              I also gained practical experience collaborating on the development of Icy&apos;s
              Simplicitea, a multi-branch POS and inventory management system for a real milk tea
              business. This allowed me to explore system development, database management, and how
              technology can improve everyday business processes.
            </p>
            <p className="text-fog">
              As I begin my professional career, I&apos;m open to opportunities across different
              industries and roles where I can apply my existing skills, learn new things, contribute
              to a team, and continue developing professionally.
            </p>
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {strengths.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.06}>
                <div className="card flex gap-4 p-5 transition-colors hover:border-jade-400/30">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-jade-400/10 text-jade-300">
                    <Icon size={20} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-fog">{text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
