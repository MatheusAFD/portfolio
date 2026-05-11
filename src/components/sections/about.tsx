import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/motion/reveal'
import { Card } from '@/components/ui/card'
import { useDict } from '@/i18n'

export function About() {
  const t = useDict()
  return (
    <Section
      id='about'
      eyebrow={t.about.eyebrow}
      title={
        <>
          {t.about.titleLead}
          <span className='text-gradient'>{t.about.titleAccent}</span>
          {t.about.titleTrail}
        </>
      }
      description={t.about.description}
    >
      <div className='grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12'>
        <Reveal className='space-y-4 text-base text-fg-muted md:text-lg'>
          {t.about.bio.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className='grid gap-4'>
          {t.about.stats.map((stat) => (
            <Card key={stat.label} className='p-5'>
              <p className='font-mono text-3xl font-semibold tracking-tight text-gradient md:text-4xl'>
                {stat.value}
              </p>
              <p className='mt-1 text-sm font-medium text-fg'>{stat.label}</p>
              <p className='mt-1 text-sm text-fg-muted'>{stat.hint}</p>
            </Card>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
