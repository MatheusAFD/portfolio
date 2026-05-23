import { Mail, MapPin } from 'lucide-react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { profile } from '@/data/profile'
import { useDict } from '@/i18n'
import { cn } from '@/lib/cn'

type ContactProps = { index?: string }

type ChipProps = ComponentPropsWithoutRef<'a'> & {
  icon: ReactNode
}

function Chip({ icon, className, children, ...rest }: ChipProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-fg-muted transition-colors hover:border-accent hover:text-fg',
        className,
      )}
      {...rest}
    >
      {icon}
      {children}
    </a>
  )
}

export function Contact({ index }: ContactProps) {
  const t = useDict()

  return (
    <Section id='contact' index={index} eyebrow={t.contact.eyebrow}>
      <Reveal className='mx-auto max-w-4xl py-10 text-center md:py-20'>
        <h2 className='text-balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em]'>
          {t.contact.heading.lead}
          <span className='text-display text-accent'>
            {t.contact.heading.accent}
          </span>
          {t.contact.heading.trail}
        </h2>

        <p className='mx-auto mt-8 max-w-xl text-lg text-fg-muted'>
          {t.contact.description}
        </p>

        <div className='mt-12 flex flex-col items-center gap-6'>
          <Button
            as='a'
            href={profile.links.email}
            size='lg'
            aria-label={t.contact.emailAria}
            leadingIcon={<Mail size={18} />}
          >
            {profile.email}
          </Button>

          <div className='flex flex-wrap items-center justify-center gap-2'>
            <Chip
              href={profile.links.linkedin}
              target='_blank'
              rel='noreferrer'
              icon={<LinkedinIcon size={14} />}
            >
              {t.contact.chips.linkedin}
            </Chip>
            <Chip
              href={profile.links.github}
              target='_blank'
              rel='noreferrer'
              icon={<GithubIcon size={14} />}
            >
              {t.contact.chips.github}
            </Chip>
            <span className='inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-fg-muted'>
              <MapPin size={14} />
              {t.contact.chips.location}
            </span>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
