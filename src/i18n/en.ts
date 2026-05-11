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
      projects: 'View projects',
      contact: 'Get in touch',
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
        { c: 'cmd', t: 'echo $FOCUS' },
        { c: 'out', t: 'product · performance · scalability' },
      ],
    },
  },
  about: {
    eyebrow: 'About',
    titleLead: 'Engineering that delivers ',
    titleAccent: 'results',
    titleTrail: '.',
    description:
      'From intuitive interfaces to high-performance systems: collaboration, precision and scalability.',
    bio: [
      `Software Engineer with ${years}+ years shipping digital products — from intuitive interfaces to high-performance systems. I turn business needs into robust, measurable and scalable solutions.`,
      'Focused on React, Next.js and TypeScript, with consistent practice in design systems, automated testing and REST/GraphQL APIs. Continuously learning: front-end architecture, web performance and clean code.',
    ],
    stats: [
      {
        value: '−45%',
        label: 'load time',
        hint: 'Strategic refactor of legacy code.',
      },
      {
        value: '−60%',
        label: 'production bugs',
        hint: 'Design system + automated tests.',
      },
      {
        value: `${years}+ years`,
        label: 'continuous delivery',
        hint: 'Product, performance and scalability.',
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Professional journey',
    description: `Four teams, ${years}+ years focused on product, performance and quality.`,
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
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Day-to-day toolkit',
    description: 'Technologies I use to ship product with quality and speed.',
    groups: [
      {
        title: 'Frontend',
        description: 'Scalable, performant and accessible interfaces.',
        items: [
          'React',
          'Next.js',
          'TanStack',
          'TypeScript',
          'Tailwind',
          'Storybook',
          'Radix',
          'shadcn',
          'Chakra UI',
          'Material UI',
          'Ant Design',
        ],
        span: 'lg',
      },
      {
        title: 'Mobile',
        description: 'Native and hybrid apps.',
        items: ['React Native', 'Ionic', 'Vue'],
        span: 'sm',
      },
      {
        title: 'State & Forms',
        description: 'State management and robust forms.',
        items: [
          'Zustand',
          'Redux',
          'React Query',
          'React Hook Form',
          'Zod',
          'Yup',
        ],
        span: 'md',
      },
      {
        title: 'Backend',
        description: 'APIs and services.',
        items: ['Node.js', 'Nest.js', 'Prisma', 'GraphQL', 'REST'],
        span: 'md',
      },
      {
        title: 'Testing',
        description: 'Quality from unit to e2e.',
        items: ['Vitest', 'Jest', 'Testing Library', 'Playwright', 'Cypress'],
        span: 'md',
      },
      {
        title: 'DevOps',
        description: 'Infra and continuous delivery.',
        items: ['Docker', 'GitFlow', 'CI/CD', 'PostgreSQL', 'MySQL'],
        span: 'md',
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: "What I'm building",
    description:
      'A mix of open-source products, AI tools and experiments. Focus on DX, performance and product.',
    items: [
      {
        slug: 'shrink',
        name: 'shrink',
        tagline: 'Mobile and tablet simulator on any website.',
        description:
          'Open-source browser extension to test layouts across viewports. No analytics, no paywalls — just resize and test.',
        techs: ['TypeScript', 'Browser Extension', 'Chrome', 'Firefox'],
        repoUrl: 'https://github.com/MatheusAFD/shrink',
        featured: true,
        highlight: 'new',
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
        slug: 'impact-ledger',
        name: 'impact-ledger',
        tagline: 'AI that turns LinkedIn + GitHub into a bio with real impact.',
        description:
          'Tool that pulls your LinkedIn and GitHub data and generates bio + README highlighting niches, value delivered and impact per company.',
        techs: ['TypeScript', 'AI', 'GitHub API', 'LinkedIn'],
        repoUrl: 'https://github.com/MatheusAFD/impact-ledger',
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
    titleLead: "Let's ",
    titleAccent: 'talk',
    titleTrail: '?',
    description:
      'Open to opportunities, collaborations and conversations about product engineering.',
    email: {
      label: 'Email',
      sub: 'Reply within 48h on business days.',
      aria: 'Send email',
    },
    linkedin: {
      label: 'LinkedIn',
      sub: 'Full track record, recommendations and updates.',
      aria: 'Open LinkedIn',
    },
  },
  footer: {
    builtWith: 'Built with React, TanStack Start and Tailwind v4.',
    source: 'Source',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
  profile: {
    role: 'Software Engineer',
    location: 'Fortaleza, CE — Brazil',
    headline:
      'Software Engineer @Twila — React, TypeScript, Next.js, Node, GraphQL.',
    tagline: `${years}+ years building digital products. Collaboration → Precision → Scale.`,
    aboutSummary: `Software Engineer with ${years}+ years building digital products with React, TypeScript, Next.js, Node and GraphQL.`,
  },
}

export type DictKey = keyof typeof en
