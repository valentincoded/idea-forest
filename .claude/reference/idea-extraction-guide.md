# Clouds Idea Input Guide

Use this whenever adding cards to `data/ideas.json`.

Before writing any card, read both reference files:

- `.claude/reference/voice-dna-v1.md` — hard rules on voice, cadence, banned terms
- `.claude/reference/hook-intelligence.md` — psychology and mechanics for writing hook pairs

---

## Modes

Every card is either `/raw` or `/structure`. The mode determines what the top
content field contains. Everything else follows the same shape.

---

### `/raw`

Use for quotes, fragments, journal lines, single observations, and any material
where the user's exact wording is the asset.

The card preserves the text exactly. Analysis sits underneath it. Never replaces it.

**Raw card shape:**

```json
{
  "id": "NNN",
  "mode": "raw",
  "title": "Short plain-language label for this card.",
  "raw": "Exact user text, preserved word for word.",
  "bigIdea": {
    "truth": "The diagnosis underneath this raw line.",
    "idea": "The idea it plants in the viewer.",
    "bridge": "How it could open a content conversation without replacing the raw text.",
    "names": ["Optional short names"]
  },
  "angles": [
    {
      "spoken": "Spoken hook derived from the raw line. 15 words max.",
      "text": "Text hook that deepens the gap. 25 words max."
    }
  ],
  "formats": ["green-screen"],
  "category": "identity",
  "status": "unused"
}
```

**Raw mode rules:**

- `raw` field: exact text, no edits, no corrections, no improvements
- `title`: plain label, not a hook — names the card for browsing
- `bigIdea`: analysis layer only — it sits under the raw text, does not replace it
- `angles`: hooks derived from the raw material, not rewrites of it
- Do not add a "Raw idea: ..." angle — the `raw` field already holds the source
- Do not turn the raw text into a motivational quote or a hook

---

### `/structure`

Use for transcripts, essays, long notes, frameworks, dumps of comprehensive
material, or board analyses where multiple cards get extracted from one source.

The job is to find the diagnosis inside the material — not summarize it.

**Structure card shape:**

```json
{
  "id": "NNN",
  "mode": "structure",
  "title": "Short plain-language label for this card.",
  "overview": "Concise synthesis of what the source material is actually saying on this specific idea. 2-4 sentences. Not a summary of the whole source — only the slice this card is built from.",
  "bigIdea": {
    "truth": "What the source reveals underneath the surface argument.",
    "idea": "The idea born from that truth.",
    "bridge": "How the content connects to a worldview or offer without hard-selling.",
    "names": ["Optional short names"]
  },
  "angles": [
    {
      "spoken": "Spoken hook for this angle. 15 words max.",
      "text": "Text hook that deepens the gap. 25 words max."
    },
    {
      "spoken": "Second angle spoken hook.",
      "text": "Second angle text hook."
    }
  ],
  "formats": ["green-screen", "produced-carousel"],
  "category": "system",
  "status": "unused"
}
```

**Structure mode rules:**

- `overview`: a generated synthesis, not a verbatim paste of the source
- Extract the strongest 1-3 ideas from the material before writing any card
- Find the diagnosis — what the material explains about how people actually work,
  not what it advises them to do
- One diagnosis per card. Do not merge two distinct ideas into one card.
- Reject any card that has no diagnosis (no diagnosis = no card)

---

## Card fields reference

### title

A short plain-language label. Used for browsing, not for publishing.
- Not a hook, not a thesis sentence
- 3-6 words is ideal
- Lowercase except for proper nouns
- Examples: "discipline is downstream", "anti-vision as fuel", "identity deletion"

---

### raw (raw mode only)

The exact source text. Preserve every word, punctuation mark, capitalization
choice, typo, and rhythm exactly as received. This field is sacred.

---

### overview (structure mode only)

A generated 2-4 sentence synthesis of what the source is saying — specifically
the slice this card covers. Not a full source summary. Focused only on the
diagnosis this card is built around.

Write it with conviction. No vague qualifiers. See Voice DNA rules.

---

### bigIdea

The intelligence layer. Applies to both modes.

- `truth`: what the source reveals. The actual mechanism or misread, stated plainly.
- `idea`: the idea that grows from that truth.
- `bridge`: how this content connects forward — to a worldview, a product, a
  belief system — without hard-selling anything.
- `names`: optional short labels for the idea (2-5 words each)

bigIdea sits directly under the `raw` or `overview` field. It is the first
analysis layer the reader (or the AI) encounters after the source material.

---

### angles

An array of angle objects. Each angle is a distinct framing of the idea —
a different entry point, emotional register, or audience position.

Minimum 1 angle. Maximum 4. Most cards have 2-3.

Each angle contains:

**`spoken`** — The spoken hook. Written for the ear.
- 15 words or fewer
- Works when read aloud in one breath without context
- Direct address, bold declarative, or imperative
- Opens a loop without closing it
- See hook-intelligence.md for the ten patterns

**`text`** — The text hook. Written for the eye.
- 25 words or fewer
- Deepens the loop the spoken hook opened
- Does not repeat the spoken hook
- Can use punctuation for open-loop effect (..., :) where appropriate
- A cold reader should feel tension after reading it

The spoken and text hooks in one angle do not say the same thing. They are two
layers of the same gap, viewed from different angles.

**How to generate angles:**

1. Identify 2-4 distinct entry points into the card's diagnosis. These could be:
   - Different emotional registers (loss aversion vs. identity threat)
   - Different audience positions (someone trying to change vs. someone who has tried and failed)
   - Different hook patterns (causal inversion, paradox pivot, false elimination)

2. For each entry point, write the spoken hook first. Test it aloud.

3. Write the text hook to deepen — not echo — the spoken hook.

4. Run the pairing test from hook-intelligence.md before finalizing.

---

### formats

An array of format types from the owenmeetsworld framework. These indicate
which content formats this idea is naturally suited for.

Valid values (use only these):

| Format | Description |
|--------|-------------|
| `green-screen` | Talking-head over a visual background. Best for idea breakdowns and context-heavy content. |
| `yap` | Straight-to-camera, no visual. Best for raw conviction, personal takes, short observations. |
| `quick-hits` | Clips + text overlay, no face required. Best for concept distillations and hook-led ideas. |
| `vlog` | Longer storytelling with voiceover. Best for narrative arcs and process documentation. |
| `carousel-dump` | Casual photo/screenshot dump. Best for documenting moments, milestones, or behind-the-scenes. |
| `produced-carousel` | Designed carousel with opinion or framework. Best for distilled insights, comparisons, lists. |
| `text-post` | LinkedIn or X written post. Best for opinion-driven takes, observations, diagnostic threads. |

**How to assign formats:**

Ask: which formats let this specific diagnosis land without diluting it?

- Diagnosis-heavy ideas (causal inversions, paradox pivots) work well as
  `green-screen`, `quick-hits`, or `produced-carousel`
- Raw voice material works well as `yap` or `text-post`
- Narrative or story-driven diagnoses work well as `vlog` or `green-screen`
- Frameworks or comparisons work well as `produced-carousel` or `text-post`

Assign 1-3 formats. Do not assign formats that would require the idea to be
re-explained in a way that loses the diagnosis.

---

## Big Idea layer — the diagnostic filter

Use this before deciding whether a card exists at all.

Ask of the source material:

- What is this actually saying underneath the surface claim?
- What does the viewer misread or misunderstand about this?
- What problem does this diagnose?
- What mechanism is hiding in plain sight?
- What exact language from the source must survive?

Reject any card that cannot answer the first three questions with conviction.

No diagnosis. No card.

---

## Voice rules (applied to all generated fields)

Generated fields: `title`, `overview`, all `angles` fields, all `bigIdea` fields.

The `raw` field is never generated.

- Diagnostic, not motivational
- Plain language. No abstract nouns stacked on abstract nouns.
- Negative diagnosis first, then direction
- High-variance cadence: long explanatory sentence followed by short declarative punch
- Specific mechanism over broad theme
- Every generated claim must be supportable from the source material

**No vague qualifiers in generated fields:**
maybe, might, may, could be, kind of, sort of, tends to, in some ways,
one way to think about it, it's possible that

**No banned terms** (see Voice DNA banned list):
grind, level up, game changer, disrupt, unlock, manifest, abundance,
mindset shift, high-value, alpha, sigma, bro

**No AI tells:**
delve, navigate, testament to, in the realm of, tapestry, it's worth noting,
at its core, the landscape of, underscores, multifaceted, robust, holistic,
leverage, pivotal, foster, harness, embark, unpack

**No em dashes or semicolons** in generated fields.

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

## Final checks before finishing

1. `raw` mode preserved the raw text exactly in `raw`
2. `structure` mode has a focused `overview` (not a full source dump)
3. `title` is a plain label, not a hook
4. `bigIdea` sits directly under `raw` or `overview` in the JSON
5. Every angle has `spoken` (15 words max) and `text` (25 words max)
6. Spoken and text hooks in each angle do not say the same thing
7. No angle closes the loop it opens
8. At least one `format` assigned; all formats are from the valid list
9. Generated language follows Voice DNA — conviction, no vague qualifiers
10. No em dashes, semicolons, banned terms, or vague qualifiers in generated fields
11. Every card has a `category` and `"status": "unused"`
12. Run `npm run validate:ideas` before finishing
