import { routing } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { AboutMe } from '@/components/sections/AboutMe';
import { TechStack } from '@/components/sections/TechStack';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return (
    <div className="min-h-screen bg-white selection:bg-ocean-600 selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-ocean-700 focus:px-5 focus:py-3 focus:font-bold focus:text-white focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        {t('skipToContent')}
      </a>

      <Navbar />

      <main id="main-content">
        <Hero locale={locale} />
        <AboutMe locale={locale} />
        <TechStack locale={locale} />
        <Projects locale={locale} />
        <Contact locale={locale} />
      </main>
    </div>
  );
}
