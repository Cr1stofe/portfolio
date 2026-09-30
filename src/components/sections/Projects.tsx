import { getTranslations } from 'next-intl/server';
import { PlayCircle, Layers, Server, Code2 } from 'lucide-react';
import {
  ProjectsCarousel,
  type ProjectItem,
} from '@/components/ui/ProjectsCarousel';

export async function Projects({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'projects' });

  const projects: ProjectItem[] = [
    {
      title: t('items.lmsFront.title'),
      category: t('items.lmsFront.category'),
      status: t('items.lmsFront.status'),
      description: t('items.lmsFront.description'),
      highlights: [
        t('items.lmsFront.h1'),
        t('items.lmsFront.h2'),
        t('items.lmsFront.h3'),
        t('items.lmsFront.h4'),
      ],
      stack: ['Next.js', 'TypeScript', 'BFF', 'Zustand', 'SCSS Modules', 'Zod'],
      githubUrl: 'https://github.com/Cr1stofe/lms-front-next',
      liveUrl: 'https://veltro.cr1stofe.dev/',
      featuredIcon: <Layers className="h-5 w-5" />,
      accentBg: 'bg-white',
      accentBorder: 'border-slate-200',
      accentIcon: 'bg-slate-100 border-slate-200 text-ocean-700',
      accentHover: 'group-hover:text-ocean-700',
    },
    {
      title: t('items.lmsNest.title'),
      category: t('items.lmsNest.category'),
      status: t('items.lmsNest.status'),
      description: t('items.lmsNest.description'),
      highlights: [
        t('items.lmsNest.h1'),
        t('items.lmsNest.h2'),
        t('items.lmsNest.h3'),
        t('items.lmsNest.h4'),
      ],
      stack: [
        'NestJS',
        'TypeScript',
        'PostgreSQL',
        'Prisma',
        'Docker',
        'Vitest',
        'Caddy',
        'Argon2id',
      ],
      githubUrl: 'https://github.com/Cr1stofe/lms-nest-postgres',
      liveUrl: 'https://api-veltro.cr1stofe.dev/api/docs',
      liveLabel: t('apiDocs'),
      featuredIcon: <PlayCircle className="h-5 w-5 text-orange-400" />,
      accentBg: 'bg-ocean-700',
      accentBorder: 'border-ocean-600',
      accentIcon: 'bg-ocean-600/80 border-ocean-500 text-white',
      accentHover: 'group-hover:text-white',
      dark: true,
    },
    {
      title: t('items.portfolio.title'),
      category: t('items.portfolio.category'),
      status: t('items.portfolio.status'),
      description: t('items.portfolio.description'),
      highlights: [
        t('items.portfolio.h1'),
        t('items.portfolio.h2'),
        t('items.portfolio.h3'),
      ],
      stack: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Vitest',
        'Tailwind CSS',
        'CI/CD',
      ],
      githubUrl: 'https://github.com/Cr1stofe/portfolio',
      featuredIcon: <Code2 className="h-5 w-5" />,
      accentBg: 'bg-white',
      accentBorder: 'border-slate-200',
      accentIcon: 'bg-slate-100 border-slate-200 text-ocean-700',
      accentHover: 'group-hover:text-ocean-700',
    },
    {
      title: t('items.lmsExpress.title'),
      category: t('items.lmsExpress.category'),
      status: t('items.lmsExpress.status'),
      description: t('items.lmsExpress.description'),
      highlights: [
        t('items.lmsExpress.h1'),
        t('items.lmsExpress.h2'),
        t('items.lmsExpress.h3'),
      ],
      stack: ['Express', 'Node.js', 'PostgreSQL', 'JWT', 'TypeScript'],
      githubUrl: 'https://github.com/Cr1stofe/lms-express-postgres',
      featuredIcon: <Server className="h-5 w-5 text-orange-400" />,
      accentBg: 'bg-ocean-700',
      accentBorder: 'border-ocean-600',
      accentIcon: 'bg-ocean-600/80 border-ocean-500 text-white',
      accentHover: 'group-hover:text-white',
      dark: true,
    },
  ];

  return (
    <section
      id="projects"
      className="border-b border-slate-200 bg-slate-50/70 py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 max-w-3xl">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-orange-600">
            {t('tag')}
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            {t('title')}
          </h2>
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
            {t('desc')}
          </p>
        </div>

        <ProjectsCarousel
          projects={projects}
          highlightsLabel={t('highlightsLabel')}
          viewRepo={t('viewRepo')}
          liveDemoLabel={t('liveDemo')}
        />
      </div>
    </section>
  );
}
