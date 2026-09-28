import { getTranslations } from 'next-intl/server'
import { ArrowRight, ShieldCheck, Cpu, Layers, Server } from 'lucide-react'

export async function AboutMe({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'about' })


    const principles = [
        {
            icon: <Layers className="w-5 h-5 text-orange-500" />,
            title: t('principles.p1.title'),
            description: t('principles.p1.desc'),
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
            title: t('principles.p2.title'),
            description: t('principles.p2.desc'),
        },
        {
            icon: <Cpu className="w-5 h-5 text-orange-500" />,
            title: t('principles.p3.title'),
            description: t('principles.p3.desc'),
        },
        {
            icon: <Server className="w-5 h-5 text-orange-500" />,
            title: t('principles.p4.title'),
            description: t('principles.p4.desc'),
        },
    ]

    return (
        <section id="about" className="py-14 md:py-20 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <div className="lg:col-span-6 flex flex-col items-start">
                        <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-3">
                            {t('tag')}
                        </span>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-950 leading-tight tracking-tight mb-6">
                            {t('title')}
                        </h2>

                        <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                            <p>{t('p1')}</p>
                            <p>{t('p2')}</p>
                            <p>{t('p3')}</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="#skills"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-ocean-700 text-white text-sm font-bold hover:bg-ocean-600 transition-colors shadow-sm"
                            >
                                {t('viewStack')}
                                <ArrowRight size={16} className="text-orange-400" />
                            </a>
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-300 text-slate-800 text-sm font-bold hover:bg-slate-50 transition-colors"
                            >
                                {t('viewProjects')}
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="rounded-3xl bg-slate-900 text-white p-7 sm:p-9 border border-slate-800 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ocean-500/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative">
                                <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-800">
                                    <div>
                                        <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1">
                                            {t('cardTag')}
                                        </span>
                                        <h3 className="text-xl font-bold text-white">{t('cardTitle')}</h3>
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                        <span>{t('cardBadge')}</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {principles.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/80 shadow-inner flex-shrink-0 mt-0.5">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-[15px] sm:text-base font-bold text-white mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
