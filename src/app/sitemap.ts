import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cr1stofe.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1.0 : 0.9,
    alternates: {
      languages: {
        en: `${siteUrl}/en`,
        pt: `${siteUrl}/pt`,
        'en-US': `${siteUrl}/en`,
        'pt-BR': `${siteUrl}/pt`,
        'x-default': `${siteUrl}/en`,
      },
    },
  }));
}
