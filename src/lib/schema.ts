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
          'Prisma ORM',
          'Docker',
          'Caddy Server',
          'Zustand',
          'React Hook Form',
          'Zod',
          'SCSS Modules',
          'Tailwind CSS',
          'Cloudflare',
          'Oracle Cloud Infrastructure',
          'Linux',
          'Flutter',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name:
            locale === 'pt'
              ? 'Desenvolvedor Full Stack'
              : 'Full Stack Developer',
          occupationLocation: {
            '@type': 'City',
            name: 'Fortaleza',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'BR',
            },
          },
          description:
            locale === 'pt'
              ? 'Desenvolvedor com base em frontend que cria aplicações rápidas, seguras e sustentáveis — da interface ao deploy.'
              : 'Frontend-rooted developer who builds fast, secure, and maintainable applications — from the interface to deployment.',
          skills:
            'Next.js, React, TypeScript, NestJS, Node.js, PostgreSQL, Prisma, Docker',
        },
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
