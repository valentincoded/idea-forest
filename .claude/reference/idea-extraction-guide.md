# Clouds Idea Input Guide

Use this whenever adding cards to `data/ideas.json`.

Before writing any card, read both reference files:

- `.claude/reference/voice-dna-v1.md` — hard rules on voice, cadence, banned terms
- `.claude/reference/hook-intelligence.md` — psychology and mechanics for writing hook pairs

---

## Hard rules that apply before anything else

### No person attribution in generated fields

Generated fields (`title`, `overview`, `bigIdea`, `angles`) must never name
specific people, creators, researchers, or sources. We extract ideas, not
quotations from known figures.

Wrong:
> "Dan Koe argues that discipline is downstream of obsession."

Wrong:
> "Tim Denning's framework shows that lock-in is a comeback protocol."

Right:
> "Discipline is the output of obsession, not the input to it."

Right:
> "Lock-in is a psychological reset after a fall, not a maintenance posture."

The one exception: the `raw` field in raw-mode cards. If the user's own words
reference a person, preserve that exactly. If a raw card is a direct verbatim
quote from a named third party that must be attributed, the `raw` field holds
the quote with attribution. Generated fields still do not name anyone.

### A hook is a question the idea answers — not the idea itself

This is the most common failure mode. Read it twice.

A hook delivers the curiosity gap. The body delivers the idea.
If your hook already contains the answer, it is a thesis statement, not a hook.

Closed loop (thesis statement — wrong):
> "You don't build discipline. Obsession builds it for you."

That is the entire card summarized. The reader has no reason to continue.

Open loop (hook — right):
> "The reason your discipline keeps failing isn't what you think."

Now the reader must know more. The hook has done its job.

More examples:

Closed: "Transformation is subtractive, not additive."
Open: "Every habit you've ever built on top of a broken identity collapsed for the same reason."

Closed: "Vision boards don't move people. The anti-vision does."
Open: "There's a reason your vision board has never moved you. It's not because you lack ambition."

Closed: "Niche down is industrial-age programming."
Open: "The advice that's holding your personal brand back came from an era before you could be your own distribution channel."

Closed: "Lock-in is a comeback protocol, not a maintenance posture."
Open: "The most locked-in people I've seen didn't grind harder after they fell. They did something different."

The rule: if someone reads the spoken hook and already knows the answer — rewrite it.

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
      "spoken": "Spoken hook derived from the raw line. 15 words max. Opens a loop.",
      "text": "Text hook that deepens the gap. 25 words max. Does not close the loop."
    }
  ],
  "formats": ["yap"],
  "category": "identity",
  "status": "unused"
}
```

**Raw mode rules:**

- `raw` field: exact text, no edits, no corrections, no improvements
- `title`: plain label, not a hook
- `bigIdea`: analysis layer only — sits under the raw text, does not replace it
- `angles`: hooks derived from the raw material — opens curiosity, does not deliver the idea
- Do not add a "Raw idea: ..." angle
- Do not turn the raw text into a motivational quote or a thesis statement

---

### `/structure`

Use for transcripts, essays, long notes, frameworks, dumps of comprehensive
material, or board analyses where multiple cards get extracted from one source.

The job is to find the diagnosis — not summarize, not attribute.

**Structure card shape:**

```json
{
  "id": "NNN",
  "mode": "structure",
  "title": "Short plain-language label for this card.",
  "overview": "2-4 sentences on the specific idea this card is built from. No person names. No attribution. Just the mechanism.",
  "bigIdea": {
    "truth": "What the source reveals. The actual mechanism.",
    "idea": "The idea born from that truth.",
    "bridge": "How the content connects to a worldview without hard-selling.",
    "names": ["Optional short labels"]
  },
  "angles": [
    {
      "spoken": "Spoken hook. 15 words max. Opens a curiosity loop. Does not deliver the idea.",
      "text": "Text hook. 25 words max. Deepens the gap. Does not resolve it."
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

- `overview`: generated synthesis — no person names, no attribution
- Extract the diagnosis from the material, not the argument or the speaker
- One diagnosis per card. Do not merge two distinct ideas into one card.
- Reject any card that has no diagnosis

---

## Card fields reference

### title

A short plain-language label. Used for browsing, not for publishing.
- Not a hook, not a thesis sentence, not a motivational phrase
- 3-6 words, lowercase
- Names the diagnosis, not the argument

---

### raw (raw mode only)

The exact source text. Preserve every word, punctuation mark, capitalization
choice, typo, and rhythm. This field is sacred and never generated.

---

### overview (structure mode only)

A generated 2-4 sentence synthesis of the specific idea this card covers.

Rules:
- No person names. No "X argues that" or "Y's framework shows".
- Focus only on the mechanism or diagnosis this card is built from
- Write with conviction — no vague qualifiers
- The overview is not a hook. It is context for the idea.

---

### bigIdea

The intelligence layer. Applies to both modes.

- `truth`: the actual mechanism. No attribution. Stated as fact.
- `idea`: the idea that grows from that truth.
- `bridge`: how this content connects forward without selling.
- `names`: optional short labels (2-5 words each)

---

### angles

An array of angle objects. Each angle is a distinct entry point into the idea.
Minimum 1. Maximum 4. Most cards have 2-3.

Each angle contains `spoken` and `text`. Both are hooks. Neither delivers the idea.

---

#### Writing hooks that actually work

**The core test:** read the spoken hook out loud. Does a cold listener already
know the answer? If yes — rewrite it. The hook's job is to make them need to
know, not to tell them.

**What opens a curiosity loop:**

1. Name the problem without naming the cause
   > "The reason your habits keep failing isn't willpower."
   (What is it then? They must keep reading.)

2. State a result that contradicts their assumption
   > "The people I've seen change the fastest stopped trying to change."
   (Wait — how does that work?)

3. Name the cost of the wrong belief without explaining it
   > "There's a version of discipline that makes you worse at what you care about."
   (Which version? Am I doing it?)

4. Create a knowledge gap using specificity
   > "One thing separates every person stuck in the same loop from everyone who got out."
   (What is it?)

5. Invoke identity threat without resolving it
   > "The system you built to improve yourself might be the thing keeping you stuck."
   (Is my system doing this to me?)

**What closes the loop (wrong):**

- Stating the insight directly: "Discipline is downstream of obsession."
- Restating the title: "Your habits fail because the identity underneath is broken."
- Leading with the conclusion: "The anti-vision is more powerful than the vision."
- Summarizing the card: "Lock-in is a comeback protocol, not maintenance."

**spoken rules:**
- 15 words or fewer
- Reads aloud in one breath, cold, without context
- Uses direct address ("You"), bold declarative, or imperative
- Does not contain the answer

**text rules:**
- 25 words or fewer
- Deepens the gap — a different angle on the same unanswered question
- Does not repeat the spoken hook
- Does not resolve what the spoken hook opened

The spoken and text hooks are two layers of the same information gap.
They are not synonyms. They do not summarize each other.

---

### formats

Valid values: `green-screen`, `yap`, `quick-hits`, `vlog`, `carousel-dump`,
`produced-carousel`, `text-post`

See hook-intelligence.md for format-to-pattern matching.

---

## Categories

`time` / `identity` / `system` / `money` / `fear` / `design` / `creativity` / `environment`

---

## Final checks

1. No person names in any generated field
2. `overview` contains no attribution
3. Every hook opens a loop — cold reader does not know the answer after reading it
4. Spoken hook works aloud in one breath without context
5. Text hook deepens the gap without closing it
6. Spoken and text hooks in each angle say different things
7. No vague qualifiers in generated fields
8. No em dashes, semicolons, banned terms
9. `raw` preserved exactly (raw mode)
10. Run `npm run validate:ideas`
