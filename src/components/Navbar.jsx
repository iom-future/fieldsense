import { useState } from 'react'
import { Sprout, ArrowRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Product', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'Partners', href: '#partners' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-5 sm:pt-7 md:pt-8 px-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between"
      >
        {/* Left: Brand Logo directly over the hero image without background strip */}
        <a
          href="/"
          className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="FieldSense homepage"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-white shadow-md border border-white/15 transition-transform duration-150 group-hover:scale-105">
            <Sprout className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl font-bold tracking-tight text-white drop-shadow-xs">
              FieldSense
            </span>
            <span className="hidden sm:block text-[11px] font-medium leading-none text-paper/80 drop-shadow-xs">
              Grow With Foresight.
            </span>
          </div>
        </a>

        {/* Center: Modern Pill Section Switcher with Green Active Indicator */}
        <div className="hidden md:inline-flex items-center gap-1 rounded-full bg-white/95 p-1.5 shadow-xl backdrop-blur-md border border-white/60">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                  isActive
                    ? 'bg-forest text-white shadow-xs'
                    : 'text-muted hover:text-ink hover:bg-black/5'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Right: CTA Pill Button directly on hero image */}
        <div className="flex items-center gap-3">
          <a
            href="#early-access"
            className="hidden sm:inline-flex group items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-md border border-white/15 transition-all duration-150 hover:bg-forest-dark hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
            className="inline-flex md:hidden items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/20 p-2.5 text-white transition-colors duration-150 hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown Card */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-3 max-w-md md:hidden rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur-md border border-white/60 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href)
                    handleLinkClick()
                  }}
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-forest text-white'
                      : 'text-ink hover:bg-black/5 hover:text-forest'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}

            <div className="pt-2 sm:hidden">
              <a
                href="#early-access"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-forest px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-forest-dark"
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
