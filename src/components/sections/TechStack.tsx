import { getTranslations } from 'next-intl/server';
import { Layout, Server, Database, Cloud, CheckCircle2 } from 'lucide-react';

export async function TechStack({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'stack' });

  const categories = [
    {
      icon: <Layout className="h-4 w-4 text-orange-400" />,
      label: t('categories.frontend'),
      skills: t.raw('items.frontend') as string[],
    },
    {
      icon: <Server className="h-4 w-4 text-orange-400" />,
      label: t('categories.backend'),
      skills: t.raw('items.backend') as string[],
    },
    {
      icon: <Database className="h-4 w-4 text-orange-400" />,
      label: t('categories.database'),
      skills: t.raw('items.database') as string[],
    },
    {
      icon: <Cloud className="h-4 w-4 text-orange-400" />,
      label: t('categories.devops'),
      skills: t.raw('items.devops') as string[],
    },
  ];

  return (
    <section
      id="skills"
      className="border-b border-ocean-900/30 bg-ocean-700 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-orange-400">
            {t('tag')}
          </span>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            {t('title')}
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-300">
            {t('desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-ocean-500/40 bg-ocean-600/40 p-5 backdrop-blur-sm transition-colors duration-200 hover:border-orange-500/40 hover:bg-ocean-600/60"
            >
              <div className="mb-4 flex items-center gap-2.5 border-b border-ocean-500/30 pb-3.5">
                <div className="rounded-lg border border-ocean-500/50 bg-ocean-700/70 p-1.5">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold text-white">{cat.label}</h3>
              </div>

              <ul className="space-y-2.5">
                {cat.skills.map((skill, si) => (
                  <li
                    key={si}
                    className="flex items-center gap-2 text-sm font-medium leading-snug text-slate-200"
                  >
                    <CheckCircle2
                      size={13}
                      className="flex-shrink-0 text-orange-400"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
