# Conventional Commits

Every commit follows [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) and is written in English.

## Format

```text
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

## Header

- **Type** (required): lowercase, from the table below.
- **Scope** (optional): the area touched, in lowercase kebab-case inside parentheses. Omit it when the change is cross-cutting.
- **Description** (required): imperative mood ("add", not "added" or "adds"), lowercase first letter (proper nouns keep their casing: Next.js, React), no trailing period.
- **Length:** objective but descriptive enough to tell what changed and where. Aim for 50–72 characters, never more than 100.
- **Breaking changes:** add `!` before the colon (`feat(theme)!: …`) and a `BREAKING CHANGE:` footer.

| Type | Use for |
|---|---|
| `feat` | A new user-facing feature |
| `fix` | A bug fix, including visual and accessibility bugs |
| `refactor` | A code change with no behavior change |
| `perf` | A performance improvement |
| `style` | Formatting only (whitespace, quotes, semicolons), not CSS or visual changes |
| `docs` | Documentation only |
| `test` | Adding or fixing tests |
| `build` | Build system, engines, Next.js, PostCSS or TypeScript configuration |
| `ci` | CI configuration |
| `chore` | Maintenance: dependencies (`chore(deps)`), tooling, housekeeping |
| `revert` | Reverting a previous commit |

Common scopes (not exhaustive): a section name (`hero`, `projects`, `contact`), `coming-soon`, `site-header`, `theme`, `content`, `ui`, `deps`, `agents`, `readme`.

## Body

Add a body when the header alone doesn't explain why, or when the change has several parts.

- Separate it from the header with a blank line.
- Write bullet points (`- `) separated by blank lines, one change or reason per bullet.
- Explain what and why rather than how, and cite the versions, advisories or rules that motivated the change.

## Footer

Only when needed, in [git trailer](https://git-scm.com/docs/git-interpret-trailers) format:

- `BREAKING CHANGE: <what breaks and how to migrate>`
- `Refs: #12` or `Closes #12`

Never add AI agent attribution (`Co-Authored-By: <agent>`, "Generated with …"). Human co-authors are fine.

## Atomic commits

- One logical change per commit. Split unrelated changes even when they were made together.
- Every commit passes `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm format:check` and `pnpm build`, so history stays bisectable. Order commits so prerequisites land first.
- Commit `package.json` and `pnpm-lock.yaml` together, in the commit that needs the change.
- Never commit `.env.local`, build output (`.next/`) or editor files.

## Branches

- Name: `<type>/<short-description>` in English and lowercase kebab-case, with the same types as commits: `feat/coming-soon`, `chore/upgrade-dependencies`, `docs/project-standards`.
- Branch from an up-to-date `main` and merge through a pull request ([pull-requests.md](pull-requests.md)). Don't commit directly to `main`.

## Examples

```text
feat: implement Coming Soon feature flag
fix(theme): set default theme
refactor(theme): replace mounted effect with useSyncExternalStore in ThemeToggle
build: raise minimum Node.js engine version to 20.9.0
chore(deps): upgrade Next.js to 16.4.2 and React to 19.3.1
```

With a body:

```text
fix(coming-soon): replace undefined color utilities with theme tokens

- Swap text-primary for text-foreground on the page title

- Swap text-muted-foreground for text-muted on the footer text

- Neither class existed in the @theme config, so no color was applied
```

Avoid: `update files`, `fix bug`, `wip`, `feat: Added new Component.`

## For AI agents

- Commit only when the user asks. Never push, amend or force-push without explicit approval.
- Pass multi-line messages with `git commit -F <file>` or a heredoc.
