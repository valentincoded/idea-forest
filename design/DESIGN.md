# Clouds Design Reference
> Ideas in the sky

Clouds should feel like a bright sky library: open, airy, calm enough to think in, playful enough to keep browsing, and precise enough that every idea card feels usable.

## Source Blend

Use General Intelligence Company as the primary reference: bright blue sky, white cloud atmosphere, restrained typography, frosted navigation, subtle elevation, off-white cards, and controlled blue accents.

Use the other references only as supporting notes:

- Mercury: spacious atmospheric canvas and calm browsing rhythm.
- Sociotype: typographic precision and disciplined spacing.
- dope.security: celestial atmosphere and frosted glass restraint.
- Air: expansive sky canvas and memorable identity treatment, but do not import its heavy dark typography wholesale.

## Design Principles

1. The page is the sky. Use a bright blue base, soft white cloud washes, subtle texture, and slow movement.
2. The card is a floating thought. It should be structured, readable, and lightly playful.
3. Controls should feel like navigation instruments, not dashboard chrome.
4. Use one bright accent at a time. The background carries the mood. The accent carries interaction.
5. Keep the idea content first. Ornament should frame the thought, never compete with it.
6. Preserve the pixel-art identity details. The Clouds wordmark should feel playful and digital, not corporate-bold.

## Tokens

Tokens live in `design/tokens.css` and are imported by `app/globals.css`.

Primary surfaces:

- `--cloud-night`: deepest blue used only for text contrast and subtle depth.
- `--cloud-sky`: controlled blue accent, based on Cofounder Blue.
- `--cloud-card`: translucent card surface.
- `--cloud-paper`: warm text surface.
- `--cloud-ink`: primary card text.
- `--cloud-accent`: vivid blue action color.
- `--cloud-violet`: playful category accent.

## Components

### Sky Background

Full-screen layered background with blue-sky color, moving white cloud gradients, subtle pixel-cloud accents, grain, and slow drift. This must be CSS-only so local and deployed builds match.

### Header

Compact floating header. Use a soft glass surface, small wordmark, and a minimal add action.

### Category Rail

Horizontal pill rail. Active state should feel selected without getting loud.

### Idea Card

Large floating card with clear zones:

1. Metadata row: category, card count, status.
2. Hook: largest text, editorial.
3. Angles: three numbered thought paths in separate soft rows.
4. Close: small payoff strip.
5. Action row: mark used.

The card can use small decorative sky details, but the text rhythm must stay clean.

Angle text must be structured for mobile scanning. Labels such as `Contrarian snapback`, `Stun`, `Snap`, `Visual`, and `Question planted` should render as small blue subheads instead of disappearing inside a paragraph.
