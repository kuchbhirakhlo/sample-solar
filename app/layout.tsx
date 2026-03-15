import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Orintek Solar | Best Solar Panel Installation in Lucknow | Rooftop Solar Solutions',
  description: 'Orintek Solar - Leading solar panel installation company in Lucknow, Uttar Pradesh. Get residential & commercial rooftop solar systems, solar inverter, battery backup & EV charging solutions. MNRE approved vendor. Call now for free quote!',
  keywords: 'solar panel Lucknow, solar panel installation Lucknow, rooftop solar Lucknow, solar energy Lucknow, solar company Lucknow, solar inverter Lucknow, solar battery Lucknow, solar power plant Lucknow, solar panel dealer Lucknow, solar panel price Lucknow, solar panel for home Lucknow, commercial solar Lucknow, residential solar Lucknow, solar installation company Lucknow, MNRE approved solar Lucknow, UPNEDA solar Lucknow, solar subsidy Lucknow, solar maintenance Lucknow, EV charging station Lucknow, solar pump Lucknow, on grid solar system Lucknow, off grid solar system Lucknow, hybrid solar system Lucknow, best solar company Lucknow, cheapest solar panel Lucknow, solar panel near me Lucknow, solar solutions Lucknow, renewable energy Lucknow, green energy Lucknow, sustainable energy Lucknow, solar panel for housing society Lucknow, solar for apartments Lucknow, solar for factory Lucknow, solar for school Lucknow, solar for hospital Lucknow, solar for hotel Lucknow, solar for office Lucknow, 1kw solar panel price Lucknow, 2kw solar system Lucknow, 3kw solar panel Lucknow, 5kw solar system Lucknow, 10kw solar panel Lucknow, solar panel brands Lucknow, Tata solar Lucknow, Adani solar Lucknow, Luminous solar Lucknow, Exide solar Lucknow, Amaron solar Lucknow, Vikram solar Lucknow, Waree solar Lucknow, Loom solar Lucknow, UTL solar Lucknow',
  generator: 'v0.app',
  openGraph: {
    title: 'Orintek Solar | Best Solar Panel Installation in Lucknow',
    description: 'Leading solar panel installation company in Lucknow. Get residential & commercial rooftop solar systems with MNRE approval.',
    type: 'website',
    locale: 'en_IN',
    alternateLocale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
