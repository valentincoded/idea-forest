export type Category = 'time' | 'identity' | 'system' | 'money' | 'fear' | 'design' | 'creativity' | 'environment'
export type Status = 'unused' | 'recorded' | 'published'
export type IdeaMode = 'raw' | 'structure'
export type Format = 'green-screen' | 'yap' | 'quick-hits' | 'vlog' | 'carousel-dump' | 'produced-carousel' | 'text-post'

export interface BigIdea {
  truth: string
  idea: string
  bridge: string
  names?: string[]
}

export interface Angle {
  spoken: string
  text: string
}

export interface Idea {
  id: string
  mode: IdeaMode
  title: string
  raw?: string
  overview?: string
  bigIdea: BigIdea
  angles: Angle[]
  formats: Format[]
  category: Category
  status: Status
}
