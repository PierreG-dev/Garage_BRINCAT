import type { Metadata, Viewport } from 'next'
import { DM_Sans, Outfit } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { COMPANY_NAME, COMPANY_SHORT, COMPANY_DESCRIPTION, CANONICAL_URL } from '@/lib/data'
import { siteJsonLd, OG_IMAGE_SIZE } from '@/lib/seo'
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

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: {
    template: `%s | ${COMPANY_SHORT}`,
    default: `Garage FIAT à Castelsarrasin et Montauban | ${COMPANY_SHORT}`,
  },
  description: COMPANY_DESCRIPTION,
  applicationName: COMPANY_SHORT,
  category: 'automotive',
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
    siteName: COMPANY_SHORT,
    title: `Garage FIAT à Castelsarrasin et Montauban | ${COMPANY_SHORT}`,
    description: COMPANY_DESCRIPTION,
    images: [{ url: '/images/og/home.jpg', ...OG_IMAGE_SIZE, alt: COMPANY_SHORT, type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Garage FIAT à Castelsarrasin et Montauban | ${COMPANY_SHORT}`,
    description: COMPANY_DESCRIPTION,
    images: ['/images/og/home.jpg'],
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
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to the Search Console token to verify ownership
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  other: {
    'geo.region': 'FR-82',
    'geo.placename': 'Castelsarrasin, Montauban',
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Preload hero image: above the fold, must not wait for JS */}
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
