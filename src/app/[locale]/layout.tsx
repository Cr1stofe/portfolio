import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Roboto_Flex as Roboto, IBM_Plex_Mono as IBM } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { generatePersonSchema } from '@/lib/schema';
import '../globals.css';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const ibm = IBM({ subsets: ['latin'], weight: '700', variable: '--font-ibm' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cr1stofe.dev';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL(siteUrl),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'pt-BR': '/pt',
        'en-US': '/en',
      },
    },
    keywords: [
      'Desenvolvedor Full Stack',
      'Full Stack Developer',
      'Next.js',
      'NestJS',
      'TypeScript',
      'React 19',
      'PostgreSQL',
      'Prisma ORM',
      'Docker',
      'Caddy',
      'Node.js',
      'Frontend',
      'Backend',
      'Portfolio',
      'Cristofe Albuquerque',
    ],
    authors: [{ name: 'Cristofe Albuquerque' }],
    creator: 'Cristofe Albuquerque',
    openGraph: {
      type: 'website',
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      title: t('title'),
      description: t('description'),
      siteName: 'Cr1stofe Portfolio',
      url: `${siteUrl}/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'pt')) {
    notFound();
  }

  const messages = await getMessages({ locale: locale as 'en' | 'pt' });
  const gaId =
    process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_TRAKING;

  const jsonLd = generatePersonSchema(locale, siteUrl);

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${roboto.variable} ${ibm.variable} font-sans`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
