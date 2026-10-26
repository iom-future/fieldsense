import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import fieldsenseLogo from '../assets/fieldsense-logo.png'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
]

const CARD_NAV_ITEMS = [
  {
    label: 'Capabilities',
    description: 'AI-driven agricultural intelligence & crop health telemetry.',
    links: [
      { label: 'Core Features', href: '#features' },
      { label: 'Crop Intelligence', href: '#features' },
      { label: 'The Process Loop', href: '#how-it-works' },
    ],
  },
  {
    label: 'Team & Mission',
    description: 'The founders, agronomic experts, and our mission for African farming.',
    links: [
      { label: 'Leadership Team', href: '#team' },
      { label: 'Our Story', href: '#team' },
      { label: 'Grower Testimonials', href: '#testimonials' },
    ],
  },
  {
    label: 'Get Involved',
    description: 'Clear answers to common questions and early platform deployment.',
    links: [
      { label: 'The Problem We Solve', href: '#problem' },
      { label: 'Frequently Asked Questions', href: '#faq' },
      { label: 'Request Early Access', href: '#early-access' },
    ],
  },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCardMenuOpen, setIsCardMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isSidebarOpen])

  // Listen to scroll to adjust navbar background and border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Section observer to automatically highlight active section in navbar
  useEffect(() => {
    const sectionIds = ['hero', 'problem', 'features', 'how-it-works', 'testimonials', 'team', 'faq', 'early-access']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

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
    <>
      <header
        className="fixed top-2.5 sm:top-4 lg:top-5 left-0 right-0 z-50 pointer-events-none px-3 sm:px-6 lg:px-8 transition-all duration-300"
      >
        {/* =========================================================================
            FLOATING WHITE GLASSMORPHISM NAV BAR (Mobile, md, and lg viewports)
            Has space at left & right on all viewports, white glassmorphism backdrop & border
            ========================================================================= */}
        <nav
          aria-label="Main navigation"
          className="relative pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white/75 backdrop-blur-xl md:backdrop-blur-2xl border border-white/80 border-b-white/90 shadow-[0_10px_35px_-5px_rgba(16,59,42,0.09),0_2px_10px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(255,255,255,0.7)] transition-all duration-300 hover:bg-white/85"
        >
          {/* Subtle luminous white border highlight at the bottom with left and right margin spacing */}
          <div
            className="absolute inset-x-8 -bottom-px h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none rounded-full"
            aria-hidden="true"
          />

          {/* Left End: Brand Logo */}
          <a
            href="#hero"
            onClick={() => {
              setActiveSection('#hero')
              setIsCardMenuOpen(false)
              setIsSidebarOpen(false)
            }}
            className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-full"
            aria-label="FieldSense homepage"
          >
            <img
              src={fieldsenseLogo}
              alt="FieldSense Logo"
              className="h-11 sm:h-12 lg:h-13 w-auto object-contain transition-transform duration-150 group-hover:scale-105"
            />
          </a>

          {/* Center: Clean Nav Links (No container background; active indicator still shows) */}
          <div className="hidden lg:flex items-center gap-1 sm:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                    isActive
                      ? 'bg-forest text-white shadow-xs'
                      : 'text-ink/75 hover:text-forest hover:bg-black/[0.04]'
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
              onClick={() => {
                setActiveSection('#early-access')
                setIsCardMenuOpen(false)
              }}
              className="hidden sm:inline-flex group items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white shadow-md border border-white/20 transition-all duration-150 hover:bg-forest-dark hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              <span>Get Early Access</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            {/* Medium View (md): Pill Menu Button */}
            <button
              type="button"
              onClick={() => setIsCardMenuOpen(!isCardMenuOpen)}
              aria-expanded={isCardMenuOpen}
              aria-controls="tablet-card-menu"
              aria-label={isCardMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="hidden md:inline-flex lg:hidden items-center gap-2 rounded-full bg-forest/10 border border-forest/20 px-4 py-2 text-sm font-semibold text-forest transition-all duration-150 hover:bg-forest/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
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

            {/* Mobile View (< md): Icon Menu Button (No background) */}
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-expanded={isSidebarOpen}
              aria-controls="mobile-sidebar"
              aria-label="Open navigation sidebar"
              className="inline-flex md:hidden items-center justify-center p-2 text-ink hover:text-forest transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>

        {/* =========================================================================
            MEDIUM VIEW (md): Off-White Card Menu Dropdown
            ========================================================================= */}
        {isCardMenuOpen && (
          <div
            id="tablet-card-menu"
            className="pointer-events-auto hidden md:block lg:hidden mx-auto mt-2.5 max-w-4xl max-h-[80vh] overflow-y-auto"
          >
            <div
              style={{ backgroundColor: '#ffffff' }}
              className="rounded-3xl border border-line bg-white p-6 shadow-2xl backdrop-blur-lg animate-in fade-in slide-in-from-top-2 duration-200"
            >
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
                            onClick={() => {
                              setActiveSection(link.href)
                              setIsCardMenuOpen(false)
                            }}
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
      </header>

      {/* =========================================================================
          MOBILE VIEW (< md): Teleported to document.body via Portal
          Completely decoupled from header backdrop-filter and stacking contexts
          ========================================================================= */}
      {mounted &&
        createPortal(
          <div className="md:hidden">
            {/* Backdrop */}
            <div
              className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
                isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              style={{ zIndex: 99998 }}
              onClick={() => setIsSidebarOpen(false)}
              aria-hidden="true"
            />

            {/* Completely Opaque Aside Drawer */}
            <aside
              id="mobile-sidebar"
              aria-label="Mobile navigation sidebar"
              style={{
                backgroundColor: '#ffffff',
                opacity: 1,
                zIndex: 99999,
              }}
              className={`fixed top-0 right-0 bottom-0 w-72 sm:w-80 max-w-[85vw] bg-white shadow-2xl border-l border-line flex flex-col justify-between p-6 transition-transform duration-300 ease-out ${
                isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div className="flex items-center">
                    <img
                      src={fieldsenseLogo}
                      alt="FieldSense Logo"
                      className="h-10 sm:h-12 w-auto object-contain"
                    />
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
                  onClick={() => {
                    setActiveSection('#early-access')
                    setIsSidebarOpen(false)
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                >
                  <span>Get Early Access</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  )
}
