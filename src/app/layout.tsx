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
    'garage automobile 82',
    'entretien véhicule Tarn-et-Garonne',
    'concessionnaire FIAT 82',
  ],
  authors: [{ name: 'Pierre Godino', url: 'https://creation-sites-godino.fr' }],
  creator: 'Pierre Godino',
  publisher: COMPANY_NAME,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: CANONICAL_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — Garage FIAT Castelsarrasin & Montauban`,
    description: COMPANY_DESCRIPTION,
    images: [
      {
        url: '/images/garage-castelsarrasin.jpg',
        width: 1200,
        height: 630,
        alt: 'Garage BRINCAT — Concessionnaire FIAT Castelsarrasin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} — Garage FIAT Castelsarrasin & Montauban`,
    description: COMPANY_DESCRIPTION,
    images: ['/images/garage-castelsarrasin.jpg'],
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
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': `${CANONICAL_URL}/#castelsarrasin`,
      name: 'Garage BRINCAT Castelsarrasin',
      alternateName: COMPANY_NAME,
      url: CANONICAL_URL,
      telephone: '05 63 32 33 78',
      email: 'sarlgaragebrincat@orange.fr',
      image: `${CANONICAL_URL}/images/garage-castelsarrasin.jpg`,
      logo: `${CANONICAL_URL}/favicon.svg`,
      description: COMPANY_DESCRIPTION,
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '93 Avenue du Maréchal Leclerc',
        addressLocality: 'Castelsarrasin',
        postalCode: '82100',
        addressRegion: 'Occitanie',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 44.0387,
        longitude: 1.1067,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        bestRating: '5',
        ratingCount: '3',
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
      hasMap: 'https://www.google.com/maps/dir//SARL+Garage+Brincat,+93+Avenue+du+Mar%C3%A9chal+Leclerc,+82100+Castelsarrasin',
      sameAs: [
        'https://www.allogarage.fr/garages/details-garage-SARL-Garage-Brincat-12985.html',
        'https://www.idgarages.com/fr-fr/garage/castelsarrasin/GA5948_sarl-garage-brincat',
      ],
    },
    {
      '@type': 'AutoRepair',
      '@id': `${CANONICAL_URL}/#montauban`,
      name: 'Garage BRINCAT Montauban',
      alternateName: COMPANY_NAME,
      url: CANONICAL_URL,
      telephone: '05 63 66 29 61',
      email: 'sarl.brincat@wanadoo.fr',
      image: `${CANONICAL_URL}/images/garage-montauban.jpg`,
      logo: `${CANONICAL_URL}/favicon.svg`,
      description: COMPANY_DESCRIPTION,
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '426 Avenue de Toulouse',
        addressLocality: 'Montauban',
        postalCode: '82000',
        addressRegion: 'Occitanie',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 44.0069,
        longitude: 1.3556,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '19:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      hasMap: 'https://www.google.com/maps/dir//Garage+Brincat+Montauban',
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
        {/* Preload hero image — above the fold, must not wait for JS */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-1.jpg"
          fetchPriority="high"
        />
      </head>
      <body className="antialiased bg-brand-light text-brand-dark">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
