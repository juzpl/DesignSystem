---
"@juz/design-system": minor
---

Add a dark theme for every design token.

What ships:

- `globals.css` declares a `:root.dark { … }` block that overrides every semantic token (`--background`, `--foreground`, `--card`, `--popover`, `--primary`, `--primary-soft`, `--success{,-soft}`, `--warning{,-soft}`, `--destructive{,-soft}`, `--info{,-soft}`, `--muted{,-foreground}`, `--border`, `--input`, `--ring`) plus the `--shadow-juz*` triplet (which uses higher-opacity black on dark backgrounds so elevation reads).
- `color-scheme: dark` flips browser-supplied chrome (form widgets, scrollbars) so they stop sitting white-on-dark.
- The Storybook UI gains a theme toggle in the toolbar (`@storybook/addon-themes` + `withThemeByClassName` decorator on `<html>`) so every story can be inspected in either mode.
- Internal: the visual regression suite captures `<story>.light.png` and `<story>.dark.png` on every run, doubling baseline coverage to catch dark-only regressions.

Consumers opt in by adding the `dark` class to their `<html>` element (typically via `next-themes` or an equivalent). No existing consumer-facing API changes.
