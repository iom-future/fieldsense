import { Sprout } from 'lucide-react'

const EXPLORE_LINKS = [
  { label: 'Product', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Our Approach', href: '#intelligence-loop' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Our Team', href: '#team' },
]

const GET_INVOLVED_LINKS = [
  { label: 'Get Early Access', href: '#early-access' },
  { label: 'FAQs', href: '#faq' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="footer"
      aria-label="Site footer"
      className="relative overflow-hidden bg-forest-dark text-white border-t border-forest-dark"
    >
      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        {/* Navigation & Info Columns (Top Section) */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Identity Column */}
          <div className="sm:col-span-2 lg:col-span-5">
            <a
              href="#hero"
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark"
              aria-label="FieldSense homepage, back to top"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-white shadow-md border border-white/15 transition-transform duration-150 group-hover:scale-105">
                <Sprout className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-tight text-white drop-shadow-xs">
                  FieldSense
                </span>
                <span className="text-[11px] font-medium leading-none text-paper/80 drop-shadow-xs">
                  Grow With Foresight.
                </span>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/75">
              Agricultural intelligence to help farmers make more informed decisions.
            </p>
          </div>

          {/* Navigation Columns */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:col-span-2 lg:col-span-4"
          >
            {/* Explore */}
            <div>
              <h3 className="font-heading text-sm font-semibold tracking-wide text-white">
                Explore
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-paper/75 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark rounded-xs"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="font-heading text-sm font-semibold tracking-wide text-white">
                Get Involved
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {GET_INVOLVED_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-paper/75 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark rounded-xs"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Contact Column */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold tracking-wide text-white">
              Get in Touch
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-paper/75">
              Interested in collaborating, piloting the platform, or learning more? Reach out through our{' '}
              <a
                href="#early-access"
                className="text-leaf font-medium underline underline-offset-4 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark rounded-xs"
              >
                early access program
              </a>
              .
            </p>
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="mt-12 sm:mt-16 border-t border-white/15" />

        {/* Metadata & Copyright Row */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-paper/75 sm:mt-8">
          <p>
            &copy; {currentYear} FieldSense. All rights reserved.
          </p>
          <p className="font-medium text-paper/60">
            Built for a more informed agricultural future.
          </p>
        </div>

        {/* Integrated Giant Brand Display Wordmark at the Bottom */}
        <div className="relative mt-8 sm:mt-12 overflow-hidden select-none -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center sm:justify-start">
            <span
              aria-hidden="true"
              className="block font-heading text-[18.5vw] sm:text-[17vw] lg:text-[16vw] font-extrabold tracking-tighter leading-[0.82] sm:leading-[0.78] text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-leaf/25 to-leaf/5 select-none pointer-events-none translate-y-1 sm:translate-y-4 whitespace-nowrap"
            >
              FieldSense
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
