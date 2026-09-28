import { getTranslations } from 'next-intl/server'
import { Layout, Server, Database, Cloud, CheckCircle2 } from 'lucide-react'

export async function TechStack({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'stack' })


    const categories = [
        {
            icon: <Layout className="w-5 h-5 text-orange-400" />,
            label: t('categories.frontend'),
            skills: t.raw('items.frontend') as string[],
        },
        {
            icon: <Server className="w-5 h-5 text-orange-400" />,
            label: t('categories.backend'),
            skills: t.raw('items.backend') as string[],
        },
        {
            icon: <Database className="w-5 h-5 text-orange-400" />,
            label: t('categories.database'),
            skills: t.raw('items.database') as string[],
        },
        {
            icon: <Cloud className="w-5 h-5 text-orange-400" />,
            label: t('categories.devops'),
            skills: t.raw('items.devops') as string[],
        },
    ]

    return (
        <section id="skills" className="py-14 md:py-20 bg-ocean-700 border-b border-ocean-900/40">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-14">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3 block">
                        {t('tag')}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                        {t('desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl bg-ocean-600/50 border border-ocean-500/50 hover:bg-ocean-600/80 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm shadow-lg flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-ocean-500/40">
                                    <div className="p-2.5 rounded-xl bg-ocean-700/80 border border-ocean-500/60 shadow-inner">
                                        {cat.icon}
                                    </div>
                                    <h3 className="font-bold text-white text-base">{cat.label}</h3>
                                </div>

                                <ul className="space-y-3">
                                    {cat.skills.map((skill, si) => (
                                        <li key={si} className="flex items-center gap-2.5 text-sm font-medium text-slate-100">
                                            <CheckCircle2 size={15} className="text-orange-400 flex-shrink-0" />
                                            <span>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
