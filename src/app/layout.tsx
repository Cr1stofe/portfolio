import './globals.css'
import {
  Roboto_Flex as Roboto,
  IBM_Plex_Mono as IBM
} from 'next/font/google'
import GoogleAnalytics from './GoogleAnalytics'
import Script from 'next/script'

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

        <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRAKING as string} />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-JSWRM0N14D`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-JSWRM0N14D');
        `}
        </Script>
        
      </head>
      <body className={`${roboto.variable} ${ibm.variable} font-sans`}> {children} </body>
    </html>
  )
}
