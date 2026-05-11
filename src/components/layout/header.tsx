import { Dialog } from '@base-ui/react/dialog'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { profile } from '@/data/profile'
import { useDict, useLocale } from '@/i18n'
import { cn } from '@/lib/cn'

export function Header() {
  const [open, setOpen] = useState(false)
  const t = useDict()
  const locale = useLocale()
  const otherLocale = locale === 'pt' ? 'en' : 'pt'
  const otherLabel = otherLocale.toUpperCase()

  const navItems = [
    { label: t.nav.about, hash: 'about' },
    { label: t.nav.experience, hash: 'experience' },
    { label: t.nav.stack, hash: 'stack' },
    { label: t.nav.projects, hash: 'projects' },
    { label: t.nav.contact, hash: 'contact' },
  ]

  const home = `/${locale}`

  return (
    <header className='sticky top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-md'>
      <div className='container-app flex h-16 items-center justify-between gap-6'>
        <a
          href={`${home}#hero`}
          className='group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight'
        >
          <span className='grid size-8 place-items-center rounded-full bg-linear-to-br from-accent to-accent-2 text-bg'>
            {profile.initials}
          </span>
          <span className='hidden sm:inline text-fg'>
            {profile.name.split(' ')[0]}
          </span>
        </a>

        <nav className='hidden md:flex items-center gap-1'>
          {navItems.map((link) => (
            <a
              key={link.hash}
              href={`${home}#${link.hash}`}
              className='rounded-full px-3 py-1.5 text-sm text-fg-muted transition hover:bg-surface/60 hover:text-fg'
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-2'>
          <Link
            to={`/${otherLocale}`}
            aria-label={`Switch language to ${otherLabel}`}
            hrefLang={otherLocale === 'pt' ? 'pt-BR' : 'en-US'}
            className='hidden sm:inline-flex h-9 items-center rounded-full border border-border px-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-fg-muted transition hover:border-accent hover:text-fg'
          >
            {otherLabel}
          </Link>

          <a
            href={profile.links.github}
            target='_blank'
            rel='noreferrer'
            aria-label='GitHub'
            className='grid size-9 place-items-center rounded-full text-fg-muted transition hover:bg-surface hover:text-fg'
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target='_blank'
            rel='noreferrer'
            aria-label='LinkedIn'
            className='grid size-9 place-items-center rounded-full text-fg-muted transition hover:bg-surface hover:text-fg'
          >
            <LinkedinIcon size={18} />
          </a>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
              aria-label={t.nav.openMenu}
              className='grid size-9 place-items-center rounded-full text-fg md:hidden border border-border'
            >
              <Menu size={18} />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop className='fixed inset-0 z-50 bg-bg-2/80 backdrop-blur-sm data-[state=open]:animate-fade-up' />
              <Dialog.Popup
                className={cn(
                  'fixed inset-x-4 top-20 z-50 rounded-tile border border-border',
                  'bg-surface/95 backdrop-blur-xl p-4 md:hidden',
                )}
              >
                <div className='flex items-center justify-between'>
                  <Dialog.Title className='font-mono text-xs uppercase tracking-[0.2em] text-fg-muted'>
                    {t.nav.menu}
                  </Dialog.Title>
                  <Dialog.Close
                    aria-label={t.nav.closeMenu}
                    className='grid size-8 place-items-center rounded-full text-fg-muted hover:bg-surface-2'
                  >
                    <X size={16} />
                  </Dialog.Close>
                </div>
                <nav className='mt-4 flex flex-col'>
                  {navItems.map((link) => (
                    <a
                      key={link.hash}
                      href={`${home}#${link.hash}`}
                      onClick={() => setOpen(false)}
                      className='rounded-lg px-3 py-3 text-base text-fg transition hover:bg-surface-2'
                    >
                      {link.label}
                    </a>
                  ))}
                  <Link
                    to={`/${otherLocale}`}
                    onClick={() => setOpen(false)}
                    hrefLang={otherLocale === 'pt' ? 'pt-BR' : 'en-US'}
                    className='mt-2 rounded-lg px-3 py-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted transition hover:bg-surface-2'
                  >
                    {otherLabel}
                  </Link>
                </nav>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}
