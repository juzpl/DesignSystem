# Changelog

## 0.3.0

### Minor Changes

- [#36](https://github.com/juzpl/DesignSystem/pull/36) [`19d15d8`](https://github.com/juzpl/DesignSystem/commit/19d15d810c9cd45145979ed3282399195a5fe8a2) Thanks [@juzpl](https://github.com/juzpl)! - Table: nowy opcjonalny prop `wrapperClassName` na zewnętrznym kontenerze `<div>` (gdzie `Table` trzyma scroll/border/shadow/radius). Pozwala wyłączyć wewnętrzną ramkę, gdy `Table` siedzi już w `Card` (typowy efekt „tabela w tabeli" z podwójną kreską). Domyślne wartości bez zmian — backward compatible.

### Patch Changes

- [#36](https://github.com/juzpl/DesignSystem/pull/36) [`19d15d8`](https://github.com/juzpl/DesignSystem/commit/19d15d810c9cd45145979ed3282399195a5fe8a2) Thanks [@juzpl](https://github.com/juzpl)! - NativeSelect: dodane `bg-none`, żeby wyłączyć globalną regułę `select:not([multiple]) { background-image: ... }` z `globals.css` — komponent renderował dwie strzałki naraz (Lucide `ChevronDown` + SVG z CSS). Teraz pozostaje tylko themowana ikona Lucide.

- [#36](https://github.com/juzpl/DesignSystem/pull/36) [`19d15d8`](https://github.com/juzpl/DesignSystem/commit/19d15d810c9cd45145979ed3282399195a5fe8a2) Thanks [@juzpl](https://github.com/juzpl)! - NewClient: górny pasek (Wróć / ikona / tytuł / Anuluj / Zapisz firmę) wyrównany do góry (`items-start`) — wszystkie elementy na wysokości linii „Nowa firma", zgodnie z wzorcem `DetailHeader` z ekranu PZDocument. Dotyczy obu wariantów: `joined` (domyślnego) i `split`.

- [#36](https://github.com/juzpl/DesignSystem/pull/36) [`19d15d8`](https://github.com/juzpl/DesignSystem/commit/19d15d810c9cd45145979ed3282399195a5fe8a2) Thanks [@juzpl](https://github.com/juzpl)! - ProductionOrdersList: wyłączona wewnętrzna ramka `Table` (`wrapperClassName="rounded-none border-0 bg-transparent shadow-none"`) — znika efekt „tabela w tabeli", podwójna kreska nad/pod wierszem nagłówka i niedopasowane zaokrąglenia po lewej/prawej.

- [#36](https://github.com/juzpl/DesignSystem/pull/36) [`19d15d8`](https://github.com/juzpl/DesignSystem/commit/19d15d810c9cd45145979ed3282399195a5fe8a2) Thanks [@juzpl](https://github.com/juzpl)! - SortableColumnHeader: tło pod ikonami ↑/↓/filtr ma teraz `rounded-md` zamiast `rounded-full` — bez efektu pigułki w nagłówku tabeli; dotyczy też DataTablePattern.

## 0.2.0

### Minor Changes

- [#34](https://github.com/juzpl/DesignSystem/pull/34) [`3dba4b7`](https://github.com/juzpl/DesignSystem/commit/3dba4b74abbfbc350c654b1486609411a91688eb) Thanks [@juzpl](https://github.com/juzpl)! - NewClient: nowy prop `headerStyle: "joined" | "split"` (domyślnie `"joined"`, bez zmiany API). Wariant `"split"` odpina górny pasek akcji (Wróć / tytuł / Anuluj / Zapisz) — bez tła karty i bez obramowania, karta z zaokrąglonym górnym brzegiem zaczyna się od wiersza meta (Nazwa/NIP/Role/Opiekun/Płatność/KSeF). Dodana story `Screens/Records/NewClient/SplitHeader`.

### Patch Changes

- [#34](https://github.com/juzpl/DesignSystem/pull/34) [`3dba4b7`](https://github.com/juzpl/DesignSystem/commit/3dba4b74abbfbc350c654b1486609411a91688eb) Thanks [@juzpl](https://github.com/juzpl)! - ProfileMenu: hover dla pozycji Profil/Ustawienia ma teraz kanciastą ramkę (rounded-none), a hover „Wyloguj się" zaokrąglony tylko od dołu — zgodnie z dolnym promieniem menu. Między pozycjami profilu dodana przerywana linia separatora.

Wszystkie istotne zmiany w DesignSystem zapisujemy w tym pliku.

Format bazuje na prostym modelu:

- `Added` — nowe komponenty, ekrany, dokumenty i wzorce.
- `Changed` — zmiany wyglądu, API, tokenów albo zachowania.
- `Fixed` — poprawki wizualne, dostępnościowe i interakcyjne.
- `Removed` — usunięte komponenty, warianty albo nazwy.

## [Unreleased]

## [0.1.0]

Pierwsze publiczne wydanie design systemu juz.pl.

### Foundations

- Tokeny kolorów, typografii, spacing i radii w `src/styles/globals.css`.
- Theme dark/light spięty przez `addon-themes`.
- Logo `JuzLogo` / `JuzLogoMark`.

### Atoms (`src/components/ui/`)

Komponenty zgodne z architekturą shadcn/Radix + rozszerzenia juz.pl: Button, Badge, Input, NativeSelect, Checkbox, RadioGroup, Switch, Slider, Tabs, Card, Accordion, AlertDialog, Dialog, Drawer, Sheet, Popover, Tooltip, DropdownMenu, Menubar, ContextMenu, Command, Combobox, Calendar, MiniMonth, DateRangeInput, DateFilter, FilterSelect, SearchableSelect, MultiSelect, ColumnVisibilitySwitch, PageSizeControl, Pagination, Table, TablePrimitive, DataList, Empty, EmptyState, Skeleton, Spinner, Avatar, Breadcrumb, Kbd, Label, Separator, ScrollArea, Toggle, ToggleGroup, Toast, Typography, FieldDisplay, FormField, IconActionButton, IconTile, MetaTile, MetricCard, SummaryTile, AddressCard, AspectRatio, Carousel, BarChart, LineChart, DonutChart, Chart, InputGroup, InputOTP, DecimalInput, PhoneFrame, Upload.

### Molecules (`src/components/ds/`)

ActionButtons, AdvancedFiltersPanel, Autocomplete, BasicMenuItem, CalendarEvent, CalendarEventSection, ChartPrimitives, ClientDetail (referencyjny wzorzec), CollapsibleMenuItem, Combobox, DataList, DataTableMolecules, DataTablePattern, DatePicker, DetailHeader, FieldGrid + Field, FileActions, FormField, Header, InfoSection, JuzLogo, ModeToggle, NewClient (referencyjny wzorzec), Pagination, PrefixInput, ProfileMenu, ProgressLineCard, RecordPageLayout, RecordTabs, SectionNav + SectionNavEntry, SegmentedTabs, SocialCalendar, Stepper, SummaryPanel + SummaryRow, TextEditor, TimeInput, TimePicker, Timeline, WeekWorkstations.

### Organisms / layouts (`src/components/layout/`)

AppLayout, AppSidebar, AppSidebarGroup, AppSidebarItem, DataTable, DocumentLineItems, DocumentParties, DocumentPreview, DocumentSection, DocumentTotals, Navbar (z prop `nav` dla głównej nawigacji), Schedule, Sidebar, TopBar.

### Screens

Auth, rekord firmy (podgląd + dodawanie), zamówienia, magazyn, produkcja (lista / kalendarz / koszty / Gantt / mobile), CRM, admin, content.

### Dev tooling

- CI: TS + lint + build, axe-core a11y na każdym story, size-limit, pixel-diff visual regression na Linux Chromium.
- Storybook 8 z autodocs i `addon-themes`.
- Changesets do wersjonowania (`pnpm changeset` → release workflow tworzy tag + GitHub Release).
