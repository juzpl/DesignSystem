---
"@juz/design-system": major
---

Migrate to Tailwind CSS v4 (breaking).

**Breaking changes for consumers**

- Tailwind CSS peer is now **v4.x** (was v3.x). Consumer apps must upgrade
  in lockstep — Tailwind v3 will no longer pick up the design system's
  source styles, and the precompiled `dist/styles.css` is emitted by v4.
- The package no longer exports `./tailwind.config` (the file is gone).
  Theme tokens (`--color-primary`, `--color-background`, `--radius-*`, …)
  now live as `@theme` in `dist/styles.css`. If you were extending the
  shared config, switch to importing the stylesheet and overriding tokens
  via `@theme { … }` in your own CSS.
- Underlying utility renames bundled by the v4 codemod:
  `outline-none` → `outline-hidden`, `shadow-sm` → `shadow-xs`, etc.
  Consumers who copied source classes onto wrapper elements may need
  the same renames — run `npx @tailwindcss/upgrade` on your app.

**Non-breaking improvements**

- `Calendar`: the selected day now fills the button with the primary
  color and white text instead of just an outline ring (fixes a v3
  styling bug where the selected modifier landed on the `<td>` and was
  visually masked by the inner ghost button).
- `--background` token fixed: was authored as invalid HSL `252 252 255`
  which different browsers parsed differently (yellow in headless,
  near-white in real Chrome). Now `240 100% 99%` — the near-white the
  author intended — so behaviour is consistent everywhere.
- v3 semantics for `space-y-*` / `space-x-*` restored via a small CSS
  shim, because v4 moved the margin to the *first* child where it is
  silently ignored on inline elements (`<b>`, `<span>`), shrinking form
  layouts that pair an inline label with a block input.
- Explicit `leading-*` paired with every arbitrary `text-[Npx]`, since
  v4 no longer inherits the parent line-height for arbitrary font sizes.
- New `CardFooter` primitive.
