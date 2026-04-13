'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    src: '/images/hero-1.jpg',
    alt: 'Garage BRINCAT Castelsarrasin — Concessionnaire FIAT',
    heading: 'Votre Expert\nAutomobile',
    subheading: 'Concessionnaire FIAT à Castelsarrasin et Montauban depuis plus de 50 ans.',
    cta: { label: 'Nos services', href: '/services' },
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'Réparation toutes marques — Garage BRINCAT',
    heading: 'Réparation\nToutes Marques',
    subheading: 'Mécanique, carrosserie, peinture et bris de glace. Diagnostic électronique certifié FIAT.',
    cta: { label: 'En savoir plus', href: '/services' },
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'Spécialiste camping-car agréé — Garage BRINCAT',
    heading: 'Spécialiste\nCamping-Car',
    subheading: 'Agréé et certifié pour l\'entretien et la réparation de camping-cars. Révision avant voyage.',
    cta: { label: 'Découvrir', href: '/camping-car' },
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || index === current) return
      setTransitioning(true)
      setTimeout(() => {
        setCurrent(index)
        setTransitioning(false)
      }, 400)
    },
    [current, transitioning]
  )

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden"
      aria-label="Carousel principal"
      aria-roledescription="carousel"
    >
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            className="object-cover"
            priority={i === 0}
            quality={85}
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div
          className={`max-w-xl transition-all duration-500 ${
            transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <p className="font-display text-xs uppercase tracking-widest text-accent mb-4">
            Garage BRINCAT · Tarn-et-Garonne
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl uppercase leading-none text-white whitespace-pre-line mb-6">
            {slide.heading}
          </h1>
          <p className="font-sans text-white/80 text-lg leading-relaxed mb-8 max-w-md">
            {slide.subheading}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={slide.cta.href}
              className="bg-accent hover:bg-accent-hover text-white font-sans font-medium text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {slide.cta.label}
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white/50 hover:border-white text-white font-sans font-medium text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3" aria-label="Indicateurs de slide">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-accent'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === current}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all duration-200"
        aria-label="Slide précédente"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => next()}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white transition-all duration-200"
        aria-label="Slide suivante"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-white/40">
        <span className="font-sans text-xs uppercase tracking-widest rotate-90 origin-center">Défiler</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  )
}
