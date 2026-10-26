import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScanEye, GitMerge, BrainCircuit, Compass, ArrowRight, RefreshCw } from 'lucide-react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const LOOP_STEPS = [
  {
    step: '01',
    name: 'Observe',
    description: 'Capture what is happening in the field.',
    icon: ScanEye,
    badge: 'Field Telemetry',
  },
  {
    step: '02',
    name: 'Connect',
    description: 'Bring crop observations and relevant agricultural data together.',
    icon: GitMerge,
    badge: 'Context Ingestion',
  },
  {
    step: '03',
    name: 'Interpret',
    description: 'Identify useful patterns and potential risks.',
    icon: BrainCircuit,
    badge: 'Pattern Recognition',
  },
  {
    step: '04',
    name: 'Decide',
    description: 'Use practical insights to guide the next step.',
    icon: Compass,
    badge: 'Action Protocol',
  },
]

export default function IntelligenceLoop() {
  const container = useRef(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (prefersReducedMotion) {
        gsap.set(['.loop-header-elem', '.loop-card', '.loop-flow-track', '.loop-banner'], {
          opacity: 1,
          y: 0,
          clearProps: 'all',
        })
        return
      }

      ScrollTrigger.refresh()

      gsap.fromTo(
        '.loop-header-elem',
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
        '.loop-flow-track',
        { opacity: 0, scaleX: 0.95 },
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        '.loop-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 75%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        '.loop-banner',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 65%',
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
      id="how-it-works"
      ref={container}
      aria-labelledby="loop-heading"
      className="relative bg-black py-20 sm:py-24 lg:py-32 border-b border-white/10 overflow-hidden text-white"
    >
      {/* Anchor alias for intelligence-loop links */}
      <span id="intelligence-loop" className="absolute -top-24 pointer-events-none" aria-hidden="true" />

      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, #000 45%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, #000 45%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle Central Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-forest/25 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl lg:max-w-[1360px] xl:max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="loop-header-elem inline-flex items-center gap-1.5 rounded-full border border-leaf/30 bg-leaf/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-leaf">
            THE FIELDSENSE PROCESS
          </span>

          <h2
            id="loop-heading"
            className="loop-header-elem mt-4 font-heading text-3xl font-normal text-white sm:text-4xl lg:text-5xl leading-[1.18] sm:leading-[1.15]"
          >
            Turning field data into direction.
          </h2>

          <p className="loop-header-elem mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            A simple process that connects observations to informed decisions.
          </p>
        </div>

        {/* Visual Progression Flow Track - Desktop */}
        <div className="loop-flow-track relative mt-14 mb-8 hidden lg:block">
          <div
            className="absolute top-1/2 left-8 right-8 h-px -translate-y-1/2 bg-white/15"
            aria-hidden="true"
          />
          <div className="relative flex justify-between">
            {LOOP_STEPS.map((s, idx) => (
              <div
                key={s.name}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] backdrop-blur-md px-4 py-1.5 shadow-2xs"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-leaf text-[10px] font-extrabold text-forest-dark">
                  {idx + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  {s.name}
                </span>
                {idx < LOOP_STEPS.length - 1 && (
                  <ArrowRight className="h-3 w-3 text-white/40 ml-1" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4-Stage Horizontal Grid (Desktop) / Vertical Stack (Mobile) */}
        <div className="loop-cards-grid mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {LOOP_STEPS.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={step.name}
                className="loop-card group relative flex flex-col rounded-[28px] p-2.5 sm:p-3 bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:-translate-y-1 hover:border-leaf/50 hover:bg-white/[0.1] hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.25)] transition-[border-color,box-shadow,transform,background-color] duration-300"
              >
                <div className="flex h-full flex-col justify-between rounded-[20px] bg-[#0E1611]/90 p-6 sm:p-7 border border-white/10 transition-colors duration-200 group-hover:border-white/20">
                  <div>
                    {/* Top Bar: Icon and Step Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf/15 text-leaf transition-colors duration-200 group-hover:bg-leaf group-hover:text-forest-dark">
                        <Icon className="h-5 w-5 stroke-[1.8]" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-bold tracking-widest text-leaf">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Stage Details */}
                    <div className="mt-6">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                        {step.badge}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-normal text-white sm:text-2xl leading-snug">
                        {step.name}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Stage Sequence Indicator */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[11px] font-medium text-gray-400">
                      Stage {step.step} of 04
                    </span>
                    {idx < LOOP_STEPS.length - 1 ? (
                      <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-leaf transition-transform duration-200 group-hover:translate-x-0.5">
                        <span>Next</span>
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-leaf">
                        <RefreshCw className="h-3 w-3" aria-hidden="true" />
                        <span>Feedback</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Continuous Loop Feedback Footer */}
        <div className="loop-banner mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur-xl px-6 py-4.5 shadow-2xs">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-white">
              Continuous Agronomic Feedback Cycle
            </p>
            <p className="text-xs text-gray-400">
              Each observation and resulting decision continuously updates the field baseline for ongoing guidance.
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-leaf/30 bg-leaf/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-leaf uppercase">
            Closed-Loop Intelligence
          </span>
        </div>
      </div>
    </section>
  )
}
