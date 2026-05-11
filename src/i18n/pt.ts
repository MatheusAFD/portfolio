import { yearsOfExperience } from '@/lib/years'
import type { Dict } from './dict'

const years = yearsOfExperience()

export const pt: Dict = {
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    stack: 'Stack',
    projects: 'Projetos',
    contact: 'Contato',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    menu: 'Menu',
  },
  hero: {
    greeting: 'Olá, eu sou',
    role: 'Software Engineer — React, TypeScript, Next.js, Node, GraphQL.',
    cta: {
      projects: 'Ver projetos',
      contact: 'Contato',
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
        { c: 'out', t: 'produto · performance · escalabilidade' },
      ],
    },
  },
  about: {
    eyebrow: 'Sobre',
    titleLead: 'Engenharia que entrega ',
    titleAccent: 'resultado',
    titleTrail: '.',
    description:
      'De interfaces intuitivas a sistemas performáticos: colaboração, precisão e escalabilidade.',
    bio: [
      `Software Engineer com +${years} anos construindo produtos digitais — de interfaces intuitivas a sistemas performáticos. Transformo necessidades de negócio em soluções robustas, mensuráveis e escaláveis.`,
      'Foco em React, Next.js e TypeScript, com prática consistente em design systems, testes automatizados e consumo de APIs REST/GraphQL. Em evolução contínua: arquitetura front-end, performance web e clean code.',
    ],
    stats: [
      {
        value: '−45%',
        label: 'tempo de carregamento',
        hint: 'Refatoração estratégica de código legado.',
      },
      {
        value: '−60%',
        label: 'bugs em produção',
        hint: 'Design system + testes automatizados.',
      },
      {
        value: `+${years} anos`,
        label: 'entrega contínua',
        hint: 'Produto, performance e escalabilidade.',
      },
    ],
  },
  experience: {
    eyebrow: 'Experiência',
    title: 'Trajetória profissional',
    description: `Quatro times, +${years} anos focando em produto, performance e qualidade.`,
    current: 'atual',
    items: [
      {
        company: 'Twila',
        role: 'Mid Frontend Engineer',
        period: 'ago/2025 — presente',
        location: 'Joinville, SC',
        current: true,
        bullets: [
          'Engenharia de produto com React, TypeScript e Next.js',
          'Foco em performance, escalabilidade e qualidade de entrega',
        ],
      },
      {
        company: 'Kivid',
        role: 'Frontend Engineer',
        period: 'abr/2024 — mai/2025',
        location: 'Salvador, BA',
        bullets: [
          'Sistema B2B em React.js e Next.js',
          'Checkouts cartão e PIX com WebSockets em tempo real',
          'Design System integrado ao Storybook, reutilizado em vários produtos',
          'Mobile com React Native e Vue + Ionic',
          'Code reviews e colaboração próxima com design',
        ],
      },
      {
        company: 'Brainny Smart Solutions',
        role: 'Frontend Engineer',
        period: 'out/2022 — abr/2024',
        location: 'Pelotas, RS',
        bullets: [
          'Evolução contínua do produto Efficlin com React e Next.js',
          'Apps mobile com React Native, integrações GraphQL e REST',
          'Atomic Design + Chakra UI em escala',
          'Testes automatizados que reduziram bugs em produção',
        ],
      },
      {
        company: 'Grupo Nobre',
        role: 'Full Stack Developer',
        period: 'ago/2021 — nov/2021',
        location: 'Fortaleza, CE',
        bullets: [
          'Soluções full-stack com PHP e Laravel',
          'Times multidisciplinares e metodologias ágeis',
          'Padronização de procedimentos e melhoria contínua de sistemas',
        ],
      },
    ],
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Ferramentas do dia a dia',
    description:
      'Tecnologias que uso para entregar produto com qualidade e velocidade.',
    groups: [
      {
        title: 'Frontend',
        description: 'Interfaces escaláveis, performáticas e acessíveis.',
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
        description: 'Apps nativos e híbridos.',
        items: ['React Native', 'Ionic', 'Vue'],
        span: 'sm',
      },
      {
        title: 'State & Forms',
        description: 'Gestão de estado e formulários robustos.',
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
        description: 'APIs e serviços.',
        items: ['Node.js', 'Nest.js', 'Prisma', 'GraphQL', 'REST'],
        span: 'md',
      },
      {
        title: 'Testes',
        description: 'Qualidade do unit ao e2e.',
        items: ['Vitest', 'Jest', 'Testing Library', 'Playwright', 'Cypress'],
        span: 'md',
      },
      {
        title: 'DevOps',
        description: 'Infra e entregas contínuas.',
        items: ['Docker', 'GitFlow', 'CI/CD', 'PostgreSQL', 'MySQL'],
        span: 'md',
      },
    ],
  },
  projects: {
    eyebrow: 'Projetos',
    title: 'O que estou construindo',
    description:
      'Mistura de produtos open-source, ferramentas de IA e estudos. Foco em DX, performance e produto.',
    items: [
      {
        slug: 'shrink',
        name: 'shrink',
        tagline: 'Simulador de mobile e tablet em qualquer site.',
        description:
          'Extensão de navegador open-source para testar layouts em diferentes viewports. Sem analytics, sem paywalls — só redimensionar e testar.',
        techs: ['TypeScript', 'Browser Extension', 'Chrome', 'Firefox'],
        repoUrl: 'https://github.com/MatheusAFD/shrink',
        featured: true,
        highlight: 'new',
      },
      {
        slug: 'repo-lens',
        name: 'repo-lens',
        tagline: 'Converse com qualquer repositório do GitHub.',
        description:
          'Grounding do Claude no seu codebase: arquitetura, auditoria de segurança e revisão de dependências em conversa natural.',
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
        tagline: 'IA que transforma LinkedIn + GitHub em bio com impacto real.',
        description:
          'Ferramenta que extrai seus dados de LinkedIn e GitHub e gera bio + README destacando nichos, valor entregue e impacto por empresa.',
        techs: ['TypeScript', 'AI', 'GitHub API', 'LinkedIn'],
        repoUrl: 'https://github.com/MatheusAFD/impact-ledger',
        featured: true,
        highlight: 'ai',
      },
      {
        slug: 'mono-repo-auth',
        name: 'mono-repo-auth',
        tagline:
          'Starter full-stack com Better Auth e design system compartilhado.',
        description:
          'Monorepo full-stack: Better Auth, design system com Radix + shadcn, NestJS API e apps em TanStack Start.',
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
    eyebrow: 'Contato',
    titleLead: 'Vamos ',
    titleAccent: 'conversar',
    titleTrail: '?',
    description:
      'Aberto a oportunidades, colaborações e papos sobre engenharia de produto.',
    email: {
      label: 'E-mail',
      sub: 'Resposta em até 48h em dias úteis.',
      aria: 'Enviar e-mail',
    },
    linkedin: {
      label: 'LinkedIn',
      sub: 'Trajetória completa, recomendações e atualizações.',
      aria: 'Abrir LinkedIn',
    },
  },
  footer: {
    builtWith: 'Construído com React, TanStack Start e Tailwind v4.',
    source: 'Source',
    linkedin: 'LinkedIn',
    email: 'E-mail',
  },
  profile: {
    role: 'Software Engineer',
    location: 'Fortaleza, CE — Brasil',
    headline:
      'Software Engineer @Twila — React, TypeScript, Next.js, Node, GraphQL.',
    tagline: `+${years} anos construindo produtos digitais. Colaboração → Precisão → Escalabilidade.`,
    aboutSummary: `Software Engineer com +${years} anos construindo produtos digitais com foco em React, TypeScript, Next.js, Node e GraphQL.`,
  },
}
