import { Mail, MessageCircle, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { LinkedinIcon } from '@/components/ui/icons'
import { profile } from '@/data/profile'
import { useDict } from '@/i18n'
import { cn } from '@/lib/cn'

const easing = [0.22, 1, 0.36, 1] as const

export function ContactFab() {
  const [open, setOpen] = useState(false)
  const t = useDict()
  const prefersReduced = useReducedMotion()

  const actions = [
    {
      key: 'email' as const,
      href: profile.links.email,
      label: t.contact.emailAria,
      icon: <Mail size={16} />,
      target: undefined,
    },
    {
      key: 'linkedin' as const,
      href: profile.links.linkedin,
      label: t.contact.chips.linkedin,
      icon: <LinkedinIcon size={16} />,
      target: '_blank',
    },
  ]

  return (
    <>
      {open && (
        <button
          type='button'
          aria-hidden='true'
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className='fixed inset-0 z-40 cursor-default'
        />
      )}

      <div className='pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8'>
        <AnimatePresence>
          {open && (
            <motion.ul
              className='pointer-events-auto flex flex-col items-end gap-2'
              initial='closed'
              animate='open'
              exit='closed'
              variants={{
                open: { transition: { staggerChildren: 0.04 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
            >
              {actions.map((a) => (
                <motion.li
                  key={a.key}
                  variants={{
                    open: { opacity: 1, y: 0, scale: 1 },
                    closed: { opacity: 0, y: 8, scale: 0.95 },
                  }}
                  transition={{
                    duration: prefersReduced ? 0.15 : 0.25,
                    ease: easing,
                  }}
                >
                  <a
                    href={a.href}
                    target={a.target}
                    rel={a.target ? 'noreferrer' : undefined}
                    aria-label={a.label}
                    onClick={() => setOpen(false)}
                    className='inline-flex items-center gap-2 rounded-full border border-border bg-surface/95 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-fg shadow-(--shadow-glow) backdrop-blur-md transition hover:border-accent hover:text-accent'
                  >
                    {a.icon}
                    {a.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <button
          type='button'
          aria-label={open ? t.nav.closeMenu : t.contact.emailAria}
          aria-expanded={open}
          aria-haspopup='menu'
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'pointer-events-auto grid size-14 place-items-center rounded-full bg-accent text-bg shadow-(--shadow-glow) transition hover:brightness-110 active:brightness-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none',
          )}
        >
          <motion.span
            animate={{ scale: open ? 0.92 : 1 }}
            transition={{ duration: prefersReduced ? 0 : 0.2, ease: easing }}
            className='inline-flex'
          >
            {open ? <X size={20} /> : <MessageCircle size={20} />}
          </motion.span>
        </button>
      </div>
    </>
  )
}
