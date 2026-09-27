import type { Metadata } from 'next'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  IBM_Plex_Mono as IBM
} from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const ibm = IBM({ subsets: ['latin'], weight: '700', variable: '--font-ibm' })

export const metadata: Metadata = {
  title: 'Cr1stofe | Desenvolvedor Full Stack',
  description: 'Portfolio de Cristofe Albuquerque — Desenvolvedor Full Stack especializado em Next.js, NestJS, TypeScript e PostgreSQL.',
  keywords: [
    'Desenvolvedor Full Stack',
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
    'Cristofe Albuquerque'
  ],
  authors: [{ name: 'Cristofe Albuquerque' }],
  creator: 'Cristofe Albuquerque',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Cr1stofe | Desenvolvedor Full Stack',
    description: 'Portfolio de Cristofe Albuquerque — Desenvolvedor Full Stack especializado em Next.js, NestJS, TypeScript e PostgreSQL.',
    siteName: 'Cr1stofe Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cr1stofe | Desenvolvedor Full Stack',
    description: 'Portfolio de Cristofe Albuquerque — Desenvolvedor Full Stack especializado em Next.js, NestJS, TypeScript e PostgreSQL.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_GA_TRAKING

  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${ibm.variable} font-sans`}>
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  )
}
