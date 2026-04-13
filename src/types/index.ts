export interface Location {
  id: string
  name: string
  address: string
  city: string
  zipCode: string
  phone: string
  email: string
  mapsUrl: string
  photo: string
  hours: WeekHours
}

export interface WeekHours {
  lundi: string | null
  mardi: string
  mercredi: string
  jeudi: string
  vendredi: string
  samedi: string
  dimanche: string | null
}

export interface Service {
  id: string
  slug: string
  title: string
  shortDesc: string
  longDesc: string
  image: string
  icon: string
}

export interface Testimonial {
  id: string
  author: string
  content: string
  rating: number
  source: string
}

export interface NavLink {
  label: string
  href: string
}

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Record<string, string[]>
}
