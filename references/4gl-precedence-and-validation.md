# Precedence and Validation

This skill is designed to become operationally independent from the mined sources, but its claims still follow a strict provenance policy.

## Source precedence

1. `official help set` and the plugin grammar/snippets define the normative baseline.
2. The reference corpus contributes usage patterns, naming tendencies, UI constructs, and field-proven idioms.
3. When corpus usage conflicts with normative sources, the skill keeps the corpus note but preserves the normative interpretation.

## Dictionary policy

- The generated dictionary is the primary reference for day-to-day skill execution.
- Entries are rewritten into original wording and normalized structure.
- Long literal excerpts from mined sources are intentionally avoided.
- Client-specific details from the corpus are removed or generalized before publication.
- Observed-only entries remain explicitly marked until they are intentionally promoted.

## Validation workflow

- Rebuild the skill artifacts from the mining scripts after source updates.
- Run the local validator to confirm folder integrity and data coverage.
- Spot-check critical entries against the help set and plugin grammar.
- Review the refinement report for unresolved high-frequency constructs.
- Forward-test the skill on explanation, generation, review, and troubleshooting tasks.

## Current coverage snapshot

- Total normalized entries: 504.
- Categories covered: 12.
- Curated corpus-only terms tracked: 20.
- Unresolved observed commands: 20.
- Unresolved observed assignments: 20.
- Corpus files scanned: 38800.

