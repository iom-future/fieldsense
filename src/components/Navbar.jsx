import { useState } from 'react'
import { Sprout, ArrowRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Product', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'Partners', href: '#partners' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/95 backdrop-blur-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Left: Brand Logo & Wordmark */}
        <a
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 rounded-lg"
          aria-label="FieldSense homepage"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-white shadow-xs transition-colors duration-150 group-hover:bg-forest-dark">
            <Sprout className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold tracking-tight text-ink">
              FieldSense
            </span>
            <span className="hidden sm:block text-[11px] font-medium leading-none text-muted">
              Grow With Foresight.
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-muted transition-colors duration-150 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Primary CTA (Desktop & Tablet) & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <a
            href="#early-access"
            className="hidden sm:inline-flex group items-center gap-2 rounded-lg bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors duration-150 hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
          >
            <span>Get Early Access</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden items-center justify-center rounded-lg p-2 text-ink transition-colors duration-150 hover:bg-black/5 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer / Panel */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-paper px-4 pt-3 pb-6 md:hidden sm:px-6 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors duration-150 hover:bg-black/5 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 sm:hidden">
              <a
                href="#early-access"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-forest px-5 py-3 text-sm font-semibold text-white shadow-xs transition-colors duration-150 hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
              >
                <span>Get Early Access</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
