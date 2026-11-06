import { motion, useReducedMotion } from 'framer-motion'

/**
 * The hero's one memorable moment: my profile "printed" as a POS receipt,
 * a nod to the system I built. It prints once on load, then stays still.
 */
export function Receipt() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="receipt-edge w-full max-w-[290px] rotate-[-2.5deg] bg-paper px-5 pb-6 pt-5 font-receipt text-[11px] leading-snug text-ink-900 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]"
      initial={reduce ? false : { opacity: 0, y: -24, clipPath: 'inset(0 0 100% 0)' }}
      animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      role="img"
      aria-label="Profile summary styled as a receipt: adaptable IT professional, BS Information Technology graduate, IT Support Intern, and system developer."
    >
      <div aria-hidden>
        <p className="text-center text-[13px] font-medium tracking-tight">JADE JASON MIRAL</p>
        <p className="text-center text-[10px] text-ink-600">Adaptable IT Graduate</p>
        <div className="my-3 border-t border-dashed border-ink-900/40" />

        <div className="space-y-3">
          <div>
            <p className="font-medium tracking-wide">EDUCATION</p>
            <p className="mt-1">BSIT Graduate</p>
            <p className="text-[10px] text-ink-600">Negros Oriental State University</p>
          </div>

          <div>
            <p className="font-medium tracking-wide">EXPERIENCE</p>
            <p className="mt-1">IT Support Intern · 5 Months</p>
            <p className="text-[10px] text-ink-600">ECE Contact Center</p>
          </div>

          <div>
            <p className="font-medium tracking-wide">FEATURED PROJECT</p>
            <p className="mt-1">3-Branch POS &amp; Inventory System</p>
            <p className="text-[10px] text-ink-600">Icy&apos;s Simplicitea · 3 Branches</p>
          </div>

          <div>
            <p className="font-medium tracking-wide">TECHNOLOGIES USED</p>
            <p className="mt-1">Laravel · MySQL · Tailwind CSS</p>
            <p className="text-[10px] text-ink-600">Currently exploring: React · TypeScript</p>
          </div>
        </div>

        <div className="my-3 border-t border-dashed border-ink-900/40" />
        <div className="flex justify-between text-[12px] font-medium">
          <span>STATUS</span>
          <span>OPEN TO OPPORTUNITIES</span>
        </div>
        <p className="mt-3 text-center text-[10px] text-ink-600">Thank you for reading. Let&apos;s talk.</p>
      </div>
    </motion.div>
  )
}
