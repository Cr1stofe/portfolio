import './globals.css'
import {
  Roboto_Flex as Roboto,
  IBM_Plex_Mono as IBM
} from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'

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
      </head>
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRAKING as string}/>
      <body className={`${roboto.variable} ${ibm.variable} font-sans`}> {children} </body>
    </html>
  )
}
