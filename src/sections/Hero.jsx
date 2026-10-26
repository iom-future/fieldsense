import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'
import heroBg from '../assets/fieldsense-hero-image.png'

gsap.registerPlugin(useGSAP)

export default function Hero() {
  const container = useRef(null)

  useGSAP(
    () => {
      // Respect prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (prefersReducedMotion) return

      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
      })

      tl.from('.hero-title', {
        opacity: 0,
        y: 24,
        duration: 0.8,
      })
        .from(
          '.hero-text',
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          '-=0.4'
        )
        .from(
          '.hero-cta',
          {
            opacity: 0,
            y: 16,
            duration: 0.55,
            stagger: 0.1,
          },
          '-=0.3'
        )
    },
    { scope: container }
  )

  return (
    <section
      id="hero"
      ref={container}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-forest-dark bg-cover bg-center md:bg-[center_35%]"
      style={{ backgroundImage: `url(${heroBg})` }}
      aria-label="FieldSense Hero"
    >
      {/* Uniform background overlay for photo clarity and text readability */}
      <div className="absolute inset-0 bg-forest-dark/50" aria-hidden="true" />

      {/* Main Centered Container with full-viewport centering */}
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6 sm:pt-40 sm:pb-20 lg:px-8">
        {/* Primary H1 Headline with refined editorial serif presence */}
        <h1 className="hero-title max-w-4xl font-heading text-4xl font-normal tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] sm:leading-[1.08]">
          Grow With Foresight.
        </h1>

        {/* Tightened Supporting Text */}
        <p className="hero-text mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paper/90 sm:text-lg sm:leading-8">
          Transform crop observations, local weather, and field data into
          predictive insights—helping farmers detect risks earlier and grow
          with confidence.
        </p>

        {/* Centered CTAs with fully rounded pill radius */}
        <div className="hero-cta mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <a
            href="#early-access"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-forest shadow-md transition-all duration-150 hover:bg-white hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark sm:text-base"
          >
            <span>Get Early Access</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition-all duration-150 hover:border-white/55 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark sm:text-base"
          >
            <span>Discover How It Works</span>
          </a>
        </div>
      </div>
    </section>
  )
}
