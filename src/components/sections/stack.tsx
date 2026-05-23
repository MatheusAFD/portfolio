import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/motion/reveal'
import { useDict } from '@/i18n'

type StackProps = { index?: string }

export function Stack({ index }: StackProps) {
  const t = useDict()
  const marqueeItems = [
    ...t.stack.marquee.map((name) => ({ name, lane: 'a' as const })),
    ...t.stack.marquee.map((name) => ({ name, lane: 'b' as const })),
  ]

  return (
    <Section
      id='stack'
      index={index}
      eyebrow={t.stack.eyebrow}
      title={t.stack.title}
      description={t.stack.description}
    >
      <div className='grid grid-cols-1 gap-y-12 md:grid-cols-3 md:divide-x md:divide-border md:gap-y-0'>
        {t.stack.columns.map((col, i) => (
          <Reveal
            key={col.title}
            delay={i * 0.06}
            className='md:px-8 md:first:pl-0 md:last:pr-0'
          >
            <p className='font-mono text-xs uppercase tracking-[0.22em] text-fg-subtle'>
              <span className='text-accent'>—</span> {col.title}
            </p>
            <ul className='mt-6 space-y-3'>
              {col.items.map((name) => (
                <li
                  key={name}
                  className='flex items-baseline gap-3 font-mono text-sm text-fg'
                >
                  <span
                    aria-hidden='true'
                    className='inline-block size-1 shrink-0 -translate-y-0.5 rounded-full bg-accent/70'
                  />
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className='mt-20 overflow-hidden border-y border-border py-5 opacity-60 motion-reduce:opacity-40'>
        <div className='flex w-max gap-12 animate-marquee font-mono text-sm uppercase tracking-[0.22em] text-fg-subtle motion-reduce:animate-none'>
          {marqueeItems.map((item) => (
            <span
              key={`${item.lane}-${item.name}`}
              className='whitespace-nowrap'
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
