import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CloudSun, Layers3, Compass } from 'lucide-react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const CHALLENGE_CARDS = [
  {
    index: '01',
    title: 'Unpredictable Conditions',
    description:
      'Changing weather and growing conditions can make it difficult to plan field activities and anticipate potential risks.',
    icon: CloudSun,
  },
  {
    index: '02',
    title: 'Scattered Information',
    description:
      'Useful information about crops, weather, and field conditions may come from different places, leaving farmers to connect the dots themselves.',
    icon: Layers3,
  },
  {
    index: '03',
    title: 'Uncertain Next Steps',
    description:
      'Recognizing a potential issue is only the beginning. Farmers also need practical guidance to assess the situation and consider what to do next.',
    icon: Compass,
  },
]

export default function Problem() {
  const container = useRef(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (prefersReducedMotion) {
        gsap.set(['.problem-header-elem', '.problem-card'], {
          opacity: 1,
          y: 0,
          clearProps: 'all',
        })
        return
      }

      ScrollTrigger.refresh()

      gsap.fromTo(
        '.problem-header-elem',
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
        '.problem-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.14,
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
      id="problem"
      ref={container}
      aria-labelledby="problem-heading"
      className="relative bg-paper py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="problem-header-elem inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-forest/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
            THE CHALLENGE
          </span>

          <h2
            id="problem-heading"
            className="problem-header-elem mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.15]"
          >
            Good decisions need more than guesswork.
          </h2>

          <p className="problem-header-elem mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
            Shifting conditions and fragmented information make it difficult to
            connect the signals that matter, leaving crucial next steps uncertain.
          </p>
        </div>

        {/* 3-Column Problem Cards */}
        <div className="problem-cards-grid mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3 lg:gap-8">
          {CHALLENGE_CARDS.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="problem-card group relative flex flex-col rounded-[28px] p-2.5 sm:p-3 bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_16px_40px_-12px_rgba(23,77,53,0.08),0_1px_3px_rgba(0,0,0,0.02),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(23,77,53,0.14),inset_0_1.5px_2px_rgba(255,255,255,1)] hover:border-leaf/35 transition-[border-color,box-shadow,transform] duration-300"
              >
                <div className="flex h-full flex-col justify-between rounded-[20px] bg-white p-6 sm:p-7 border border-line/60 transition-colors duration-200 group-hover:border-line">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors duration-200 group-hover:bg-forest group-hover:text-white">
                        <Icon className="h-5 w-5 stroke-[2]" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider text-muted/60">
                        {card.index}
                      </span>
                    </div>

                    <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-ink">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
