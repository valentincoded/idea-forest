export type Category = 'time' | 'identity' | 'system' | 'money' | 'fear' | 'design' | 'creativity' | 'environment'
export type Status = 'unused' | 'recorded' | 'published'

export interface Idea {
  id: string
  hook: string
  angles: string[]
  category: Category
  status: Status
}
