import { yearsOfExperience } from '@/lib/years'
import type { Dict } from './dict'

const years = yearsOfExperience()

export const en: Dict = {
  nav: {
    about: 'About',
    experience: 'Experience',
    stack: 'Stack',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Menu',
  },
  hero: {
    greeting: "Hi, I'm",
    role: 'Software Engineer — React, TypeScript, Next.js, Node, GraphQL.',
    cta: {
      projects: 'View work',
      contact: 'Get in touch',
    },
    now: {
      label: 'Now',
      location: 'location',
      coding: 'coding',
    },
    terminal: {
      header: '~/matheus · zsh',
      live: 'live',
      lines: [
        { c: 'comment', t: '// terminal · ~/matheus' },
        { c: 'cmd', t: 'whoami' },
        { c: 'out', t: 'matheus araújo · software engineer' },
        { c: 'cmd', t: 'cat stack.txt' },
        { c: 'out', t: 'react · typescript · next.js · node' },
        { c: 'cmd', t: 'echo $NOW' },
        { c: 'out', t: 'building spotiq — location analysis by ZIP' },
      ],
    },
  },
  about: {
    eyebrow: 'About',
    titleLead: 'I build the ',
    titleAccent: 'front-end',
    titleTrail: ' people actually use.',
    description:
      'Mostly React and TypeScript. The kind of work that ships, gets used, and stays standing.',
    bio: [
      `It's been ${years} years writing front-end for real products. I've worked on B2B platforms, real-time checkouts, a design system that became the base for other teams. What I enjoy most is the part nobody sees: a component that behaves the same everywhere, a page that opens fast, code the next person can read without cursing.`,
      'Day to day it\'s React, Next.js and TypeScript, plus everything around them. Design systems in Storybook, tests that catch the bug before users do, REST and GraphQL APIs. Lately I keep leaning more toward architecture and web performance.',
    ],
    pullQuote: "If it's hard to use, it's not done.",
    meta: {
      location: { label: 'Location', value: 'Fortaleza, CE — Brazil' },
      languages: { label: 'Languages', value: 'Portuguese · English' },
      focus: { label: 'Focus', value: 'Front-end · Performance · Design systems' },
      years: { label: 'Coding', value: `${years}+ years` },
      current: { label: 'Currently', value: '@ Twila — Mid Frontend Engineer' },
    },
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Where I have worked',
    description: `Four teams across ${years} years. Started in PHP, now I live in React and Next.js.`,
    current: 'current',
    items: [
      {
        company: 'Twila',
        role: 'Mid Frontend Engineer',
        period: 'Aug 2025 — Present',
        location: 'Joinville, SC, Brazil',
        current: true,
        bullets: [
          'Product engineering with React, TypeScript and Next.js',
          'Focus on performance, scalability and delivery quality',
        ],
      },
      {
        company: 'Kivid',
        role: 'Frontend Engineer',
        period: 'Apr 2024 — May 2025',
        location: 'Salvador, BA, Brazil',
        bullets: [
          'B2B platform in React.js and Next.js',
          'Real-time card and PIX checkouts with WebSockets',
          'Design System integrated with Storybook, reused across multiple products',
          'Mobile with React Native and Vue + Ionic',
          'Code reviews and close collaboration with design',
        ],
      },
      {
        company: 'Brainny Smart Solutions',
        role: 'Frontend Engineer',
        period: 'Oct 2022 — Apr 2024',
        location: 'Pelotas, RS, Brazil',
        bullets: [
          'Continuous evolution of the Efficlin product with React and Next.js',
          'Mobile apps with React Native, GraphQL and REST integrations',
          'Atomic Design + Chakra UI at scale',
          'Automated tests that reduced production bugs',
        ],
      },
      {
        company: 'Grupo Nobre',
        role: 'Full Stack Developer',
        period: 'Aug 2021 — Nov 2021',
        location: 'Fortaleza, CE, Brazil',
        bullets: [
          'Full-stack solutions with PHP and Laravel',
          'Multidisciplinary teams and agile methodologies',
          'Process standardization and continuous system improvement',
        ],
      },
    ],
    earlier: {
      period: '2019 — 2021',
      description:
        'Freelance + early-career projects building landing pages, internal tools and learning React, Node and modern web tooling.',
    },
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Tools I reach for',
    description: 'Grouped by where they live in the stack.',
    columns: [
      {
        title: 'Frontend',
        items: [
          'React',
          'TypeScript',
          'Next.js',
          'TanStack',
          'React Native',
          'Tailwind',
          'shadcn / Radix',
          'Storybook',
        ],
      },
      {
        title: 'Backend & Data',
        items: [
          'Node.js',
          'NestJS',
          'GraphQL',
          'REST',
          'PostgreSQL',
          'Prisma',
          'Drizzle',
          'Better Auth',
        ],
      },
      {
        title: 'Infra & Tooling',
        items: [
          'Docker',
          'Turborepo',
          'Vite',
          'Playwright',
          'Vitest',
          'Biome',
          'CI/CD',
          'Vercel AI SDK',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Things I have built',
    description:
      'Side projects and open-source. What I make when I get to choose the problem.',
    filters: {
      all: 'All',
      web: 'Web',
      ai: 'AI',
      oss: 'OSS',
    },
    items: [
      {
        slug: 'spotiq',
        name: 'SpotIQ',
        tagline: 'Commercial location analysis by ZIP code.',
        description:
          'Enter a ZIP code and get a viability report in minutes: recommended niches, competition analysis and the demographic profile of the area. Built on IBGE and OpenStreetMap data, ranked by AI, with adjustable radius (500m, 1km, 2km).',
        techs: [
          'TypeScript',
          'IBGE',
          'OpenStreetMap',
          'AI',
          'Geo',
          'Mercado Pago',
        ],
        liveUrl: 'https://spotiq.cc',
        privateRepo: true,
        featured: true,
        highlight: 'new',
      },
      {
        slug: 'shrink',
        name: 'shrink',
        tagline: 'Mobile and tablet simulator on any website.',
        description:
          'Open-source browser extension to test layouts across viewports. No analytics, no paywalls. Just resize and test.',
        techs: ['TypeScript', 'Browser Extension', 'Chrome', 'Firefox'],
        repoUrl: 'https://github.com/MatheusAFD/shrink',
        featured: true,
        highlight: 'oss',
      },
      {
        slug: 'repo-lens',
        name: 'repo-lens',
        tagline: 'Chat with any GitHub repository.',
        description:
          'Ground Claude in your codebase: architecture, security audits and dependency reviews via natural conversation.',
        techs: [
          'TypeScript',
          'TanStack Start',
          'Better Auth',
          'PostgreSQL',
          'Playwright',
          'Docker',
          'Monorepo',
        ],
        repoUrl: 'https://github.com/MatheusAFD/repo-lens',
        featured: true,
        highlight: 'ai',
      },
      {
        slug: 'mono-repo-auth',
        name: 'mono-repo-auth',
        tagline:
          'Full-stack starter with Better Auth and shared design system.',
        description:
          'Full-stack monorepo: Better Auth, design system with Radix + shadcn, NestJS API and TanStack Start apps.',
        techs: [
          'TypeScript',
          'NestJS',
          'TanStack Start',
          'Better Auth',
          'Radix',
          'shadcn',
        ],
        repoUrl: 'https://github.com/MatheusAFD/mono-repo-auth',
        featured: true,
        highlight: 'oss',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    heading: {
      lead: 'Got a ',
      accent: 'project',
      trail: ' in mind?',
    },
    description: 'Drop me a message.',
    emailAria: 'Send email',
    chips: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Fortaleza, BR',
    },
  },
  footer: {
    source: 'Source',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
  profile: {
    role: 'Software Engineer',
    location: 'Fortaleza, CE — Brazil',
    headline:
      'Software Engineer @Twila — React, TypeScript, Next.js, Node, GraphQL.',
    tagline: `Front-end engineer with ${years} years in. React, TypeScript, and a soft spot for fast, well-built interfaces.`,
    aboutSummary: `Front-end engineer with ${years} years building products in React, TypeScript, Next.js, Node and GraphQL.`,
  },
}

export type DictKey = keyof typeof en
