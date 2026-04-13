import Link from 'next/link'
import { NAV_LINKS } from '@/lib/data'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-display text-8xl font-bold text-accent/20 leading-none select-none">
          404
        </p>
        <h1 className="font-display font-bold text-3xl uppercase text-white mt-4 mb-3">
          Page introuvable
        </h1>
        <p className="text-white/50 font-sans text-sm mb-10">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="bg-accent hover:bg-accent-hover text-white font-sans font-medium text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="border border-white/20 hover:border-white/50 text-white/70 hover:text-white font-sans font-medium text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-200"
          >
            Nous contacter
          </Link>
        </div>
        <nav className="mt-12 flex flex-wrap gap-4 justify-center" aria-label="Navigation rapide">
          {NAV_LINKS.filter((l) => l.href !== '/').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-sans uppercase tracking-wider text-white/30 hover:text-white/60 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
