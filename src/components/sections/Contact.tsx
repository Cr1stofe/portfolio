import { getTranslations } from 'next-intl/server';
import { ContactLinks } from '@/components/ui/ContactLinks';
import { Footer } from '@/components/layout/Footer';

export async function Contact({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <section id="contact" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 max-w-2xl">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-orange-600">
            {t('tag')}
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
            {t('title')}
          </h2>
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
            {t('desc')}
          </p>
        </div>

        <div className="mb-20">
          <ContactLinks />
        </div>

        <Footer />
      </div>
    </section>
  );
}
