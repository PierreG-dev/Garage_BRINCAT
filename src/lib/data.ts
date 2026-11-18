import type { Location, Service, Testimonial, NavLink } from '@/types'

export const COMPANY_NAME = 'SARL BRINCAT & BRINCAT fils'
export const COMPANY_SHORT = 'Garage BRINCAT'
export const COMPANY_TAGLINE = 'Garage FIAT à Castelsarrasin et Montauban depuis plus de 50 ans'
export const COMPANY_DESCRIPTION =
  'Garage familial FIAT à Castelsarrasin et Montauban depuis plus de 50 ans. Mécanique et carrosserie toutes marques, entretien camping-car, dépannage et remorquage en Tarn-et-Garonne.'
export const COMPANY_EMAIL = 'sarlgaragebrincat@orange.fr'
export const CANONICAL_URL = 'https://www.sarlgaragebrincat.fr'

export const LOCATIONS: Location[] = [
  {
    id: 'castelsarrasin',
    name: 'Garage BRINCAT Castelsarrasin',
    address: '93 Avenue du Maréchal Leclerc',
    city: 'Castelsarrasin',
    zipCode: '82100',
    phone: '05 63 32 33 78',
    email: 'sarlgaragebrincat@orange.fr',
    mapsUrl:
      'https://www.google.com/maps/dir//SARL+Garage+Brincat,+93+Avenue+du+Mar%C3%A9chal+Leclerc,+82100+Castelsarrasin',
    photo: '/images/garage-castelsarrasin.jpg',
    geo: { latitude: 44.0387, longitude: 1.1067 },
    hours: {
      lundi: null,
      mardi: '8h00 - 12h00 / 14h00 - 18h00',
      mercredi: '8h00 - 12h00 / 14h00 - 18h00',
      jeudi: '8h00 - 12h00 / 14h00 - 18h00',
      vendredi: '8h00 - 12h00 / 14h00 - 18h00',
      samedi: '8h00 - 12h00 / 14h00 - 17h00',
      dimanche: null,
    },
  },
  {
    id: 'montauban',
    name: 'Garage BRINCAT Montauban',
    address: '426 Avenue de Toulouse',
    city: 'Montauban',
    zipCode: '82000',
    phone: '05 63 66 29 61',
    email: 'sarl.brincat@wanadoo.fr',
    mapsUrl: 'https://www.google.com/maps/dir//Garage+Brincat+Montauban',
    photo: '/images/garage-montauban.jpg',
    geo: { latitude: 44.0069, longitude: 1.3556 },
    hours: {
      lundi: null,
      mardi: '8h00 - 12h00 / 14h00 - 19h00',
      mercredi: '8h00 - 12h00 / 14h00 - 19h00',
      jeudi: '8h00 - 12h00 / 14h00 - 19h00',
      vendredi: '8h00 - 12h00 / 14h00 - 19h00',
      samedi: '8h00 - 12h00 / 14h00 - 18h00',
      dimanche: null,
    },
  },
]

export const SERVICES: Service[] = [
  {
    id: 'expertise',
    slug: 'expertise',
    title: 'Expertise',
    shortDesc: 'Diagnostic électronique toutes marques',
    longDesc:
      "Voyant allumé, bruit anormal ou perte de puissance : on branche votre voiture sur notre valise de diagnostic certifiée FIAT pour trouver d'où vient le problème, quelle que soit la marque. On peut aussi faire un bilan complet avant l'achat d'une occasion.",
    image: '/images/service-expertise.jpg',
    icon: 'wrench',
  },
  {
    id: 'reparation',
    slug: 'reparation',
    title: 'Réparation',
    shortDesc: 'Mécanique, carrosserie et peinture toutes marques',
    longDesc:
      "Mécanique, carrosserie, peinture : l'atelier s'occupe de tout, sur toutes les marques. On remplace aussi les pare-brise et vitrages (bris de glace) et on fait les courroies de distribution. Vous n'avez pas besoin d'avoir une FIAT pour venir chez nous.",
    image: '/images/service-reparation.jpg',
    icon: 'car',
  },
  {
    id: 'depannage',
    slug: 'depannage',
    title: 'Dépannage',
    shortDesc: 'Remorquage et assistance sur route',
    longDesc:
      "Nous sommes dépanneur conventionné par plusieurs compagnies d'assistance. En cas de panne ou d'accident autour de Castelsarrasin et Montauban, appelez-nous : on vient chercher votre véhicule et on le remorque jusqu'à l'atelier.",
    image: '/images/service-depannage.jpg',
    icon: 'truck',
  },
  {
    id: 'revision',
    slug: 'revision',
    title: 'Révision',
    shortDesc: 'Vidange, freins, pneus et entretien courant',
    longDesc:
      "Vidange, filtres, freins, pneus : on fait l'entretien de votre véhicule en suivant le carnet du constructeur. Pour les camping-cars, on propose aussi une révision complète avant de partir en vacances.",
    image: '/images/service-revision.jpg',
    icon: 'check',
  },
  {
    id: 'vente',
    slug: 'vente',
    title: 'Vente véhicules',
    shortDesc: 'FIAT neuves et occasions',
    longDesc:
      "En tant que concessionnaire FIAT, nous vendons des véhicules neufs et d'occasion. Si le modèle que vous cherchez n'est pas sur place, on peut le commander. Passez nous voir pour en parler ou faire un essai.",
    image: '/images/service-vente.jpg',
    icon: 'key',
  },
  {
    id: 'garantie',
    slug: 'garantie',
    title: 'Programme de garantie',
    shortDesc: 'Nos occasions sont garanties',
    longDesc:
      "Toutes les occasions que nous vendons sont couvertes par une garantie. Si un problème survient après l'achat, vous savez à qui vous adresser : on reste votre garage après la vente.",
    image: '/images/service-garantie.jpg',
    icon: 'shield',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Client Google',
    content: 'Très bon garage. Une équipe humaine et professionnelle. Je recommande sans hésitation.',
    rating: 5,
    source: 'Google',
  },
  {
    id: '2',
    author: 'Client Google',
    content: 'Très bon garage, mécanos compétents et sympas, ainsi que tout le personnel.',
    rating: 5,
    source: 'Google',
  },
  {
    id: '3',
    author: 'Client Google',
    content: "Personnel accueillant à l'écoute, je recommande ce garage.",
    rating: 5,
    source: 'Google',
  },
]

export const TEAM_MEMBERS = [
  'Elizabeth',
  'Claire',
  'Riéna',
  'Cathy',
  'Jean-Michel',
  'Stéphane',
  'Mathieu',
  'Christian',
  'Alexandre',
  'Cyril',
]

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos services', href: '/services' },
  { label: 'Camping-car', href: '/camping-car' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

export const EXTERNAL_LINKS = [
  {
    label: 'Google Maps',
    href: 'https://www.google.fr/maps/search/garage+brincat',
  },
  {
    label: 'AlloGarage',
    href: 'https://www.allogarage.fr/garages/details-garage-SARL-Garage-Brincat-12985.html',
  },
  {
    label: 'IdGarages',
    href: 'https://www.idgarages.com/fr-fr/garage/castelsarrasin/GA5948_sarl-garage-brincat',
  },
]
