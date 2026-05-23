import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/cn'

type SectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'title'> & {
  id: string
  index?: string
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
  contained?: boolean
  divided?: boolean
}

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  contained = true,
  divided = true,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-20 md:py-28',
        divided && 'border-t border-border',
        className,
      )}
      {...rest}
    >
      <div className={cn(contained && 'container-app')}>
        {(eyebrow || title || description) && (
          <Reveal className='mb-12 max-w-2xl'>
            {eyebrow && (
              <p className='font-mono text-xs uppercase tracking-[0.22em] text-fg-subtle'>
                {index && <span className='text-accent'>— {index}</span>}
                {index && ' · '}
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className='mt-4 text-balance text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em]'>
                {title}
              </h2>
            )}
            {description && (
              <p className='mt-4 text-base text-fg-muted md:text-lg'>
                {description}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
