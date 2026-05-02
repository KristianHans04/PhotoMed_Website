export const SITE_CONFIG = {
  name: 'PhotoMed',
  tagline: 'AI-Powered Traditional Medicine',
  description:
    'Bridging centuries of ethnobotanical wisdom with modern artificial intelligence. Identify medicinal plants, get symptom-based remedy guidance, and discover healing flora in your region.',
  url: 'https://photomed.kristianhans.com',
  github: 'https://github.com/KristianHans04/PhotoMed',
  contact: {
    email: 'hello@kristianhans.com',
  },
  social: {
    github: 'https://github.com/KristianHans04/PhotoMed',
  },
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Download', href: '/download' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_LINKS = {
  product: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Download', href: '/download' },
    { label: 'Donate', href: '/donate' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const
