<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Default Workflow

This app is an idea library called Clouds. The default task is adding new
idea cards to `data/ideas.json` using the existing card logic.

When the user gives raw ideas, quotes, notes, fragments, or inspiration, treat
the request as: "Add new idea cards to `data/ideas.json`."

The raw idea is sacred. Preserve the user's wording, punctuation, casing, typos,
rhythm, and emotional temperature in the card's `raw` field. The card may add
light structure around the idea, but it must never rewrite the idea into generic
motivational language or replace the user's original phrasing with a polished
summary.

Always:

1. Read `.claude/reference/idea-extraction-guide.md` before writing cards.
2. Convert each raw idea into one complete idea card while preserving the
   original text in `raw`.
3. Append new cards to `data/ideas.json` with the next three-digit ID.
4. Use the existing schema from `types/idea.ts`.
5. Use only existing categories.
6. Set every new card to `"status": "unused"`.
7. Run `npm run validate:ideas` before finishing.
8. Do not change UI, components, dependencies, styling, or app logic unless the user explicitly asks.

The idea card source of truth is `data/ideas.json`. The app renders from that
file. Do not create alternate idea files, draft folders, generated component
experiments, or local worktrees for this workflow.
