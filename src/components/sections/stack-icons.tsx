import { Boxes, GitBranch, Smartphone, TestTube2, Webhook } from 'lucide-react'
import type { ComponentType } from 'react'
import {
  SiBetterauth,
  SiBiome,
  SiDocker,
  SiDrizzle,
  SiGraphql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiStorybook,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
} from 'react-icons/si'

type IconType = ComponentType<{ size?: number; className?: string }>

/**
 * Maps each stack item (keyed by its display string, locale-agnostic since the
 * tech names are identical in pt/en) to a monochrome icon. Brand logos come
 * from Simple Icons; items without an official logo fall back to a conceptual
 * Lucide glyph. All icons render in `currentColor`, so they inherit the
 * surrounding text color and stay on-palette.
 */
const stackIcons: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  'Next.js': SiNextdotjs,
  TanStack: SiReactquery,
  'React Native': Smartphone,
  Tailwind: SiTailwindcss,
  'shadcn / Radix': SiShadcnui,
  Storybook: SiStorybook,
  'Node.js': SiNodedotjs,
  NestJS: SiNestjs,
  GraphQL: SiGraphql,
  REST: Webhook,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Drizzle: SiDrizzle,
  'Better Auth': SiBetterauth,
  Docker: SiDocker,
  Turborepo: SiTurborepo,
  Vite: SiVite,
  Playwright: TestTube2,
  Vitest: SiVitest,
  Biome: SiBiome,
  'CI/CD': GitBranch,
  'Vercel AI SDK': SiVercel,
}

const fallbackIcon: IconType = Boxes

export function getStackIcon(name: string): IconType {
  return stackIcons[name] ?? fallbackIcon
}
