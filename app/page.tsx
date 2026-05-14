'use client'

import { useState, useCallback } from 'react'
import IdeaCard from '@/components/IdeaCard'
import GradientBackground from '@/components/GradientBackground'
import ideasData from '@/data/ideas.json'
import { Idea, Category } from '@/types/idea'

const CATEGORIES: Category[] = ['time', 'identity', 'system', 'money', 'fear', 'design', 'creativity', 'environment']
const ALL = 'all'

export default function Home() {
  const ideas = ideasData as Idea[]
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

  const handleCategory = (cat: Category | typeof ALL) => {
    setActiveCategory(cat)
    setCurrentIndex(0)
  }

  if (!current) {
    return (
      <main className="min-h-screen overflow-x-hidden flex flex-col">
        <GradientBackground />

        <header className="mx-auto flex w-full max-w-6xl shrink-0 items-center justify-between px-4 pt-4 pb-3 sm:px-5 md:px-8 md:py-7">
          <span className="cloud-brand select-none">
            <span className="cloud-brand__icon" aria-hidden="true" />
            <span className="cloud-wordmark text-[2rem] leading-none text-cloud-ink whitespace-nowrap sm:text-[2.35rem]">
              clouds
            </span>
          </span>
        </header>

        <div className="flex flex-1 items-center justify-center px-5 py-10">
          <section className="glass-card w-full max-w-xl p-6 md:p-8">
            <p className="display-font text-[2.35rem] leading-[1.02] tracking-[-0.02em] text-cloud-ink sm:text-5xl">
              Clean slate.
            </p>
            <p className="mt-5 text-base leading-relaxed text-cloud-charcoal/78">
              Add material with /raw or /structure. Clouds will keep the source clean and build from there.
            </p>
          </section>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen overflow-x-hidden flex flex-col">
      <GradientBackground />

      <header className="mx-auto flex w-full max-w-6xl shrink-0 items-center justify-between px-4 pt-4 pb-3 sm:px-5 md:px-8 md:py-7">
        <span className="cloud-brand select-none">
          <span className="cloud-brand__icon" aria-hidden="true" />
          <span className="cloud-wordmark text-[2rem] leading-none text-cloud-ink whitespace-nowrap sm:text-[2.35rem]">
            clouds
          </span>
        </span>
      </header>

      <nav className="scrollbar-none mx-auto flex w-full max-w-6xl shrink-0 gap-2 overflow-x-auto px-4 pb-4 sm:px-5 md:px-8">
        <button
          onClick={() => handleCategory(ALL)}
          className={`ui-label min-h-9 shrink-0 rounded-cloud-pill border px-3.5 text-[13px] font-medium leading-none transition-all duration-200 sm:min-h-10 sm:px-4 ${
            activeCategory === ALL
              ? 'border-cloud-paper bg-cloud-paper text-cloud-sky-deep shadow-[0_8px_26px_rgba(0,129,192,0.18)]'
              : 'border-white/60 bg-white/34 text-cloud-sky-deep/78 backdrop-blur-md hover:border-white hover:bg-white/72 hover:text-cloud-sky-deep'
          }`}
        >
          all
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`ui-label min-h-9 shrink-0 rounded-cloud-pill border px-3.5 text-[13px] font-medium leading-none transition-all duration-200 sm:min-h-10 sm:px-4 ${
              activeCategory === cat
                ? 'border-cloud-paper bg-cloud-paper text-cloud-sky-deep shadow-[0_8px_26px_rgba(0,129,192,0.18)]'
                : 'border-white/60 bg-white/34 text-cloud-sky-deep/78 backdrop-blur-md hover:border-white hover:bg-white/72 hover:text-cloud-sky-deep'
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="flex min-h-0 w-full max-w-full flex-1 items-start justify-center overflow-hidden px-3 pb-5 pt-1 sm:px-5 sm:py-8 md:items-center md:px-8 md:py-10">
        <IdeaCard
          idea={current}
          total={filtered.length}
          current={currentIndex + 1}
        />
      </div>

      <footer className="sticky bottom-0 z-20 flex shrink-0 items-center justify-center gap-3 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-3 md:static md:gap-6 md:pb-10">
        <button
          onClick={prev}
          className="nav-btn"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          onClick={random}
          className="ui-label sky-pill sky-pill--bright min-h-11 min-w-28 px-5 text-[13px] font-medium leading-none text-cloud-ink transition-all hover:border-white hover:bg-white/86"
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
