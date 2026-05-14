<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Default Workflow

This app is an idea library called Clouds. The default task is adding new
idea cards to `data/ideas.json` using the existing card logic.

When the user gives ideas, quotes, notes, fragments, transcripts, or inspiration,
do not guess the transformation mode. Use the command prefix:

- `/raw`: preserve the material exactly and add only categorization,
  presentation notes, and a separate Big Idea analysis field.
- `/structure`: extract the strongest ideas from comprehensive material using
  the local Big Idea and Voice DNA rules, then create content cards.

The raw idea is sacred. Preserve the user's wording, punctuation, casing, typos,
rhythm, and emotional temperature in the card's `raw` field. Analysis may sit
under the raw text, but it must never replace it.

Voice DNA is local to this repo at `.claude/reference/voice-dna-v1.md`. Read it
before creating or rewriting cards. Treat it as a hard rule set, with this
project override: generated insight language must use conviction and simple
words. Do not use vague qualifiers such as "maybe", "might", "may", "could be",
"kind of", "sort of", or "one way to think about it" unless they appear inside
the preserved raw/source text.

Always:

1. Read `.claude/reference/idea-extraction-guide.md` before writing cards.
2. Read `.claude/reference/voice-dna-v1.md` before writing any generated
   insight, hook, presentation, or structure field.
3. Use `/raw` or `/structure` logic exactly.
4. Preserve source material in `raw` or `source`.
5. Append new cards to `data/ideas.json` with the next three-digit ID.
6. Use the existing schema from `types/idea.ts`.
7. Use only existing categories.
8. Set every new card to `"status": "unused"`.
9. Run `npm run validate:ideas` before finishing.
10. Do not change UI, components, dependencies, styling, or app logic unless the user explicitly asks.

The idea card source of truth is `data/ideas.json`. The app renders from that
file. Do not create alternate idea files, draft folders, generated component
experiments, or local worktrees for this workflow.
