import { useState, useEffect } from 'react'
import { Sprout, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Product', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'Partners', href: '#partners' },
]

const CARD_NAV_ITEMS = [
  {
    label: 'Product',
    description: 'AI-driven agricultural intelligence & crop health.',
    links: [
      { label: 'Core Features', href: '#features' },
      { label: 'Intelligence Loop', href: '#features' },
      { label: 'Field Telemetry', href: '#hero' },
    ],
  },
  {
    label: 'How It Works',
    description: 'Turning telemetry and weather into proactive farming.',
    links: [
      { label: 'Telemetry Ingestion', href: '#how-it-works' },
      { label: 'Predictive Modeling', href: '#how-it-works' },
      { label: 'Decision Protocol', href: '#how-it-works' },
    ],
  },
  {
    label: 'Impact & Network',
    description: 'Yield protection, input efficiency, and partner network.',
    links: [
      { label: 'Proven Impact', href: '#impact' },
      { label: 'Grower Network', href: '#partners' },
      { label: 'Early Access', href: '#early-access' },
    ],
  },
]

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCardMenuOpen, setIsCardMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSidebarOpen(false)
        setIsCardMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-5 sm:pt-7 md:pt-8 px-4 sm:px-6 lg:px-8">
      {/* =========================================================================
          MAIN TOP BAR (Uniform across mobile, md, and lg viewports)
          ========================================================================= */}
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between"
      >
        {/* Left End: Brand Logo Pill directly on hero image */}
        <a
          href="/"
          className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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

        {/* Center: Modern Pill Section Switcher (Only on lg: >= 1024px) */}
        <div className="hidden lg:inline-flex items-center gap-1 rounded-full bg-white/95 p-1.5 shadow-xl backdrop-blur-md border border-white/60">
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

        {/* Right End: Controls */}
        <div className="flex items-center gap-3">
          {/* Early Access Pill Button (shown on md and lg) */}
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

          {/* Medium View (md): Pill Menu Button after the Early Access button */}
          <button
            type="button"
            onClick={() => setIsCardMenuOpen(!isCardMenuOpen)}
            aria-expanded={isCardMenuOpen}
            aria-controls="tablet-card-menu"
            aria-label={isCardMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="hidden md:inline-flex lg:hidden items-center gap-2 rounded-full bg-black/30 backdrop-blur-md border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="text-xs uppercase tracking-wider font-semibold">
              {isCardMenuOpen ? 'Close' : 'Menu'}
            </span>
            {isCardMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          {/* Mobile View (< md): Icon Menu Button */}
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            aria-expanded={isSidebarOpen}
            aria-controls="mobile-sidebar"
            aria-label="Open navigation sidebar"
            className="inline-flex md:hidden items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/20 p-2.5 text-white transition-colors duration-150 hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* =========================================================================
          MEDIUM VIEW (md): Off-White Card Menu Dropdown
          ========================================================================= */}
      {isCardMenuOpen && (
        <div
          id="tablet-card-menu"
          className="hidden md:block lg:hidden mx-auto mt-4 max-w-4xl"
        >
          <div className="rounded-3xl border border-line bg-paper/95 p-6 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="grid grid-cols-3 gap-5">
              {CARD_NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col justify-between rounded-2xl border border-line bg-white p-5 shadow-xs transition-colors hover:border-forest/40"
                >
                  <div>
                    <h4 className="font-heading text-base font-bold text-ink">
                      {item.label}
                    </h4>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-2 border-t border-line/60 pt-3">
                    {item.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={() => setIsCardMenuOpen(false)}
                          className="group flex items-center justify-between text-xs font-semibold text-ink/85 hover:text-forest transition-colors py-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                        >
                          <span>{link.label}</span>
                          <span className="flex h-3.5 w-3.5 items-center justify-center">
                            <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-forest" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MOBILE VIEW (< md): Slide-in Aside Sidebar
          ========================================================================= */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-sidebar"
        aria-label="Mobile navigation sidebar"
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 sm:w-80 max-w-[85vw] bg-paper shadow-2xl border-l border-line flex flex-col justify-between p-6 transition-transform duration-300 ease-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line pb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest text-white shadow-xs">
                <Sprout className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
              </div>
              <span className="font-heading text-lg font-bold text-ink">FieldSense</span>
            </div>
            <button
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close navigation sidebar"
              className="rounded-full p-2 text-ink hover:bg-black/5 hover:text-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-col space-y-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href)
                    setIsSidebarOpen(false)
                  }}
                  className={`rounded-xl px-4 py-3 text-base font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-forest text-white shadow-xs'
                      : 'text-ink hover:bg-black/5 hover:text-forest'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-line pt-4">
          <a
            href="#early-access"
            onClick={() => setIsSidebarOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
          >
            <span>Get Early Access</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </aside>
    </header>
  )
}
