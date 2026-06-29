# CostDog Website — Design TODOs

Tracked from `/plan-design-review` on 2026-06-26.

## Critical

### Fix Button `asChild` to use Radix Slot
- **What:** Replace `span` wrapper with `@radix-ui/react-slot` Slot component
- **Why:** Every CTA on the site has broken semantics — screen readers see a span, not a button
- **Pros:** Fixes a11y for every button, follows shadcn/ui standard pattern
- **Cons:** Requires adding `@radix-ui/react-slot` dependency
- **Context:** `components/ui/button.tsx` line 36

### Restructure feature grid from 3-column cards to alternating sections
- **What:** Replace the 9-card 3×3 grid with full-width alternating rows (like Stripe/Linear)
- **Why:** The 3-column card grid is the #1 most recognizable AI-generated layout pattern
- **Pros:** Breaks the AI slop pattern, gives each feature more breathing room
- **Cons:** Requires rewriting the component, more vertical space
- **Context:** `components/home/feature-grid.tsx`

## High

### Create DESIGN.md with design system documentation
- **What:** Document color tokens, type scale, spacing scale, component vocabulary. Add `--text-secondary` token.
- **Why:** Undocumented design systems decay fast. Dark-mode border bug was invisible without documentation.
- **Pros:** Single source of truth for design decisions, prevents regression
- **Cons:** Requires auditing all tokens
- **Context:** `app/globals.css`, new `DESIGN.md` file

### Create SVG logo to replace emoji
- **What:** Design an SVG dog logo mark for navbar and footer. Keep emoji as fallback.
- **Why:** The 🐕 emoji renders differently on every OS. Brand identity is uncontrollable.
- **Pros:** Consistent brand across all platforms, scalable, animatable
- **Cons:** Requires design work
- **Context:** `components/layout/navbar.tsx` line 19, `footer.tsx` line 35

### Optimize Framer Motion bundle
- **What:** Replace simple fade-in animations with CSS `@keyframes` + IntersectionObserver. Keep framer-motion only for complex sequences.
- **Why:** Every page ships ~30KB gzipped animation JS.
- **Pros:** Faster page loads, lighter bundle
- **Cons:** Requires rewriting animation logic in multiple components
- **Context:** Every `components/home/*.tsx` component

## Medium

### Add visual rhythm to homepage sections
- **What:** Problem section gets inverted/dark treatment. Solution gets breakthrough feel. Differentiate section visual weight.
- **Why:** Every section looks the same — centered header, 3 cards, fade-in. No emotional arc.
- **Pros:** Makes the page feel intentional, not generated
- **Cons:** Requires custom section styling
- **Context:** `components/home/problem.tsx`, `components/home/solution.tsx`

### Simplify pricing preview on homepage
- **What:** Homepage pricing preview should be a compressed teaser (plan name, price, 3 key features, CTA). Pricing page should expand into full comparison.
- **Why:** Currently both are identical — users click Pricing and see what they already saw.
- **Pros:** Better information hierarchy, less redundancy
- **Cons:** Requires differentiating two components
- **Context:** `components/home/pricing-preview.tsx`, `app/pricing/page.tsx`

### Create "Coming Soon" placeholder pages for dead nav links
- **What:** Add placeholder pages for `/docs`, `/blog`, `/changelog`, `/open-source` with "Coming Soon" state
- **Why:** Nav and footer link to 8+ pages that don't exist. Dead links erode trust.
- **Pros:** Professional appearance, no broken navigation
- **Cons:** Requires creating placeholder pages
- **Context:** `app/docs/`, `app/blog/`, `app/changelog/`, `app/open-source/`

### Reframe "How It Works" steps as user actions
- **What:** Change step 2 from "It Scans Automatically" to "Open CostDog" (scan happens as consequence)
- **Why:** "How it works" implies user actions. Passive step breaks the mental model.
- **Pros:** Clearer user journey
- **Cons:** Minor copy change
- **Context:** `lib/constants.ts` STEPS array, `components/home/how-it-works.tsx`

### Add focus trap to mobile menu
- **What:** When mobile menu opens, trap keyboard focus inside. Add `role="dialog"`.
- **Why:** Keyboard focus can escape behind the menu. Screen readers can't navigate properly.
- **Pros:** Proper a11y for mobile navigation
- **Cons:** Requires focus management logic
- **Context:** `components/layout/navbar.tsx` mobile menu section

## Low

### Document DashboardPreview as static illustration
- **What:** Add comment noting DashboardPreview uses hardcoded colors and is a static mock, not a themed component.
- **Why:** If design intent changes, developer needs to know this component doesn't follow the token system.
- **Pros:** Prevents confusion during future refactors
- **Cons:** Documentation only
- **Context:** `components/home/dashboard-preview.tsx`
