'use client'

import { Idea } from '@/types/idea'

const categoryDot: Record<string, string> = {
  time:        '#2685b8',
  identity:    '#4b58c2',
  system:      '#6b7280',
  money:       '#2d8a55',
  fear:        '#7a3fb8',
  design:      '#c08518',
  creativity:  '#c2305a',
  environment: '#1f8eb8',
}

const formulaMap: Record<string, { label: string; modifier: string }> = {
  'strong take':         { label: 'strong take',     modifier: 'angle--strong-take' },
  'small epiphany':      { label: 'small epiphany',  modifier: 'angle--small-epiphany' },
  'story':               { label: 'story',           modifier: 'angle--story' },
  'niche-niche playbook':{ label: 'niche-niche',     modifier: 'angle--niche-niche' },
  "would/wouldn't":      { label: "would / wouldn't", modifier: 'angle--would-wouldnt' },
  'curation':            { label: 'curation',        modifier: 'angle--curation' },
  'free work':           { label: 'free work',       modifier: 'angle--free-work' },
}

function parseAngle(angle: string): {
  formula: typeof formulaMap[string] | null
  body: string
  visual: string | null
} {
  // Extract formula prefix
  const formulaMatch = angle.match(/^([^:]+):\s*([\s\S]+)$/)
  if (!formulaMatch) return { formula: null, body: angle, visual: null }

  const key = formulaMatch[1].toLowerCase().trim()
  const formula = formulaMap[key] ?? null
  let rest = formulaMatch[2].trim()

  // Extract trailing "Visual: ..." stage direction
  const visualMatch = rest.match(/^([\s\S]+?)\s+Visual:\s*([\s\S]+)$/)
  let body = rest
  let visual: string | null = null
  if (visualMatch) {
    body = visualMatch[1].trim()
    visual = visualMatch[2].trim()
  }

  return { formula, body, visual }
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
    <article className="idea-card max-w-3xl w-full mx-auto">
      <header className="idea-card__meta">
        <span
          className="category-pill"
          style={{ '--cat-color': categoryDot[idea.category] } as React.CSSProperties}
        >
          {idea.category}
        </span>
        <span className="idea-card__count">
          {String(current).padStart(2, '0')} <span style={{ opacity: 0.35 }}>·</span> {String(total).padStart(2, '0')}
        </span>
      </header>

      <p className={`idea-card__hook ${isUsed ? 'is-used' : ''}`}>
        {idea.hook}
      </p>

      <ul className="idea-card__angles">
        {idea.angles.map((angle, i) => {
          const { formula, body, visual } = parseAngle(angle)
          return (
            <li
              key={i}
              className={`idea-card__angle ${formula ? formula.modifier : ''}`}
            >
              <header className="angle__head">
                <span className="angle__dot" />
                <span className="angle__label">
                  {formula ? formula.label : `angle ${i + 1}`}
                </span>
              </header>
              <p className="angle__body">{body}</p>
              {visual && (
                <div className="angle__visual">
                  <span className="angle__visual-label">visual</span>
                  <p className="angle__visual-text">{visual}</p>
                </div>
              )}
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
