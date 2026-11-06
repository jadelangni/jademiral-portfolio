import { useState, type ChangeEvent, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Copy, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { cn } from '../lib/utils'
import { Button } from './Button'
import { Reveal } from './Reveal'
import { Section } from './Section'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}
type Errors = Partial<Record<keyof FormState, string>>
type Status = 'idle' | 'sending' | 'success' | 'error'

const empty: FormState = { name: '', email: '', subject: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v: FormState): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!emailPattern.test(v.email.trim())) e.email = 'Enter a valid email address, like name@company.com.'
  if (v.subject.trim().length < 3) e.subject = 'Add a short subject.'
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters so I know how to help.'
  return e
}

const inputClass =
  'mt-2 w-full rounded-xl border bg-ink-900/70 px-4 py-3 text-[15px] text-white placeholder:text-fog/60 transition-colors focus:border-jade-400 focus:outline-none focus:ring-2 focus:ring-jade-400/30'

export function Contact() {
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name as keyof FormState]) setErrors((er) => ({ ...er, [name]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  /**
   * This site has no server, so the form opens the visitor's email app with the
   * message pre-filled and addressed to me. To use a service such as Formspree
   * instead, replace the body of this function with a fetch() call.
   */
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`
      const href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
      window.location.href = href
      window.setTimeout(() => {
        setStatus('success')
        setValues(empty)
      }, 600)
    } catch {
      setStatus('error')
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const socials = [
    { label: 'LinkedIn', icon: Linkedin, href: profile.linkedin, hint: 'Add your LinkedIn URL in src/data/profile.ts' },
    { label: 'GitHub', icon: Github, href: profile.github, hint: 'Add your GitHub URL in src/data/profile.ts' },
  ]

  const fieldError = (key: keyof FormState) => errors[key]

  return (
    <Section
      id="contact"
      title="Let's talk about the next opportunity"
      intro="I'm open to IT support, web development, customer service, operations, and other roles where I can contribute professionally and continue growing. Send a note and I'll reply as soon as I can."
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <ul className="space-y-4">
            <li className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-jade-400/10 text-jade-300">
                <Mail size={20} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-fog">Email</p>
                <a href={`mailto:${profile.email}`} className="block truncate font-medium text-white hover:text-jade-300">
                  {profile.email}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-fog transition-colors hover:text-white"
              >
                {copied ? <CheckCircle2 size={16} className="text-jade-400" aria-hidden /> : <Copy size={16} aria-hidden />}
              </button>
              <span className="sr-only" role="status">{copied ? 'Email address copied' : ''}</span>
            </li>

            {socials.map(({ label, icon: Icon, href, hint }) => (
              <li key={label} className="card flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-jade-400/10 text-jade-300">
                  <Icon size={20} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-fog">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="block truncate font-medium text-jade-200 hover:text-jade-300">
                      Visit {label}
                    </a>
                  ) : (
                    <p className="text-sm text-sugar-300" title={hint}>
                      Profile link coming soon
                    </p>
                  )}
                </div>
              </li>
            ))}

            <li className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-jade-400/10 text-jade-300">
                <MapPin size={20} aria-hidden />
              </span>
              <div>
                <p className="text-xs text-fog">Location</p>
                <p className="font-medium text-white">{profile.location}</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
                <input id="name" name="name" autoComplete="name" value={values.name} onChange={onChange}
                  aria-invalid={!!fieldError('name')} aria-describedby={fieldError('name') ? 'name-error' : undefined}
                  className={cn(inputClass, fieldError('name') ? 'border-red-400/70' : 'border-white/10')} placeholder="Your name" />
                {fieldError('name') && <p id="name-error" className="mt-1.5 text-sm text-red-300">{fieldError('name')}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange}
                  aria-invalid={!!fieldError('email')} aria-describedby={fieldError('email') ? 'email-error' : undefined}
                  className={cn(inputClass, fieldError('email') ? 'border-red-400/70' : 'border-white/10')} placeholder="you@company.com" />
                {fieldError('email') && <p id="email-error" className="mt-1.5 text-sm text-red-300">{fieldError('email')}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium text-white">Subject</label>
              <input id="subject" name="subject" value={values.subject} onChange={onChange}
                aria-invalid={!!fieldError('subject')} aria-describedby={fieldError('subject') ? 'subject-error' : undefined}
                className={cn(inputClass, fieldError('subject') ? 'border-red-400/70' : 'border-white/10')} placeholder="Junior web developer opening" />
              {fieldError('subject') && <p id="subject-error" className="mt-1.5 text-sm text-red-300">{fieldError('subject')}</p>}
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
              <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange}
                aria-invalid={!!fieldError('message')} aria-describedby={fieldError('message') ? 'message-error' : undefined}
                className={cn(inputClass, 'resize-y', fieldError('message') ? 'border-red-400/70' : 'border-white/10')} placeholder="Tell me about the role or project." />
              {fieldError('message') && <p id="message-error" className="mt-1.5 text-sm text-red-300">{fieldError('message')}</p>}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Opening your email app...' : 'Send message'}
                <Send size={16} aria-hidden />
              </Button>
              <p className="text-xs text-fog">This opens your email app with the message ready to send.</p>
            </div>

            <div aria-live="polite">
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.p key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-start gap-3 rounded-xl border border-jade-400/30 bg-jade-400/[0.08] p-4 text-sm text-jade-200">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden />
                    Your email app should now be open with the message ready. Press send there to deliver it. If nothing opened, write to {profile.email}.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p key="err" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    role="alert" className="flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-400/[0.08] p-4 text-sm text-red-200">
                    <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden />
                    {Object.keys(errors).length > 0
                      ? 'The message was not sent. Fix the highlighted fields and try again.'
                      : `Something went wrong. Email me directly at ${profile.email}.`}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
