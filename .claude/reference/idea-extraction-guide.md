# Idea Extraction Guide

Use this whenever generating or rewriting idea cards for Clouds.
Apply every rule below before writing a single word.

---

## Card structure

```json
{
  "id": "NNN",
  "hook": "The opening line. ≤12 words.",
  "angles": [
    "Angle 01: story/narrative approach",
    "Angle 02: strong take or eight mile (preempt + flip)",
    "Angle 03: small epiphany or confession"
  ],
  "category": "time | identity | system | money | fear | design | creativity | environment",
  "status": "unused"
}
```

---

## Hook rules

A hook is the first sentence you say on camera. It must do one of three things:

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
- A question that doesn't force discomfort or self-examination

Length: ≤12 words. If it runs long, cut. If it has two sentences, the second one should be a short punch (4-8 words).

---

## Angle rules

Each card has 3 angles. An angle is a 1-3 sentence direction for HOW to record the video. Not a script. A concrete starting point for one specific approach.

**Angle 01: Story/narrative**
Open with a personal story, a specific scenario, or a concrete scene. The listener gets pulled in by a specific event, not an abstraction.

Format cues: "Tell the story of...", "Start with the moment...", "Walk through..."

**Angle 02: Strong take / Eight mile**
Take a hard position and defend it. OR: name the obvious counter-argument first, flip it, then make your point. The eight mile approach (naming the objection upfront) keeps people watching because they're thinking the counter-argument and you're already answering it.

Format cues: "Hard take:", "Take:", "Start with the strong position and defend it:"

**Angle 03: Small epiphany / Confession**
Open with a relatable observation ("notice how...") or a personal admission that mirrors what the audience is quietly thinking. Creates kinship. People feel seen before they feel taught.

Format cues: "Open with the observation:", "Open with the honest admission:", "Open with the confession:"

---

## What content actually works (from source transcripts)

Source: "The Art of Yapping" (May 2025)

Content formats that consistently perform:
- **Strong take**: assert something is the best, worst, most underrated. Force a position. People respond.
- **Strong take into education**: the take is just the hook. Immediately pivot to teaching something real.
- **Small epiphany**: relatable daily observations people hadn't named. "Do you notice how husbands always do X?" Builds camaraderie.
- **Story time**: narrative arc, something that actually happened. "I just got rear-ended at X..."

What doesn't work:
- "My top 3 favorite X" — listicles
- "3 ways to do Y" — generic how-to
- Motivational speech format
- Anything without a narrative arc or strong opinion

The underlying principle: **people stay for narrative arcs and strong opinions.** Everything else is filler.

The yap map (idea sourcing):
- Touch points of the day: what happened at work, in conversations, at meals
- Questions you had to explain to someone that week
- Interpersonal observations from personal life
- Media reactions: what you disagreed with, what surprised you
- Shower/workout background thoughts — the things that surface when you're off your phone

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
- [ ] Hook is a strong take, small epiphany, or story starter. Not generic advice.
- [ ] Angles are concrete recording directions, not abstract descriptions of the theme
- [ ] No banned vocabulary
- [ ] No AI tells
- [ ] No three-part balanced conclusions in angles
- [ ] No "here's how to" framing in hooks
- [ ] Angles do NOT repeat the same approach with different words
- [ ] Each angle would produce a meaningfully different video

---

## Prompt template for future batch generation

```
You are generating idea cards for a short-form video content library.

Apply every rule in this document exactly. No exceptions.

For each idea:
- Hook: ≤12 words. Strong take, small epiphany, or story starter.
- Angle 01: story/narrative direction (1-3 sentences, concrete, no em dashes)
- Angle 02: strong take or eight mile direction (1-3 sentences)
- Angle 03: small epiphany or confession direction (1-3 sentences)

Voice: Analyst archetype. Diagnostic, not motivational. Negative diagnosis before positive direction.
Cadence: Long explanatory sentence followed by short punch. Never uniform.
No banned vocabulary. No AI tells. No em dashes anywhere.

Source material: [PASTE TRANSCRIPT OR RESEARCH]

Category: [time | identity | system | money | fear | design | creativity | environment]

Generate [N] cards. Output as JSON array only.
```
