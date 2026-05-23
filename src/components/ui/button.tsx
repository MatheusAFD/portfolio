import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type CommonProps = {
  variant?: Variant
  size?: Size
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}

type ButtonProps = CommonProps & ComponentPropsWithoutRef<'button'>
type AnchorProps = CommonProps & ComponentPropsWithoutRef<'a'> & { as: 'a' }

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-(--color-accent) text-(--color-bg) shadow-(--shadow-glow) hover:brightness-110 active:brightness-95',
  secondary:
    'bg-(--color-surface) text-(--color-fg) border border-(--color-border) hover:border-(--color-border-strong) hover:bg-(--color-surface-2)',
  ghost: 'bg-transparent text-(--color-fg) hover:bg-(--color-surface)/60'
}

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base'
}

export function Button(props: ButtonProps | AnchorProps) {
  const {
    variant = 'primary',
    size = 'md',
    leadingIcon,
    trailingIcon,
    children,
    className,
    ...rest
  } = props as CommonProps & { className?: string; children?: ReactNode } & Record<string, unknown>

  const classes = cn(base, variants[variant], sizes[size], className)

  if ('as' in props && props.as === 'a') {
    return (
      <a className={classes} {...(rest as ComponentPropsWithoutRef<'a'>)}>
        {leadingIcon}
        {children}
        {trailingIcon}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<'button'>)}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  )
}
