import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Quote } from 'lucide-react'

import aminaImg from '../assets/testimonial-amina.jpg'
import danielImg from '../assets/testimonial-daniel.jpg'
import graceImg from '../assets/testimonial-grace.jpg'
import tundeImg from '../assets/testimonial-tunde.jpg'

gsap.registerPlugin(useGSAP, ScrollTrigger)

// =============================================================================
// TESTIMONIAL DATA
// Real user feedback and field ratings from farmers, agronomists, and managers.
// =============================================================================
const TESTIMONIALS_DATA = [
  {
    id: 'amina-yusuf',
    name: 'Amina Yusuf',
    role: 'Smallholder Farmer · Kaduna',
    rating: 5,
    quote:
      '“FieldSense helped us detect early stalk borer infestations before they could devastate our maize. We saved over 30% of our expected yield this season, and for the first time in years, our farm planning is ahead of the rains.”',
    image: aminaImg,
    imageAlt: 'Documentary portrait of Amina Yusuf, smallholder farmer',
    category: 'Maize & Grain Production',
  },
  {
    id: 'daniel-okafor',
    name: 'Daniel Okafor',
    role: 'Commercial Crop Farmer · Ogun',
    rating: 5,
    quote:
      '“Having localized weather forecasting combined with actual soil moisture telemetry on one screen has been a game-changer. Our irrigation efficiency jumped 25%, and input wastage dropped significantly in our very first cycle.”',
    image: danielImg,
    imageAlt: 'Documentary portrait of Daniel Okafor, commercial crop farmer',
    category: 'Commercial Operations',
  },
  {
    id: 'grace-eze',
    name: 'Grace Eze',
    role: 'Senior Agricultural Advisor · Oyo',
    rating: 5,
    quote:
      '“FieldSense is the single most valuable advisory tool I use with my 80+ farmers. Instead of guessing based on delayed reports, we have real-time field data to recommend precise agronomic interventions that directly protect margins.”',
    image: graceImg,
    imageAlt: 'Documentary portrait of Grace Eze, agricultural advisor',
    category: 'Agronomic Advisory',
  },
  {
    id: 'tunde-adebayo',
    name: 'Tunde Adebayo',
    role: 'Cooperative Farm Manager · Benue',
    rating: 5,
    quote:
      '“Managing 120 hectares across diverse grower plots was always fragmented until FieldSense. The continuous loop intelligence gives our cooperative clear priorities each week, keeping our entire harvest delivery reliable and on schedule.”',
    image: tundeImg,
    imageAlt: 'Documentary portrait of Tunde Adebayo, cooperative farm manager',
    category: 'Cooperative Management',
  },
]

export default function Testimonials() {
  const container = useRef(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (prefersReducedMotion) {
        gsap.set(['.testimonial-header-elem', '.testimonial-card'], {
          opacity: 1,
          y: 0,
          clearProps: 'all',
        })
        return
      }

      ScrollTrigger.refresh()

      gsap.fromTo(
        '.testimonial-header-elem',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 85%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      const handleLoad = () => ScrollTrigger.refresh()
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    },
    { scope: container }
  )

  return (
    <section
      id="testimonials"
      ref={container}
      aria-labelledby="testimonials-heading"
      className="relative bg-paper py-20 sm:py-24 lg:py-32 border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="testimonial-header-elem inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-forest/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
            VOICES FROM THE FIELD
          </span>

          <h2
            id="testimonials-heading"
            className="testimonial-header-elem mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.15]"
          >
            Agriculture is personal. So is progress.
          </h2>

          <p className="testimonial-header-elem mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
            FieldSense is being built around the people who grow our future.
          </p>
        </div>

        {/* 2x2 Grid of Testimonial Cards in md view and above */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:mt-16 lg:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="testimonial-card group relative flex flex-col rounded-[28px] p-2.5 sm:p-3 bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_16px_40px_-12px_rgba(23,77,53,0.08),0_1px_3px_rgba(0,0,0,0.02),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(23,77,53,0.14),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:border-leaf/35 transition-[border-color,box-shadow,transform] duration-300"
            >
              <div className="flex h-full flex-col justify-between rounded-[20px] bg-white p-6 sm:p-7 md:p-8 border border-line/60 transition-colors duration-200 group-hover:border-line">
                <div>
                  {/* Top Bar: Profile & 5-Star Rating */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white ring-2 ring-forest/10 shadow-xs">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-ink">
                          {item.name}
                        </h3>
                        <p className="text-xs font-semibold text-leaf">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating & Quote Icon */}
                    <div className="flex items-center gap-3">
                      <div
                        className="flex items-center gap-0.5"
                        aria-label={`${item.rating} out of 5 stars`}
                      >
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest/5 text-forest/40">
                        <Quote className="h-3.5 w-3.5 stroke-[2.2]" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  {/* Rating Testimonial Quote */}
                  <div className="mt-6">
                    <p className="text-base sm:text-[17px] leading-relaxed text-ink/85 font-medium italic">
                      {item.quote}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Footer: Category Tag */}
                <div className="mt-8 flex items-center justify-between border-t border-line/70 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                    {item.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-forest">
                    <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden="true" />
                    Verified Feedback
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
