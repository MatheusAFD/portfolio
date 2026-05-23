import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/motion/reveal'
import { useDict } from '@/i18n'

type AboutProps = { index?: string }

export function About({ index }: AboutProps) {
  const t = useDict()
  const metaItems = [
    t.about.meta.location,
    t.about.meta.languages,
    t.about.meta.focus,
    t.about.meta.years,
    t.about.meta.current,
  ]

  return (
    <Section
      id='about'
      index={index}
      eyebrow={t.about.eyebrow}
      title={
        <>
          {t.about.titleLead}
          <span className='text-display text-fg'>{t.about.titleAccent}</span>
          {t.about.titleTrail}
        </>
      }
      description={t.about.description}
    >
      <div className='grid gap-12 md:grid-cols-[1.4fr_0.6fr] md:gap-20'>
        <Reveal className='max-w-prose text-base text-fg-muted md:text-lg'>
          <p>{t.about.bio[0]}</p>
          <blockquote className='my-10 border-l border-accent/60 pl-6 text-2xl leading-snug text-fg text-display md:text-3xl'>
            “{t.about.pullQuote}”
          </blockquote>
          <p>{t.about.bio[1]}</p>
        </Reveal>

        <Reveal
          delay={0.1}
          className='h-fit md:sticky md:top-24'
        >
          <dl className='space-y-6'>
            {metaItems.map((m) => (
              <div key={m.label}>
                <dt className='font-mono text-xs uppercase tracking-[0.22em] text-fg-subtle'>
                  {m.label}
                </dt>
                <dd className='mt-1.5 text-base text-fg'>{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
