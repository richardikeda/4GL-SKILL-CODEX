# 4GL Patterns

Corpus-derived patterns synthesized from the V12 codebase without copying long client-specific routines.

## What the corpus is used for

- Confirm naming habits and structural idioms used in real projects.
- Detect recurring file, transaction, join, event, and mask-control patterns.
- Flag practices that are common in the field but still need normative confirmation.

## Naming signals

- W: 3796 files in the scanned sample
- SUBS: 1169 files in the scanned sample
- SUBA: 1168 files in the scanned sample
- XQNF: 1133 files in the scanned sample
- SUBP: 1118 files in the scanned sample
- WMC: 1048 files in the scanned sample
- XQSP: 838 files in the scanned sample
- SUBC: 800 files in the scanned sample
- SUBM: 563 files in the scanned sample
- SUBH: 534 files in the scanned sample

## Reusable idioms

- Event scripts usually start with a dispatch block and short `Gosub` branches.
- Shared routines often guard `Local File` declarations with `clalev` to avoid reopening aliases.
- Data-oriented scripts favor explicit joins, explicit default aliases, and explicit transaction outcomes.
- Screen-oriented code often combines event bindings with mask-state commands that deserve explicit explanation.
- Legacy-friendly routines often keep labels and `Return` statements visually separated for maintenance.

## Sanitized corpus examples

- ZYESBONFAC: `For I=1 To [L]NBPAR`
- ZYESBONFAC: `When "X3ETA"          : Call GETPARAM([L]PARAM,[L]NBPAR,[L]PARAMETRE,[L]ETAT) From ETAT`
- ZYESBONFAC: `Subprog IMPRIME(NBPAR,PARAMETRE)`
- ZYESBONFAC: `Local File AREPORTM   [ARM]`
- ZYESBONFAC: `Local File SINVOICE   [SIH]`
- ZYESBONFAC: `Local File SINVOICEV  [SIV]`
- ZYESBONFAC: `Local File SINVOICEV  [SIVV]  :#--CPO 83064`
- ZYESBONFAC: `Local File SINVOICE   [SIHH]  :#--CPO 83064`
- ZYESBONFAC: `Local File GACCDUDATE [DUD]   :#--CPO 83064`
- ZYESBONFAC: `Local File PAYORDER   [PYO]   :#--CPO 83064`
- ZYESBONFAC: `Local File TMPSRPT    [TRPT]  :#--CPO 83064`
- ZYESBONFAC: `Local File TMPSRPTDET [TSRPTD]`
- ZYESBONFAC: `Local File SINVOICED  [SID]`
- ZYESBONFAC: `Local File TABSIVTYP  [TSV]`
- ZYESBONFAC: `For I=1 To [L]NBPAR`
- ZYESBONFAC: `Call GETPARAM ([L]PARAM,[L]NBPAR,[L]PARAMETRE,VALEUR) From ETAT`
- ZYESBONFAC: `Call DEBTRANS From GLOCK`
- ZYESBONFAC: `Trbegin [ARM], [SIV], [SIH],[TRPT]`

## Anti-pattern warnings

- Do not treat commented legacy skeletons as normative syntax guides.
- Do not inherit client prefixes or table names into general-purpose generated examples.
- Do not assume every frequent corpus habit is best practice when the help/plugin model suggests stricter structure.
