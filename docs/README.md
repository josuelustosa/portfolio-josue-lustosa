# Documentation

Project standards, written for both humans and AI agents.

| Document | Covers |
|---|---|
| [AGENTS.md](../AGENTS.md) | Entry point for AI agents: commands, rules and a map of these docs |
| [architecture.md](architecture.md) | Stack, folder layout, rendering, environment variables, dependency policy |
| [design-system.md](design-system.md) | Tokens, contrast, typography, patterns, motion |
| [conventional-commits.md](conventional-commits.md) | Commit messages and branch names |
| [pull-requests.md](pull-requests.md) | Opening pull requests, with the description template |

## AI agent setup

`AGENTS.md` is the only instruction file. The repository has no tool-specific files (`CLAUDE.md`, `.cursor/`, `.gemini/`, `.github/copilot-instructions.md`).

| Tool | Reads `AGENTS.md` |
|---|---|
| OpenAI Codex, Cursor, GitHub Copilot (coding agent, code review, VS Code), Windsurf, Devin, Jules, Zed, Warp, Junie and [others](https://agents.md/) | Natively |
| Claude Code | Natively from v2.1.277, as long as there is no `CLAUDE.md` or `CLAUDE.local.md` in the project or a parent directory |
| Gemini CLI | Only if the user adds it to `context.fileName` in `~/.gemini/settings.json` (keep `GEMINI.md` in the list) |

Agents load `AGENTS.md` at the start of a session and open the docs it links to when a task needs them.

## Maintaining

- Change rules in `AGENTS.md` or in `docs/`. Don't add tool-specific instruction files; a `CLAUDE.md` would also stop Claude Code from reading `AGENTS.md`.
- Keep `AGENTS.md` short (commands, rules, links), because it's loaded into every agent session. Details belong in `docs/`.
- The block between `<!-- BEGIN:nextjs-agent-rules -->` and `<!-- END:nextjs-agent-rules -->` in `AGENTS.md` is managed by Next.js: `next dev` rewrites it when run by an agent. Don't edit it, and commit its updates after Next.js upgrades.
- Update the docs in the same pull request as the code change they describe.
