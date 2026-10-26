import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'


gsap.registerPlugin(useGSAP, ScrollTrigger)

const ROLE_OPTIONS = [
  'Smallholder Farmer',
  'Commercial Farmer',
  'Agricultural Advisor',
  'Agricultural Organization',
  'Researcher or Student',
  'Other',
]

export default function EarlyAccess() {
  const container = useRef(null)

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null | 'success' | 'endpoint_needed' | 'error'
  const [statusMessage, setStatusMessage] = useState('')

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (prefersReducedMotion) {
        gsap.set(['.early-header-elem', '.early-form-container'], {
          opacity: 1,
          y: 0,
          clearProps: 'all',
        })
        return
      }

      ScrollTrigger.refresh()

      gsap.fromTo(
        '.early-header-elem',
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
        '.early-form-container',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: '.early-form-container',
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

  // Validation logic
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required.'
        if (value.trim().length < 2) return 'Please enter at least 2 characters.'
        return ''
      case 'email':
        if (!value.trim()) return 'Email address is required.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address.'
        }
        return ''
      case 'role':
        if (!value) return 'Please select your role.'
        return ''
      default:
        return ''
    }
  }

  const validateAll = () => {
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      role: validateField('role', formData.role),
    }

    const activeErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([, v]) => v)
    )

    setErrors(activeErrors)
    return Object.keys(activeErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setTouched({ fullName: true, email: true, role: true })

    if (!validateAll()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    // Inspect for configured backend waitlist endpoint
    const endpoint = import.meta.env?.VITE_EARLY_ACCESS_API_URL

    if (!endpoint) {
      // NOTE: Transparent handling when backend waitlist integration is pending.
      // We explicitly inform the user that backend integration is required,
      // rather than fabricating a false success or unverified confirmation.
      setIsSubmitting(false)
      setSubmitStatus('endpoint_needed')
      setStatusMessage(
        'Form interface is validated and ready. A backend waitlist endpoint (VITE_EARLY_ACCESS_API_URL) is required to process and record submissions.'
      )
      return
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage(
          'Thank you for joining. Your submission has been securely recorded.'
        )
        setFormData({ fullName: '', email: '', role: '' })
        setTouched({})
        setErrors({})
      } else {
        throw new Error('Unable to complete registration. Please try again.')
      }
    } catch (err) {
      setSubmitStatus('error')
      setStatusMessage(
        err.message || 'A network error occurred while submitting. Please try again later.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="early-access"
      ref={container}
      aria-labelledby="early-access-heading"
      className="relative py-20 sm:py-24 lg:py-32 text-ink bg-white border-b border-line overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop Side-by-Side Grid (12 cols) / Mobile & Tablet Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 xl:col-span-7 text-left">
            <span className="early-header-elem inline-flex items-center gap-1.5 rounded-full border border-forest/15 bg-forest/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
              GET EARLY ACCESS
            </span>

            <h2
              id="early-access-heading"
              className="early-header-elem mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.12]"
            >
              Be part of what&apos;s growing.
            </h2>

            <p className="early-header-elem mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
              Get updates as we build a smarter future for agriculture.
            </p>

            <p className="early-header-elem mt-2 max-w-xl text-sm sm:text-base leading-relaxed text-muted/80">
              Stay informed about FieldSense&apos;s progress and opportunities to get involved.
            </p>

            {/* Benefit Highlights */}
            <div className="early-header-elem mt-8 space-y-3.5 max-w-md pt-6 border-t border-line">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-ink/85">
                  Preview upcoming agronomic intelligence models
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-ink/85">
                  Directly inform tools tailored for your region
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-ink/85">
                  Priority onboarding for pilot program cohorts
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Form Card */}
          <div className="lg:col-span-6 xl:col-span-5 w-full">
            <div className="early-form-container w-full rounded-3xl bg-paper/60 p-6 sm:p-8 lg:p-9 text-ink shadow-sm border border-line">
              <div className="mb-6">
                <h3 className="font-heading text-xl font-bold tracking-tight text-ink">
                  Join the Early Access List
                </h3>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  Enter your details below to follow our progress.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-ink"
                  >
                    Full name <span className="text-earth" aria-hidden="true">*</span>
                  </label>
                  <div className="mt-1.5">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      autoComplete="name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Amina Yusuf"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={`block w-full rounded-full border bg-paper/40 px-5 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-line hover:border-leaf/50'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1.5 px-2 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-ink"
                  >
                    Email address <span className="text-earth" aria-hidden="true">*</span>
                  </label>
                  <div className="mt-1.5">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. amina@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`block w-full rounded-full border bg-paper/40 px-5 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-line hover:border-leaf/50'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 px-2 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Your Role Dropdown */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-xs font-bold uppercase tracking-wider text-ink"
                  >
                    Your role <span className="text-earth" aria-hidden="true">*</span>
                  </label>
                  <div className="mt-1.5">
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.role)}
                      aria-describedby={errors.role ? 'role-error' : undefined}
                      className={`block w-full rounded-full border bg-paper/40 px-5 py-3 text-sm text-ink transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest focus:border-transparent ${
                        errors.role
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-line hover:border-leaf/50'
                      } ${!formData.role ? 'text-muted/60' : 'text-ink'}`}
                    >
                      <option value="" disabled>
                        Select your role...
                      </option>
                      {ROLE_OPTIONS.map((option) => (
                        <option key={option} value={option} className="text-ink">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.role && (
                    <p id="role-error" className="mt-1.5 px-2 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.role}</span>
                    </p>
                  )}
                </div>

                {/* Status & Feedback Banners */}
                {submitStatus === 'success' && (
                  <div
                    role="status"
                    className="rounded-2xl border border-leaf/40 bg-leaf/10 p-3.5 text-xs sm:text-sm text-forest-dark flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-leaf mt-0.5" aria-hidden="true" />
                    <p>{statusMessage}</p>
                  </div>
                )}

                {submitStatus === 'endpoint_needed' && (
                  <div
                    role="note"
                    className="rounded-2xl border border-amber-500/30 bg-amber-50/90 p-3.5 text-xs text-amber-900 flex items-start gap-2.5"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-amber-950">Backend Integration Notice</p>
                      <p className="mt-0.5 leading-relaxed text-amber-800">
                        {statusMessage}
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div
                    role="alert"
                    className="rounded-2xl border border-red-500/30 bg-red-50 p-3.5 text-xs text-red-900 flex items-start gap-2.5"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" aria-hidden="true" />
                    <p>{statusMessage}</p>
                  </div>
                )}

                {/* Submit CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm transition-all duration-150 hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Join the Early Access List</span>
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </button>
                </div>

                {/* Supporting Privacy & Text Note */}
                <p className="text-center text-xs leading-relaxed text-muted pt-1">
                  Stay informed about FieldSense&apos;s progress and opportunities to get involved.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
