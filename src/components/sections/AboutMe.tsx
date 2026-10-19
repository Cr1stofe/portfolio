import { getTranslations } from 'next-intl/server';
import { ArrowRight, ShieldCheck, Cpu, Layers, Server } from 'lucide-react';

export async function AboutMe({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'about' });

  const principles = [
    {
      icon: <Layers className="h-4 w-4 text-orange-500" />,
      title: t('principles.p1.title'),
      description: t('principles.p1.desc'),
    },
    {
      icon: <ShieldCheck className="h-4 w-4 text-orange-500" />,
      title: t('principles.p2.title'),
      description: t('principles.p2.desc'),
    },
    {
      icon: <Cpu className="h-4 w-4 text-orange-500" />,
      title: t('principles.p3.title'),
      description: t('principles.p3.desc'),
    },
    {
      icon: <Server className="h-4 w-4 text-orange-500" />,
      title: t('principles.p4.title'),
      description: t('principles.p4.desc'),
    },
  ];

  return (
    <section
      id="about"
      className="border-b border-slate-200 bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <span className="mb-3 text-xs font-bold uppercase tracking-widest text-orange-600">
              {t('tag')}
            </span>

            <h2 className="mb-5 text-2xl font-bold leading-snug tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              {t('title')}
            </h2>

            <div className="mb-7 space-y-3.5 text-[15px] leading-relaxed text-slate-600">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 rounded-xl bg-ocean-700 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-ocean-600"
              >
                {t('viewStack')}
                <ArrowRight size={15} className="text-orange-400" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                {t('viewProjects')}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl sm:p-8">
            <div className="bg-orange-500/8 pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full blur-3xl" />
            <div className="bg-ocean-500/8 pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-orange-400">
                    {t('cardTag')}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {t('cardTitle')}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{t('cardBadge')}</span>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {principles.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 rounded-lg border border-slate-700/80 bg-slate-800 p-2">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="mb-0.5 text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-400">
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
    </section>
  );
}
