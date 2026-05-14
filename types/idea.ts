export type Category = 'time' | 'identity' | 'system' | 'money' | 'fear' | 'design' | 'creativity' | 'environment'
export type Status = 'unused' | 'recorded' | 'published'
export type IdeaMode = 'raw' | 'structure'

export interface BigIdea {
  truth: string
  idea: string
  bridge: string
  names?: string[]
}

export interface Idea {
  id: string
  mode?: IdeaMode
  raw?: string
  source?: string
  hook: string
  angles: string[]
  close?: string
  category: Category
  presentation?: string[]
  bigIdea?: BigIdea
  status: Status
}
