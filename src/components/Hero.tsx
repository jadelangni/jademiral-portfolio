import { motion } from 'framer-motion'
import { ArrowDown, Download, GraduationCap, Store, Wrench } from 'lucide-react'
import { profile } from '../data/profile'
import { asset, scrollToSection } from '../lib/utils'
import { ButtonLink } from './Button'
import { Receipt } from './Receipt'

const facts = [
  { icon: GraduationCap, text: 'BSIT, Negros Oriental State University' },
  { icon: Wrench, text: '5-month IT support internship' },
  { icon: Store, text: 'Built a 3-branch POS system' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center pb-16 pt-28 sm:pt-32"
    >
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-jade-400/25 bg-jade-400/[0.07] px-3.5 py-1.5 text-sm text-jade-200"
          >
            <span className="h-2 w-2 animate-pulse-ring rounded-full bg-jade-400" aria-hidden />
            {profile.status}
          </motion.p>

          <motion.h1
            variants={item}
            id="hero-title"
            className="mt-7 font-display font-display-tight text-[3.4rem] leading-[0.98] text-white sm:text-7xl lg:text-[5.5rem]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl font-display text-2xl leading-snug text-mist sm:text-[1.9rem]"
          >
            {profile.headline}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-fog">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <ButtonLink
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
            >
              View My Projects <ArrowDown size={16} aria-hidden />
            </ButtonLink>
            <ButtonLink variant="secondary" href={asset(profile.resumeFile)} download>
              <Download size={16} aria-hidden /> Download Resume
            </ButtonLink>
          </motion.div>

          <motion.ul variants={item} className="mt-12 grid gap-3 sm:grid-cols-3">
            {facts.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-3 border-t border-white/[0.09] pt-4 text-sm leading-snug text-mist"
              >
                <Icon size={18} className="mt-0.5 shrink-0 text-jade-400" aria-hidden />
                {text}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Portrait + receipt composition */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative ml-auto w-[78%] sm:w-[72%]"
          >
            <div className="absolute -inset-3 -z-10 rounded-t-[999px] rounded-b-3xl bg-gradient-to-b from-jade-400/25 via-transparent to-sugar-400/20 blur-2xl" />
            <div className="overflow-hidden rounded-t-[999px] rounded-b-3xl border border-white/10 bg-ink-800 shadow-card">
              <img
                src={asset(profile.photo)}
                alt={`Portrait of ${profile.name}`}
                width={690}
                height={702}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </motion.div>

          <div className="relative z-10 -mt-24 sm:-mt-28">
            <Receipt />
          </div>
        </div>
      </div>
    </section>
  )
}
