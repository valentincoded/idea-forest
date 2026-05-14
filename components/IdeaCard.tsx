'use client'

import { Idea } from '@/types/idea'

const categoryColors: Record<string, string> = {
  time:        'bg-[#e8f5fb] text-[#0081c0] border-[#c8e8f6]',
  identity:    'bg-[#eef1ff] text-[#5266eb] border-[#d9ddff]',
  system:      'bg-[#f0f1ee] text-[#444141] border-[#dee2de]',
  money:       'bg-[#e8f7ef] text-[#237b55] border-[#c9ead9]',
  fear:        'bg-[#f4edff] text-[#7a43bd] border-[#e5d4ff]',
  design:      'bg-[#eef9ff] text-[#0081c0] border-[#d3effb]',
  creativity:  'bg-[#fff5dd] text-[#9b6b12] border-[#f0dda8]',
  environment: 'bg-[#e9fbff] text-[#167c8f] border-[#c9eff6]',
}

interface IdeaCardProps {
  idea: Idea
  total: number
  current: number
}

export default function IdeaCard({ idea, total, current }: IdeaCardProps) {
  const isUsed = idea.status !== 'unused'

  return (
    <article className="glass-card idea-card relative mx-auto flex min-w-0 flex-col gap-5 overflow-hidden p-4 sm:gap-6 sm:p-6 md:gap-8 md:p-9">

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between gap-4">
        <span className={`ui-label rounded-cloud-pill border px-3 py-1.5 text-[13px] font-medium leading-none ${categoryColors[idea.category]}`}>
          {idea.category}
        </span>
        <span className="ui-label text-[13px] text-cloud-muted/70 tabular-nums">
          {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-7 md:gap-9">

        {/* Title */}
        <p className={`display-font max-w-2xl text-[2.55rem] font-medium leading-[1.02] tracking-[-0.02em] text-cloud-ink break-words sm:text-5xl md:text-[3.4rem] ${isUsed ? 'line-through opacity-40' : ''}`}>
          {idea.title}
        </p>

        {/* Raw (raw mode) */}
        {idea.raw && (
          <div className="rounded-cloud-panel border border-cloud-line bg-white/72 p-3.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.58)] sm:p-4">
            <p className="ui-label mb-2 text-[12px] font-medium leading-none text-cloud-accent-strong">
              raw
            </p>
            <p className="text-sm leading-relaxed text-cloud-charcoal [overflow-wrap:anywhere] sm:text-base">
              {idea.raw}
            </p>
          </div>
        )}

        {/* Overview (structure mode) */}
        {idea.overview && (
          <div className="rounded-cloud-panel border border-cloud-line bg-white/72 p-3.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.58)] sm:p-4">
            <p className="ui-label mb-2 text-[12px] font-medium leading-none text-cloud-accent-strong">
              overview
            </p>
            <p className="text-sm leading-relaxed text-cloud-charcoal [overflow-wrap:anywhere] sm:text-base">
              {idea.overview}
            </p>
          </div>
        )}

        {/* Big Idea */}
        {idea.bigIdea && (
          <div className="relative z-10 grid gap-3 rounded-cloud-panel border border-cloud-line bg-cloud-paper-soft/76 p-4">
            <p className="ui-label text-[13px] leading-none text-cloud-accent-strong">
              big idea
            </p>
            <div className="grid gap-3 text-sm leading-relaxed text-cloud-charcoal/82">
              <p>
                <span className="ui-label mr-2 text-[13px] text-cloud-accent-strong">truth</span>
                {idea.bigIdea.truth}
              </p>
              <p>
                <span className="ui-label mr-2 text-[13px] text-cloud-accent-strong">idea</span>
                {idea.bigIdea.idea}
              </p>
              <p>
                <span className="ui-label mr-2 text-[13px] text-cloud-accent-strong">bridge</span>
                {idea.bigIdea.bridge}
              </p>
            </div>
          </div>
        )}

        {/* Angles */}
        <ul className="grid min-w-0 gap-3.5 sm:gap-4">
          {idea.angles.map((angle, i) => (
            <li key={i} className="group flex min-w-0 gap-3.5 rounded-cloud-panel border border-cloud-line bg-white/62 p-4 text-sm leading-relaxed text-cloud-charcoal transition-all hover:border-[#c8e8f6] hover:bg-white/78 sm:gap-5 sm:p-5 md:text-[15px]">
              <span className="ui-label mt-0.5 flex shrink-0 items-center justify-center rounded-full bg-cloud-paper-soft px-3 py-1.5 text-[12px] text-cloud-accent-strong shadow-[inset_0_0_0_1px_rgba(0,129,192,0.12)] transition-colors group-hover:bg-[#e8f5fb]">
                angle {String(i + 1).padStart(2, '0')}
              </span>
              <span className="grid min-w-0 flex-1 gap-3 overflow-hidden break-words [overflow-wrap:anywhere]">
                <span className="grid gap-1.5 sm:grid-cols-[9.5rem_1fr] sm:items-baseline sm:gap-4">
                  <span className="ui-label text-[15px] font-medium leading-[1.05] text-cloud-accent-strong sm:text-base">
                    spoken
                  </span>
                  <span className="text-[15px] leading-[1.45] text-cloud-charcoal/82 sm:text-base">
                    {angle.spoken}
                  </span>
                </span>
                <span className="grid gap-1.5 sm:grid-cols-[9.5rem_1fr] sm:items-baseline sm:gap-4">
                  <span className="ui-label text-[15px] font-medium leading-[1.05] text-cloud-accent-strong sm:text-base">
                    text
                  </span>
                  <span className="text-[15px] leading-[1.45] text-cloud-charcoal/82 sm:text-base">
                    {angle.text}
                  </span>
                </span>
              </span>
            </li>
          ))}
        </ul>

        {/* Formats */}
        {idea.formats && idea.formats.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {idea.formats.map((format) => (
              <span key={format} className="ui-label rounded-cloud-pill border border-cloud-line bg-white/58 px-2.5 py-1 text-[12px] text-cloud-muted">
                {format}
              </span>
            ))}
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between gap-3 border-t border-cloud-line pt-2">
        <span className="ui-label text-[12px] text-cloud-muted/60">
          idea in orbit
        </span>
        <span className="ui-label text-[12px] text-cloud-muted/40">
          {idea.mode}
        </span>
      </div>

    </article>
  )
}
