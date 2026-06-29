# CostDog Website — Design TODOs

Tracked from `/plan-design-review` on 2026-06-26.

## Critical

### ~~Fix Button `asChild` to use Radix Slot~~ ✅
- Done: Already uses `@radix-ui/react-slot` Slot component

### ~~Restructure feature grid from 3-column cards to alternating sections~~ ✅
- Done: Top 3 features as alternating full-width spotlight sections with terminal mockups, remaining 6 in compact grid

## High

### ~~Create DESIGN.md with design system documentation~~ ✅
- Done: DESIGN.md created with color tokens, typography, spacing, component vocabulary, patterns, and anti-patterns

### Create SVG logo to replace emoji
- **What:** Design an SVG dog logo mark for navbar and footer. Keep emoji as fallback.
- **Why:** The 🐕 emoji renders differently on every OS. Brand identity is uncontrollable.
- **Pros:** Consistent brand across all platforms, scalable, animatable
- **Cons:** Requires design work
- **Context:** `components/layout/navbar.tsx` line 19, `footer.tsx` line 35

### ~~Optimize Framer Motion bundle~~ ✅
- Done: framer-motion completely removed. All animations use CSS transitions + IntersectionObserver via FadeIn component.

## Medium

### ~~Add visual rhythm to homepage sections~~ ✅
- Done: Feature grid now uses alternating full-width spotlight sections (text + terminal mockup) breaking the uniform grid pattern. WhyCostDog uses distinct light/dark backgrounds. Problem/solution components were removed as dead code.

### ~~Simplify pricing preview on homepage~~ ✅
- Done: Shows 3 features per plan + "N more" link. Full comparison on /pricing page.

### ~~Create "Coming Soon" placeholder pages for dead nav links~~ ✅
- Done: All pages already have real content (docs, blog, changelog, open-source)

### ~~Reframe "How It Works" steps as user actions~~ ✅
- Done: Step 2 changed from "It Scans Automatically" to "Open CostDog"

### ~~Add focus trap to mobile menu~~ ✅
- Done: Focus trap with Tab/Shift+Tab cycling, Escape to close, role="dialog", aria-modal, auto-focus first link

## Low

### ~~Document DashboardPreview as static illustration~~ ✅
- Done: Added JSDoc header noting hardcoded colors and dark-only behavior
