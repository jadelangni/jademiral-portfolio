import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ImageOff, Maximize2, X } from 'lucide-react'
import type { Screenshot } from '../types'
import { asset, cn } from '../lib/utils'

type Status = 'loading' | 'ok' | 'missing'

interface TileProps {
  shot: Screenshot
  onStatus: (file: string, status: Status) => void
  onOpen: () => void
  status: Status
}

function Tile({ shot, onStatus, onOpen, status }: TileProps) {
  const src = asset(`screenshots/${shot.file}`)
  const ready = status === 'ok'

  return (
    <figure className="group">
      <button
        type="button"
        onClick={onOpen}
        disabled={!ready}
        aria-label={ready ? `Enlarge screenshot: ${shot.caption}` : `${shot.caption}: screenshot not added yet`}
        className={cn(
          'relative block aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-ink-900 text-left',
          ready && 'cursor-zoom-in transition-colors hover:border-jade-400/50',
        )}
      >
        <img
          src={src}
          alt={shot.caption}
          decoding="async"
          onLoad={() => onStatus(shot.file, 'ok')}
          onError={() => onStatus(shot.file, 'missing')}
          className={cn(
            'absolute inset-0 h-full w-full object-cover object-top transition duration-500',
            ready ? 'opacity-100 group-hover:scale-[1.03]' : 'opacity-0',
          )}
        />

        {ready && (
          <span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-ink-950/70 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
            <Maximize2 size={14} aria-hidden />
          </span>
        )}

        {!ready && (
          <span className="absolute inset-0 flex flex-col">
            {/* Browser-window chrome so an empty slot still looks intentional */}
            <span className="flex items-center gap-1.5 border-b border-white/[0.07] px-3 py-2" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="h-2 w-2 rounded-full bg-white/15" />
              <span className="ml-2 h-2 flex-1 rounded-full bg-white/[0.06]" />
            </span>
            <span className="flex flex-1 flex-col items-center justify-center gap-2 px-4 text-center">
              {status === 'loading' ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/10 border-t-jade-400" role="status">
                  <span className="sr-only">Loading screenshot</span>
                </span>
              ) : (
                <>
                  <ImageOff size={18} className="text-fog" aria-hidden />
                  <span className="text-xs text-fog">
                    Add <code className="rounded bg-white/[0.06] px-1 py-0.5 text-[11px] text-sugar-300">public/screenshots/{shot.file}</code>
                  </span>
                </>
              )}
            </span>
          </span>
        )}
      </button>
      <figcaption className="mt-2 text-[13px] leading-snug text-mist">
        {shot.caption}
        {shot.figure && <span className="text-fog"> ({shot.figure})</span>}
      </figcaption>
    </figure>
  )
}

interface LightboxProps {
  items: Screenshot[]
  index: number
  onClose: () => void
  onChange: (index: number) => void
}

function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const item = items[index]
  const prev = useCallback(() => onChange((index - 1 + items.length) % items.length), [index, items.length, onChange])
  const next = useCallback(() => onChange((index + 1) % items.length), [index, items.length, onChange])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose, prev, next])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Screenshot viewer: ${item.caption}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close viewer"
        autoFocus
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white hover:bg-white/10"
      >
        <X size={20} aria-hidden />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-white hover:bg-white/10"
          >
            <ChevronLeft size={22} aria-hidden />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-white hover:bg-white/10"
          >
            <ChevronRight size={22} aria-hidden />
          </button>
        </>
      )}

      <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={asset(`screenshots/${item.file}`)}
          alt={item.caption}
          className="max-h-[78vh] w-auto rounded-xl border border-white/10 object-contain shadow-card"
        />
        <figcaption className="mt-3 text-center text-sm text-mist">
          {item.caption}
          {item.figure && <span className="text-fog"> ({item.figure})</span>}
          <span className="ml-2 text-fog">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>
    </motion.div>
  )
}

export function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [statuses, setStatuses] = useState<Record<string, Status>>({})
  const [openFile, setOpenFile] = useState<string | null>(null)

  const onStatus = useCallback((file: string, status: Status) => {
    setStatuses((s) => (s[file] === status ? s : { ...s, [file]: status }))
  }, [])

  // Only screenshots that actually loaded can be viewed full size.
  const loaded = screenshots.filter((s) => statuses[s.file] === 'ok')
  const openIndex = loaded.findIndex((s) => s.file === openFile)
  const missingCount = screenshots.filter((s) => statuses[s.file] === 'missing').length
  const close = useCallback(() => setOpenFile(null), [])

  return (
    <div>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
        {screenshots.map((shot) => (
          <li key={shot.file}>
            <Tile
              shot={shot}
              status={statuses[shot.file] ?? 'loading'}
              onStatus={onStatus}
              onOpen={() => setOpenFile(shot.file)}
            />
          </li>
        ))}
      </ul>

      {missingCount > 0 && (
        <p className="mt-6 rounded-xl border border-dashed border-sugar-400/40 bg-sugar-400/[0.05] px-4 py-3 text-sm leading-relaxed text-sugar-300">
          {missingCount} screenshot slot{missingCount > 1 ? 's are' : ' is'} still empty. Export the
          figures from your capstone document as PNG files and place them in{' '}
          <code className="rounded bg-white/[0.06] px-1">public/screenshots/</code> using the file
          names shown. They appear here automatically.
        </p>
      )}

      <AnimatePresence>
        {openIndex >= 0 && (
          <Lightbox
            items={loaded}
            index={openIndex}
            onClose={close}
            onChange={(i) => setOpenFile(loaded[i].file)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
