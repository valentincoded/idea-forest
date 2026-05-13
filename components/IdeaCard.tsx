'use client'

import { Idea } from '@/types/idea'

const categoryColors: Record<string, string> = {
  time:        'bg-sky-50 text-sky-700',
  identity:    'bg-indigo-50 text-indigo-700',
  system:      'bg-slate-100 text-slate-600',
  money:       'bg-emerald-50 text-emerald-700',
  fear:        'bg-violet-50 text-violet-700',
  design:      'bg-amber-50 text-amber-700',
  creativity:  'bg-rose-50 text-rose-700',
  environment: 'bg-cyan-50 text-cyan-700',
}

const formulaMap: Record<string, { label: string; className: string }> = {
  'strong take':         { label: 'strong take',    className: 'formula-tag--strong-take' },
  'small epiphany':      { label: 'small epiphany', className: 'formula-tag--small-epiphany' },
  'story':               { label: 'story',          className: 'formula-tag--story' },
  'niche-niche playbook':{ label: 'niche-niche',    className: 'formula-tag--niche-niche' },
  "would/wouldn't":      { label: "would / wouldn't", className: 'formula-tag--would-wouldnt' },
  'curation':            { label: 'curation',       className: 'formula-tag--curation' },
  'free work':           { label: 'free work',      className: 'formula-tag--free-work' },
}

function parseAngle(angle: string): { formula: typeof formulaMap[string] | null; body: string } {
  const match = angle.match(/^([^:]+):\s*([\s\S]+)$/)
  if (!match) return { formula: null, body: angle }
  const key = match[1].toLowerCase().trim()
  const formula = formulaMap[key]
  if (formula) return { formula, body: match[2].trim() }
  return { formula: null, body: angle }
}

interface IdeaCardProps {
  idea: Idea
  onMarkUsed: () => void
  total: number
  current: number
}

export default function IdeaCard({ idea, onMarkUsed, total, current }: IdeaCardProps) {
  const isUsed = idea.status !== 'unused'

  return (
    <article className="idea-card max-w-2xl w-full mx-auto">
      <header className="idea-card__meta">
        <span className={`category-pill ${categoryColors[idea.category]}`}>
          {idea.category}
        </span>
        <span className="idea-card__count">
          {String(current).padStart(2, '0')} <span className="opacity-40">/</span> {String(total).padStart(2, '0')}
        </span>
      </header>

      <p className={`idea-card__hook ${isUsed ? 'is-used' : ''}`}>
        {idea.hook}
      </p>

      <ul className="idea-card__angles">
        {idea.angles.map((angle, i) => {
          const { formula, body } = parseAngle(angle)
          return (
            <li key={i} className="idea-card__angle">
              {formula ? (
                <span className={`formula-tag ${formula.className}`}>{formula.label}</span>
              ) : (
                <span className="formula-tag" style={{ background: '#eee', color: '#666' }}>
                  angle {i + 1}
                </span>
              )}
              <p className="idea-card__angle-body">{body}</p>
            </li>
          )
        })}
      </ul>

      {idea.close && (
        <div className="idea-card__close">
          <span className="idea-card__close-label">close</span>
          <p className="idea-card__close-text">{idea.close}</p>
        </div>
      )}

      <footer className="idea-card__footer">
        <button
          onClick={onMarkUsed}
          className={`mark-used-btn ${isUsed ? 'is-used' : ''}`}
        >
          {isUsed ? 'used' : 'mark used'}
        </button>
      </footer>
    </article>
  )
}
