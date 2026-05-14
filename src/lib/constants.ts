export const SITE_CONFIG = {
  name: 'PhotoMed',
  tagline: 'AI-Powered Symptom Relief from Nature',
  description:
    'PhotoMed matches your symptoms to medicinal plants growing near you, directs you to the closest one, and tells you how to prepare the remedy. Complementary to modern medicine, built for the communities that need it most.',
  url: 'https://photomed.app',
  contact: {
    email: 'support@photomed.app',
  },
} as const

export const ATTACHMENT_APPLICATION = {
  deadlineLabel: '31st May',
  formUrl: 'https://forms.gle/e4xmnW7X4oMhBFYT8',
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
    { label: 'Medical Disclaimer', href: '/disclaimer' },
  ],
} as const
