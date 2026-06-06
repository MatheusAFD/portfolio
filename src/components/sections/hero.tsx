import { ArrowDown, Mail, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { useDict } from '@/i18n'

const tone = {
  comment: 'text-fg-subtle',
  cmd: 'text-accent',
  out: 'text-fg',
} as const

const prefix = {
  comment: '',
  cmd: '$ ',
  out: '> ',
} as const

export function Hero() {
  const t = useDict()
  const [firstName, ...rest] = profile.name.split(' ')
  const lastName = rest.join(' ')

  return (
    <section
      id='hero'
      className='relative overflow-hidden scroll-mt-24 pt-24 pb-20 md:pt-36 md:pb-32'
    >
      <div className='container-app grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className='text-balance text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em]'>
            <span className='block text-fg'>{firstName}</span>
            <span className='block text-display text-accent'>{lastName}</span>
          </h1>

          <p className='mt-8 max-w-xl text-lg text-fg-muted md:text-xl'>
            {t.profile.tagline}
          </p>

          <p className='mt-4 font-mono text-xs uppercase tracking-[0.22em] text-fg-subtle'>
            {t.hero.role}
          </p>

          <div className='mt-10 flex flex-wrap items-center gap-3'>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className='relative mx-auto w-full max-w-md lg:ml-auto'
        >
          <div className='relative overflow-hidden rounded-tile border border-border bg-bg-2/80 backdrop-blur-md'>
            <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/40' />

            <div className='flex items-center gap-1.5 border-b border-border px-4 py-3'>
              <span className='size-2.5 rounded-full bg-fg-subtle/40' />
              <span className='size-2.5 rounded-full bg-fg-subtle/40' />
              <span className='size-2.5 rounded-full bg-accent/70' />
              <span className='ml-3 font-mono text-xs text-fg-subtle'>
                {t.hero.terminal.header}
              </span>
              <span className='ml-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-subtle'>
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

            <div className='grid grid-cols-2 gap-2 border-t border-border px-5 py-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-fg-subtle'>
              <div className='flex flex-col gap-0.5'>
                <span className='text-fg-subtle/70'>{t.hero.now.location}</span>
                <span className='truncate text-fg'>{t.profile.location}</span>
              </div>
              <div className='flex flex-col gap-0.5'>
                <span className='text-fg-subtle/70'>{t.hero.now.coding}</span>
                <span className='truncate text-fg'>
                  {profile.yearsOfExperience}+ yr
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
