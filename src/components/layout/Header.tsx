import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { ATTACHMENT_APPLICATION, NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100/50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-extrabold tracking-tight text-primary-900">
            Photo<span className="text-primary-600">Med</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                location.pathname === link.href
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-text-secondary hover:bg-primary-50 hover:text-primary-700'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href="/api/apk-latest"
            className="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/25"
          >
            Get the App
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-text-secondary md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="border-t border-primary-500 bg-primary-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 py-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center text-xs font-medium sm:text-left sm:text-sm">
              We're Hiring! Deadline {ATTACHMENT_APPLICATION.deadlineLabel}.
            </p>
            <Link
              to="/careers"
              className="inline-flex w-full items-center justify-center rounded-md bg-white/15 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-white/25 sm:w-auto sm:text-sm"
            >
              View in Careers
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-primary-100 bg-white md:hidden">
          <nav className="flex flex-col px-4 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                  location.pathname === link.href
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-text-secondary hover:bg-primary-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/api/apk-latest"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get the App
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
