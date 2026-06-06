import { type HTMLMotionProps, motion, useReducedMotion } from 'motion/react'

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number
  y?: number
}

export function Reveal({ delay = 0, y = 8, ...rest }: RevealProps) {
  const prefersReduced = useReducedMotion()
  const initial = prefersReduced ? { opacity: 0 } : { opacity: 0, y }
  const animate = prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: prefersReduced ? 0.3 : 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: prefersReduced ? 0 : delay,
      }}
      {...rest}
    />
  )
}
