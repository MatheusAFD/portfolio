import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/cn'

type SectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'title'> & {
  id: string
  eyebrow?: string
  title?: ReactNode
  description?: ReactNode
  contained?: boolean
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  contained = true,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-20 md:py-28', className)}
      {...rest}
    >
      <div className={cn(contained && 'container-app')}>
        {(eyebrow || title || description) && (
          <Reveal className='mb-12 max-w-2xl'>
            {eyebrow && (
              <p className='font-mono text-xs uppercase tracking-[0.2em] text-accent'>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className='mt-3 text-3xl font-semibold tracking-tight md:text-4xl'>
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
