export function generatePersonSchema(locale: string, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Cristofe Albuquerque',
        url: siteUrl,
        jobTitle:
          locale === 'pt' ? 'Desenvolvedor Full Stack' : 'Full Stack Developer',
        sameAs: [
          'https://github.com/Cr1stofe',
          'https://www.linkedin.com/in/cristofe-albuquerque/',
        ],
        knowsAbout: [
          'Next.js',
          'React',
          'TypeScript',
          'NestJS',
          'Node.js',
          'PostgreSQL',
          'Docker',
          'Tailwind CSS',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Cristofe Albuquerque Portfolio',
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
        inLanguage: locale === 'pt' ? 'pt-BR' : 'en-US',
      },
    ],
  };
}
