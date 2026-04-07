# 4GL Syntax and Structure

This guide condenses the structural rules and working conventions that the skill should follow before consulting any external source.

## Language identity

- Primary language id in the plugin: `4gl`.
- File extensions recognized by the plugin: `.src, .tra, .stc`.
- Plugin surface mined for the skill: 42 commands and 90 snippets.

## Core structure

- Prefer explicit labels for event-driven code such as `$ACTION`, `$INIT`, `$CONTROL`, and custom handler labels.
- Use `Subprog` or `Funprog` for reusable logic and terminate them explicitly with `End` or `End VALUE`.
- Use `Case ... When ... Endcase` for action dispatch rather than implicit fall-through.
- Keep file access visible with `Local File`, `Default File`, `Read`, `Readlock`, `Write`, `Rewrite`, and `Delete`.
- Wrap transactional writes in `Trbegin`, followed by an explicit `fstat` check and `Commit` or `Rollback`.

## Data access conventions

- Guard repeated `Local File` declarations with `clalev([F:ABV])=0` in shared routines.
- Keep aliases short and stable because many corpus patterns rely on `[F:ABV]FIELD` readability.
- Use `Link ... With ... As [...]` to make joins readable before iterating with `For [ALIAS]`.
- Apply `Filter` and `Order By` explicitly instead of relying on hidden selection state.

## UI and mask control

- Treat `Onevent`, `Setmok`, `Transmask`, `Additm`, `Discombo`, and `Addmen` as corpus-backed UI constructs.
- Treat `mkstat` and `pcolor` as runtime UI state rather than business data.
- When these constructs appear, explain that they are observed in the corpus and may depend on framework context.

## Error and runtime control

- Use `Onerrgo` only with a clear recovery label and a known resume strategy.
- Read `fstat`, `errn`, `errl`, `errp`, and related runtime variables directly after sensitive operations.
- Prefer trace, popup, or logging helpers for diagnostics over silent failures.

## Corpus-backed observations

- Files analyzed in the corpus scan: 38800.
- Heavy-use constructs: callFrom=1108315, subprog=325646, localFile=302153, rewrite=88591, onevent=42266, funprog=27967, onerrgo=25649, link=21988.

## Safe defaults for generation

- Prefer small, explicit routines over compact but opaque one-liners.
- Keep action names, aliases, and labels stable once introduced.
- Generate defensive examples that show `fstat` handling and open-file guards when data is touched.
- Treat corpus idioms as hints, not as normative overrides of the help/plugin model.
