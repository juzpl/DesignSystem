---
"@juz/design-system": patch
---

Add two onboarding-focused documentation deliverables. `CONTRIBUTING.md` (root, Polish) covers setup with Playwright, branch and commit conventions, how to add a new component (atom/molecule/layout), the cva pattern, local test commands, the visual regression rebaseline flow (pull CI `visual-diff` artifact instead of recomputing PNGs locally), changesets policy (patch/minor/major), dark-mode token rules and a11y scoping. New Storybook page `Introduction / Components map` (at `src/stories/Components.Map.mdx`) renders a flat table of every shipped component with category, source path and link to its `?path=/docs/...` route — generated from `src/index.ts` and re-runnable via `node scripts/regen-component-map.mjs`.
