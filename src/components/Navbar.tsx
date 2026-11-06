import { useEffect, useState, type MouseEvent as ReactMouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navItems, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { asset, cn, scrollToSection } from '../lib/utils'

const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact']

export function Navbar() {
  const active = useActiveSection(sectionIds)
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  // Close the menu with Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open])

  const go = (id: string) => (e: ReactMouseEvent) => {
    e.preventDefault()
    setOpen(false)
    // Wait for the menu exit animation and body scroll lock cleanup.
    window.setTimeout(() => scrollToSection(id), 300)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
        <a
          href="#home"
          onClick={go('home')}
          className="group flex items-center gap-3"
          aria-label={`${profile.name}, back to top`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-jade-400/40 bg-ink-800 font-display text-lg text-jade-300 transition-colors group-hover:border-jade-300">
            J
          </span>
          <span className="font-display text-xl text-white">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={go(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive ? 'text-white' : 'text-fog hover:text-white',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={asset(profile.resumeFile)}
            download
            className="hidden items-center gap-2 rounded-full border border-jade-400/50 px-4 py-2 text-sm font-semibold text-jade-300 transition-colors hover:bg-jade-400 hover:text-ink-950 sm:inline-flex"
          >
            <Download size={16} aria-hidden /> Download Resume
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 pb-6 pt-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={go(item.id)}
                    aria-current={active === item.id ? 'page' : undefined}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium',
                      active === item.id ? 'bg-white/[0.07] text-white' : 'text-fog',
                    )}
                  >
                    {item.label}
                    {active === item.id && <span className="h-1.5 w-1.5 rounded-full bg-jade-400" />}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={asset(profile.resumeFile)}
                  download
                  className="flex items-center justify-center gap-2 rounded-full bg-jade-400 px-5 py-3 text-sm font-semibold text-ink-950"
                >
                  <Download size={16} aria-hidden /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
