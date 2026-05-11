import { ArrowDown, Mail, MapPin, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { profile } from '@/data/profile'
import { useDict } from '@/i18n'

const tone = {
  comment: 'text-fg-subtle',
  cmd: 'text-accent-2',
  out: 'text-fg',
} as const

const prefix = {
  comment: '',
  cmd: '$ ',
  out: '> ',
} as const

export function Hero() {
  const t = useDict()
  return (
    <section
      id='hero'
      className='relative overflow-hidden scroll-mt-24 pt-20 pb-16 md:pt-28 md:pb-24'
    >
      <div className='container-app grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className='text-balance text-4xl font-semibold tracking-tight md:text-6xl'>
            <span className='block text-fg-muted text-lg md:text-xl font-medium font-mono mb-3'>
              {t.hero.greeting}
            </span>
            <span className='block'>
              {profile.name.split(' ')[0]}{' '}
              <span className='text-gradient'>
                {profile.name.split(' ').slice(1).join(' ')}
              </span>
            </span>
          </h1>

          <p className='mt-6 max-w-xl text-base text-fg-muted md:text-lg'>
            {t.hero.role}
          </p>
          <p className='mt-3 max-w-xl text-base text-fg-muted'>
            {t.profile.tagline}
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <Button as='a' href='#projects' size='lg'>
              {t.hero.cta.projects}
              <ArrowDown size={16} />
            </Button>
            <Button
              as='a'
              href='#contact'
              variant='secondary'
              size='lg'
              leadingIcon={<Mail size={16} />}
            >
              {t.hero.cta.contact}
            </Button>
          </div>

          <div className='mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-fg-muted'>
            <span className='inline-flex items-center gap-2'>
              <MapPin size={14} /> {t.profile.location}
            </span>
            <a
              href={profile.links.github}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 hover:text-fg'
            >
              <GithubIcon size={14} /> github.com/matheusafd
            </a>
            <a
              href={profile.links.linkedin}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 hover:text-fg'
            >
              <LinkedinIcon size={14} /> /in/matheusaraujof
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className='relative mx-auto w-full max-w-md lg:ml-auto'
        >
          <div className='pointer-events-none absolute -inset-10 rounded-full bg-linear-to-tr from-accent/35 via-accent-2/25 to-transparent blur-3xl' />
          <div className='relative overflow-hidden rounded-tile border border-border bg-bg-2/80 backdrop-blur-md shadow-(--shadow-glow)'>
            <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent to-transparent' />

            <div className='flex items-center gap-1.5 border-b border-border px-4 py-3'>
              <span className='size-2.5 rounded-full bg-red-500/70' />
              <span className='size-2.5 rounded-full bg-amber-500/70' />
              <span className='size-2.5 rounded-full bg-emerald-500/70' />
              <span className='ml-3 font-mono text-xs text-fg-subtle'>
                {t.hero.terminal.header}
              </span>
              <span className='ml-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle'>
                <Sparkles size={11} className='text-accent' />
                {t.hero.terminal.live}
              </span>
            </div>

            <div className='space-y-1.5 p-5 font-mono text-sm'>
              {t.hero.terminal.lines.map((line, i) => (
                <motion.div
                  key={line.t}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={tone[line.c]}
                >
                  <span className='text-fg-subtle'>{prefix[line.c]}</span>
                  {line.t}
                </motion.div>
              ))}
              <motion.span
                aria-hidden='true'
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.1,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1.6,
                }}
                className='ml-1 inline-block h-4 w-2 align-middle bg-accent'
              />
            </div>

            <div className='grid grid-cols-3 gap-2 border-t border-border px-5 py-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle'>
              <span>react</span>
              <span>typescript</span>
              <span>next.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
