import { BriefcaseBusiness, MapPin, Gauge } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function Career({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'career' });

  return (
    <section
      id="career"
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
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin size={14} className="text-orange-500" />
              {t('location.desc')}
            </span>
            <span className="hidden text-slate-300 sm:inline">·</span>
            <span>
              <span className="font-semibold text-slate-700">
                {t('education.education')}
              </span>
              <span className="mx-1.5 text-slate-300">·</span>
              {t('education.languages')}
            </span>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-600">
              <BriefcaseBusiness size={18} />
            </div>
            <h3 className="mb-1.5 text-base font-bold text-slate-950">
              {t('background.title')}
            </h3>
            <p className="mb-3 text-sm font-semibold text-orange-700">
              {t('background.meta')}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">
              {t('background.desc')}
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-600">
              {(t.raw('background.bullets') as string[])
                .slice(0, 2)
                .map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-100 bg-orange-50 text-orange-600">
              <Gauge size={18} />
            </div>
            <h3 className="mb-4 text-base font-bold text-slate-950">
              {t('outcomes.title')}
            </h3>
            <div className="space-y-5">
              <div>
                <p className="text-2xl font-bold tracking-tight text-ocean-700">
                  {t('outcomes.ranking.value')}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-slate-700">
                  {t('outcomes.ranking.label')}
                </p>
                <p className="mt-0.5 text-xs leading-snug text-slate-400">
                  {t('outcomes.ranking.context')} ·{' '}
                  {t('outcomes.rankingScore.value')}{' '}
                  {t('outcomes.rankingScore.label')}
                </p>
              </div>
              <div className="border-t border-slate-100 pt-5">
                <p className="text-2xl font-bold tracking-tight text-ocean-700">
                  {t('outcomes.motul.value')}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-slate-700">
                  {t('outcomes.motul.label')}
                </p>
                <p className="mt-0.5 text-xs leading-snug text-slate-400">
                  {t('outcomes.motul.context')} ·{' '}
                  {t('outcomes.motulStability.value')}{' '}
                  {t('outcomes.motulStability.label')}
                </p>
              </div>
            </div>
          </article>

          <div className="rounded-2xl border border-ocean-500/40 bg-ocean-700 px-6 py-5 text-white lg:col-span-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                {t('focus.label')}
              </span>
              <p className="text-base font-semibold sm:text-right">
                {t('focus.value')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
