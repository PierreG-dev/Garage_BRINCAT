import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TEAM_MEMBERS, LOCATIONS, CANONICAL_URL, COMPANY_SHORT } from '@/lib/data'
import { pageMetadata, breadcrumbJsonLd, ORGANIZATION_ID, WEBSITE_ID } from '@/lib/seo'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = pageMetadata({
  title: 'Garage familial FIAT depuis plus de 50 ans',
  socialTitle: 'Garage BRINCAT : plus de 50 ans de garage familial FIAT',
  description:
    'Le Garage BRINCAT est une entreprise familiale du Tarn-et-Garonne depuis plus de 50 ans. Concessionnaire FIAT à Castelsarrasin et Montauban, dix personnes à votre service.',
  path: '/a-propos',
  image: '/images/og/a-propos.jpg',
  imageAlt: "L'équipe du Garage BRINCAT",
})

const breadcrumb = breadcrumbJsonLd([{ name: 'À propos', path: '/a-propos' }])

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `À propos du ${COMPANY_SHORT}`,
  description: 'Histoire du Garage BRINCAT, garage familial FIAT en Tarn-et-Garonne depuis plus de 50 ans.',
  url: `${CANONICAL_URL}/a-propos`,
  inLanguage: 'fr-FR',
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: { '@id': ORGANIZATION_ID },
}

const milestones = [
  {
    period: 'Fondation',
    description: 'La famille BRINCAT ouvre son garage en Tarn-et-Garonne. C\'est alors un garage de mécanique indépendant.',
  },
  {
    period: 'Concession FIAT',
    description: 'Le garage devient concessionnaire FIAT. On vend désormais des voitures neuves en plus de les réparer.',
  },
  {
    period: 'Agrément camping-car',
    description: 'De plus en plus de clients arrivaient avec leur camping-car. On obtient l\'agrément pour les entretenir et les réparer.',
  },
  {
    period: 'Montauban',
    description: 'Ouverture d\'un deuxième garage à Montauban, avenue de Toulouse, avec la génération suivante : BRINCAT fils.',
  },
  {
    period: 'Aujourd\'hui',
    description: 'Deux garages, dix personnes, et toujours la même façon de travailler : on prend le temps de vous expliquer ce qu\'on fait sur votre voiture.',
  },
]

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="L'équipe Garage BRINCAT"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-10 lg:pb-16 pt-24">
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-accent mb-2">
              Depuis plus de 50 ans
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl uppercase text-white leading-tight">
              Notre Histoire
            </h1>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-16 lg:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                eyebrow="Qui sommes-nous"
                title="Une entreprise familiale"
              />
              <div className="space-y-5 text-brand-muted font-sans text-base leading-relaxed">
                <p>
                  SARL BRINCAT est une entreprise familiale créée il y a plus de 50 ans. Le garage a
                  grandi petit à petit et compte aujourd&apos;hui deux adresses en Tarn-et-Garonne,
                  à Castelsarrasin et à Montauban.
                </p>
                <p>
                  Depuis toutes ces années, on travaille avec FIAT, qui nous fait toujours confiance
                  aujourd&apos;hui. Vous pouvez acheter votre voiture sur place ou la commander chez nous.
                </p>
                <p>
                  À l&apos;atelier, on répare toutes les marques : mécanique, carrosserie, peinture et
                  bris de glace. Pour les pannes électroniques, on a un appareil de diagnostic certifié FIAT.
                </p>
                <p>
                  Nous sommes aussi dépanneur conventionné par des compagnies d&apos;assistance. Si vous
                  tombez en panne, on peut venir vous remorquer.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/garage-castelsarrasin.jpg"
                  alt="Garage BRINCAT Castelsarrasin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
                <Image
                  src="/images/garage-montauban.jpg"
                  alt="Garage BRINCAT Montauban"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-white text-center">
            {[
              { value: '50+', label: 'Années d\'expérience' },
              { value: '2', label: 'Établissements' },
              { value: '10', label: 'Professionnels' },
              { value: 'FIAT', label: 'Concessionnaire officiel' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-4xl lg:text-5xl">{stat.value}</p>
                <p className="font-sans text-xs uppercase tracking-wider mt-2 text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-display text-xs uppercase tracking-widest text-accent mb-3">
              Notre parcours
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl uppercase text-white">
              Les grandes étapes
            </h2>
            <div className="mt-4 w-12 h-0.5 bg-accent mx-auto" aria-hidden="true" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-brand-steel" aria-hidden="true" />

            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.period}
                  className={`relative flex gap-8 lg:gap-0 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent mt-1.5" aria-hidden="true" />

                  {/* Spacer for alternate layout */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Content */}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-1/2 bg-brand-mid rounded-2xl p-6 ${
                      index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'
                    }`}
                  >
                    <p className="font-display text-xs uppercase tracking-widest text-accent mb-2">
                      {milestone.period}
                    </p>
                    <p className="font-sans text-white/70 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 lg:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos équipes"
            title="L'équipe"
            subtitle="Dix personnes vous accueillent du mardi au samedi, à Castelsarrasin et à Montauban."
            centered
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
            {TEAM_MEMBERS.map((name) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <span className="font-display font-bold text-xl text-accent">
                    {name[0]}
                  </span>
                </div>
                <p className="font-display font-medium text-sm uppercase tracking-wide text-brand-dark">
                  {name}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-brand-dark rounded-xl p-8 text-center">
            <p className="font-display text-xl lg:text-2xl text-white mb-2">
              &ldquo; Au plaisir de vous recevoir dans nos locaux. &rdquo;
            </p>
            <p className="font-sans text-accent text-sm uppercase tracking-widest">
              Toute l&apos;équipe BRINCAT
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-brand-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="bg-brand-dark rounded-2xl p-8 flex flex-col gap-4">
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <Image
                    src={loc.photo}
                    alt={loc.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-white">
                  {loc.city}
                </h3>
                <p className="text-white/60 font-sans text-sm">{loc.address}, {loc.zipCode} {loc.city}</p>
                <a
                  href={`tel:${loc.phone.replace(/\s/g, '')}`}
                  className="text-accent font-sans text-sm hover:text-accent-light transition-colors"
                >
                  {loc.phone}
                </a>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start text-xs font-sans uppercase tracking-wider text-white/40 hover:text-white transition-colors"
                >
                  Voir sur la carte →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-light text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-display font-bold text-3xl uppercase text-brand-dark mb-4">
            Passez nous voir
          </h2>
          <p className="text-brand-muted font-sans mb-8">
            On est ouverts du mardi au samedi dans nos deux garages. Vous pouvez aussi nous appeler ou nous écrire.
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
