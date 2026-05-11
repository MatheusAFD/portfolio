import { ArrowUpRight, Mail } from 'lucide-react'
import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/motion/reveal'
import { Card } from '@/components/ui/card'
import { LinkedinIcon } from '@/components/ui/icons'
import { profile } from '@/data/profile'
import { useDict } from '@/i18n'

export function Contact() {
  const t = useDict()
  return (
    <Section
      id='contact'
      eyebrow={t.contact.eyebrow}
      title={
        <>
          {t.contact.titleLead}
          <span className='text-gradient'>{t.contact.titleAccent}</span>
          {t.contact.titleTrail}
        </>
      }
      description={t.contact.description}
    >
      <div className='grid gap-4 md:grid-cols-2'>
        <Reveal>
          <Card interactive className='group h-full p-7'>
            <a
              href={profile.links.email}
              className='flex h-full flex-col'
              aria-label={t.contact.email.aria}
            >
              <div className='flex items-center justify-between'>
                <span className='grid size-12 place-items-center rounded-full border border-border bg-bg-2/60 text-accent'>
                  <Mail size={20} />
                </span>
                <ArrowUpRight
                  size={20}
                  className='text-fg-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg'
                />
              </div>
              <p className='mt-6 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted'>
                {t.contact.email.label}
              </p>
              <p className='mt-2 break-all text-xl font-semibold tracking-tight text-fg'>
                {profile.email}
              </p>
              <p className='mt-2 text-sm text-fg-muted'>
                {t.contact.email.sub}
              </p>
            </a>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card interactive className='group h-full p-7'>
            <a
              href={profile.links.linkedin}
              target='_blank'
              rel='noreferrer'
              className='flex h-full flex-col'
              aria-label={t.contact.linkedin.aria}
            >
              <div className='flex items-center justify-between'>
                <span className='grid size-12 place-items-center rounded-full border border-border bg-bg-2/60 text-accent-2'>
                  <LinkedinIcon size={20} />
                </span>
                <ArrowUpRight
                  size={20}
                  className='text-fg-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg'
                />
              </div>
              <p className='mt-6 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted'>
                {t.contact.linkedin.label}
              </p>
              <p className='mt-2 text-xl font-semibold tracking-tight text-fg'>
                /in/matheusaraujof
              </p>
              <p className='mt-2 text-sm text-fg-muted'>
                {t.contact.linkedin.sub}
              </p>
            </a>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
