import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

import ProfileImage from '@/assets/profile-image.webp';

export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'hero' });

  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-8 md:pb-14 md:pt-12">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">
            <div className="mb-6 hidden items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-medium text-slate-700 lg:inline-flex">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span>{t('badge')}</span>
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {t('title')}
              <span className="text-orange-500">.</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              {t.rich('intro', {
                strongName: (chunks) => (
                  <strong className="font-semibold text-slate-900">
                    {chunks}
                  </strong>
                ),
                strongTech: (chunks) => (
                  <strong className="font-semibold text-ocean-700">
                    {chunks}
                  </strong>
                ),
              })}
            </p>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 rounded-xl bg-ocean-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-ocean-600"
              >
                {t('viewProjects')}
                <ArrowRight size={18} className="text-orange-400" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                <MessageSquare size={18} className="text-slate-600" />
                {t('getInTouch')}
              </a>
            </div>

            <div className="flex w-full max-w-lg items-center justify-center gap-6 border-t border-slate-200 pt-6 lg:justify-start">
              <span className="text-sm font-semibold text-slate-500">
                {t('connect')}
              </span>
              <Link
                href="https://github.com/Cr1stofe"
                target="_blank"
                className="flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-slate-950"
                title="GitHub"
              >
                <FaGithub size={19} />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/cristofe-albuquerque/"
                target="_blank"
                className="flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors hover:text-ocean-700"
                title="LinkedIn"
              >
                <FaLinkedin size={19} className="text-ocean-600" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">
            <div className="group relative aspect-square w-[285px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl sm:w-[340px] lg:w-[380px]">
              <Image
                src={ProfileImage}
                alt={t('imageAlt')}
                width={400}
                height={400}
                quality={95}
                priority
                sizes="(max-width: 640px) 285px, (max-width: 1024px) 340px, 380px"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />

              <div className="absolute bottom-3 left-3 right-3 flex justify-center lg:hidden">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50/95 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-md backdrop-blur-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>{t('badge')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
