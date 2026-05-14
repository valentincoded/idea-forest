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

const parseUnion = (source, name) => {
  const match = source.match(new RegExp(`export type ${name} = ([^\\n]+)`))
  if (!match) return []

  return match[1]
    .split('|')
    .map((part) => part.trim().replaceAll("'", ''))
    .filter(Boolean)
}

const hasTerm = (text, term) =>
  new RegExp(`(^|[^a-z])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z]|$)`).test(text)

const wordCount = (value) =>
  value
    .replace(/[.?!]/g, '')
    .split(/\s+/)
    .filter(Boolean).length

const errors = []
const typeSource = fs.readFileSync(typePath, 'utf8')
const validCategories = new Set(parseUnion(typeSource, 'Category'))
const validStatuses = new Set(parseUnion(typeSource, 'Status'))
const validModes = new Set(parseUnion(typeSource, 'IdeaMode'))
const validFormats = new Set(parseUnion(typeSource, 'Format'))
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

  if (typeof idea.title !== 'string' || !idea.title.trim()) {
    errors.push(`${label}: title is required.`)
  }

  if (idea.mode === 'raw') {
    if (typeof idea.raw !== 'string' || !idea.raw.trim()) {
      errors.push(`${label}: raw mode requires raw.`)
    }
  }

  if (idea.mode === 'structure') {
    if (typeof idea.overview !== 'string' || !idea.overview.trim()) {
      errors.push(`${label}: structure mode requires overview.`)
    }
  }

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

  if (!Array.isArray(idea.angles) || idea.angles.length === 0) {
    errors.push(`${label}: at least one angle is required.`)
  } else {
    idea.angles.forEach((angle, angleIndex) => {
      if (typeof angle !== 'object' || angle === null) {
        errors.push(`${label}: angle ${angleIndex + 1} must be an object.`)
        return
      }

      if (typeof angle.spoken !== 'string' || !angle.spoken.trim()) {
        errors.push(`${label}: angle ${angleIndex + 1} requires spoken.`)
      } else if (wordCount(angle.spoken) > 15) {
        errors.push(`${label}: angle ${angleIndex + 1} spoken must be 15 words or fewer.`)
      }

      if (typeof angle.text !== 'string' || !angle.text.trim()) {
        errors.push(`${label}: angle ${angleIndex + 1} requires text.`)
      } else if (wordCount(angle.text) > 25) {
        errors.push(`${label}: angle ${angleIndex + 1} text must be 25 words or fewer.`)
      }
    })
  }

  if (!Array.isArray(idea.formats) || idea.formats.length === 0) {
    errors.push(`${label}: at least one format is required.`)
  } else {
    idea.formats.forEach((format) => {
      if (!validFormats.has(format)) {
        errors.push(`${label}: invalid format "${format}".`)
      }
    })
  }

  if (!validCategories.has(idea.category)) {
    errors.push(`${label}: invalid category "${idea.category}".`)
  }

  if (!validStatuses.has(idea.status)) {
    errors.push(`${label}: invalid status "${idea.status}".`)
  }

  const generatedText = [
    idea.title,
    idea.overview,
    idea.bigIdea?.truth,
    idea.bigIdea?.idea,
    idea.bigIdea?.bridge,
    ...(idea.bigIdea?.names ?? []),
    ...(idea.angles ?? []).flatMap((a) => [a?.spoken, a?.text]),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()

  if (generatedText.includes('—')) {
    errors.push(`${label}: em dash is not allowed in generated fields.`)
  }

  if (generatedText.includes(';')) {
    errors.push(`${label}: semicolon is not allowed in generated fields.`)
  }

  const bannedHit = bannedTerms.find((term) => hasTerm(generatedText, term))

  if (bannedHit) {
    errors.push(`${label}: banned generated term found: "${bannedHit}".`)
  }

  const vagueHit = vagueTerms.find((term) => hasTerm(generatedText, term))

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
