import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { CANONICAL_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Spécialiste Camping-Car Agréé — Castelsarrasin & Montauban",
  description:
    "Garage BRINCAT, spécialiste agréé camping-car en Tarn-et-Garonne. Révision avant voyage, entretien, réparation, dépannage remorquage pour camping-cars toutes marques.",
  alternates: { canonical: "/camping-car" },
  openGraph: {
    title: "Spécialiste Camping-Car Agréé — Garage BRINCAT Tarn-et-Garonne",
    description:
      "Garage BRINCAT, spécialiste agréé camping-car en Tarn-et-Garonne. Révision avant voyage, entretien, réparation, dépannage remorquage pour camping-cars toutes marques.",
    url: "/camping-car",
    images: [
      {
        url: "/images/camping-car-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Garage BRINCAT — Spécialiste Camping-Car Agréé",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spécialiste Camping-Car Agréé — Garage BRINCAT Tarn-et-Garonne",
    description:
      "Spécialiste agréé camping-car en Tarn-et-Garonne. Révision avant voyage, entretien, réparation, dépannage remorquage toutes marques.",
    images: ["/images/camping-car-bg.jpg"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: CANONICAL_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Camping-Car",
      item: `${CANONICAL_URL}/camping-car`,
    },
  ],
};

const campingCarServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Spécialiste Camping-Car Agréé",
  description:
    "Révision avant voyage, entretien, réparation et dépannage remorquage pour camping-cars toutes marques en Tarn-et-Garonne.",
  provider: {
    "@type": "AutoRepair",
    name: "Garage BRINCAT",
    url: CANONICAL_URL,
    telephone: "05 63 32 33 78",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Castelsarrasin",
      postalCode: "82100",
      addressCountry: "FR",
    },
  },
  areaServed: ["Castelsarrasin", "Montauban", "Tarn-et-Garonne", "Occitanie"],
  serviceType: "Réparation et entretien camping-car",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Prestations Camping-Car",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Révision pré-voyage camping-car",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Entretien camping-car" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Réparation camping-car toutes marques",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diagnostic électronique camping-car",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dépannage remorquage camping-car",
        },
      },
    ],
  },
};

const features = [
  {
    title: "Révision Pré-Voyage",
    description:
      "Avant votre départ, nous contrôlons tous les points essentiels de votre camping-car : freins, pneumatiques, huiles, éclairages, système électrique. Partez l'esprit tranquille.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Entretien & Révision",
    description:
      "Vidanges, filtres, courroies de distribution — nous assurons l'entretien complet selon les préconisations constructeur pour prolonger la durée de vie de votre véhicule.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
    ),
  },
  {
    title: "Réparation Toutes Marques",
    description:
      "Fiat, Chausson, Rapido, Hymer, Pilote... Nos techniciens interviennent sur tous les modèles de camping-cars. Mécanique, carrosserie, bris de glace — nous gérons tout.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    ),
  },
  {
    title: "Diagnostic Électronique",
    description:
      "Équipés d'un matériel de diagnostic certifié FIAT, nous identifions rapidement toute anomalie électronique ou mécanique sur votre camping-car.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"
      />
    ),
  },
  {
    title: "Dépannage & Remorquage",
    description:
      "Dépanneur conventionné par des groupes d'assistance, nous intervenons en urgence en cas de panne sur route. Remorquage disponible pour tous types de camping-cars.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    ),
  },
  {
    title: "Agrément Officiel",
    description:
      "Notre garage bénéficie d'un agrément officiel pour l'entretien et la réparation de camping-cars. Votre garantie constructeur est préservée.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    ),
  },
];

export default function CampingCarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(campingCarServiceJsonLd),
        }}
      />
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <Image
          src="/images/camping-car-bg.jpg"
          alt="Camping-car — Garage BRINCAT spécialiste agréé"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 to-brand-dark/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-10 lg:pb-16 pt-24">
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-accent mb-2">
              Spécialité Garage BRINCAT
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl uppercase text-white leading-tight">
              Spécialiste
              <br />
              Camping-Car
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Agrément officiel"
                title="Votre Expert Camping-Car en Tarn-et-Garonne"
                subtitle="Le Garage BRINCAT est spécialiste agréé pour l'entretien et la réparation de camping-cars. Que ce soit pour une révision avant votre prochain voyage ou une réparation après incident, notre équipe est formée pour prendre en charge tous types de camping-cars, toutes marques confondues."
              />
              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent-hover text-white font-sans font-medium text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  Prendre rendez-vous
                </Link>
                <a
                  href="tel:0563323378"
                  className="border border-brand-steel hover:border-brand-dark text-brand-dark font-sans font-medium text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  05 63 32 33 78
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/camping-car.jpg"
                  alt="Camping-car entretien"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand-dark/20" />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-accent text-white font-display font-bold text-sm uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg">
                Agrément Officiel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-display text-xs uppercase tracking-widest text-accent mb-3">
              Nos prestations
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl uppercase text-white">
              Ce Que Nous Proposons
            </h2>
            <div
              className="mt-4 w-12 h-0.5 bg-accent mx-auto"
              aria-hidden="true"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-brand-mid rounded-2xl p-8 hover:bg-brand-steel transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl uppercase text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 lg:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-xs uppercase tracking-widest text-accent mb-3">
            Prêt pour la route ?
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl uppercase text-brand-dark mb-4">
            Révisez Avant Votre Départ
          </h2>
          <p className="text-brand-muted font-sans text-base max-w-lg mx-auto mb-8">
            Un camping-car bien entretenu, c&apos;est un voyage serein.
            Contactez-nous pour programmer votre révision pré-départ.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white font-sans font-medium text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Nous contacter
            </Link>
            <Link
              href="/services"
              className="border border-brand-steel hover:border-brand-dark text-brand-dark font-sans font-medium text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
