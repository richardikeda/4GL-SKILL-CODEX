# 4GL Skill for Codex

Portable Codex skill for X3 4GL explanation, generation, review, and troubleshooting.

## What is included

- `SKILL.md`: skill entrypoint and usage guidance
- `agents/openai.yaml`: Codex UI metadata
- `references/`: self-contained reference material used by the skill at runtime
- `data/`: generated dictionary and refinement artifacts
- `scripts/`: optional build and validation utilities

## How to use

Invoke the skill as `$x3-4gl-copilot` and ask directly for the task you want.

Examples:

- `Use $x3-4gl-copilot to explain this 4GL routine`
- `Use $x3-4gl-copilot to generate a Subprog with Trbegin, fstat, and Rollback handling`
- `Use $x3-4gl-copilot to review this .src file and point out bugs`
- `Use $x3-4gl-copilot to troubleshoot why this mask action is not firing`

## Privacy and portability

- The published skill does not include absolute local paths or personal machine references.
- The build script reads local source locations from environment variables instead of hardcoded paths.
- The runtime skill is self-contained; the external sources are only needed if you want to rebuild the generated artifacts.

## Rebuild inputs

Set these environment variables before running `node scripts/build-skill.js`:

- `SAGE_X3_PLUGIN_ROOT`
- `SAGE_X3_HELPER_ROOT`
- `SAGE_X3_CORPUS_ROOT`

Run `node scripts/validate-skill.js` to validate the packaged skill.

## Notes

Author metadata intentionally omitted for shareable distribution.
Tooling: Codex + Node.js
