import type { Metadata } from 'next'
import type { Location } from '@/types'
import {
  CANONICAL_URL,
  COMPANY_NAME,
  COMPANY_SHORT,
  COMPANY_DESCRIPTION,
  COMPANY_EMAIL,
  LOCATIONS,
  EXTERNAL_LINKS,
} from '@/lib/data'

export const ORGANIZATION_ID = `${CANONICAL_URL}/#organization`
export const WEBSITE_ID = `${CANONICAL_URL}/#website`
export const locationId = (location: Location) => `${CANONICAL_URL}/#${location.id}`

const AREA_SERVED = ['Castelsarrasin', 'Montauban', 'Tarn-et-Garonne']

/** "05 63 32 33 78" -> "+33563323378" */
export const toE164 = (phone: string) => `+33${phone.replace(/\s/g, '').replace(/^0/, '')}`

interface PageMetadataInput {
  /** Short title, completed by the layout template */
  title: string
  description: string
  path: string
  /** Title used for social shares, defaults to `title` */
  socialTitle?: string
  /** Bypass the layout title template */
  absoluteTitle?: boolean
  /** 1200x630 share image from public/images/og/ (see scripts/generate-og-images.mjs) */
  image: string
  imageAlt: string
}

export const OG_IMAGE_SIZE = { width: 1200, height: 630 }

/**
 * Next replaces (not merges) the layout's openGraph object when a page defines
 * its own, so every page goes through here to keep siteName, locale and type.
 */
export function pageMetadata({
  title,
  description,
  path,
  socialTitle,
  absoluteTitle = false,
  image,
  imageAlt,
}: PageMetadataInput): Metadata {
  const shareTitle = socialTitle ?? title
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      siteName: COMPANY_SHORT,
      url: path,
      title: shareTitle,
      description,
      images: [{ url: image, ...OG_IMAGE_SIZE, alt: imageAlt, type: 'image/jpeg' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Accueil', path: '/' }, ...items].map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? CANONICAL_URL : `${CANONICAL_URL}${item.path}`,
    })),
  }
}

const DAYS: Record<string, string> = {
  lundi: 'Monday',
  mardi: 'Tuesday',
  mercredi: 'Wednesday',
  jeudi: 'Thursday',
  vendredi: 'Friday',
  samedi: 'Saturday',
  dimanche: 'Sunday',
}

/** Turns "8h00 - 12h00 / 14h00 - 18h00" into one spec per opening slot, grouped by identical slots. */
function openingHoursSpecification(location: Location) {
  const slots = new Map<string, string[]>()
  for (const [day, hours] of Object.entries(location.hours)) {
    if (!hours) continue
    const slotPattern = /(\d{1,2})h(\d{2})\s*-\s*(\d{1,2})h(\d{2})/g
    let match: RegExpExecArray | null
    while ((match = slotPattern.exec(hours))) {
      const key = `${match[1].padStart(2, '0')}:${match[2]}|${match[3].padStart(2, '0')}:${match[4]}`
      slots.set(key, [...(slots.get(key) ?? []), DAYS[day]])
    }
  }
  return Array.from(slots.entries()).map(([key, dayOfWeek]) => {
    const [opens, closes] = key.split('|')
    return { '@type': 'OpeningHoursSpecification', dayOfWeek, opens, closes }
  })
}

function autoRepairNode(location: Location) {
  return {
    '@type': 'AutoRepair',
    '@id': locationId(location),
    name: location.name,
    url: `${CANONICAL_URL}/contact`,
    telephone: toE164(location.phone),
    email: location.email,
    image: `${CANONICAL_URL}${location.photo}`,
    logo: `${CANONICAL_URL}/web-app-manifest-512x512.png`,
    description: COMPANY_DESCRIPTION,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address,
      addressLocality: location.city,
      postalCode: location.zipCode,
      addressRegion: 'Occitanie',
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', ...location.geo },
    hasMap: location.mapsUrl,
    openingHoursSpecification: openingHoursSpecification(location),
    areaServed: AREA_SERVED,
    brand: { '@type': 'Brand', name: 'FIAT' },
    parentOrganization: { '@id': ORGANIZATION_ID },
    ...(location.id === 'castelsarrasin' && {
      sameAs: EXTERNAL_LINKS.filter((link) => link.label !== 'Google Maps').map((link) => link.href),
    }),
  }
}

/** Site-wide graph, injected once in the root layout. Pages reference these nodes by @id. */
export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: COMPANY_SHORT,
      legalName: COMPANY_NAME,
      url: CANONICAL_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${CANONICAL_URL}/web-app-manifest-512x512.png`,
        width: 512,
        height: 512,
      },
      image: `${CANONICAL_URL}/images/garage-castelsarrasin.jpg`,
      description: COMPANY_DESCRIPTION,
      email: COMPANY_EMAIL,
      foundingDate: '1970',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 10 },
      areaServed: AREA_SERVED,
      brand: { '@type': 'Brand', name: 'FIAT' },
      knowsAbout: [
        'Réparation automobile',
        'Carrosserie',
        'Peinture automobile',
        'Bris de glace',
        'Diagnostic électronique',
        'Entretien camping-car',
        'Dépannage remorquage',
        'Vente de véhicules FIAT',
      ],
      contactPoint: LOCATIONS.map((location) => ({
        '@type': 'ContactPoint',
        telephone: toE164(location.phone),
        email: location.email,
        contactType: 'customer service',
        areaServed: 'FR',
        availableLanguage: 'French',
        name: location.city,
      })),
      subOrganization: LOCATIONS.map((location) => ({ '@id': locationId(location) })),
      sameAs: EXTERNAL_LINKS.filter((link) => link.label !== 'Google Maps').map((link) => link.href),
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: CANONICAL_URL,
      name: COMPANY_SHORT,
      alternateName: COMPANY_NAME,
      inLanguage: 'fr-FR',
      publisher: { '@id': ORGANIZATION_ID },
    },
    ...LOCATIONS.map(autoRepairNode),
  ],
}
