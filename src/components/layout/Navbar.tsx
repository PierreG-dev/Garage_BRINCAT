'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NAV_LINKS, LOCATIONS } from '@/lib/data'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Aller au contenu
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-brand-dark/80 backdrop-blur-sm py-5'
        }`}
      >
        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-tight group"
              aria-label="Garage BRINCAT — Accueil"
            >
              <span className="font-display font-bold text-white text-xl uppercase tracking-widest group-hover:text-accent transition-colors duration-200">
                Garage BRINCAT
              </span>
              <span className="text-brand-muted text-xs uppercase tracking-widest font-sans">
                Castelsarrasin · Montauban
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-sm uppercase tracking-wider transition-colors duration-200 ${
                    pathname === link.href
                      ? 'text-accent'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${LOCATIONS[0].phone.replace(/\s/g, '')}`}
                className="text-white/70 hover:text-white text-sm font-sans transition-colors duration-200"
              >
                {LOCATIONS[0].phone}
              </a>
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent-hover text-white text-sm font-sans font-medium px-5 py-2.5 rounded-xl transition-colors duration-200 uppercase tracking-wider"
              >
                Nous contacter
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 -mr-2"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-3xl uppercase tracking-widest transition-colors duration-200 ${
                pathname === link.href ? 'text-accent' : 'text-white hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={`tel:${LOCATIONS[0].phone.replace(/\s/g, '')}`}
              className="text-white/70 font-sans text-lg"
            >
              {LOCATIONS[0].phone}
            </a>
            <a
              href={`tel:${LOCATIONS[1].phone.replace(/\s/g, '')}`}
              className="text-white/70 font-sans text-lg"
            >
              {LOCATIONS[1].phone}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
