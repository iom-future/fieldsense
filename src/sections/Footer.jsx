import fieldsenseLogo from '../assets/fieldsense-logo.png'

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
      style={{
        background: `linear-gradient(180deg, 
          #ffffff 0%, 
          #ffffff 12%, 
          #f2f7f3 26%, 
          #deece0 42%, 
          #b2d2b7 58%, 
          #6ba278 74%, 
          #2c6747 88%, 
          #103b2a 100%
        )`,
      }}
      className="relative overflow-hidden border-t border-line text-ink"
    >
      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        {/* Navigation & Info Columns (Top Section) */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Identity Column */}
          <div className="sm:col-span-2 lg:col-span-5">
            <a
              href="#hero"
              className="group inline-flex items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              aria-label="FieldSense homepage, back to top"
            >
              <img
                src={fieldsenseLogo}
                alt="FieldSense Logo"
                className="h-18 sm:h-22 lg:h-24 w-auto object-contain transition-transform duration-150 group-hover:scale-105"
              />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
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
              <h3 className="font-heading text-sm font-bold tracking-wide text-ink">
                Explore
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-150 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-xs"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="font-heading text-sm font-bold tracking-wide text-ink">
                Get Involved
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {GET_INVOLVED_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-150 hover:text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-xs"
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
            <h3 className="font-heading text-sm font-bold tracking-wide text-ink">
              Get in Touch
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Interested in collaborating, piloting the platform, or learning more? Reach out through our{' '}
              <a
                href="#early-access"
                className="text-forest font-semibold underline underline-offset-4 transition-colors duration-150 hover:text-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-xs"
              >
                early access program
              </a>
              .
            </p>
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="mt-12 sm:mt-16 border-t border-white/20" />

        {/* Metadata & Copyright Row */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-white/80 sm:mt-8">
          <p>
            &copy; {currentYear} FieldSense. All rights reserved.
          </p>
          <p className="font-medium text-paper/75">
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
