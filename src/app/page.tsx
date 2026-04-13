import type { Metadata } from 'next'
import HeroCarousel from '@/components/home/HeroCarousel'
import ServiceGrid from '@/components/home/ServiceGrid'
import TestimonialSlider from '@/components/home/TestimonialSlider'
import AboutBand from '@/components/home/AboutBand'
import SeparatorBand from '@/components/ui/SeparatorBand'
import Link from 'next/link'
import { LOCATIONS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Garage BRINCAT — Concessionnaire FIAT Castelsarrasin & Montauban',
  description:
    'SARL BRINCAT, votre garage FIAT à Castelsarrasin et Montauban. Réparation toutes marques, carrosserie, camping-car agréé, dépannage. Famille professionnelle depuis 50 ans.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Quick contact bar */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-white">
              {LOCATIONS.map((loc) => (
                <a
                  key={loc.id}
                  href={`tel:${loc.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm font-sans hover:text-white/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">{loc.city}</span> — {loc.phone}
                </a>
              ))}
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-white text-accent hover:bg-white/90 font-sans font-medium text-xs uppercase tracking-wider px-5 py-2 rounded-xl transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>

      <ServiceGrid />
      <SeparatorBand src="/images/separator-1.jpg" height={280} />
      <TestimonialSlider />
      <AboutBand />

      {/* Camping-car CTA band */}
      <section className="py-16 lg:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-2xl p-8 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <p className="font-display text-xs uppercase tracking-widest text-accent mb-3">
                Spécialité
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl uppercase text-white leading-tight">
                Spécialiste Camping-Car<br />Agréé
              </h2>
              <p className="mt-4 text-white/60 font-sans text-base max-w-lg">
                Révision avant voyage, entretien, réparation — nous sommes agréés et certifiés pour
                tous vos besoins en camping-car.
              </p>
            </div>
            <Link
              href="/camping-car"
              className="shrink-0 bg-accent hover:bg-accent-hover text-white font-sans font-medium text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
