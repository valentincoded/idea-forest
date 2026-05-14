import fs from 'node:fs'

const ideasPath = new URL('../data/ideas.json', import.meta.url)
const typePath = new URL('../types/idea.ts', import.meta.url)

const bannedTerms = [
  'grind',
  'level up',
  'game changer',
  'disrupt',
  'unlock',
  'manifest',
  'abundance',
  'mindset shift',
  'high-value',
  'alpha',
  'sigma',
  'bro',
  'delve',
  'navigate',
  'testament to',
  'in the realm of',
  'a tapestry of',
  "it's worth noting",
  'at its core',
  'the landscape of',
  'underscores',
  'multifaceted',
  'robust',
  'holistic',
  'leverage',
  'pivotal',
  'foster',
  'harness',
  'embark',
  'unpack',
  "in today's fast-paced world",
]

const vagueTerms = [
  'maybe',
  'might',
  'may',
  'could be',
  'kind of',
  'sort of',
  'tends to',
  'in some ways',
  'one way to think about it',
  "it's possible that",
]

const wordCount = (value) =>
  value
    .replace(/[.?!]/g, '')
    .split(/\s+/)
    .filter(Boolean).length

const parseUnion = (source, name) => {
  const match = source.match(new RegExp(`export type ${name} = ([^\\n]+)`))
  if (!match) return []

  return match[1]
    .split('|')
    .map((part) => part.trim().replaceAll("'", ''))
    .filter(Boolean)
}

const errors = []
const typeSource = fs.readFileSync(typePath, 'utf8')
const validCategories = new Set(parseUnion(typeSource, 'Category'))
const validStatuses = new Set(parseUnion(typeSource, 'Status'))
const validModes = new Set(parseUnion(typeSource, 'IdeaMode'))
const ideas = JSON.parse(fs.readFileSync(ideasPath, 'utf8'))

if (!Array.isArray(ideas)) {
  errors.push('data/ideas.json must contain an array.')
}

const ids = new Set()

ideas.forEach((idea, index) => {
  const label = idea?.id ?? `index ${index}`
  const expectedId = String(index + 1).padStart(3, '0')

  if (idea.id !== expectedId) {
    errors.push(`${label}: expected sequential id ${expectedId}.`)
  }

  if (ids.has(idea.id)) {
    errors.push(`${label}: duplicate id.`)
  }

  ids.add(idea.id)

  if (!validModes.has(idea.mode)) {
    errors.push(`${label}: mode must be "raw" or "structure".`)
  }

  if (typeof idea.hook !== 'string' || !idea.hook.trim()) {
    errors.push(`${label}: hook is required.`)
  } else if (wordCount(idea.hook) > 12) {
    errors.push(`${label}: hook must be 12 words or fewer.`)
  }

  if (idea.mode === 'raw' && (typeof idea.raw !== 'string' || !idea.raw.trim())) {
    errors.push(`${label}: raw mode requires raw.`)
  }

  if (idea.mode === 'structure' && (typeof idea.source !== 'string' || !idea.source.trim())) {
    errors.push(`${label}: structure mode requires source.`)
  }

  if ('raw' in idea && (typeof idea.raw !== 'string' || !idea.raw.trim())) {
    errors.push(`${label}: raw must be a non-empty string when present.`)
  } else if (idea.mode === 'raw' && idea.angles?.[0] !== `Raw idea: ${idea.raw}`) {
    errors.push(`${label}: angle 1 must preserve raw exactly as "Raw idea: ${idea.raw}".`)
  }

  if ('source' in idea && (typeof idea.source !== 'string' || !idea.source.trim())) {
    errors.push(`${label}: source must be a non-empty string when present.`)
  }

  if (!Array.isArray(idea.angles) || idea.angles.length !== 3) {
    errors.push(`${label}: exactly 3 angles are required.`)
  }

  idea.angles?.forEach((angle, angleIndex) => {
    if (typeof angle !== 'string' || !angle.trim()) {
      errors.push(`${label}: angle ${angleIndex + 1} is empty.`)
    }
  })

  if (!Array.isArray(idea.presentation) || idea.presentation.length === 0) {
    errors.push(`${label}: presentation must contain at least 1 item.`)
  }

  idea.presentation?.forEach((item, presentationIndex) => {
    if (typeof item !== 'string' || !item.trim()) {
      errors.push(`${label}: presentation ${presentationIndex + 1} is empty.`)
    }
  })

  if (!idea.bigIdea || typeof idea.bigIdea !== 'object') {
    errors.push(`${label}: bigIdea is required.`)
  } else {
    ;['truth', 'idea', 'bridge'].forEach((field) => {
      if (typeof idea.bigIdea[field] !== 'string' || !idea.bigIdea[field].trim()) {
        errors.push(`${label}: bigIdea.${field} is required.`)
      }
    })

    if ('names' in idea.bigIdea && !Array.isArray(idea.bigIdea.names)) {
      errors.push(`${label}: bigIdea.names must be an array when present.`)
    }
  }

  if (typeof idea.close !== 'string' || !idea.close.trim()) {
    errors.push(`${label}: close is required.`)
  } else if (wordCount(idea.close) > 20) {
    errors.push(`${label}: close must be 20 words or fewer.`)
  }

  if (!validCategories.has(idea.category)) {
    errors.push(`${label}: invalid category "${idea.category}".`)
  }

  if (!validStatuses.has(idea.status)) {
    errors.push(`${label}: invalid status "${idea.status}".`)
  }

  const serialized = JSON.stringify(idea)

  if (serialized.includes('—')) {
    errors.push(`${label}: em dash is not allowed.`)
  }

  if (serialized.includes(';')) {
    errors.push(`${label}: semicolon is not allowed.`)
  }

  const lower = serialized.toLowerCase()
  const bannedHit = bannedTerms.find((term) => lower.includes(term))

  if (bannedHit) {
    errors.push(`${label}: banned term found: "${bannedHit}".`)
  }

  const generatedText = [
    idea.hook,
    ...(idea.angles ?? []),
    idea.close,
    ...(idea.presentation ?? []),
    idea.bigIdea?.truth,
    idea.bigIdea?.idea,
    idea.bigIdea?.bridge,
    ...(idea.bigIdea?.names ?? []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  const vagueHit = vagueTerms.find((term) =>
    new RegExp(`(^|[^a-z])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z]|$)`).test(generatedText),
  )

  if (vagueHit) {
    errors.push(`${label}: vague generated language found: "${vagueHit}".`)
  }
})

if (errors.length > 0) {
  console.error(`Idea validation failed with ${errors.length} issue(s):`)
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log(`Idea validation passed for ${ideas.length} cards.`)
