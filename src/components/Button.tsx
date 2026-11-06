import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 select-none'

const variants: Record<Variant, string> = {
  primary: 'bg-jade-400 text-ink-950 hover:bg-jade-300',
  secondary: 'border border-white/15 text-white hover:border-jade-400/60 hover:bg-white/[0.04]',
  ghost: 'text-mist hover:text-white',
}

const disabledStyle =
  'cursor-not-allowed border border-dashed border-white/15 text-fog/80 bg-transparent'

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type ActionProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>

/** Anchor styled as a button. */
export function ButtonLink({ variant = 'primary', className, children, ...rest }: LinkProps) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, variants[variant], className)}
      {...(rest as object)}
    >
      {children}
    </motion.a>
  )
}

/** Native button with the same look. */
export function Button({ variant = 'primary', className, children, ...rest }: ActionProps) {
  return (
    <button
      className={cn(
        base,
        variants[variant],
        'active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

interface UnavailableProps {
  children: ReactNode
  reason: string
  className?: string
}

/**
 * Honest stand-in for a link that does not exist yet.
 * It looks inactive, is announced as disabled, and explains why.
 */
export function UnavailableButton({ children, reason, className }: UnavailableProps) {
  return (
    <span
      role="link"
      aria-disabled="true"
      title={reason}
      className={cn(base, disabledStyle, className)}
    >
      {children}
      <span className="sr-only">. {reason}</span>
    </span>
  )
}
