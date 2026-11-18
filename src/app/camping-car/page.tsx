import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { CANONICAL_URL } from "@/lib/data";
import { pageMetadata, breadcrumbJsonLd, ORGANIZATION_ID } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Garage agréé camping-car à Castelsarrasin et Montauban",
  socialTitle: "Entretien et réparation de camping-cars en Tarn-et-Garonne",
  description:
    "Le Garage BRINCAT est agréé camping-car en Tarn-et-Garonne. Révision avant les vacances, entretien, réparation et remorquage de camping-cars toutes marques à Castelsarrasin et Montauban.",
  path: "/camping-car",
  image: "/images/og/camping-car.jpg",
  imageAlt: "Entretien de camping-car au Garage BRINCAT",
});

const breadcrumb = breadcrumbJsonLd([{ name: "Camping-car", path: "/camping-car" }]);

const campingCarServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Entretien et réparation de camping-cars",
  description:
    "Révision avant voyage, entretien, réparation et dépannage remorquage pour camping-cars toutes marques en Tarn-et-Garonne.",
  provider: { "@id": ORGANIZATION_ID },
  url: `${CANONICAL_URL}/camping-car`,
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
    title: "Révision avant le départ",
    description:
      "Avant de partir, on vérifie votre camping-car de A à Z : freins, pneus, niveaux, éclairage et circuit électrique. Mieux vaut le faire au garage que sur une aire d'autoroute.",
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
    title: "Entretien courant",
    description:
      "Vidange, filtres, courroie de distribution : on suit le carnet d'entretien du constructeur. Un camping-car qui roule peu doit quand même être entretenu régulièrement.",
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
    title: "Réparation toutes marques",
    description:
      "Fiat, Chausson, Rapido, Hymer, Pilote... On répare tous les modèles de camping-cars, que ce soit en mécanique, en carrosserie ou pour un pare-brise.",
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
    title: "Diagnostic électronique",
    description:
      "Avec notre valise de diagnostic certifiée FIAT, on trouve vite l'origine d'une panne ou d'un voyant allumé sur votre camping-car.",
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
    title: "Dépannage et remorquage",
    description:
      "Nous sommes dépanneur conventionné par des compagnies d'assistance. Si votre camping-car tombe en panne sur la route, on peut venir le chercher et le remorquer.",
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
    title: "Garage agréé",
    description:
      "Le garage est agréé pour l'entretien et la réparation des camping-cars, toutes marques confondues.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
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
          alt="Camping-car pris en charge par le Garage BRINCAT"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 to-brand-dark/40" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-10 lg:pb-16 pt-24">
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-accent mb-2">
              Garage BRINCAT
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl uppercase text-white leading-tight">
              Entretien et réparation
              <br />
              de camping-cars
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
                eyebrow="Garage agréé camping-car"
                title="Votre camping-car entre de bonnes mains en Tarn-et-Garonne"
                subtitle="Le Garage BRINCAT est agréé pour entretenir et réparer les camping-cars. Révision avant les vacances, panne, choc ou simple vidange : on accueille tous les modèles et toutes les marques, à Castelsarrasin comme à Montauban."
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
                  alt="Entretien d'un camping-car à l'atelier"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-brand-dark/20" />
              </div>
              <div className="absolute -bottom-3 -left-3 bg-accent text-white font-display font-bold text-sm uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg">
                Garage agréé
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
              Ce qu&apos;on fait pour votre camping-car
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
            Avant les vacances
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl uppercase text-brand-dark mb-4">
            Faites réviser votre camping-car avant de partir
          </h2>
          <p className="text-brand-muted font-sans text-base max-w-lg mx-auto mb-8">
            Appelez-nous ou envoyez-nous un message pour fixer une date de révision.
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
