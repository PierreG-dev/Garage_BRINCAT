import type { Location, Service, Testimonial, NavLink } from '@/types'

export const COMPANY_NAME = 'SARL BRINCAT & BRINCAT fils'
export const COMPANY_SHORT = 'Garage BRINCAT'
export const COMPANY_TAGLINE = 'Votre expert automobile FIAT depuis plus de 50 ans'
export const COMPANY_DESCRIPTION =
  'Entreprise familiale fondée il y a plus de 50 ans, les Garages BRINCAT sont vos spécialistes FIAT à Castelsarrasin et Montauban. Réparation toutes marques, carrosserie, camping-car agréé.'
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
    hours: {
      lundi: null,
      mardi: '8h00 – 12h00 / 14h00 – 18h00',
      mercredi: '8h00 – 12h00 / 14h00 – 18h00',
      jeudi: '8h00 – 12h00 / 14h00 – 18h00',
      vendredi: '8h00 – 12h00 / 14h00 – 18h00',
      samedi: '8h00 – 12h00 / 14h00 – 17h00',
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
    hours: {
      lundi: null,
      mardi: '8h00 – 12h00 / 14h00 – 19h00',
      mercredi: '8h00 – 12h00 / 14h00 – 19h00',
      jeudi: '8h00 – 12h00 / 14h00 – 19h00',
      vendredi: '8h00 – 12h00 / 14h00 – 19h00',
      samedi: '8h00 – 12h00 / 14h00 – 18h00',
      dimanche: null,
    },
  },
]

export const SERVICES: Service[] = [
  {
    id: 'expertise',
    slug: 'expertise',
    title: 'Expertise',
    shortDesc: 'Diagnostic précis de votre véhicule',
    longDesc:
      "Grâce à notre équipement de diagnostic électronique certifié FIAT, nous identifions avec précision tout dysfonctionnement sur votre véhicule, toutes marques confondues. Un bilan complet avant achat ou après panne.",
    image: '/images/service-expertise.jpg',
    icon: 'wrench',
  },
  {
    id: 'reparation',
    slug: 'reparation',
    title: 'Réparation',
    shortDesc: 'Mécanique, carrosserie & peinture toutes marques',
    longDesc:
      "Notre atelier prend en charge toutes les réparations mécaniques, la carrosserie et la peinture pour tous types de véhicules. Bris de glace, révision, distribution — nous intervenons sur toutes les marques avec le même niveau d'exigence.",
    image: '/images/service-reparation.jpg',
    icon: 'car',
  },
  {
    id: 'depannage',
    slug: 'depannage',
    title: 'Dépannage',
    shortDesc: 'Remorquage et assistance sur route',
    longDesc:
      "Dépanneur conventionné par des groupes d'assistance, nous intervenons rapidement en cas de panne ou d'accident. Remorquage, assistance routière — nous sommes à votre écoute pour toute urgence.",
    image: '/images/service-depannage.jpg',
    icon: 'truck',
  },
  {
    id: 'revision',
    slug: 'revision',
    title: 'Révision',
    shortDesc: "Entretien régulier pour rouler l'esprit tranquille",
    longDesc:
      "Vidanges, filtres, freins, pneumatiques — nous assurons l'entretien complet de votre véhicule selon les préconisations constructeur. Spécialistes camping-car, nous proposons aussi les révisions pré-voyage.",
    image: '/images/service-revision.jpg',
    icon: 'check',
  },
  {
    id: 'vente',
    slug: 'vente',
    title: 'Vente véhicules',
    shortDesc: 'Véhicules neufs et occasions FIAT',
    longDesc:
      "Concessionnaire FIAT, nous vous proposons une gamme complète de véhicules neufs et d'occasion. En concession ou sur commande, il y en a pour tous les budgets. Notre équipe vous accompagne dans votre choix.",
    image: '/images/service-vente.jpg',
    icon: 'key',
  },
  {
    id: 'garantie',
    slug: 'garantie',
    title: 'Programme de garantie',
    shortDesc: 'Achetez serein avec notre garantie',
    longDesc:
      "Tous nos véhicules d'occasion bénéficient d'un programme de garantie vous offrant la tranquillité d'esprit après votre achat. Nous nous engageons à votre satisfaction sur le long terme.",
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
  { label: 'Nos Services', href: '/services' },
  { label: 'Camping-Car', href: '/camping-car' },
  { label: 'À Propos', href: '/a-propos' },
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
