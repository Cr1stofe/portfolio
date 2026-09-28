import { getTranslations } from 'next-intl/server';
import { ArrowRight, ShieldCheck, Cpu, Layers, Server } from 'lucide-react';

export async function AboutMe({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'about' });

  const principles = [
    {
      icon: <Layers className="h-5 w-5 text-orange-500" />,
      title: t('principles.p1.title'),
      description: t('principles.p1.desc'),
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-orange-500" />,
      title: t('principles.p2.title'),
      description: t('principles.p2.desc'),
    },
    {
      icon: <Cpu className="h-5 w-5 text-orange-500" />,
      title: t('principles.p3.title'),
      description: t('principles.p3.desc'),
    },
    {
      icon: <Server className="h-5 w-5 text-orange-500" />,
      title: t('principles.p4.title'),
      description: t('principles.p4.desc'),
    },
  ];

  return (
    <section
      id="about"
      className="border-b border-slate-200 bg-white py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start lg:col-span-6">
            <span className="mb-3 text-xs font-bold uppercase tracking-widest text-orange-600">
              {t('tag')}
            </span>

            <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              {t('title')}
            </h2>

            <div className="mb-8 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#skills"
                className="inline-flex items-center gap-2.5 rounded-xl bg-ocean-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-ocean-600"
              >
                {t('viewStack')}
                <ArrowRight size={16} className="text-orange-400" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 rounded-xl border border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-800 transition-colors hover:bg-slate-50"
              >
                {t('viewProjects')}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-7 text-white shadow-2xl sm:p-9">
              <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-ocean-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between border-b border-slate-800 pb-5">
                  <div>
                    <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-orange-400">
                      {t('cardTag')}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {t('cardTitle')}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{t('cardBadge')}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {principles.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-0.5 flex-shrink-0 rounded-xl border border-slate-700/80 bg-slate-800 p-2.5 shadow-inner">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="mb-1 text-[15px] font-bold text-white sm:text-base">
                          {item.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">
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
  );
}
