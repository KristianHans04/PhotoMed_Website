import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
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
          <Link
            to="/download"
            className="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-700/25"
          >
            Get the App
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-text-secondary md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
            <Link
              to="/download"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get the App
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
