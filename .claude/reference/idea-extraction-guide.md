# Idea Extraction Guide

Use this whenever generating or rewriting idea cards for Clouds.
Apply every rule below before writing a single word.

---

## Card structure

```json
{
  "id": "NNN",
  "raw": "The user's original idea, preserved verbatim.",
  "hook": "The opening line. ≤12 words.",
  "angles": [
    "Angle 01: Raw idea — preserve the user's exact wording.",
    "Angle 02: Keep — what must remain untouched if this becomes a post, video, or draft.",
    "Angle 03: Add on — optional light context, visual direction, or expansion that does not overwrite the raw idea."
  ],
  "close": "1-sentence payoff that resolves the curiosity loop opened by the hook. Only earned at the end of the video.",
  "category": "time | identity | system | money | fear | design | creativity | environment",
  "status": "unused"
}
```

---

## Energy and tone

The user's raw idea comes first. Do not improve it by default. Do not translate
it into polished self-help language. Do not replace strange phrasing, typos,
casual slang, spiritual phrasing, or emotional directness unless the user asks.
Those details are often the whole point.

The job is preservation plus optional scaffolding:
- `raw` stores the original idea verbatim.
- `hook` is a short handle for browsing. It can be an exact excerpt.
- `angles[0]` starts with `Raw idea:` and repeats the original wording.
- `angles[1]` starts with `Keep:` and names what energy must not be lost.
- `angles[2]` starts with `Add on:` and suggests only light context or visuals.
- `close` should prefer an exact line from the raw idea when possible.

This content library is for a life design creator. The energy is expansive, permission-giving, and curious. Not trapped.

**The right energy:**
- Life can be designed. Start there.
- "You do not need permission to begin. You never did."
- "Most walls are local." They dissolve when tested.
- Courage, perspective shifts, creative possibility, identity fluidity.
- The observer who sees what others have normalized and names it.

**The wrong energy:**
- Sunday dread, corporate-trapped anxiety, job-escape fantasy.
- Hustle culture critique (it's been done; it's not the voice).
- Generic motivational arcs with a tidy resolution.

**Tone by category:**
- `environment`: somatic, observational, specific cities and geographies.
- `identity`: diagnostic of inherited schemas, not self-help cheerleading.
- `design`: iterative, version-based, no final answer energy.
- `creativity`: permission-giving, fear-as-filter, making as research.
- `fear`: reframe the accounting, not the emotion.
- `system`: architectural, not motivational.
- `time`: mathematical, concrete, non-refundable.
- `money`: sufficiency over wealth, autonomy as the actual target.

---

## Default raw-input mode

Use this mode whenever the user gives notes, quotes, fragments, affirmations, or
ideas to add.

1. Split the input on separators such as `__`.
2. Preserve each idea exactly in `raw`.
3. Use a short hook that is either an exact excerpt or the lightest possible
   browsing handle.
4. Set `angles[0]` to `Raw idea: ${raw}` exactly.
5. Use `angles[1]` as a `Keep:` note that protects the phrasing, rhythm, slang,
   typos, or emotional signal.
6. Use `angles[2]` as an `Add on:` note only when helpful for visuals, context,
   or future expansion.
7. Prefer an exact line from the raw idea as `close`.

Do not use the hook psychology framework for raw-input mode unless the user
explicitly asks to turn the idea into video angles, scripts, or hooks.

## Expansion mode: curiosity loop (Zeigarnik Effect)

Use the sections below only when expanding a preserved raw idea into video
concepts, scripts, or hooks.

Every card opens a loop in the hook that only closes at the end of the video.

**How it works:**
- The hook plants a single question the viewer cannot answer without watching.
- The angles develop the middle — the question stays open.
- The `close` field is the 1-sentence payoff. One clean resolution. Never mid-video.

**Writing the close:**
- It should feel like the thing the whole video was building toward.
- It is not a summary. It is a revelation or a reframe.
- It should make the hook retroactively more interesting.
- ≤20 words. One clean sentence.

**Example:**
- Hook: "You have four thousand weeks. That's the whole number."
- Close: "The number was always the number. Making it visible is just finally agreeing to know it."

---

## Hook rules

A hook is the first sentence you say on camera.

### The single subject, single question test

After writing any hook, run these two checks:

1. **Subject check:** Is it possible for someone to misunderstand what this video is about? If yes, rewrite. The subject must be unmistakably clear before you move on.

2. **Question check:** What single question pops in the viewer's mind after hearing this hook? It should be one question, and it should be shock-inducing: "How is this possible? Is this real? Can you tell me more? I can't believe that." If you can't immediately name the single question, rewrite.

If 50,000 people watch your hook, all 50,000 should be curious about the same thing. Fragmented curiosity = fragmented attention = churn.

### The three-step hook formula

This is the gold standard structure. Use it as Angle 01 on every card.

**Step 1 — Context lean-in:** First line establishes the topic clearly AND gets the viewer leaning in. Do this by establishing common ground, referencing a benefit or pain point they already have, or saying something surprising. They self-select in or out here.

**Step 2 — Scroll stop interjection:** A single line that stuns. Uses a contrasting word: "But," "But here's the thing," "But it turns out," "But here's what's interesting." This is the setup. It stops momentum and signals that a reversal is coming.

**Step 3 — Contrarian snapback:** Goes in the opposite direction of the initial lean. Still on-topic but snaps the viewer to a different path. The bigger the shock, the better the snap. This is the haymaker that plants the question.

Example:
> "The tech in the Vegas Sphere is insane. Biggest screen ever built, 20 times bigger than an IMAX." (context lean)
> "But get this. The screen is actually the least impressive part." (scroll stop)
> "Because the most impressive part is the audio. This is going to blow your mind." (contrarian snapback)

Question planted: how can the audio be more impressive than the biggest screen ever built?

### Hook types

**1. Strong take** — assert a position that forces agreement or argument.
> "You're not lazy. The ceiling is just too low."
> "The financially safe choice is usually the most fragile structure."

**2. Small epiphany** — name something people have felt but never articulated.
> "Sunday night isn't anxiety. It's when the math becomes impossible to avoid."
> "Your nervous system has a cost of living too."

**3. Story starter** — drop the listener into a specific scenario mid-scene.
> "Describe an average Tuesday. Five years from now. Nothing changed."

What a hook is NOT:
- A listicle ("3 reasons why...")
- Generic advice framing ("Here's how to be more productive")
- Motivational statement ("You have what it takes")
- Multiple subjects competing for attention

### Hook sentence structure: staccato

For the hook especially, use short punchy sentences. Shorter sentences force maximum clarity and increase the density of value per word. Go shorter at the top, then expand to medium and longer sentences as the video continues.

Bad: "There are many different approaches people take when thinking about career transitions and the factors that influence them."
Good: "You know you're good here. You don't know if you're good."

Length: ≤12 words for the hook line itself. Two sentences max. Second sentence is a short punch (4-8 words).

### Lead with benefit or pain, not feature

Instead of: "You should understand geographic arbitrage because it's a financial optimization."
Use: "If you want to think more clearly and feel less pressure, there's one variable most people haven't touched."

Always ask: what does the viewer want, or what are they afraid of? Start there.

---

## Expansion mode angle rules

Each expanded card has 3 angles. An angle is a 2-3 sentence direction for HOW to record the video. Each should produce a meaningfully different video.

**Angle 01: Contrarian snapback**
Use the three-step formula. Context lean + scroll stop + snap to opposite direction. Always state the question planted at the end.

Format: "Contrarian snapback: open with '[what seems true].' Stun: '[contrasting line].' Snap: '[the reversal].' Question planted: [the single question]."

**Angle 02: Pain or benefit lead**
Open with what the audience already wants or fears. Lead with the emotional truth before the analytical explanation. The desire or fear pulls them in before you've explained anything.

Format: "Pain lead: '[what they want or fear].' Then explain/reveal."
Or: "Benefit lead: 'If you want [outcome]...' Then show the non-obvious path."

**Angle 03: Staccato take, story, or observation**
Either: deliver the core argument in short declarative sentences and let it land. Or: tell a specific story with concrete details. Or: open with a relatable observation that creates instant kinship.

Format: "Staccato: '[short punchy assertion. Another. Another.]'" or "Story: tell the story of..." or "Observation: 'Notice how...'"

For staccato: think about the visual direction too. What to show in the first 2 seconds.

---

## Three-hook alignment

Every video has three hook components that must say the same thing:
- **Spoken hook:** what you say verbally
- **Visual hook:** what appears on screen
- **Text hook:** 3-5 bold words displayed on screen

If any two of the three say different things, viewers get confused. Confusion causes churn. Always audit: do all three hook components mean the same thing?

When writing angles, note the visual direction so the creator can align all three.

---

## What content actually works (from source transcripts)

**Source: "The Art of Yapping" (May 2025)**

Formats that consistently perform:
- **Strong take**: assert a position. Force disagreement or agreement.
- **Strong take into education**: the take is just the hook. Pivot immediately to teaching something real.
- **Small epiphany**: relatable daily observations people hadn't named. Creates kinship.
- **Story time**: narrative arc, something that actually happened.

What doesn't work:
- "My top 3 favorite X" — listicles
- "3 ways to do Y" — generic how-to
- Motivational speech format
- Anything without a narrative arc or strong opinion

**Source: "Four Hook Mistakes" (May 2025)**

The four hook mistakes:
1. No single subject, no single question — too vague, too many curiosity paths
2. Three-hook misalignment — spoken, visual, and text say different things
3. Visuals don't scroll-stop — not visually differentiated enough to make the viewer lift their thumb
4. Not studying proven data — writing new hooks from scratch every time instead of templating from what worked

**Source: "Six Tips for Hooks" (May 2025)**

Key principles:
- The three-step formula is the gold standard for hook construction
- Visual hooks are 100x more powerful than spoken alone. Always use title text on screen.
- Speed to value: frontload the best stuff. Short form has a 4-second window before churn.
- Cult hopping: wrap unknown ideas in known references (celebrities, brands, cultural touchpoints). Creates comfort and common ground subconsciously.
- Staccato sentences in the hook increase density of value per word.

The underlying principle from all sources: **people stay for narrative arcs and strong opinions.** Everything else is filler.

---

## Voice DNA rules (always apply)

From: `~/.claude/reference/voice-dna-v1.md`

**Archetype**: The Analyst. Diagnostic, not motivational. Translate the mechanism. Don't cheerlead.

**Cadence**: High variance. Long explanatory sentences (20-30 words) followed by short declarative punches (4-8 words). Short always follows long.

**Order**: Negative diagnosis first, then direction. End with a hook or open question, never a summary.

**Banned vocabulary**: grind, level up, game changer, disrupt, unlock, manifest, abundance, mindset shift, high-value, alpha, sigma, bro.

**AI tells to suppress**: delve, navigate, testament to, in the realm of, a tapestry of, it's worth noting, at its core, the landscape of, underscores, multifaceted, robust, holistic, leverage, pivotal, foster, harness, embark, unpack, "in today's fast-paced world."

**Never use**: em dashes, semicolons, three-part balanced conclusions, neat summative paragraphs, uniform paragraph lengths, pushy/sales language, specific outcome promises.

**Convert**: "I think" / "I believe" to direct assertion or "The truth is."

---

## Anti-slop checklist

Before finalizing any card, scan against these patterns:

- [ ] No em dashes anywhere in hook or angles
- [ ] Hook passes the single subject test (no ambiguity about what the video is about)
- [ ] Hook passes the single question test (one clear, shock-inducing question is planted)
- [ ] Hook uses staccato structure (short sentences, high density)
- [ ] Raw-input mode: `raw` preserves the user's exact wording
- [ ] Raw-input mode: angle 1 is exactly `Raw idea: ${raw}`
- [ ] Raw-input mode: Keep and Add on notes protect the original, not replace it
- [ ] Expansion mode: Angle 01 uses the three-step formula and states the question planted
- [ ] Expansion mode: Angle 02 leads with pain or benefit, not feature
- [ ] Expansion mode: Angle 03 gives a concrete staccato, story, or observation direction
- [ ] Angles include a visual direction hint where relevant
- [ ] Angles do NOT repeat the same approach with different words
- [ ] Each angle would produce a meaningfully different video
- [ ] No banned vocabulary
- [ ] No AI tells
- [ ] No "here's how to" framing in hooks
- [ ] No three-part balanced conclusions
- [ ] Close field present and resolves the hook's curiosity loop (not a summary)
- [ ] Close is ≤20 words, one clean sentence

---

## Prompt template for future batch generation

```
You are generating idea cards for a short-form video content library.

Apply every rule in this guide exactly. No exceptions.

ENERGY: Life design, permission-giving, expansive, curious. Not trapped.
The creator left Germany at 19, worked construction in NZ, studied biology, burned out, walked the Camino, lived Berlin and Bangkok, builds a one-person business. The voice: "what if most of what's stopping you was never actually there?" and "you do not need permission to begin."
Wrong energy: corporate-trapped anxiety, hustle culture critique, generic motivational arcs.

HOOK RULES:
- ≤12 words. Two sentences max. Second sentence is a short punch.
- Must pass: single subject test (unmistakably clear topic) and single question test (one shock-inducing question planted).
- Use staccato structure. Short punchy sentences.
- Type: strong take, small epiphany, or story starter.

ANGLE RULES:
- Angle 01: contrarian snapback. Use the three-step formula: context lean + scroll stop ("but...") + snap to opposite. State the question planted.
- Angle 02: pain or benefit lead. Open with what they want or fear. Then reveal.
- Angle 03: staccato take, specific story, or relatable observation. Include visual direction hint.
- No em dashes anywhere. Each angle produces a different video.

CLOSE FIELD:
- 1-sentence payoff that resolves the curiosity loop opened by the hook.
- Only earned at the end of the video. Not a summary. A revelation or reframe.
- ≤20 words.

VOICE: Analyst archetype. Diagnostic, not motivational. Negative diagnosis before positive direction. High-variance cadence. No banned vocabulary. No AI tells.

SOURCE MATERIAL: [PASTE TRANSCRIPT OR RESEARCH]

CATEGORY: [time | identity | system | money | fear | design | creativity | environment]

Generate [N] cards. Output as JSON array only. Include "close" field on each card.
```
