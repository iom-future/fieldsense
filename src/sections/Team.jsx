import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, User, Sprout, Cpu, Compass } from 'lucide-react'

// Existing validated agricultural imagery from project assets
import storyVisualImg from '../assets/farm.jpg'

// Team portraits
import memberCeoImg from '../assets/team/team-01-ceo.jpg'
import memberTechImg from '../assets/team/team-02-tech.jpg'
import memberAiImg from '../assets/team/team-03-ai.jpg'
import memberDesignImg from '../assets/team/team-04-design.jpg'
import memberAgronomyImg from '../assets/team/team-05-agronomy.jpg'
import memberOpsImg from '../assets/team/team-06-ops.jpg'

gsap.registerPlugin(useGSAP, ScrollTrigger)

// =============================================================================
// FOUNDING TEAM PROFILES
// Dynamic agritech leaders driving accessible intelligence for African agriculture
// =============================================================================
const TEAM_MEMBERS = [
  {
    id: 'team-01',
    number: '01',
    initials: 'CO',
    name: 'Chukwuemeka Okonkwo',
    role: 'Founder & CEO',
    bio: 'Guiding the overall mission and product vision to bridge accessible technology with grassroots agricultural needs.',
    focus: 'Vision & Strategy',
    image: memberCeoImg,
  },
  {
    id: 'team-02',
    number: '02',
    initials: 'CA',
    name: 'Chioma Adebayo',
    role: 'Technology Lead',
    bio: 'Architecting resilient field telemetry infrastructure and dependable offline-first mobile systems for remote areas.',
    focus: 'Systems Architecture',
    image: memberTechImg,
  },
  {
    id: 'team-03',
    number: '03',
    initials: 'DA',
    name: 'Damilola Adeleke',
    role: 'AI & Data Lead',
    bio: 'Developing adaptive agronomic models that translate raw environmental telemetry into actionable field alerts.',
    focus: 'Predictive Modeling',
    image: memberAiImg,
  },
  {
    id: 'team-04',
    number: '04',
    initials: 'ZA',
    name: 'Zainab Abubakar',
    role: 'Product Designer',
    bio: 'Designing simple, high-clarity interfaces tailored for diverse literacy levels and high-glare field environments.',
    focus: 'User Experience',
    image: memberDesignImg,
  },
  {
    id: 'team-05',
    number: '05',
    initials: 'FA',
    name: 'Dr. Folashade Adeyemi',
    role: 'Agricultural Research Lead',
    bio: 'Grounding predictive recommendations in validated soil science, pest life-cycles, and local cropping dynamics.',
    focus: 'Agronomic Science',
    image: memberAgronomyImg,
  },
  {
    id: 'team-06',
    number: '06',
    initials: 'TB',
    name: 'Tunde Bakare',
    role: 'Operations & Partnerships Lead',
    bio: 'Fostering trusted relationships with farming cooperatives, extension agents, and regional agricultural networks.',
    focus: 'Community & Partnerships',
    image: memberOpsImg,
  },
]

export default function Team() {
  const container = useRef(null)

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (prefersReducedMotion) {
        gsap.set(['.team-header-elem', '.story-elem', '.team-card'], {
          opacity: 1,
          y: 0,
          clearProps: 'all',
        })
        return
      }

      ScrollTrigger.refresh()

      gsap.fromTo(
        '.team-header-elem',
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
        '.story-elem',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.14,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: '.team-story-block',
            start: 'top 80%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        '.team-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: '.team-cards-grid',
            start: 'top 75%',
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
      id="team"
      ref={container}
      aria-labelledby="team-heading"
      className="relative bg-white py-20 sm:py-24 lg:py-32 border-b border-line"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Introduction */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="team-header-elem inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-forest/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
            THE PEOPLE BEHIND FIELDSENSE
          </span>

          <h2
            id="team-heading"
            className="team-header-elem mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.15]"
          >
            Built with purpose. Growing with farmers.
          </h2>

          <p className="team-header-elem mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
            Meet the team working to make agricultural intelligence more accessible and actionable.
          </p>
        </div>

        {/* Meet the team — 6-person responsive grid */}
        <div className="team-cards-grid mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="team-card group relative flex flex-col rounded-2xl border border-line bg-white p-6 sm:p-7 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-leaf/50 hover:shadow-sm"
            >
              {/* Portrait Image Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-line/60 bg-gradient-to-b from-forest/5 to-leaf/10 flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-2xs border border-line text-forest transition-transform duration-300 group-hover:scale-110">
                      <User className="h-8 w-8 stroke-[1.6]" aria-hidden="true" />
                    </div>
                    <span className="mt-3 text-xs font-semibold tracking-wider text-muted">
                      Placeholder Portrait
                    </span>
                    <span className="text-[10px] text-muted/60 mt-0.5">
                      Awaiting genuine asset
                    </span>
                  </div>
                )}

                {/* Corner Member Number Pill */}
                <span className="absolute top-3 right-3 rounded-md bg-white/90 px-2 py-0.5 font-mono text-[11px] font-bold tracking-wider text-leaf border border-line/60 shadow-2xs">
                  {member.number}
                </span>
              </div>

              {/* Identity & Role */}
              <div className="mt-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-forest">
                  {member.focus}
                </span>

                <h4 className="mt-1 font-heading text-lg font-bold tracking-tight text-ink">
                  {member.name}
                </h4>
                <p className="text-xs font-semibold text-leaf">
                  {member.role}
                </p>

                {/* Concise 1-sentence mission contribution */}
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story Block — Two-column editorial presentation positioned below team cards */}
        <div className="team-story-block mt-16 sm:mt-24 rounded-3xl border border-line bg-paper/60 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Story Text & Mission Statement */}
            <div className="lg:col-span-7">
              <span className="story-elem text-[11px] font-bold uppercase tracking-[0.18em] text-leaf">
                OUR STORY
              </span>

              <h3 className="story-elem mt-2 font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                A better way to understand the field.
              </h3>

              <div className="story-elem mt-5 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  Agriculture is shaped by countless decisions, from understanding crop conditions to responding to changing weather. Yet useful information is not always easy to connect or act on.
                </p>
                <p>
                  FieldSense was conceived around a simple idea: help farmers turn the information around them into clearer insights and more informed decisions.
                </p>
                <p>
                  Our team brings together a shared interest in technology, problem-solving, and agriculture. We are building toward a future where useful agricultural intelligence can support farmers in the moments that matter.
                </p>
              </div>

              {/* Compact Mission Flow Connection */}
              <div className="story-elem mt-8 rounded-2xl border border-line/80 bg-white p-5 sm:p-6 shadow-2xs">
                <p className="text-sm font-bold text-ink">
                  Technology should solve real problems.
                </p>
                <p className="mt-1.5 text-xs text-muted sm:text-sm leading-relaxed">
                  FieldSense connects observations, agricultural information, and practical insights to help farmers make better-informed decisions.
                </p>

                {/* Visual Flow: Real-world challenges → Thoughtful technology → Practical insights */}
                <div className="mt-5 flex flex-wrap items-center gap-2 pt-4 border-t border-line/70 text-xs">
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-forest/5 px-2.5 py-1.5 font-semibold text-forest">
                    <Sprout className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Real-world challenges</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-muted/60 shrink-0" aria-hidden="true" />
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-forest/5 px-2.5 py-1.5 font-semibold text-forest">
                    <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Thoughtful technology</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-muted/60 shrink-0" aria-hidden="true" />
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-forest/10 px-2.5 py-1.5 font-semibold text-forest">
                    <Compass className="h-3.5 w-3.5 text-leaf" aria-hidden="true" />
                    <span>Practical agricultural insights</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Grounded Agricultural Visual */}
            <div className="story-elem relative lg:col-span-5 h-64 sm:h-80 lg:h-full min-h-[300px] overflow-hidden rounded-2xl border border-line bg-forest-dark shadow-sm">
              <img
                src={storyVisualImg}
                alt="Agricultural field observation and agronomic decision-making in practice"
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-leaf">
                  Applied Field Agronomy
                </span>
                <p className="mt-1 text-xs text-white/90 font-medium">
                  Turning real crop signals into reliable day-to-day decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
