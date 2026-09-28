import { getTranslations } from 'next-intl/server'
import { PlayCircle, Layers, Server } from 'lucide-react'
import { ProjectsCarousel, type ProjectItem } from '@/components/ui/ProjectsCarousel'

export async function Projects({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'projects' })

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
            featuredIcon: <Layers className="w-5 h-5" />,
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
            stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker', 'Vitest', 'Caddy', 'Argon2id'],
            githubUrl: 'https://github.com/Cr1stofe/lms-nest-postgres',
            featuredIcon: <PlayCircle className="w-5 h-5 text-orange-400" />,
            accentBg: 'bg-ocean-700',
            accentBorder: 'border-ocean-600',
            accentIcon: 'bg-ocean-600/80 border-ocean-500 text-white',
            accentHover: 'group-hover:text-white',
            dark: true,
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
            featuredIcon: <Server className="w-5 h-5" />,
            accentBg: 'bg-white',
            accentBorder: 'border-slate-200',
            accentIcon: 'bg-slate-100 border-slate-200 text-slate-700',
            accentHover: 'group-hover:text-slate-900',
        },
    ]

    return (
        <section id="projects" className="py-14 md:py-20 bg-slate-50/70 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-14">
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3 block">
                        {t('tag')}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 tracking-tight mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                        {t('desc')}
                    </p>
                </div>

                <ProjectsCarousel
                    projects={projects}
                    highlightsLabel={t('highlightsLabel')}
                    viewRepo={t('viewRepo')}
                />
            </div>
        </section>
    )
}

