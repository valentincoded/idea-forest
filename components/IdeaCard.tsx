'use client'

import { Idea } from '@/types/idea'

const categoryColors: Record<string, string> = {
  time:        'bg-blue-100/60 text-blue-700',
  identity:    'bg-indigo-100/60 text-indigo-700',
  system:      'bg-slate-100/60 text-slate-600',
  money:       'bg-sky-100/60 text-sky-700',
  fear:        'bg-violet-100/60 text-violet-700',
  design:      'bg-blue-50/80 text-blue-600',
  creativity:  'bg-indigo-50/80 text-indigo-600',
  environment: 'bg-cyan-100/60 text-cyan-700',
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
    <div className="glass-card flex flex-col gap-6 p-10 md:p-14 max-w-2xl w-full mx-auto">
      <div className="flex items-center justify-between">
        <span className={`text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full ${categoryColors[idea.category]}`}>
          {idea.category}
        </span>
        <span className="text-xs text-slate-400 tabular-nums">
          {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <p className={`text-2xl md:text-3xl font-light leading-snug text-slate-800 tracking-tight ${isUsed ? 'line-through opacity-40' : ''}`}>
          {idea.hook}
        </p>
        <ul className="flex flex-col gap-2">
          {idea.angles.map((angle, i) => (
            <li key={i} className="flex gap-3 text-sm md:text-base text-slate-600 leading-relaxed font-light">
              <span className="text-slate-300 select-none shrink-0 tabular-nums text-xs mt-1">{String(i + 1).padStart(2, '0')}</span>
              <span>{angle}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-end pt-2 border-t border-white/30">
        <button
          onClick={onMarkUsed}
          className={`text-xs px-4 py-2 rounded-full transition-all duration-200 ${
            isUsed
              ? 'bg-slate-200/60 text-slate-400 hover:bg-slate-200'
              : 'bg-blue-500/20 text-blue-700 hover:bg-blue-500/30'
          }`}
        >
          {isUsed ? 'used' : 'mark used'}
        </button>
      </div>
    </div>
  )
}
