import Image from 'next/image'
import type { Location } from '@/types'

interface LocationCardProps {
  location: Location
}

const DAY_LABELS: Record<string, string> = {
  lundi: 'Lundi',
  mardi: 'Mardi',
  mercredi: 'Mercredi',
  jeudi: 'Jeudi',
  vendredi: 'Vendredi',
  samedi: 'Samedi',
  dimanche: 'Dimanche',
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      {/* Photo */}
      <div className="relative h-48">
        <Image
          src={location.photo}
          alt={location.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <h2 className="font-display font-bold text-2xl uppercase text-white">
            {location.city}
          </h2>
        </div>
      </div>

      {/* Details */}
      <div className="p-6">
        {/* Address */}
        <div className="flex gap-3 mb-4">
          <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="font-sans text-sm text-brand-dark">{location.address}</p>
            <p className="font-sans text-sm text-brand-dark">{location.zipCode} {location.city}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-3 mb-4">
          <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a
            href={`tel:${location.phone.replace(/\s/g, '')}`}
            className="font-sans text-sm text-brand-dark hover:text-accent transition-colors"
          >
            {location.phone}
          </a>
        </div>

        {/* Email */}
        <div className="flex gap-3 mb-6">
          <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a
            href={`mailto:${location.email}`}
            className="font-sans text-sm text-brand-dark hover:text-accent transition-colors"
          >
            {location.email}
          </a>
        </div>

        {/* Hours */}
        <div className="border-t border-gray-100 pt-5">
          <p className="font-display text-xs uppercase tracking-widest text-brand-muted mb-3">
            Horaires
          </p>
          <table className="w-full text-sm font-sans">
            <tbody>
              {Object.entries(location.hours).map(([day, hours]) => (
                <tr key={day} className="border-b border-gray-50 last:border-0">
                  <td className="py-1.5 text-brand-dark font-medium w-28">{DAY_LABELS[day]}</td>
                  <td className={`py-1.5 text-right ${hours ? 'text-brand-muted' : 'text-red-400'}`}>
                    {hours ?? 'Fermé'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Maps link */}
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
        >
          Itinéraire Google Maps
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}
