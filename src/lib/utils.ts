/** Resolves a file in /public so the site also works when deployed under a sub-path. */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const cn = (...classes: Array<string | false | null | undefined>): string =>
  classes.filter(Boolean).join(' ')

export const scrollToSection = (id: string): void => {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  // Keep the URL shareable without triggering a jump.
  history.replaceState(null, '', `#${id}`)
}
