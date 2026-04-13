import Link from 'next/link'
import { COMPANY_NAME, LOCATIONS, NAV_LINKS, EXTERNAL_LINKS } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display font-bold text-2xl uppercase tracking-widest text-white hover:text-accent transition-colors duration-200">
                Garage BRINCAT
              </span>
            </Link>
            <p className="text-brand-muted text-sm font-sans leading-relaxed max-w-sm mb-6">
              Entreprise familiale fondée il y a plus de 50 ans. Concessionnaire FIAT, spécialiste
              camping-car, réparation toutes marques à Castelsarrasin et Montauban.
            </p>
            <div className="flex flex-col gap-2 text-sm text-brand-muted">
              {LOCATIONS.map((loc) => (
                <div key={loc.id}>
                  <span className="text-white font-medium">{loc.city}</span> —{' '}
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, '')}`}
                    className="hover:text-accent transition-colors duration-200"
                  >
                    {loc.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-widest text-brand-muted mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External links */}
          <div>
            <h3 className="font-display text-xs uppercase tracking-widest text-brand-muted mb-5">
              Retrouvez-nous
            </h3>
            <ul className="flex flex-col gap-3">
              {EXTERNAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-accent transition-colors duration-200 font-sans flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-steel flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted font-sans">
          <p>
            © {currentYear} {COMPANY_NAME}. Tous droits réservés.
          </p>
          <p>
            Site réalisé par{' '}
            <a
              href="https://creation-sites-godino.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200"
            >
              Pierre Godino
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
