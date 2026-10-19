import { getTranslations } from 'next-intl/server';
import {
  Layers,
  Server,
  Code2,
  Sparkles,
  Globe2,
  Smartphone,
} from 'lucide-react';
import {
  ProjectsCarousel,
  type ProjectItem,
} from '@/components/ui/ProjectsCarousel';

export async function Projects({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'projects' });

  const projects: ProjectItem[] = [
    {
      title: t('items.tailoredCv.title'),
      category: t('items.tailoredCv.category'),
      status: t('items.tailoredCv.status'),
      description: t('items.tailoredCv.description'),
      highlights: [
        t('items.tailoredCv.h1'),
        t('items.tailoredCv.h2'),
        t('items.tailoredCv.h3'),
      ],
      stack: [
        'Next.js',
        'NestJS',
        'PostgreSQL',
        'Prisma',
        'Gemini API',
        'Docker',
        'Turborepo',
      ],
      githubUrl: 'https://github.com/Cr1stofe/tailored-cv',
      liveUrl: 'https://api-docs-tailored-cv.cr1stofe.dev/docs',
      liveLabel: t('apiDocs'),
      featuredIcon: <Sparkles className="h-5 w-5 text-orange-400" />,
      accentBg: 'bg-ocean-700',
      accentBorder: 'border-ocean-600',
      accentIcon: 'bg-ocean-600/80 border-ocean-500 text-white',
      accentHover: 'group-hover:text-white',
      dark: true,
    },
    {
      title: t('items.lmsFront.title'),
      category: t('items.lmsFront.category'),
      status: t('items.lmsFront.status'),
      description: t('items.lmsFront.description'),
      highlights: [
        t('items.lmsFront.h1'),
        t('items.lmsFront.h2'),
        t('items.lmsFront.h3'),
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
      featuredIcon: <Server className="h-5 w-5 text-orange-400" />,
      accentBg: 'bg-ocean-700',
      accentBorder: 'border-ocean-600',
      accentIcon: 'bg-ocean-600/80 border-ocean-500 text-white',
      accentHover: 'group-hover:text-white',
      dark: true,
    },
    {
      title: t('items.ranking.title'),
      category: t('items.ranking.category'),
      status: t('items.ranking.status'),
      description: t('items.ranking.description'),
      highlights: [
        t('items.ranking.h1'),
        t('items.ranking.h2'),
        t('items.ranking.h3'),
      ],
      stack: ['Next.js', 'React', 'TypeScript', 'Zustand', 'Core Web Vitals'],
      liveUrl: 'https://ranking.org.br/',
      liveLabel: t('viewSite'),
      featuredIcon: <Globe2 className="h-5 w-5" />,
      accentBg: 'bg-white',
      accentBorder: 'border-slate-200',
      accentIcon: 'bg-slate-100 border-slate-200 text-ocean-700',
      accentHover: 'group-hover:text-ocean-700',
    },
    {
      title: t('items.motul.title'),
      category: t('items.motul.category'),
      status: t('items.motul.status'),
      description: t('items.motul.description'),
      highlights: [
        t('items.motul.h1'),
        t('items.motul.h2'),
        t('items.motul.h3'),
      ],
      stack: ['Flutter', 'Dart', 'REST APIs', 'Mobile'],
      liveUrl:
        'https://play.google.com/store/apps/details?id=br.com.motulexpert&hl=pt_BR',
      liveLabel: t('googlePlay'),
      featuredIcon: <Smartphone className="h-5 w-5 text-orange-400" />,
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
  ];

  return (
    <section
      id="projects"
      className="border-b border-slate-200 bg-slate-50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-10 max-w-2xl">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-orange-600">
            {t('tag')}
          </span>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            {t('title')}
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-600">
            {t('desc')}
          </p>
        </div>

        <ProjectsCarousel
          projects={projects}
          highlightsLabel={t('highlightsLabel')}
          viewRepo={t('viewRepo')}
          liveDemoLabel={t('liveDemo')}
          previousProjectLabel={t('carousel.previous')}
          nextProjectLabel={t('carousel.next')}
          paginationLabels={projects.map((_, index) =>
            t('carousel.goToPage', { page: index + 1 })
          )}
        />
      </div>
    </section>
  );
}
