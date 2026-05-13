'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import IdeaCard from '@/components/IdeaCard'
import ideasData from '@/data/ideas.json'
import { Idea, Category } from '@/types/idea'
import Link from 'next/link'

const GradientBackground = dynamic(() => import('@/components/GradientBackground'), { ssr: false })

const CATEGORIES: Category[] = ['time', 'identity', 'system', 'money', 'fear', 'design', 'creativity', 'environment']
const ALL = 'all'

export default function Home() {
  const [ideas, setIdeas] = useState<Idea[]>(ideasData as Idea[])
  const [activeCategory, setActiveCategory] = useState<Category | typeof ALL>(ALL)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filtered = activeCategory === ALL
    ? ideas
    : ideas.filter(i => i.category === activeCategory)

  const current = filtered[currentIndex] ?? filtered[0]

  const prev = useCallback(() => {
    setCurrentIndex(i => (i - 1 + filtered.length) % filtered.length)
  }, [filtered.length])

  const next = useCallback(() => {
    setCurrentIndex(i => (i + 1) % filtered.length)
  }, [filtered.length])

  const random = useCallback(() => {
    const idx = Math.floor(Math.random() * filtered.length)
    setCurrentIndex(idx)
  }, [filtered.length])

  const markUsed = useCallback(() => {
    setIdeas(prev => prev.map(idea =>
      idea.id === current.id
        ? { ...idea, status: idea.status === 'unused' ? 'recorded' : 'unused' }
        : idea
    ))
  }, [current])

  const handleCategory = (cat: Category | typeof ALL) => {
    setActiveCategory(cat)
    setCurrentIndex(0)
  }

  if (!current) return null

  return (
    <main className="min-h-screen flex flex-col">
      <GradientBackground />

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <span className="flex items-center gap-2 select-none">
          <span className="text-2xl leading-none text-white/70">☁︎</span>
          <span
            className="text-2xl leading-none text-white whitespace-nowrap"
            style={{ fontFamily: 'var(--font-pacifico)' }}
          >
            clouds
          </span>
        </span>
        <Link
          href="/add"
          className="text-xs px-4 py-2 rounded-full bg-white/20 text-white/80 hover:bg-white/30 transition-all backdrop-blur-sm border border-white/30 whitespace-nowrap"
        >
          + add idea
        </Link>
      </header>

      {/* Category filter */}
      <nav className="flex gap-2 px-8 pb-4 overflow-x-auto scrollbar-none flex-nowrap">
        <button
          onClick={() => handleCategory(ALL)}
          className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 border ${
            activeCategory === ALL
              ? 'bg-white/90 text-slate-700 border-white/90'
              : 'bg-white/20 text-white/70 border-white/25 hover:bg-white/30 hover:text-white'
          }`}
        >
          all
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-white/90 text-slate-700 border-white/90'
                : 'bg-white/20 text-white/70 border-white/25 hover:bg-white/30 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <IdeaCard
          idea={current}
          onMarkUsed={markUsed}
          total={filtered.length}
          current={currentIndex + 1}
        />
      </div>

      {/* Navigation */}
      <footer className="flex items-center justify-center gap-6 pb-10">
        <button
          onClick={prev}
          className="nav-btn"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          onClick={random}
          className="text-xs px-5 py-2.5 rounded-full bg-white/20 text-white/80 hover:bg-white/30 transition-all backdrop-blur-sm border border-white/30"
        >
          random
        </button>
        <button
          onClick={next}
          className="nav-btn"
          aria-label="Next"
        >
          →
        </button>
      </footer>
    </main>
  )
}
