export const SITE_CONFIG = {
  name: 'PhotoMed',
  tagline: 'AI-Powered Traditional Medicine',
  description:
    'Bridging centuries of ethnobotanical wisdom with modern artificial intelligence. Identify medicinal plants, get symptom-based remedy guidance, and discover healing flora in your region.',
  url: 'https://photomed.kristianhans.com',
  contact: {
    email: 'support@photomed.app',
  },
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Download', href: '/download' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_LINKS = {
  product: [
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
