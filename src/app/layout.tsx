import type { Metadata } from 'next'
import { DM_Sans, Outfit } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { COMPANY_NAME, COMPANY_DESCRIPTION, CANONICAL_URL } from '@/lib/data'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: {
    template: `%s | ${COMPANY_NAME}`,
    default: `${COMPANY_NAME} — Garage FIAT Castelsarrasin & Montauban`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: [
    'garage FIAT Castelsarrasin',
    'garage FIAT Montauban',
    'réparation auto Tarn-et-Garonne',
    'camping-car agréé Castelsarrasin',
    'carrosserie peinture Montauban',
    'dépannage remorquage 82',
    'SARL Brincat',
  ],
  authors: [{ name: 'Pierre Godino', url: 'https://creation-sites-godino.fr' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: CANONICAL_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — Garage FIAT Castelsarrasin & Montauban`,
    description: COMPANY_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: COMPANY_NAME,
  url: CANONICAL_URL,
  telephone: '05 63 32 33 78',
  email: 'sarlgaragebrincat@orange.fr',
  image: `${CANONICAL_URL}/images/garage-castelsarrasin.jpg`,
  description: COMPANY_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '93 Avenue du Maréchal Leclerc',
    addressLocality: 'Castelsarrasin',
    postalCode: '82100',
    addressCountry: 'FR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased bg-brand-light text-brand-dark">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
