---
name: x3-4gl-copilot
description: Comprehensive X3 4GL skill with a self-contained dictionary, syntax guide, project idioms, UI-framework observations, and troubleshooting workflow. Use when Codex needs to explain 4GL constructs, generate or refactor X3 routines, review .src/.tra/.stc files, map help semantics into code, or troubleshoot runtime and authoring issues in X3 4GL projects.
---

# X3 4GL Copilot

Use the skill's own dictionary first. Treat the mined sources as build-time inputs, not as the primary runtime dependency.

## Quick start

- Read [references/4gl-dictionary.md](references/4gl-dictionary.md) first for any symbol, command, type, function, runtime variable, or curated corpus-only construct lookup.
- Read [references/4gl-syntax.md](references/4gl-syntax.md) when the task involves control flow, file structure, declarations, joins, transactions, event layout, or mask behavior.
- Read [references/4gl-patterns.md](references/4gl-patterns.md) when you need realistic but sanitized project idioms derived from field code.
- Read [references/4gl-troubleshooting.md](references/4gl-troubleshooting.md) when debugging, linting, or reviewing suspicious runtime behavior.
- Read [references/4gl-precedence-and-validation.md](references/4gl-precedence-and-validation.md) if you need provenance rules or must judge conflicts between normative semantics and corpus habits.
- Read [references/4gl-refinement-report.md](references/4gl-refinement-report.md) before promoting observed-only constructs into stronger guidance.

## Invocation

- Use `$x3-4gl-copilot` when asking for explanation, generation, review, or troubleshooting.
- Ask for the artifact and goal explicitly, such as a routine, action block, transaction flow, join, or screen event.
- If the input contains client-specific names, preserve them only when the user provided them in the task.

## Working rules

- Prefer the dictionary's normalized entry over ad hoc guesses.
- Keep generated code explicit: visible aliases, visible transaction outcome, visible `fstat` checks, visible labels.
- Avoid client-specific names and table abbreviations unless the user supplied them.
- When the corpus suggests a habit that lacks normative support, say so explicitly instead of presenting it as a rule.
- When reviewing code, prioritize bugs, hidden state, missing file guards, broken action routing, mask-state confusion, and transaction safety.

## Generation defaults

- Use small examples with clear labels and comments only where structure would otherwise be ambiguous.
- Prefer patterns aligned with `$ACTION`, `Subprog`, `Funprog`, `Local File`, `Link`, `Filter`, `Trbegin`, and explicit screen-event wiring.
- Show error or status checks near the operation that can fail.

## Coverage snapshot

The current generated dictionary contains 504 normalized entries across 12 categories.
