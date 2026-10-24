import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus } from 'lucide-react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const FAQ_ITEMS = [
  {
    question: 'What is FieldSense?',
    answer:
      'FieldSense is an agricultural intelligence platform designed to help farmers turn crop observations and agricultural data into practical insights.',
  },
  {
    question: 'How does FieldSense work?',
    answer:
      'The platform aims to connect field observations with relevant agricultural information to help users better understand conditions and make informed decisions.',
  },
  {
    question: 'Who is FieldSense for?',
    answer:
      'FieldSense is being designed primarily for smallholder and emerging commercial farmers, with potential value for agricultural advisors and partners.',
  },
  {
    question: 'Is FieldSense available yet?',
    answer:
      'FieldSense is currently in development. Join the early-access list to follow progress and learn when opportunities to try the platform become available.',
  },
  {
    question: 'Can FieldSense diagnose crop diseases?',
    answer:
      'FieldSense aims to help users recognize potential crop issues and understand relevant information. Its ability to identify specific diseases or provide reliable diagnoses should not be assumed unless those capabilities are implemented and validated.',
  },
  {
    question: 'How can I get involved?',
    answer:
      'Join the early-access list to stay updated as FieldSense develops. Opportunities for collaboration can be explored as the project progresses.',
  },
]

export default function FAQ() {
  const container = useRef(null)
  const [openIndex, setOpenIndex] = useState(0) // Default first item open for immediate scanability

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (prefersReducedMotion) {
        gsap.set(['.faq-header-elem', '.faq-accordion-container'], {
          opacity: 1,
          y: 0,
          clearProps: 'all',
        })
        return
      }

      ScrollTrigger.refresh()

      gsap.fromTo(
        '.faq-header-elem',
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
        '.faq-accordion-container',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: '.faq-accordion-container',
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

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="faq"
      ref={container}
      aria-labelledby="faq-heading"
      className="relative bg-paper py-20 sm:py-24 lg:py-32 border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="faq-header-elem inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-forest/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
            GOT QUESTIONS?
          </span>

          <h2
            id="faq-heading"
            className="faq-header-elem mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.15]"
          >
            Good questions. Clear answers.
          </h2>

          <p className="faq-header-elem mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
            Here&apos;s what you should know about FieldSense.
          </p>
        </div>

        {/* Vertical Accordion */}
        <div className="faq-accordion-container mx-auto mt-12 sm:mt-16 max-w-3xl">
          <div className="divide-y divide-line/80 border-y border-line/80">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx
              const questionId = `faq-question-${idx}`
              const answerId = `faq-answer-${idx}`

              return (
                <div key={item.question} className="group">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    id={questionId}
                    className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 rounded-md"
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-ink transition-colors duration-150 group-hover:text-forest">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                        isOpen
                          ? 'border-forest/20 bg-forest/10 text-forest'
                          : 'border-line bg-white text-muted group-hover:border-forest/40 group-hover:text-forest'
                      }`}
                    >
                      <Plus
                        className={`h-4 w-4 stroke-[2.2] transition-transform duration-200 ${
                          isOpen ? 'rotate-45' : 'rotate-0'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  {/* Collapsible Answer Panel */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className={`grid transition-all duration-200 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pb-5 sm:pb-6'
                        : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base leading-relaxed text-muted pr-10">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Supportive Navigation Link */}
          <div className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-muted">
            <span>Have another question? </span>
            <a
              href="#early-access"
              className="font-semibold text-forest underline decoration-forest/30 underline-offset-4 transition-colors hover:text-forest-dark hover:decoration-forest"
            >
              Connect with our early access team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
