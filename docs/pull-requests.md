# Pull requests

How to open a pull request in this repository, including the [description template](#template).

## Before opening

- [ ] The branch follows `<type>/<short-description>` and is based on an up-to-date `main`.
- [ ] Commits follow [conventional-commits.md](conventional-commits.md), are atomic, and each one passes the quality gates.
- [ ] `pnpm lint`, `pnpm exec tsc --noEmit`, `pnpm format:check` and `pnpm build` pass.
- [ ] UI changes are checked in light and dark themes, at mobile and desktop widths.
- [ ] The diff has no `.env.local`, secrets or unrelated files (`git diff --stat main...HEAD`).

## Title

Conventional Commits format, in English: `<type>(<scope>): <description>`.

- **Single-commit PR:** reuse the commit header.
- **Multi-commit PR:** summarize the whole change under the dominant type, e.g. `chore(deps): upgrade Next.js to 16.4.2 and React to 19.3.1 with related fixes`.

## Description

Copy the [template](#template) and fill it in, section by section:

| Section            | Content                                                                |
| ------------------ | ---------------------------------------------------------------------- |
| Summary            | 1–3 sentences: what the PR does and why.                               |
| Type of change     | Check every type present in the commits, and nothing else.             |
| Changes            | One bullet per meaningful change, with a bold lead-in (`**Area:** …`). |
| Context            | Motivation: issue, advisory, decision. Remove it if obvious.           |
| How to test        | Commands, plus manual steps with the expected result.                  |
| Checklist          | Check only what was actually done; explain unchecked items inline.     |
| Risks and rollback | What could break, who is affected, how to revert.                      |
| Out of scope       | Follow-ups intentionally left out. Remove it if there are none.        |

Write in English with short sentences, link files and advisories, and add no AI agent attribution lines.

## Opening

```bash
git push -u origin <branch>
gh pr create --base main --head <branch> \
  --title "<type>(<scope>): <description>" \
  --body-file <filled-template.md>
```

Add `--draft` while the work is in progress.

## For AI agents

1. Open a PR only when the user asks.
2. Show the filled title and description for validation first, unless the user asked to open it directly.
3. Write the description to a temporary file and pass it with `--body-file`; don't inline long bodies in the command.
4. After opening, report the PR URL and confirm the commits and changed files (`gh pr view <number> --json commits,files`).

## Review and merge

- Address review comments with new commits; don't rewrite pushed history unless asked.
- PRs are merged into `main` with a merge commit, which keeps each Conventional Commit in the history.

## Template

````markdown
## Summary

<!-- 1–3 sentences: what this PR does and why. -->

## Type of change

- [ ] feat: new feature
- [ ] fix: bug fix
- [ ] refactor: code change with no behavior change
- [ ] chore / build / ci: tooling, dependencies, configuration
- [ ] docs / style / test
- [ ] Breaking change

## Changes

<!-- One bullet per meaningful change. Link files when helpful. -->

-

## Context

<!-- Why this was needed: issue, advisory, bug report, decision. Remove if obvious. -->

## How to test

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm exec tsc --noEmit
pnpm format:check
pnpm build
```

<!-- Add manual steps: page, flag value, expected result. -->

## Checklist

- [ ] Lint, type check, format check and build pass locally
- [ ] Commits follow Conventional Commits and are atomic
- [ ] No secrets or `.env.local` values committed
- [ ] Visual changes checked in light and dark themes
- [ ] Docs / `.env.example` updated if needed

## Risks and rollback

<!-- What could break, who/what is affected, how to revert. "Low risk, revert the PR" is fine. -->

## Out of scope

<!-- Known issues or follow-ups intentionally left for later. Remove if none. -->
````
