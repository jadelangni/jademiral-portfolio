import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { navItems, profile } from '../data/profile'
import { scrollToSection } from '../lib/utils'

export function Footer() {
  const socials = [
    { label: 'Email', icon: Mail, href: `mailto:${profile.email}` },
    ...(profile.linkedin ? [{ label: 'LinkedIn', icon: Linkedin, href: profile.linkedin }] : []),
    ...(profile.github ? [{ label: 'GitHub', icon: Github, href: profile.github }] : []),
  ]

  return (
    <footer className="border-t hairline py-12">
      <div className="container-page flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-2xl text-white">{profile.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-fog">
            Adaptable IT graduate, ready to contribute professionally and grow with a strong team.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(n.id)
              }}
              className="text-fog transition-colors hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <ul className="flex gap-3">
          {socials.map(({ label, icon: Icon, href }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist transition-colors hover:border-jade-400/50 hover:text-jade-300"
              >
                <Icon size={18} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page mt-10 flex flex-wrap items-center justify-between gap-4 border-t hairline pt-6 text-xs text-fog">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Tailwind CSS
          and Framer Motion.
        </p>
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-mist transition-colors hover:border-jade-400/50 hover:text-white"
        >
          Back to top <ArrowUp size={14} aria-hidden />
        </button>
      </div>
    </footer>
  )
}
