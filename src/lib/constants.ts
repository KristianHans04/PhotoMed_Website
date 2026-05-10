export const SITE_CONFIG = {
  name: 'PhotoMed',
  tagline: 'AI-Powered Symptom Relief from Nature',
  description:
    'Feel sick? PhotoMed matches your symptoms to medicinal plants growing near you, directs you to the closest one, and tells you how to prepare the remedy. A faster, free alternative when hospitals are hours away.',
  url: 'https://photomed.kristianhans.com',
  contact: {
    email: 'support@photomed.app',
  },
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_LINKS = {
  product: [
    { label: 'Donate', href: '/donate' },
    { label: 'Research', href: '/research' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const
