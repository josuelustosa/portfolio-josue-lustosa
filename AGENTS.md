# AGENTS.md

Instructions for AI coding agents working in this repository. This file is the single source of truth; there are no tool-specific instruction files. Index for humans: [docs/README.md](docs/README.md).

## Project

Personal portfolio of Josué Lustosa, front-end developer. Next.js App Router, React 19 with React Compiler, Tailwind CSS v4 and TypeScript, managed with pnpm and deployed on Vercel. Versions: [package.json](package.json).

## Commands

| Task            | Command                                    |
| --------------- | ------------------------------------------ |
| Install         | `pnpm install --frozen-lockfile`           |
| Dev server      | `pnpm dev` (http://localhost:3000)         |
| Lint            | `pnpm lint`                                |
| Type check      | `pnpm exec tsc --noEmit`                   |
| Format          | `pnpm format` (check: `pnpm format:check`) |
| Build and serve | `pnpm build`, then `pnpm start`            |

There is no test runner yet. A change is done when lint, type check, format check and build pass.

## Rules

- **pnpm only.** Never use npm, yarn or bun, and never edit `pnpm-lock.yaml` by hand.
- **Git:** don't commit, push or open PRs unless the user asks. Commits follow [docs/conventional-commits.md](docs/conventional-commits.md); PRs follow [docs/pull-requests.md](docs/pull-requests.md).
- **No AI attribution** in commits or PRs: no `Co-Authored-By` trailers for agents, no "Generated with" lines.
- **Language:** UI copy and `aria-*` labels in pt-BR; code, comments, commits, PRs and docs in English.
- **Structure:** code lives in `src/`. The page is composed of sections (`src/components/sections/`) that read typed data from `src/content/`; files are kebab-case. See [docs/architecture.md](docs/architecture.md#organization).
- **Components:** Server Components by default. Add `"use client"` only for state, effects, event handlers or browser APIs.
- **React Compiler is on:** no `useMemo`, `useCallback` or `memo` for performance, and no synchronous `setState` inside effects.
- **Theme:** import `useTheme` from `@/components/theme/use-theme`, never from `next-themes` directly.
- **Styling:** Tailwind utilities with design tokens only, never hard-coded colors. See [docs/design-system.md](docs/design-system.md).
- **Environment:** never commit `.env.local`. Document new variables in `.env.example` and [docs/architecture.md](docs/architecture.md#environment-variables). `COMING_SOON_MODE` is read at build time.
- **Dependencies:** follow the [dependency policy](docs/architecture.md#dependency-policy): exact pins, and the peer-range blockers for TypeScript and ESLint majors.
- **Formatting:** Prettier (with Tailwind class sorting) and `.editorconfig` own the style. Run `pnpm format` instead of formatting by hand.
- **Docs:** when a change alters something documented, update the doc in the same change.

## Docs

| Read                                                         | When                                                                                      |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| [docs/architecture.md](docs/architecture.md)                 | Adding sections, components, content, routes or env vars; changing config or dependencies |
| [docs/design-system.md](docs/design-system.md)               | Any UI or styling change                                                                  |
| [docs/conventional-commits.md](docs/conventional-commits.md) | Before committing or creating a branch                                                    |
| [docs/pull-requests.md](docs/pull-requests.md)               | Before opening a pull request                                                             |

<!-- The block below is managed by Next.js: `next dev` rewrites it. Don't edit it by hand. -->

<!-- prettier-ignore-start -->
<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
<!-- prettier-ignore-end -->
