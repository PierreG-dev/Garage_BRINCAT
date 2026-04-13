'use client'

import { useState, useEffect } from 'react'
import { TESTIMONIALS } from '@/lib/data'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-white/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-brand-dark" aria-label="Témoignages clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-display text-xs uppercase tracking-widest text-accent mb-3">
            Ce qu&apos;ils disent
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl uppercase text-white">
            Avis Clients
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-accent mx-auto" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`bg-brand-mid rounded-2xl p-8 transition-all duration-500 ${
                i === current
                  ? 'ring-1 ring-accent shadow-lg shadow-accent/10 scale-105'
                  : 'opacity-70'
              }`}
            >
              {/* Quote mark */}
              <div className="text-accent/30 font-display text-6xl leading-none mb-4 select-none" aria-hidden="true">
                &ldquo;
              </div>

              <p className="font-sans text-white/80 text-sm leading-relaxed mb-6">
                {testimonial.content}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <StarRating rating={testimonial.rating} />
                  <p className="text-brand-muted text-xs font-sans mt-2">{testimonial.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-white/30'
              }`}
              aria-label={`Avis ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
