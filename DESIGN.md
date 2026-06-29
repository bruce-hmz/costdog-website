# CostDog Design System

> Single source of truth for design decisions. Updated 2026-06-26.

## Color Tokens

All colors are CSS custom properties defined in `globals.css`. Light/dark values are set via `:root` and `.dark`.

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--background` | `#FFFFFF` | `#09090B` | Page background |
| `--foreground` | `#09090B` | `#FAFAFA` | Primary text |
| `--surface` | `#F9F9FB` | `#18181B` | Card/section backgrounds |
| `--surface-elevated` | `#F4F4F5` | `#27272A` | Hover states, elevated cards |
| `--border` | `#E4E4E7` | `#3F3F46` | All borders |
| `--muted` | `#71717A` | `#71717A` | Secondary text (same in both modes) |

### Brand Colors (not theme-dependent)

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#6C5CE7` | CTAs, links, accents |
| `--primary-hover` | `#7C6EF7` | Button hover state |
| `--secondary` | `#00D2FF` | Gradient endpoints, highlights |
| `--success` | `#00E676` | Checkmarks, success states |
| `--warning` | `#FFB74D` | Warning indicators |
| `--danger` | `#FF5252` | Error states, over-budget |

### Tailwind Usage

```tsx
// Theme-aware (responds to dark mode)
className="bg-background text-foreground"
className="bg-surface border-border"
className="text-muted"

// Brand (consistent in both modes)
className="bg-primary text-white"
className="text-success"
```

## Typography

- **Font stack:** Geist Sans → system-ui → sans-serif (`--font-sans`)
- **Mono:** Geist Mono → monospace (`--font-mono`)
- **No custom type scale** — uses Tailwind defaults (`text-sm`, `text-base`, `text-lg`, etc.)

### Heading Patterns

| Context | Size | Weight |
|---|---|---|
| Page hero h1 | `text-4xl sm:text-5xl` | `font-bold` |
| Section h2 | `text-3xl sm:text-4xl` | `font-semibold` |
| Card h3 | `text-base` or `text-lg` | `font-semibold` |

## Spacing

- **Section padding:** `py-20 sm:py-28` (via `<Section>` component)
- **Container:** `max-w-7xl px-4 sm:px-6 lg:px-8`
- **Card padding:** `p-6` (compact) or `p-8` (pricing cards)
- **Grid gap:** `gap-6` (cards) or `gap-8` (pricing) or `gap-12` (feature spotlight)

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `6px` | Badges, small elements |
| `--radius-md` | `8px` | Buttons (sm size) |
| `--radius-lg` | `12px` | Cards, buttons (md/lg) |
| `--radius-xl` | `16px` | Large cards, modals |

## Component Vocabulary

### Primitives (`components/ui/`)

| Component | Purpose |
|---|---|
| `Button` | Primary CTA. Variants: `primary`, `secondary`, `ghost`. Sizes: `sm`, `md`, `lg`. Supports `asChild` via Radix Slot. |
| `Badge` | Small label. Variants: `primary`, `default`. |
| `Card` | Generic content container with border and padding. |
| `PricingCard` | Specialized card for pricing plans. Props: `name`, `price`, `period`, `features`, `badge`, `highlighted`. |

### Layout (`components/shared/`)

| Component | Purpose |
|---|---|
| `Section` | Full-width section wrapper. Props: `container` (default true). |
| `SectionHeader` | Section title + badge + description. Props: `centered` (default true). |
| `FadeIn` | IntersectionObserver-based scroll reveal. Directions: `up`, `down`, `left`, `right`, `none`. |
| `Glow` | Decorative radial gradient blob for hero sections. |

### Utilities

| Class | Purpose |
|---|---|
| `.gradient-text` | Purple→cyan gradient text for headlines |
| `.grid-bg` | Subtle grid background pattern for hero sections |
| `.glow-purple` | Purple box-shadow glow |
| `.glow-cyan` | Cyan box-shadow glow |
| `.animate-fade-in-up` | CSS keyframe entrance animation |

## Patterns

### Section Layout

Every page section follows this pattern:

```tsx
<Section className="bg-surface">  {/* optional bg */}
  <SectionHeader
    badge="Label"
    title="Main heading"
    description="Supporting text"
  />
  {/* Content grid */}
</Section>
```

### Alternating Feature Sections

The homepage feature grid uses alternating full-width rows (text + visual mockup) with `FadeIn` direction `left`/`right` for visual interest.

### Card Hover States

```tsx
className="transition-all duration-200 hover:border-primary/30 hover:shadow-md"
```

### Button as Link

Always use `asChild` pattern:

```tsx
<Button asChild>
  <Link href="/path">Label</Link>
</Button>
```

## Anti-Patterns to Avoid

- **Hardcoded hex colors in components** — use tokens. Exception: `DashboardPreview` (documented as static mock).
- **`text-white`** — use `text-foreground` (theme-aware) or `text-white` only when the background is always dark (e.g., `bg-primary` buttons).
- **`framer-motion`** — removed. Use CSS transitions + `FadeIn` component.
- **Grid-only layouts** — use alternating sections for important features to break the AI-generated look.
