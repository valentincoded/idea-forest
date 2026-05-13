'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Category } from '@/types/idea'

const GradientBackground = dynamic(() => import('@/components/GradientBackground'), { ssr: false })

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
    <main className="min-h-screen flex flex-col">
      <GradientBackground />

      <header className="flex items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="text-xs px-4 py-2 rounded-full bg-white/30 text-slate-600 hover:bg-white/50 transition-all backdrop-blur-sm border border-white/40"
        >
          ← back
        </Link>
        <span className="text-sm font-medium tracking-widest text-slate-500 uppercase">
          + add idea
        </span>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="glass-card flex flex-col gap-6 p-10 md:p-14 max-w-2xl w-full mx-auto">

          <div className="flex flex-col gap-2">
            <label className="text-xs text-slate-400 tracking-widest uppercase">hook</label>
            <textarea
              value={hook}
              onChange={e => setHook(e.target.value)}
              placeholder="The opening line — what you say first in the video."
              rows={3}
              className="bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-slate-700 text-base placeholder:text-slate-400 focus:outline-none focus:border-blue-300 resize-none backdrop-blur-sm"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-xs text-slate-400 tracking-widest uppercase">angles</label>
            {[
              { val: angle1, set: setAngle1, placeholder: 'First entry point — scene, confession, or cold open.' },
              { val: angle2, set: setAngle2, placeholder: 'Second entry point — number, reversal, or question.' },
              { val: angle3, set: setAngle3, placeholder: 'Third entry point — story, diagnosis, or contrast.' },
            ].map(({ val, set, placeholder }, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-slate-300 select-none mt-3.5 shrink-0">—</span>
                <textarea
                  value={val}
                  onChange={e => set(e.target.value)}
                  placeholder={placeholder}
                  rows={2}
                  className="flex-1 bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-slate-700 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-300 resize-none backdrop-blur-sm"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-slate-400 tracking-widest uppercase">category</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value as Category)}
              className="bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-blue-300 backdrop-blur-sm"
            >
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="pt-2 border-t border-white/30 flex flex-col gap-3">
            <p className="text-xs text-slate-400">
              Copy the JSON below and paste it into{' '}
              <code className="text-blue-500 text-xs">data/ideas.json</code> — or send it to Claude to add it for you.
            </p>
            <button
              onClick={handleCopy}
              disabled={!ready}
              className={`text-sm px-5 py-3 rounded-full transition-all duration-200 ${
                ready
                  ? 'bg-blue-500/20 text-blue-700 hover:bg-blue-500/30'
                  : 'bg-slate-100/40 text-slate-400 cursor-not-allowed'
              }`}
            >
              {copied ? '✓ copied' : 'copy as JSON'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
