import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'
import { scrollToSection } from '../lib/utils'

/** Floating shortcut that appears after the first screen. */
export function BackToTop() {
  const show = useScrolled(700)
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() => scrollToSection('home')}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ y: -3 }}
          className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-jade-400/40 bg-ink-900/90 text-jade-300 shadow-glow backdrop-blur"
        >
          <ArrowUp size={18} aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
