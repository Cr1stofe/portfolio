import { routing } from '@/i18n/routing';
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

  return (
    <main className="min-h-screen bg-white selection:bg-ocean-600 selection:text-white">
      <Navbar />
      <Hero locale={locale} />
      <AboutMe locale={locale} />
      <TechStack locale={locale} />
      <Projects locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
