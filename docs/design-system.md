# Design system

Visual language of the portfolio: tokens, contrast, typography, patterns and motion. Source of truth: [`src/app/globals.css`](../src/app/globals.css).

Tailwind only scans `src/` for class names (`@import "tailwindcss" source("..")`), so classes mentioned in the docs don't end up in the CSS.

## Principles

- **Dark-first.** Dark is the default theme and light is an override. Every token needs a value in both.
- **One accent.** Orange `#fe6526` marks CTAs, active states, hover borders and focus. Use it sparingly.
- **Tokens, not values.** Components use semantic utilities (`bg-surface`, `text-muted`). No hex, `rgb()` or Tailwind palette colors (`bg-zinc-900`); the only exception is `text-black` on accent backgrounds (see [Contrast](#contrast)).
- **pt-BR copy.** All visible text and `aria-*` labels are in Brazilian Portuguese.

## Color tokens

CSS variables are defined on `:root` (dark) and `html.light` (light), then exposed to Tailwind through `@theme inline`.

| Tailwind color | CSS variable | Dark | Light | Use for |
|---|---|---|---|---|
| `background` | `--bg-base` | `#080808` | `#f6f6f3` | Page background |
| `surface` | `--bg-surface` | `#101010` | `#d1d1d1` | Cards, tiles, toggles |
| `elevated` | `--bg-elevated` | `#1a1a1a` | `#bdbdbd` | Hover states, modals, tile borders |
| `foreground` | `--text-primary` | `#f2f2ee` | `#151513` | Headings and body text |
| `muted` | `--text-secondary` | `#696969` | `#5f5f5a` | Secondary text and labels |
| `accent` | `--accent` | `#fe6526` | `#fe6526` | CTAs, active states, hover borders, focus rings |
| `border` | `--border` | `#222220` | `#d9d9d3` | Dividers and outlines |

- The names work with every color utility: `bg-surface`, `text-muted`, `border-accent`, `ring-accent`, `shadow-accent`, …
- Opacity modifiers work too: `text-foreground/80`, `ring-accent/60`, `shadow-accent/25`.
- `background` and `foreground` go through aliases (`--background` → `--bg-base`, `--foreground` → `--text-primary`).

### Adding or changing a token

1. Define the variable in `:root` **and** in `html[data-theme="light"], html.light` in `globals.css`.
2. Map it in `@theme inline` as `--color-<name>: var(--<variable>);`.
3. Name it by role (`surface`, `muted`), not by value (`gray-900`).
4. Check contrast in both themes and update the tables in this file.

## Contrast

WCAG 2.2 ratios of the current tokens. Level AA requires 4.5:1 for normal text, and 3:1 for large text (≥ 24px, or ≥ 18.66px bold) and for UI components and icons.

| Foreground on background | Dark | Light |
|---|---|---|
| `foreground` on `background` · `surface` · `elevated` | 17.84 · 16.95 · 15.51 ✅ | 16.89 · 11.97 · 9.73 ✅ |
| `muted` on `background` | 3.65 ⚠️ large text only | 5.93 ✅ |
| `muted` on `surface` | 3.47 ⚠️ large text only | 4.20 ⚠️ large text only |
| `accent` on `background` | 6.77 ✅ | 2.73 ❌ |
| `accent` on `surface` | 6.44 ✅ | 1.94 ❌ |
| `background` on `accent` | 6.77 ✅ | 2.73 ❌ |
| `black` on `accent` | 7.10 ✅ | 7.10 ✅ |

Until the tokens are revised:

- Use `text-foreground` (or `text-foreground/80` on `background`) for body copy. Keep `text-muted` for large text or non-essential labels.
- Text on an accent background uses `text-black`, which passes in both themes, instead of `text-background`.
- Accent as a text or icon color fails in the light theme, so don't rely on it alone to convey information.

## Typography

- **Family:** Jura (`next/font/google`, `latin` subset), used for both `font-sans` and `font-mono`.
- **Scale:** Tailwind's default type scale. Current patterns:

| Role | Classes |
|---|---|
| Page title (`h1`) | `text-4xl md:text-5xl font-bold tracking-tighter text-foreground` |
| Lead paragraph | `text-base md:text-lg font-medium text-foreground/80` |
| Small print (footer) | `text-sm font-light tracking-wide` |
| Buttons, labels, tooltips | `text-sm font-medium` |

- One `h1` per page, with heading levels in order.

## Layout and spacing

- Mobile-first, with Tailwind's default spacing scale and breakpoints (`sm` 640px, `md` 768px, `lg` 1024px, …).
- Width: `max-w-2xl` for centered reading blocks, `max-w-5xl` for page containers.
- Page padding: `px-8 py-18` for full-screen pages, `p-8 sm:p-12` for content pages.
- Radius: `rounded-lg` for cards and tiles, `rounded-md` for tooltips, `rounded-full` for pills and toggles.

## Patterns

| Pattern | Classes | Example |
|---|---|---|
| Icon tile | `rounded-lg bg-surface border border-elevated hover:bg-elevated hover:border-accent hover:shadow-lg hover:shadow-accent/25 transition-all duration-300` | Tech and social tiles in `ComingSoon` |
| Tooltip | Absolute `span` with `px-3 py-1 rounded-md bg-accent text-black text-sm font-medium`, shown via `opacity-0 group-hover/<name>:opacity-100` | `ComingSoon` |
| Segmented toggle | Container `inline-flex gap-1 rounded-full border border-border bg-surface p-1`; active `bg-accent text-black`; inactive `text-muted hover:bg-elevated hover:text-foreground`; `aria-pressed` on each button | `ThemeToggle` |
| Focus ring | `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60` on every interactive element | `ThemeToggle` |

- When a tooltip belongs to a focusable element, also show it on keyboard focus (`group-focus-visible/<name>:opacity-100`).

## Icons and images

- **Brand and tech logos:** full-color SVG files in `src/assets/icons/` (`<name>-logo.svg`), listed in `src/content/tech-stack.ts` and rendered with `next/image` and a meaningful `alt`.
- **Monochrome UI icons:** inline SVG components in `src/components/ui/icons.tsx`, with `fill="currentColor"` or a token (`var(--accent)`), so they follow the theme.
- Decorative icons get `aria-hidden="true"`, and icon-only links and buttons need an accessible name (`aria-label` or visible text).

## Motion

- Entrance animations come from `tw-animate-css`: `animate-in fade-in slide-in-from-bottom-4 duration-700`, staggered with `delay-*` or an inline `animationDelay`.
- State changes use `transition-colors`, `transition-opacity` or `transition-transform` with `duration-200` to `duration-300`.
- New entrance animations respect reduced motion: prefix them with `motion-safe:` or add `motion-reduce:animate-none`.
- Theme switches don't animate (`disableTransitionOnChange`).

## Review checklist

- [ ] Only tokens; no hard-coded colors.
- [ ] Checked in light and dark themes, at mobile (375px) and desktop widths.
- [ ] Text pairs meet the contrast rules above.
- [ ] Interactive elements have a visible focus ring and an accessible name.
- [ ] Copy and `aria-*` labels in pt-BR.

## Known issues

Current code that doesn't follow this document yet. Remove items as they are fixed.

- The `ComingSoon` footer uses `text-muted` at `text-sm` (3.65:1 in dark).
- The `ComingSoon` tooltips use `bg-accent text-background` (2.73:1 in light), and accent icons and text fail contrast in light.
- Entrance animations don't respect `prefers-reduced-motion`.
- Social link tooltips appear on hover only, not on keyboard focus.
