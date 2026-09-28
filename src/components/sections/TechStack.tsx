import { getTranslations } from 'next-intl/server';
import { Layout, Server, Database, Cloud, CheckCircle2 } from 'lucide-react';

export async function TechStack({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'stack' });

  const categories = [
    {
      icon: <Layout className="h-5 w-5 text-orange-400" />,
      label: t('categories.frontend'),
      skills: t.raw('items.frontend') as string[],
    },
    {
      icon: <Server className="h-5 w-5 text-orange-400" />,
      label: t('categories.backend'),
      skills: t.raw('items.backend') as string[],
    },
    {
      icon: <Database className="h-5 w-5 text-orange-400" />,
      label: t('categories.database'),
      skills: t.raw('items.database') as string[],
    },
    {
      icon: <Cloud className="h-5 w-5 text-orange-400" />,
      label: t('categories.devops'),
      skills: t.raw('items.devops') as string[],
    },
  ];

  return (
    <section
      id="skills"
      className="border-b border-ocean-900/40 bg-ocean-700 py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 max-w-3xl">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-orange-400">
            {t('tag')}
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            {t('title')}
          </h2>
          <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
            {t('desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-ocean-500/50 bg-ocean-600/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-ocean-600/80"
            >
              <div>
                <div className="mb-5 flex items-center gap-3 border-b border-ocean-500/40 pb-4">
                  <div className="rounded-xl border border-ocean-500/60 bg-ocean-700/80 p-2.5 shadow-inner">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {cat.label}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {cat.skills.map((skill, si) => (
                    <li
                      key={si}
                      className="flex items-center gap-2.5 text-sm font-medium text-slate-100"
                    >
                      <CheckCircle2
                        size={15}
                        className="flex-shrink-0 text-orange-400"
                      />
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
  );
}
