---
"@juz/design-system": patch
---

Resolve non-color-contrast a11y violations surfaced by the axe-core
Storybook test runner.

Rules fixed (52 unique violations across 17 stories, ~104 with the
per-theme double-render):

- **aria-valid-attr-value (24)** — `Tabs` primitive now slugifies the
  `value` prop before passing it to Radix so the generated
  `aria-controls` IDs are valid HTML id tokens. `RecordTabs` and
  `SegmentedTabs` additionally force-mount empty placeholder
  `TabsContent` panels so each trigger's `aria-controls` resolves to a
  real element in the DOM.
- **landmark-unique (18)** — `EnterpriseShell`, `SideModuleShell`,
  `MobileNav` and `MobileProductionNav` now carry `aria-label`s; the
  three mobile phone-frame stories pass a per-frame label so duplicate
  `<nav>` landmarks are distinguishable.
- **scrollable-region-focusable (12)** — `Table` and `TablePrimitive`
  wrappers, the order-table viewport in `ProductionOrdersListPattern`,
  the calendar grids in `ProductionCalendarScreen` and
  `WeekWorkstations` story, and the `ProcessStepper` row are now
  `tabIndex={0}` so keyboard-only users can scroll them.
- **landmark-complementary-is-top-level (8)** — the `NoteRail` sidebar
  in `OrderDetailScreen` is now a `role="group"` `<div>` instead of an
  `<aside>` nested in `<main>`.
- **label (4)** — `ThemePlayground` hex `<Input>`s and the Upload
  dropzone `<input>` now carry `aria-label`s.
- **dlitem (2)** — `<PreviewField>` rows in the orders preview are
  wrapped in a `<dl>` parent.
- **nested-interactive (2)** — `DateFilter`'s clear affordance moved
  from a child `role="button"` to a sibling `<button>` next to the
  date trigger.
- **button-name (2)** — `Combobox` and `Autocomplete` triggers now
  expose `aria-label` (selected label or placeholder) for axe's
  combobox accessible-name check.
- **heading-order (2)** — h3s under the sr-only h1 in
  `MobileOperatorShowcase` are now h2.

Components touched:
`Tabs`, `Table`, `TablePrimitive`, `RecordTabs`, `SegmentedTabs`,
`Autocomplete`, `Combobox`, `DateFilter`, `Upload`, `EnterpriseShell`,
`SideModuleShell`, `ProcessStepper`, `NoteRail`, `MobileNav`,
`MobileProductionNav`, `MobileOperatorShowcase`,
`ProductionCalendarScreen`, `ProductionOrdersListPattern`,
`ThemePlayground` story, `WeekWorkstations` story.
