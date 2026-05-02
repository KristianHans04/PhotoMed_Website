import { Link } from 'react-router-dom'
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-primary-100 bg-surface-dim">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-extrabold tracking-tight text-primary-900">
                Photo<span className="text-primary-600">Med</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Product
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">
              Legal
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-100 pt-8 md:flex-row">
          <p className="text-sm text-text-muted">
            {new Date().getFullYear()} PhotoMed. All rights reserved.
          </p>
          <p className="text-sm text-text-muted">
            Built with purpose. For the communities that need it most.
          </p>
        </div>
      </div>
    </footer>
  )
}
