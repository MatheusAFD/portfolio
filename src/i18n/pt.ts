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
    now: {
      label: 'Agora',
      location: 'local',
      coding: 'programando',
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
        { c: 'cmd', t: 'echo $AGORA' },
        { c: 'out', t: 'construindo o spotiq — análise de ponto por CEP' },
      ],
    },
  },
  about: {
    eyebrow: 'Sobre',
    titleLead: 'Faço o ',
    titleAccent: 'front-end',
    titleTrail: ' que as pessoas usam de verdade.',
    description:
      'Quase sempre React e TypeScript. Trabalho que vai pro ar, é usado e continua de pé.',
    bio: [
      `Já são ${years} anos escrevendo front-end pra produto de verdade. Passei por plataforma B2B, checkout em tempo real, design system que virou base pra outros times. O que eu mais curto é justamente a parte que ninguém vê: o componente que funciona igual em todo lugar, a tela que abre rápido, o código que a próxima pessoa consegue ler sem xingar.`,
      'No dia a dia é React, Next.js e TypeScript, junto com o que vem por perto. Design system no Storybook, teste que pega o bug antes do usuário, API REST e GraphQL. Faz um tempo que venho puxando mais pro lado de arquitetura e performance.',
    ],
    pullQuote: 'Se é difícil de usar, não está pronto.',
    meta: {
      location: { label: 'Localização', value: 'Fortaleza, CE — Brasil' },
      languages: { label: 'Idiomas', value: 'Português · Inglês' },
      focus: { label: 'Foco', value: 'Front-end · Performance · Design systems' },
      years: { label: 'Programando', value: `+${years} anos` },
      current: {
        label: 'Atualmente',
        value: '@ Twila — Mid Frontend Engineer',
      },
    },
  },
  experience: {
    eyebrow: 'Experiência',
    title: 'Onde eu trabalhei',
    description: `Quatro times em ${years} anos. Comecei no PHP e hoje vivo de React e Next.js.`,
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
    earlier: {
      period: '2019 — 2021',
      description:
        'Freelas e projetos de início de carreira: landing pages, ferramentas internas e aprendizado de React, Node e tooling web moderno.',
    },
  },
  stack: {
    eyebrow: 'Stack',
    title: 'Ferramentas que eu uso',
    description: 'Agrupadas por onde vivem na stack.',
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
        title: 'Backend & Dados',
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
    eyebrow: 'Projetos',
    title: 'Coisas que eu construí',
    description:
      'Projetos pessoais e open-source. O que eu faço quando escolho o problema.',
    filters: {
      all: 'Todos',
      web: 'Web',
      ai: 'IA',
      oss: 'OSS',
    },
    items: [
      {
        slug: 'spotiq',
        name: 'SpotIQ',
        tagline: 'Análise de ponto comercial por CEP.',
        description:
          'Digite um CEP e receba em minutos um relatório de viabilidade: nichos recomendados, análise de concorrência e perfil demográfico do entorno. Dados do IBGE e OpenStreetMap, ranqueados por IA, com raio ajustável (500m, 1km, 2km).',
        techs: [
          'TypeScript',
          'IBGE',
          'OpenStreetMap',
          'IA',
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
        tagline: 'Simulador de mobile e tablet em qualquer site.',
        description:
          'Extensão de navegador open-source para testar layouts em diferentes viewports. Sem analytics, sem paywall. Só redimensionar e testar.',
        techs: ['TypeScript', 'Browser Extension', 'Chrome', 'Firefox'],
        repoUrl: 'https://github.com/MatheusAFD/shrink',
        featured: true,
        highlight: 'oss',
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
    heading: {
      lead: 'Tem um ',
      accent: 'projeto',
      trail: ' em mente?',
    },
    description: 'Manda uma mensagem.',
    emailAria: 'Enviar e-mail',
    chips: {
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Fortaleza, BR',
    },
  },
  footer: {
    source: 'Source',
    linkedin: 'LinkedIn',
    email: 'E-mail',
  },
  profile: {
    role: 'Software Engineer',
    location: 'Fortaleza, CE — Brasil',
    headline:
      'Software Engineer @Twila — React, TypeScript, Next.js, Node, GraphQL.',
    tagline: `Engenheiro front-end com ${years} anos de estrada. React, TypeScript e uma queda por interface rápida e bem-feita.`,
    aboutSummary: `Engenheiro front-end com ${years} anos construindo produtos em React, TypeScript, Next.js, Node e GraphQL.`,
  },
}
