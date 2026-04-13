import Image from 'next/image'
import Link from 'next/link'

export default function AboutBand() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-accent mb-3">
              Notre histoire
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl uppercase text-white leading-tight mb-6">
              Une Famille<br />Passionnée<br />Depuis 50 Ans
            </h2>
            <div className="w-12 h-0.5 bg-accent mb-8" aria-hidden="true" />

            <div className="space-y-4 text-white/70 font-sans text-base leading-relaxed">
              <p>
                SARL BRINCAT est une entreprise familiale fondée il y a plus de 50 ans, qui s&apos;est
                étendue au fil du temps pour devenir la référence automobile en Tarn-et-Garonne.
              </p>
              <p>
                Durant toutes ces années, nous avons fièrement arboré le drapeau FIAT — une marque
                qui encore aujourd&apos;hui nous fait confiance pour vous proposer le meilleur.
              </p>
              <p>
                Deux établissements, une équipe de 10 professionnels passionnés, et la même
                ambition depuis toujours&nbsp;: vous accueillir comme il se doit.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/a-propos"
                className="bg-accent hover:bg-accent-hover text-white font-sans font-medium text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Découvrir notre histoire
              </Link>
              <Link
                href="/contact"
                className="border border-white/30 hover:border-white/60 text-white font-sans font-medium text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Nous contacter
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-brand-steel">
              {[
                { value: '50+', label: 'Années d\'expérience' },
                { value: '2', label: 'Établissements' },
                { value: '10', label: 'Professionnels' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-bold text-3xl lg:text-4xl text-accent">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-white/50 uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[520px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="L'équipe Garage BRINCAT"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
            {/* Decorative accent border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-accent/20 rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
