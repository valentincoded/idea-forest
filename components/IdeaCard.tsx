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
  onMarkUsed: () => void
  total: number
  current: number
}

const segmentLabels = [
  'Contrarian snapback',
  'Benefit lead',
  'Pain lead',
  'Observation',
  'Staccato',
  'Story',
  'Visual',
  'Stun',
  'Snap',
  'Question planted',
]

function parseAngle(angle: string) {
  const pattern = new RegExp(`(${segmentLabels.join('|')}):`, 'g')
  const matches = [...angle.matchAll(pattern)]

  if (matches.length === 0) {
    return [{ label: 'Direction', text: angle.trim() }]
  }

  return matches.map((match, index) => {
    const next = matches[index + 1]
    const label = match[1]
    const start = (match.index ?? 0) + match[0].length
    const end = next?.index ?? angle.length

    return {
      label,
      text: angle.slice(start, end).trim(),
    }
  })
}

export default function IdeaCard({ idea, onMarkUsed, total, current }: IdeaCardProps) {
  const isUsed = idea.status !== 'unused'

  return (
    <article className="glass-card idea-card relative mx-auto flex min-w-0 flex-col gap-4 overflow-hidden p-4 sm:gap-5 sm:p-6 md:gap-7 md:p-10">
      <div className="relative z-10 flex items-center justify-between gap-4">
        <span className={`pixel-font rounded-cloud-pill border px-3 py-1.5 text-[12px] font-medium uppercase leading-none sm:text-sm ${categoryColors[idea.category]}`}>
          {idea.category}
        </span>
        <span className="pixel-font text-sm text-cloud-muted/70 tabular-nums">
          {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-4 md:gap-5">
        <p className={`pixel-font max-w-2xl text-[2.15rem] font-medium leading-[0.9] text-cloud-ink break-words sm:text-5xl md:text-6xl ${isUsed ? 'line-through opacity-40' : ''}`}>
          {idea.hook}
        </p>
        <ul className="grid min-w-0 gap-2.5 sm:gap-3">
          {idea.angles.map((angle, i) => (
            <li key={i} className="group flex min-w-0 gap-3 rounded-cloud-panel border border-cloud-line bg-white/58 p-3 text-xs leading-relaxed text-cloud-charcoal/78 transition-all hover:-translate-y-0.5 hover:border-[#c8e8f6] hover:bg-white/76 sm:gap-4 sm:p-4 sm:text-sm md:text-[15px]">
              <span className="pixel-font mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cloud-paper-soft text-[12px] text-cloud-accent-strong shadow-[inset_0_0_0_1px_rgba(0,129,192,0.12)] transition-colors group-hover:bg-[#e8f5fb] sm:h-7 sm:w-7 sm:text-sm">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="grid min-w-0 gap-2 overflow-hidden break-words [overflow-wrap:anywhere]">
                {parseAngle(angle).map((segment) => (
                  <span key={`${i}-${segment.label}`} className="block">
                    <span className="pixel-font mr-1.5 text-[12px] font-medium uppercase leading-none text-cloud-accent-strong sm:text-sm">
                      {segment.label}
                    </span>
                    <span>{segment.text}</span>
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {idea.close && (
        <div className="relative z-10 min-w-0 rounded-cloud-panel border border-cloud-line bg-cloud-paper-soft/70 p-3 sm:p-4">
          <p className="min-w-0 overflow-hidden text-xs italic leading-relaxed text-cloud-muted [overflow-wrap:anywhere] sm:text-sm">
            <span className="pixel-font mr-2 text-sm not-italic uppercase leading-none text-cloud-accent-strong">close</span>
            {idea.close}
          </p>
        </div>
      )}

      <div className="relative z-10 flex items-center justify-between gap-3 border-t border-cloud-line pt-2">
        <span className="pixel-font text-xs uppercase text-cloud-muted/60 sm:text-sm">
          idea in orbit
        </span>
        <button
          onClick={onMarkUsed}
          className={`pixel-font min-h-10 shrink-0 rounded-cloud-pill border px-3.5 text-sm font-medium uppercase leading-none transition-all duration-200 sm:px-4 ${
            isUsed
              ? 'border-cloud-line bg-cloud-paper-soft text-cloud-muted hover:bg-white'
              : 'border-[#c8e8f6] bg-[#e8f5fb] text-cloud-accent-strong hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_28px_rgba(0,129,192,0.16)]'
          }`}
        >
          {isUsed ? 'used' : 'mark used'}
        </button>
      </div>
    </article>
  )
}
