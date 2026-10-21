import { Sprout, ScanEye, AlertCircle, FileText } from 'lucide-react'

const STATS_DATA = [
  {
    label: 'Target Crop',
    value: 'Maize',
    note: 'Active field plot monitoring',
    icon: Sprout,
    badge: null,
  },
  {
    label: 'Field Observation',
    value: 'Leaf Discoloration',
    note: 'Visual pattern detected in foliage',
    icon: ScanEye,
    badge: null,
  },
  {
    label: 'Status',
    value: 'Needs Assessment',
    note: 'Requires contextual verification',
    icon: AlertCircle,
    badge: 'Under Review',
  },
  {
    label: 'Advisory Protocol',
    value: 'Additional Context Required',
    note: 'Correlating micro-climate data',
    icon: FileText,
    badge: null,
  },
]

export default function HeroStatsStrip() {
  return (
    <section
      aria-label="Field observation data strip"
      className="relative z-10 border-y border-line bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Identifier Header */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-line/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
              Illustrative Field Telemetry
            </span>
          </div>
          <span className="text-[11px] font-medium text-muted">
            FieldSense Intelligence Engine Preview
          </span>
        </div>

        {/* 4-Column Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
          {STATS_DATA.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={`${index > 0 ? 'lg:pl-6' : ''} flex flex-col justify-between space-y-2`}
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-forest/10 text-forest">
                      <Icon className="h-4 w-4 stroke-[2]" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                      {item.label}
                    </span>
                  </div>

                  {item.badge && (
                    <span className="inline-flex items-center rounded-full border border-amber-200/80 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-ink lg:text-xl">
                    {item.value}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
