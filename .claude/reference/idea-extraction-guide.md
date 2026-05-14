# Clouds Idea Input Guide

Use this whenever adding cards to `data/ideas.json`.

Before writing a card, read the local Voice DNA file:

`./.claude/reference/voice-dna-v1.md`

The global rule is simple: preserve what is raw, diagnose what is structured,
and never turn either into generic self-help.

---

## Modes

Clouds has two input modes.

### `/raw`

Use `/raw` for quotes, notes, fragments, affirmations, journal lines, and short
ideas where the user's wording is the asset.

The card must preserve the text exactly.

Do:

- Store the original text in `raw`.
- Set `mode` to `"raw"`.
- Use `hook` as an exact excerpt or a plain browsing label.
- Set `angles[0]` to `Raw idea: ${raw}` exactly.
- Use `presentation` for video usage notes.
- Use `bigIdea` as a separate analysis field under the raw text.
- Categorize the card.

Do not:

- Rewrite the raw text.
- Improve the raw text.
- Convert the raw text into a motivational quote.
- Replace the raw text with a hook.
- Use the hook psychology framework.

Recommended `/raw` shape:

```json
{
  "id": "NNN",
  "mode": "raw",
  "raw": "Exact user text.",
  "hook": "Exact excerpt.",
  "angles": [
    "Raw idea: Exact user text.",
    "Keep: The exact wording, rhythm, and emotional temperature that must survive.",
    "Add on: Only light context or visual direction. Never rewrite the idea."
  ],
  "presentation": [
    "Use the original line as on-screen text.",
    "Let each sentence appear one at a time.",
    "Keep the delivery quiet and direct."
  ],
  "bigIdea": {
    "truth": "The simple diagnosis underneath the raw line.",
    "idea": "The idea this plants in the viewer.",
    "bridge": "How this could become content without replacing the raw text.",
    "names": ["Optional simple names"]
  },
  "close": "Exact line from the raw text when possible.",
  "category": "identity",
  "status": "unused"
}
```

### `/structure`

Use `/structure` for transcripts, long notes, essays, messy dumps, frameworks,
offer notes, or comprehensive source material.

The job is not to summarize. The job is to find the diagnosis.

Do:

- Store the source material in `source`.
- Set `mode` to `"structure"`.
- Extract the actual ideas before creating cards.
- Find what the material explains, not what it advises.
- Separate value from insight.
- Create cards only from specific diagnoses.
- Add practical content usage notes.

Do not:

- Start with hooks.
- Write generic advice.
- Make content from weak ideas.
- Turn everything into a self-help lesson.
- Use "smart" abstract language to hide a thin idea.

Recommended `/structure` shape:

```json
{
  "id": "NNN",
  "mode": "structure",
  "source": "Original comprehensive input.",
  "hook": "Plain, sharp entry point.",
  "angles": [
    "Diagnosis: The actual problem or hidden mechanism.",
    "Content angle: How to show the idea without giving people homework.",
    "Video use: The visual, proof, story, or contrast that makes it land."
  ],
  "presentation": [
    "Open with the concrete tension.",
    "Show the before/after belief.",
    "End on the diagnosis, not a list of steps."
  ],
  "bigIdea": {
    "truth": "What the source reveals.",
    "idea": "The idea born from that truth.",
    "bridge": "How the content points to the product, offer, or worldview without hard-selling.",
    "names": ["Optional simple names"]
  },
  "close": "The final diagnostic line.",
  "category": "system",
  "status": "unused"
}
```

---

## Big Idea Layer

Use this layer for both modes.

For `/raw`, the Big Idea sits underneath the raw text. It analyzes the raw line
without replacing it.

For `/structure`, the Big Idea is the intelligence layer that decides whether a
card exists at all.

Ask:

- What is this actually saying?
- What is the viewer misreading?
- What problem does this diagnose?
- What mechanism is hiding in plain sight?
- What did the creator notice that other people miss?
- What exact language from the source must survive?

Reject any card that has no diagnosis.

No diagnosis, no card.

---

## Voice DNA Rules

The local Voice DNA file is the source of truth.

Apply these rules to every generated field: `hook`, `angles`, `presentation`,
`bigIdea`, and `close`.

Core voice:

- Diagnostic, not motivational.
- Plain language.
- Negative diagnosis first, then direction.
- Direct address when useful.
- Short declarative punches after longer explanations.
- Specific mechanism over broad theme.
- Human sentence over clever phrase.

Never use:

- generic self-help
- fake cleverness
- dense noun-heavy openings
- quote-card slogans
- hype
- smooth AI transitions
- abstract language that a real person would not say out loud

### No Vague Language

Generated fields must not use weak qualifiers:

- maybe
- might
- may
- could be
- kind of
- sort of
- tends to
- in some ways
- one way to think about it
- it's possible that

These words are allowed only inside preserved `raw` or `source` text.

### Conviction Test

Every generated insight must make a clear claim.

Bad:

`Maybe your dreams are small because your room is small.`

Better:

`You think small when small is all you see.`

Bad:

`You don't need more ambition. You need better proof.`

That sounds like a quote card. Reject it.

Better:

`You can't want a life you've never seen.`

Closer, but still test it against the source. If the source does not prove it,
do not use it.

### Anti-Slop Gate

Reject the card if it contains:

- advice without diagnosis
- a hook that sounds like a tweet template
- a close that summarizes instead of reframes
- words from the Voice DNA banned list
- vague qualifiers in generated fields
- a line that sounds polished but says nothing
- a universal claim when the source only supports a personal observation

The voice is not soft.

The voice is exact.

---

## Categories

Use only:

- `time`
- `identity`
- `system`
- `money`
- `fear`
- `design`
- `creativity`
- `environment`

---

## Final Checks

Before finishing:

- `raw` mode preserved the raw text exactly.
- `structure` mode preserved the source.
- Generated language follows the local Voice DNA.
- Generated language uses conviction.
- No vague qualifiers appear outside preserved raw/source text.
- Every card has a category.
- Every card has `"status": "unused"`.
- Run `npm run validate:ideas`.
