import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { CvDownloadButton } from '@/components/ui/CvDownloadButton';

import ProfileImage from '@/assets/profile-image.webp';

export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'v2' });
  const resumeHref =
    locale === 'pt'
      ? '/Cristofe_Albuquerque_Resume_PT.pdf'
      : '/Cristofe_Albuquerque_Resume_EN.pdf';

  return (
    <section className="relative overflow-hidden bg-slate-50 pb-16 pt-10 md:pb-20 md:pt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 80% 0%, rgba(234, 88, 12, 0.07), transparent 35%), radial-gradient(circle at 50% -10%, rgba(13, 41, 65, 0.06), transparent 40%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:hidden">
            <div className="relative aspect-square w-[260px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl sm:w-[310px]">
              <Image
                src={ProfileImage}
                alt={t('hero.imageAlt')}
                width={400}
                height={400}
                quality={95}
                priority
                sizes="(max-width: 640px) 520px, 620px"
                className="h-full w-full object-cover object-top"
              />

              <div className="absolute bottom-3 left-3 right-3 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/95 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-md backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{t('hero.availability')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">
            <div className="mb-5 hidden items-center gap-2 rounded-full border border-ocean-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-ocean-700 shadow-sm lg:inline-flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>{t('hero.availability')}</span>
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              {t('hero.eyebrow')}
            </p>

            <h1 className="mb-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              {t('hero.title')}
              <span className="text-orange-500">.</span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.rich('hero.intro', {
                strong: (chunks) => (
                  <strong className="font-semibold text-slate-950">
                    {chunks}
                  </strong>
                ),
              })}
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ocean-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-ocean-600 sm:w-auto"
              >
                {t('hero.primaryCta')}
                <ArrowRight size={16} className="text-orange-400" />
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
              >
                {t('hero.secondaryCta')}
              </a>
              <CvDownloadButton
                href={resumeHref}
                locale={locale}
                label={t('hero.resumeCta')}
              />
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-600">
              <span className="text-slate-400">{t('hero.connect')}</span>
              <a
                className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-950"
                href="https://github.com/Cr1stofe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={17} /> GitHub
              </a>
              <a
                className="inline-flex items-center gap-1.5 transition-colors hover:text-ocean-700"
                href="https://www.linkedin.com/in/cristofe-albuquerque/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={17} className="text-ocean-600" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative order-3 hidden lg:order-2 lg:col-span-5 lg:block">
            <div className="relative mx-auto max-w-[400px]">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-1.5 shadow-2xl shadow-ocean-900/10">
                <Image
                  src={ProfileImage}
                  alt={t('hero.imageAlt')}
                  width={400}
                  height={400}
                  quality={95}
                  priority
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="aspect-square w-full rounded-[1.6rem] object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-5 -left-6 w-[min(85%,280px)] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t('hero.cardLabel')}
                  </span>
                  <ShieldCheck size={16} className="text-orange-500" />
                </div>
                <div className="space-y-2 text-sm font-medium text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check
                      size={14}
                      className="flex-shrink-0 text-emerald-600"
                    />
                    {t('hero.cardItems.frontend')}
                  </div>
                  <div className="flex items-center gap-2">
                    <Check
                      size={14}
                      className="flex-shrink-0 text-emerald-600"
                    />
                    {t('hero.cardItems.backend')}
                  </div>
                  <div className="flex items-center gap-2">
                    <Check
                      size={14}
                      className="flex-shrink-0 text-emerald-600"
                    />
                    {t('hero.cardItems.production')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
