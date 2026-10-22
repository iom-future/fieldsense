import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sprout, BrainCircuit, ShieldCheck } from 'lucide-react'
import ScrollStack, { ScrollStackItem } from '../components/ui/ScrollStack.jsx'

import cropIntelligenceImg from '../assets/crop-intelligence.jpg'
import decisionIntelligenceImg from '../assets/decision-intelligence.jpg'
import riskIntelligenceImg from '../assets/risk-intelligence.jpg'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const FEATURES_DATA = [
  {
    index: '01',
    title: 'Crop Intelligence',
    tag: 'Field Scouting & Agronomy',
    description:
      'Identify potential crop issues earlier through field observations and relevant agricultural insights.',
    icon: Sprout,
    image: cropIntelligenceImg,
  },
  {
    index: '02',
    title: 'Decision Intelligence',
    tag: 'Adaptive Farm Guidance',
    description:
      'Turn field information into practical guidance for your next move.',
    icon: BrainCircuit,
    image: decisionIntelligenceImg,
  },
  {
    index: '03',
    title: 'Risk Intelligence',
    tag: 'Weather & Micro-climate Risk',
    description:
      'Understand potential weather and crop risks before making key decisions.',
    icon: ShieldCheck,
    image: riskIntelligenceImg,
  },
]

export default function Features() {
  const container = useRef(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (prefersReducedMotion) {
        gsap.set('.features-header-elem', { opacity: 1, y: 0, clearProps: 'all' })
        return
      }

      ScrollTrigger.refresh()

      gsap.fromTo(
        '.features-header-elem',
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
            start: 'top 80%',
            once: true,
          },
        }
      )
    },
    { scope: container }
  )

  return (
    <section
      id="features"
      ref={container}
      aria-labelledby="features-heading"
      className="relative bg-white py-20 sm:py-24 lg:py-32 border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="features-header-elem inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-forest/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
            CORE CAPABILITIES
          </span>

          <h2
            id="features-heading"
            className="features-header-elem mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.15]"
          >
            Better insights. Better decisions.
          </h2>

          <p className="features-header-elem mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
            Everything you need to understand your field more clearly.
          </p>
        </div>

        {/* ScrollStack Container - Integrated with Page Window Scroll */}
        <div className="relative mx-auto mt-12 sm:mt-16 w-full max-w-5xl">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={280}
            itemStackDistance={24}
            stackPosition="130px"
            itemScale={0.04}
            baseScale={0.88}
            dimAmount={0.14}
            holdDistance={260}
            smoothScroll={true}
          >
            {FEATURES_DATA.map((feature) => {
              const Icon = feature.icon
              return (
                <ScrollStackItem
                  key={feature.title}
                  itemClassName="!p-0 !h-auto overflow-hidden border border-line bg-white shadow-xl rounded-[28px]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 w-full min-h-[380px] sm:min-h-[420px] md:min-h-[440px]">
                    {/* Left Column: Content */}
                    <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 md:col-span-6 lg:col-span-5 bg-white">
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
                            <Icon className="h-6 w-6 stroke-[1.8]" aria-hidden="true" />
                          </div>
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted">
                            {feature.index} / 03
                          </span>
                        </div>

                        <div className="mt-6">
                          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
                            {feature.tag}
                          </span>
                          <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                            {feature.title}
                          </h3>
                          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center gap-2 border-t border-line/70 pt-4">
                        <span className="h-2 w-2 rounded-full bg-leaf animate-pulse" />
                        <span className="text-xs font-medium text-muted">
                          FieldSense Intelligence Layer
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative md:col-span-6 lg:col-span-7 h-52 sm:h-64 md:h-full min-h-[220px] overflow-hidden bg-forest-dark">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:hidden" />
                    </div>
                  </div>
                </ScrollStackItem>
              )
            })}
          </ScrollStack>
        </div>
      </div>
    </section>
  )
}
