import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICES, CANONICAL_URL } from '@/lib/data'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Nos Services — Mécanique, Carrosserie, Dépannage',
  description:
    'Découvrez tous les services du Garage BRINCAT : réparation toutes marques, carrosserie peinture, dépannage remorquage, révision, expertise et programme de garantie à Castelsarrasin et Montauban.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Nos Services — Mécanique, Carrosserie, Dépannage | Garage BRINCAT',
    description:
      'Découvrez tous les services du Garage BRINCAT : réparation toutes marques, carrosserie peinture, dépannage remorquage, révision, expertise et programme de garantie à Castelsarrasin et Montauban.',
    url: '/services',
    images: [
      {
        url: '/images/service-reparation.jpg',
        width: 1200,
        height: 630,
        alt: 'Atelier mécanique Garage BRINCAT — Réparation toutes marques',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nos Services — Mécanique, Carrosserie, Dépannage | Garage BRINCAT',
    description:
      'Découvrez tous les services du Garage BRINCAT : réparation toutes marques, carrosserie peinture, dépannage remorquage, révision, expertise et programme de garantie.',
    images: ['/images/service-reparation.jpg'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: CANONICAL_URL },
    { '@type': 'ListItem', position: 2, name: 'Nos Services', item: `${CANONICAL_URL}/services` },
  ],
}

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Services Garage BRINCAT',
  description: 'Liste des services automobiles proposés par le Garage BRINCAT en Tarn-et-Garonne',
  itemListElement: SERVICES.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.longDesc,
      provider: {
        '@type': 'AutoRepair',
        name: 'Garage BRINCAT',
        url: CANONICAL_URL,
      },
      areaServed: ['Castelsarrasin', 'Montauban', 'Tarn-et-Garonne'],
      url: `${CANONICAL_URL}/services#${service.slug}`,
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      {/* Page hero */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/images/service-reparation.jpg"
          alt="Atelier mécanique Garage BRINCAT"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/75" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-10 lg:pb-16 pt-24">
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-accent mb-2">
              Garage BRINCAT
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl uppercase text-white">
              Nos Services
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Expert automobile"
              title="Un Atelier Complet"
              subtitle="De la révision d'entretien au dépannage d'urgence, notre atelier prend en charge tous vos besoins automobiles. Toutes marques acceptées, équipement de diagnostic certifié FIAT."
            />
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="pb-16 lg:pb-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-sm bg-white ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-64 lg:h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 to-transparent lg:bg-gradient-to-t lg:from-brand-dark/30 lg:to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-10 h-0.5 bg-accent mb-6" aria-hidden="true" />
                  <h2 className="font-display font-bold text-3xl lg:text-4xl uppercase text-brand-dark leading-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="font-sans text-brand-muted text-base leading-relaxed mb-8">
                    {service.longDesc}
                  </p>
                  <Link
                    href="/contact"
                    className="self-start inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-sans font-medium text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Demander un devis
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl uppercase text-white mb-4">
            Un Besoin Spécifique ?
          </h2>
          <p className="text-white/60 font-sans text-base mb-8 max-w-xl mx-auto">
            Contactez-nous directement pour toute demande particulière. Nous vous répondrons dans les plus brefs délais.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-sans font-medium text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  )
}
