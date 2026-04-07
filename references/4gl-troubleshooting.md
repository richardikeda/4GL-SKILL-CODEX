# 4GL Troubleshooting

Operational notes for explaining failures, lint-like issues, and environment friction around Sage X3 4GL.

## Typical problem classes

- Alias not opened before use: check `Local File`, `Default File`, and `clalev` guards.
- Silent data write failure: inspect `fstat` immediately after `Write`, `Rewrite`, or `Delete`.
- Action branch not firing: verify `$ACTION` structure, `Case ACTION`, and exact label naming.
- Join loops returning nothing: verify `Link` keys, `Filter`, and the active default alias.
- Popup or debug helpers doing nothing: confirm classic-context usage and user/runtime assumptions.
- Screen flow behaving unexpectedly: inspect `Onevent`, `Setmok`, `Transmask`, `mkstat`, and `pcolor` together.

## Plugin-backed clues

- The plugin exposes a dedicated debugger, grammar, snippets, and language help surface.
- Useful configuration keys include: `4gl.x3ServerUrl`, `4gl.x3Folder`, `4gl.x3User`, `4gl.x3Acv`, `4gl.x3UserCode`, `4gl.x3UserName`, `4gl.x3Client`, `4gl.x3.explorer.showGeneratedFiles`, `4gl.formatting.uppercaseKeywords`, `4gl.formatting.uppercaseConstants`.
- Commands like compile, show help, refresh dictionary, evaluate expression, and run linter indicate the expected workflow around authoring and verification.

## Refinement status

- Remaining unresolved observed commands: 20.
- Remaining unresolved observed assignments: 20.
- Review the refinement report before promoting new observed-only constructs to stronger guidance.

## Review checklist

- Confirm the file extension and language mode are correct.
- Confirm each alias referenced as `[F:ABV]` was opened or defaulted first.
- Confirm transactional code terminates in a visible success or failure path.
- Confirm event labels, `Gosub`, and `Return` structure are consistent.
- Confirm generated examples avoid client-specific abbreviations from the corpus.
