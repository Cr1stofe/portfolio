import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import ProfileImage from '@/assets/profile-image.webp';

export async function V2Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'v2' });

  return (
    <section className="relative overflow-hidden bg-slate-50 pb-12 pt-8 md:pb-16 md:pt-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 82% 10%, rgba(234, 88, 12, 0.10), transparent 28%), radial-gradient(circle at 56% -8%, rgba(13, 41, 65, 0.08), transparent 30%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:hidden">
            <div className="relative aspect-square w-[285px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl sm:w-[340px]">
              <Image
                src={ProfileImage}
                alt={t('hero.imageAlt')}
                width={400}
                height={400}
                quality={95}
                priority
                sizes="(max-width: 640px) 570px, 680px"
                className="h-full w-full object-cover object-top"
              />

              <div className="absolute bottom-3 left-3 right-3 flex justify-center">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50/95 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-md backdrop-blur-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>{t('hero.availability')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">
            <div className="mb-6 hidden items-center gap-2 rounded-full border border-ocean-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-ocean-700 shadow-sm lg:inline-flex">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span>{t('hero.availability')}</span>
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
              {t('hero.eyebrow')}
            </p>
            <h1 className="mb-6 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[4.2rem]">
              {t('hero.title')}
              <span className="text-orange-500">.</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              {t.rich('hero.intro', {
                strong: (chunks) => (
                  <strong className="font-semibold text-slate-950">
                    {chunks}
                  </strong>
                ),
              })}
            </p>

            <div className="mb-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-ocean-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-ocean-600 sm:w-auto"
              >
                {t('hero.primaryCta')}
                <ArrowRight size={18} className="text-orange-400" />
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 sm:w-auto"
              >
                {t('hero.secondaryCta')}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
              <span className="text-slate-500">{t('hero.connect')}</span>
              <a
                className="inline-flex items-center gap-2 hover:text-slate-950"
                href="https://github.com/Cr1stofe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} /> GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-ocean-700"
                href="https://www.linkedin.com/in/cristofe-albuquerque/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={18} className="text-ocean-600" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative order-3 hidden lg:order-2 lg:col-span-5 lg:block">
            <div className="relative mx-auto max-w-[430px]">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-ocean-900/10">
                <Image
                  src={ProfileImage}
                  alt={t('hero.imageAlt')}
                  width={400}
                  height={400}
                  quality={95}
                  priority
                  sizes="(max-width: 1024px) 80vw, 430px"
                  className="aspect-square w-full rounded-[1.5rem] object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-7 -left-8 w-[min(88%,300px)] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
                <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t('hero.cardLabel')}
                  </span>
                  <ShieldCheck size={17} className="text-orange-500" />
                </div>
                <div className="space-y-2.5 text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600" />{' '}
                    {t('hero.cardItems.frontend')}
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600" />{' '}
                    {t('hero.cardItems.backend')}
                  </div>
                  <div className="flex items-center gap-2">
                    <Check size={15} className="text-emerald-600" />{' '}
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
