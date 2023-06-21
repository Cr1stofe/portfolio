import './globals.css'
import {
  Roboto_Flex as Roboto,
  IBM_Plex_Mono as IBM
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const ibm = IBM({ subsets: ['latin'], weight: '700', variable: '--font-ibm' })

export const metadata = {
  title: 'Cr1stofe',
  description: 'Portfolio Front-End Developer, Cristofe Albuquerque',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRAKING}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRAKING}');
            `
          }}
        />
      </head>
      <body className={`${roboto.variable} ${ibm.variable} font-sans`}> {children} </body>
    </html>
  )
}
