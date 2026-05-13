export type Category = 'time' | 'identity' | 'system' | 'money' | 'fear' | 'design' | 'creativity' | 'environment'
export type Angle = 'reframe' | 'myth-bust' | 'observation' | 'diagnostic' | 'aspirational' | 'pattern interrupt' | 'POV'
export type Status = 'unused' | 'recorded' | 'published'

export interface Idea {
  id: string
  hook: string
  concept: string
  angle: Angle
  category: Category
  status: Status
}
