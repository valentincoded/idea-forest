'use client'

import { useState } from 'react'
import Link from 'next/link'
import GradientBackground from '@/components/GradientBackground'
import { Category } from '@/types/idea'

const CATEGORIES: Category[] = ['time', 'identity', 'system', 'money', 'fear', 'design', 'creativity', 'environment']

export default function AddPage() {
  const [hook, setHook] = useState('')
  const [angle1, setAngle1] = useState('')
  const [angle2, setAngle2] = useState('')
  const [angle3, setAngle3] = useState('')
  const [category, setCategory] = useState<Category>('identity')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const angles = [angle1, angle2, angle3].filter(a => a.trim().length > 0)
    const entry = JSON.stringify({ hook, angles, category, status: 'unused' }, null, 2)
    navigator.clipboard.writeText(entry)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const ready = hook.trim().length > 0 && angle1.trim().length > 0

  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      <GradientBackground />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8 md:py-7">
        <Link
          href="/"
          className="sky-pill min-h-11 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-cloud-paper/86 transition-all hover:border-cloud-paper/45 hover:bg-white/18 hover:text-white"
        >
          back
        </Link>
        <span className="sky-pill px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-cloud-paper/84">
          + add idea
        </span>
      </header>

      <div className="flex flex-1 items-center justify-center px-5 py-8 md:px-8 md:py-10">
        <div className="glass-card flex w-full max-w-2xl flex-col gap-6 p-6 md:p-10">

          <div className="flex flex-col gap-2">
            <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-cloud-muted">hook</label>
            <textarea
              value={hook}
              onChange={e => setHook(e.target.value)}
              placeholder="The opening line."
              rows={3}
              className="resize-none rounded-cloud-panel border border-cloud-line bg-white/48 px-4 py-3 text-base text-cloud-charcoal placeholder:text-cloud-muted/56 focus:border-[#c8e8f6] focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-cloud-muted">angles</label>
            {[
              { val: angle1, set: setAngle1, placeholder: 'First entry point.' },
              { val: angle2, set: setAngle2, placeholder: 'Second entry point.' },
              { val: angle3, set: setAngle3, placeholder: 'Third entry point.' },
            ].map(({ val, set, placeholder }, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cloud-paper-soft font-mono text-[11px] text-cloud-accent-strong">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <textarea
                  value={val}
                  onChange={e => set(e.target.value)}
                  placeholder={placeholder}
                  rows={2}
                  className="flex-1 resize-none rounded-cloud-panel border border-cloud-line bg-white/48 px-4 py-3 text-sm text-cloud-charcoal placeholder:text-cloud-muted/56 focus:border-[#c8e8f6] focus:outline-none"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-[11px] uppercase tracking-[0.14em] text-cloud-muted">category</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value as Category)}
              className="rounded-cloud-panel border border-cloud-line bg-white/70 px-4 py-3 text-sm text-cloud-charcoal focus:border-[#c8e8f6] focus:outline-none"
            >
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-3 border-t border-cloud-line pt-2">
            <p className="text-xs text-cloud-muted">
              Draft JSON for <code className="text-cloud-accent-strong">data/ideas.json</code>.
            </p>
            <button
              onClick={handleCopy}
              disabled={!ready}
              className={`min-h-11 rounded-cloud-pill border px-5 text-sm font-bold uppercase tracking-[0.12em] transition-all duration-200 ${
                ready
                  ? 'border-[#c8e8f6] bg-[#e8f5fb] text-cloud-accent-strong hover:bg-white'
                  : 'cursor-not-allowed border-cloud-line bg-cloud-paper-soft text-cloud-muted/50'
              }`}
            >
              {copied ? 'copied' : 'copy as JSON'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
