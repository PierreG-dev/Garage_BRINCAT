import type { Metadata } from 'next'
import { LOCATIONS, CANONICAL_URL } from '@/lib/data'
import { pageMetadata, breadcrumbJsonLd, locationId, ORGANIZATION_ID, WEBSITE_ID } from '@/lib/seo'
import LocationCard from '@/components/contact/LocationCard'
import ContactForm from '@/components/contact/ContactForm'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = pageMetadata({
  title: 'Contact et horaires à Castelsarrasin et Montauban',
  socialTitle: 'Contacter le Garage BRINCAT à Castelsarrasin et Montauban',
  description:
    'Appelez le Garage BRINCAT à Castelsarrasin (05 63 32 33 78) ou à Montauban (05 63 66 29 61), ou écrivez-nous. Adresses, horaires d\'ouverture et formulaire de contact.',
  path: '/contact',
  image: '/images/og/contact.jpg',
  imageAlt: 'Le Garage BRINCAT à Castelsarrasin',
})

const breadcrumb = breadcrumbJsonLd([{ name: 'Contact', path: '/contact' }])

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contacter le Garage BRINCAT',
  url: `${CANONICAL_URL}/contact`,
  inLanguage: 'fr-FR',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORGANIZATION_ID },
  mainEntity: LOCATIONS.map((location) => ({ '@id': locationId(location) })),
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-brand-dark pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs uppercase tracking-widest text-accent mb-2">
            Garage BRINCAT
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl uppercase text-white">
            Nous contacter
          </h1>
          <p className="mt-4 text-white/60 font-sans text-base max-w-lg">
            Pour un devis ou un rendez-vous, appelez le garage le plus proche de chez vous ou laissez-nous un message.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 lg:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Deux adresses"
            title="Nos garages"
            subtitle="On vous accueille à Castelsarrasin et à Montauban, du mardi au samedi."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: info */}
            <div>
              <p className="font-display text-xs uppercase tracking-widest text-accent mb-3">
                Formulaire de contact
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl uppercase text-white leading-tight mb-6">
                Envoyez-nous<br />un message
              </h2>
              <div className="w-10 h-0.5 bg-accent mb-8" aria-hidden="true" />
              <p className="text-white/60 font-sans text-base leading-relaxed mb-10">
                Remplissez le formulaire et on vous rappelle. Si c&apos;est urgent, le plus simple
                reste de nous téléphoner.
              </p>

              {/* Quick contacts */}
              <div className="space-y-4">
                {LOCATIONS.map((loc) => (
                  <div key={loc.id} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-wider text-white/40 mb-0.5">{loc.city}</p>
                      <a
                        href={`tel:${loc.phone.replace(/\s/g, '')}`}
                        className="font-sans text-white font-medium hover:text-accent transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-brand-mid rounded-xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
