const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const REFS_DIR = path.join(ROOT, "references");

const SOURCES = {
  pluginRoot: "D:\\WorkSpace\\4GL Studio Plugin",
  helperRoot: "D:\\WorkSpace\\WorkSpace\\Projetos\\Enter Script\\X3-Helper\\X3",
  corpusRoot: "D:\\NUVEM\\OneDrive\\SAGE\\@ORGANIZADO\\SOURCES\\V12",
};

const CATEGORY_PRIORITY = {
  "help-topic": 1,
  pattern: 2,
  keyword: 3,
  function: 3,
  "runtime-variable": 3,
  type: 3,
  "event-pattern": 4,
  "data-access": 4,
  transaction: 4,
  "error-handling": 4,
  "ui-command": 4,
  "ui-runtime-state": 4,
};

const CURATED_CORPUS_TERMS = {
  onevent: {
    name: "Onevent",
    category: "ui-command",
    description: "Observed UI event-binding construct that routes screen events to handlers.",
    signature: "Onevent EVENT handler",
    example: "Onevent CONTROL Call MY_CONTROL From MYSCRIPT",
    invariants: ["Keep the event name explicit.", "Route to a stable label or routine."],
  },
  setmok: {
    name: "Setmok",
    category: "ui-command",
    description: "Observed mask-state command used to change editability or interaction state.",
    signature: "Setmok [MASK] With VALUE",
    example: "Setmok [M:ITM1] With 0",
    invariants: ["Use explicit mode values.", "Apply it to the intended mask scope."],
  },
  transmask: {
    name: "Transmask",
    category: "ui-command",
    description: "Observed command that transfers values between mask contexts.",
    signature: "Transmask [SOURCE] To [TARGET]",
    example: "Transmask [M:ITF0] To [M:ITF1]",
    invariants: ["Keep source and target masks explicit."],
  },
  additm: {
    name: "Additm",
    category: "ui-command",
    description: "Observed UI composition command that adds an item dynamically.",
    signature: "Additm POSITION Titled TEXT To TARGET",
    example: "Additm 2047 Titled \"My action\" To MENU",
    invariants: ["Keep the target explicit."],
  },
  discombo: {
    name: "Discombo",
    category: "ui-command",
    description: "Observed UI command that disables one or more combo choices.",
    signature: "Discombo ... From MASK",
    example: "Discombo 2,3,6 From [M:MASK]",
    invariants: ["Make the disabled values explicit."],
  },
  addmen: {
    name: "Addmen",
    category: "ui-command",
    description: "Observed command that adds a menu entry dynamically.",
    signature: "Addmen ID ACTION ...",
    example: "Addmen 40000+GPILOBJ ACTION_LABEL",
    invariants: ["Use stable identifiers.", "Keep the action traceable."],
  },
  pcolor: {
    name: "pcolor",
    category: "ui-runtime-state",
    description: "Observed runtime color state variable used in UI rendering or highlighting.",
    example: "pcolor = GCOUL(0)",
    invariants: ["Treat it as presentation state, not domain data."],
  },
  mkstat: {
    name: "mkstat",
    category: "ui-runtime-state",
    description: "Observed runtime mask status variable assigned during validation or interaction flow.",
    example: "mkstat = 2",
    invariants: ["Set it deliberately because it changes UI behavior."],
  },
  boxact: {
    name: "Boxact",
    category: "ui-command",
    description: "Observed box activation command used in interactive screen flows.",
    signature: "Boxact [BOX]",
    example: "Boxact [SIM_]",
    invariants: ["Apply it to an explicit box identifier."],
  },
  boxinp: {
    name: "Boxinp",
    category: "ui-command",
    description: "Observed boxed-input command that captures a response through a UI box.",
    signature: "Boxinp [BOX] Using RESPONSE",
    example: "Boxinp [SIM_] Using A_REPONSE",
    invariants: ["Keep the target response variable explicit."],
  },
  fillbox: {
    name: "Fillbox",
    category: "ui-command",
    description: "Observed command that populates a list or box widget from a source or keyed selection.",
    signature: "Fillbox [BOX] ...",
    example: "Fillbox [SDH1] GAU_CHE Hint Key =HINTLIS(0)",
    invariants: ["Use explicit source criteria for reproducible behavior."],
  },
  saizo: {
    name: "Saizo",
    category: "ui-command",
    description: "Observed screen-layout command that resizes or adjusts a mask area or field zone.",
    signature: "Saizo [MASK]INDEX With VALUE",
    example: "Saizo [M:BPC0]5 With [M:A_W0]",
    invariants: ["Use it carefully because it changes layout behavior."],
  },
  setlbox: {
    name: "Setlbox",
    category: "ui-command",
    description: "Observed command that sets the active list box or list-box selection context.",
    signature: "Setlbox [BOX] VALUE",
    example: "Setlbox [SDH1] GAU_CHE",
    invariants: ["Keep the target list box explicit."],
  },
  dislbox: {
    name: "Dislbox",
    category: "ui-command",
    description: "Observed command that disables or closes a list-box interaction path.",
    signature: "Dislbox [BOX] VALUE",
    example: "Dislbox [SDH1] GAU_CHE1",
    invariants: ["Use it as part of explicit UI state transitions."],
  },
  hlpbox: {
    name: "Hlpbox",
    category: "ui-command",
    description: "Observed helper command that opens or resolves contextual help for a symbol or screen object.",
    signature: "Hlpbox VALUE",
    example: "Hlpbox GABREV+\"_\"+IDENT",
    invariants: ["Keep the help target deterministic."],
  },
  report: {
    name: "Report",
    category: "ui-command",
    description: "Observed reporting command used to launch a report with parameters and capture a return value.",
    signature: "Report RETOUR=SERVER With PARAMS",
    example: "Report RETOUR=SERVEUR+\"@\" With PARAMETRE(1..NBPAR)",
    invariants: ["Keep the target and parameter set explicit."],
  },
  gmessage: {
    name: "GMESSAGE",
    category: "runtime-variable",
    description: "Observed global message variable used to surface user-facing error or status text.",
    example: "GMESSAGE = \"Validation failed\"",
    invariants: ["Set it alongside the matching status flag or error path."],
  },
  gok: {
    name: "GOK",
    category: "runtime-variable",
    description: "Observed global success flag used to continue or abort the current workflow.",
    example: "GOK = 0",
    invariants: ["Change it intentionally because downstream flow often depends on it."],
  },
  gerr: {
    name: "GERR",
    category: "runtime-variable",
    description: "Observed global error flag used to signal that the current operation failed.",
    example: "GERR = 1",
    invariants: ["Pair it with an explanatory message when possible."],
  },
  gpoint: {
    name: "GPOINT",
    category: "runtime-variable",
    description: "Observed global entry-point variable used to select a framework hook before calling shared execution logic.",
    example: "GPOINT = \"AV_FILLBOX\" : Gosub ENTREE From EXEFNC",
    invariants: ["Use stable hook names because execution dispatch depends on them."],
  },
};

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function walkFiles(rootDir, predicate) {
  const results = [];

  function visit(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        visit(fullPath);
      } else if (!predicate || predicate(fullPath)) {
        results.push(fullPath);
      }
    }
  }

  visit(rootDir);
  return results;
}

function parseAlternationTerms(pattern) {
  const match = pattern.match(/\\b\((.*)\)\\b/);
  if (!match) {
    return [];
  }

  return match[1]
    .split("|")
    .map((term) => term.replace(/\\\$/g, "$").trim())
    .filter(Boolean);
}

function firstParagraph(markdown) {
  const cleaned = markdown
    .replace(/\r/g, "")
    .replace(/^#.*$/gm, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`+/g, "")
    .trim();

  const paragraphs = cleaned
    .split(/\n\s*\n/)
    .map((part) => part.replace(/\n+/g, " ").trim())
    .filter(Boolean);

  return paragraphs[0] || "";
}

function normalizeName(value) {
  return value.replace(/^\$+/, "").replace(/\.md$/i, "").trim();
}

function toKey(value) {
  return normalizeName(value).toLowerCase();
}

function titleCaseLabel(value) {
  if (!value) {
    return value;
  }

  const allUpper = /^[A-Z0-9_]+$/.test(value);
  if (allUpper) {
    return value;
  }
  return value[0].toUpperCase() + value.slice(1);
}

function isHtmlSnippetName(value) {
  return /&lt;|<code>|<b>|<i>|<pre>|^true$|^false$|^null$/i.test(value || "");
}

function looksLikeClientSymbol(value) {
  return /^([XYZ]|SPE|SPV|CNS|SUB|W[0-9])/i.test(value || "");
}

function shouldKeepObservedCommand(value) {
  if (!value || looksLikeClientSymbol(value)) {
    return false;
  }
  if (/^[A-Z0-9_]+$/.test(value)) {
    return false;
  }
  return /^[A-Za-z][A-Za-z0-9_]{3,}$/.test(value);
}

function buildPluginModel() {
  const packageJson = readJson(path.join(SOURCES.pluginRoot, "package.json"));
  const grammar = readJson(path.join(SOURCES.pluginRoot, "syntaxes", "4gl.tmLanguage.json"));
  const snippets4gl = readJson(path.join(SOURCES.pluginRoot, "snippets", "4gl.json"));
  const snippetsEvents = readJson(path.join(SOURCES.pluginRoot, "snippets", "events.json"));

  const keywordTerms = grammar.repository.keywords.patterns.flatMap((item) => {
    return item.match ? parseAlternationTerms(item.match) : [];
  });
  const functionTerms = grammar.repository.functions.patterns.flatMap((item) => parseAlternationTerms(item.match || ""));
  const variableTerms = grammar.repository.variables.patterns.flatMap((item) => parseAlternationTerms(item.match || ""));
  const typeTerms = grammar.repository.types.patterns.flatMap((item) => parseAlternationTerms(item.match || ""));

  return {
    packageJson,
    grammar,
    snippets: { ...snippets4gl, ...snippetsEvents },
    keywordTerms,
    functionTerms,
    variableTerms,
    typeTerms,
  };
}

function buildHelperModel() {
  const helpDir = path.join(SOURCES.helperRoot, "4gl");
  const files = walkFiles(helpDir, (fullPath) => fullPath.endsWith(".md"));

  return files.map((filePath) => {
    const markdown = readText(filePath);
    const name = path.basename(filePath, ".md");
    return {
      key: toKey(name),
      name,
      filePath,
      summary: firstParagraph(markdown),
    };
  });
}

function buildCorpusModel() {
  const sourceFiles = walkFiles(SOURCES.corpusRoot, (fullPath) => /\.(src|tra|stc)$/i.test(fullPath));
  const stats = {
    totalFiles: sourceFiles.length,
    fileExtensions: {},
    features: {
      actionBlocks: 0,
      onevent: 0,
      subprog: 0,
      funprog: 0,
      localFile: 0,
      link: 0,
      trbegin: 0,
      onerrgo: 0,
      callFrom: 0,
      readlock: 0,
      rewrite: 0,
      setmok: 0,
      transmask: 0,
      additm: 0,
      discombo: 0,
      addmen: 0,
      system: 0,
    },
    prefixes: {},
  };

  const samplePatterns = [];
  const observedCommands = new Map();
  const observedAssignments = new Map();
  const commandExamples = new Map();
  const assignmentExamples = new Map();

  for (const filePath of sourceFiles) {
    const ext = path.extname(filePath).toLowerCase();
    stats.fileExtensions[ext] = (stats.fileExtensions[ext] || 0) + 1;

    const text = readText(filePath);
    const basename = path.basename(filePath, ext);
    const customPrefix = basename.match(/^[A-Z]{1,4}/);
    if (customPrefix) {
      stats.prefixes[customPrefix[0]] = (stats.prefixes[customPrefix[0]] || 0) + 1;
    }

    const featureMatchers = {
      actionBlocks: /\$ACTION/gi,
      onevent: /\bOnevent\b/gi,
      subprog: /\bSubprog\b/gi,
      funprog: /\bFunprog\b/gi,
      localFile: /\bLocal\s+File\b/gi,
      link: /\bLink\b/gi,
      trbegin: /\bTrbegin\b/gi,
      onerrgo: /\bOnerrgo\b/gi,
      callFrom: /\b(Call|Gosub|func)\b[^\n]*\bFrom\b/gi,
      readlock: /\bReadlock\b/gi,
      rewrite: /\b(Rewrite|Write|Delete)\b/gi,
      setmok: /\bSetmok\b/gi,
      transmask: /\bTransmask\b/gi,
      additm: /\bAdditm\b/gi,
      discombo: /\bDiscombo\b/gi,
      addmen: /\bAddmen\b/gi,
      system: /\bSystem\b/gi,
    };

    for (const [feature, regex] of Object.entries(featureMatchers)) {
      const matches = text.match(regex);
      if (matches) {
        stats.features[feature] += matches.length;
      }
    }

    for (const line of text.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      if (
        samplePatterns.length < 18 &&
        /\b(Local File|Link|Trbegin|Onerrgo|Subprog|Funprog|Call .+ From|Filter|For |Readlock|Openi|Openo|Onevent|Setmok|Transmask|Additm|Discombo|Addmen)\b/i.test(trimmed)
      ) {
        samplePatterns.push({
          file: basename,
          example: trimmed,
        });
      }

      const commandMatch = trimmed.match(/^([A-Za-z][A-Za-z0-9_]{2,})\b(?!\s*=)/);
      if (commandMatch && shouldKeepObservedCommand(commandMatch[1])) {
        const token = commandMatch[1];
        observedCommands.set(token, (observedCommands.get(token) || 0) + 1);
        if (!commandExamples.has(token)) {
          commandExamples.set(token, trimmed);
        }
      }

      const assignmentMatch = trimmed.match(/^([A-Za-z][A-Za-z0-9_]{2,})\s*=/);
      if (assignmentMatch && !looksLikeClientSymbol(assignmentMatch[1])) {
        const token = assignmentMatch[1];
        observedAssignments.set(token, (observedAssignments.get(token) || 0) + 1);
        if (!assignmentExamples.has(token)) {
          assignmentExamples.set(token, trimmed);
        }
      }
    }
  }

  const topPrefixes = Object.entries(stats.prefixes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([prefix, count]) => ({ prefix, count }));

  return {
    stats,
    topPrefixes,
    samplePatterns,
    observedCommands,
    observedAssignments,
    commandExamples,
    assignmentExamples,
  };
}

function createDictionary(pluginModel, helperModel, corpusModel) {
  const entries = new Map();

  function chooseCategory(currentCategory, nextCategory) {
    if (!currentCategory) {
      return nextCategory;
    }
    if (!nextCategory) {
      return currentCategory;
    }
    return (CATEGORY_PRIORITY[nextCategory] || 0) >= (CATEGORY_PRIORITY[currentCategory] || 0)
      ? nextCategory
      : currentCategory;
  }

  function upsert(name, category, patch) {
    const key = toKey(name);
    const current = entries.get(key) || {
      key,
      name,
      category,
      description: "",
      signature: "",
      invariants: [],
      example: "",
      validation: "observed",
      sources: [],
      notes: [],
    };

    current.name = current.name || name;
    current.category = chooseCategory(current.category, category);
    Object.assign(current, patch);
    current.sources = Array.from(new Set([...(current.sources || []), ...(patch.sources || [])]));
    current.invariants = Array.from(new Set([...(current.invariants || []), ...(patch.invariants || [])]));
    current.notes = Array.from(new Set([...(current.notes || []), ...(patch.notes || [])]));
    entries.set(key, current);
  }

  for (const term of pluginModel.keywordTerms) {
    upsert(term, "keyword", {
      description: `Core 4GL keyword used to control execution flow, data access, UI behavior, or runtime directives.`,
      validation: "confirmed",
      sources: ["plugin-grammar"],
    });
  }

  for (const term of pluginModel.functionTerms) {
    upsert(term, "function", {
      description: `Built-in 4GL function available to compute values, inspect runtime state, or transform data.`,
      signature: `${term}(...)`,
      validation: "confirmed",
      sources: ["plugin-grammar"],
    });
  }

  for (const term of pluginModel.variableTerms) {
    upsert(term, "runtime-variable", {
      description: `Runtime variable exposed by the 4GL execution environment.`,
      validation: "confirmed",
      sources: ["plugin-grammar"],
    });
  }

  for (const term of pluginModel.typeTerms) {
    upsert(term, "type", {
      description: `4GL data type used in declarations or object-like constructs.`,
      validation: "confirmed",
      sources: ["plugin-grammar"],
    });
  }

  for (const helpEntry of helperModel) {
    const existing = entries.get(helpEntry.key);
    const category = existing ? existing.category : "help-topic";
    const summary = helpEntry.summary || `Official help topic for ${helpEntry.name}.`;
    upsert(helpEntry.name, category, {
      description: summary,
      validation: existing ? "confirmed" : "confirmed-help-only",
      sources: ["x3-helper"],
    });
  }

  const snippetEntries = Object.entries(pluginModel.snippets)
    .filter(([, snippet]) => snippet && typeof snippet === "object" && snippet.prefix)
    .map(([name, snippet]) => ({
      name,
      prefix: Array.isArray(snippet.prefix) ? snippet.prefix[0] : snippet.prefix,
      description: snippet.description || name,
      body: Array.isArray(snippet.body) ? snippet.body : [],
    }));

  for (const snippet of snippetEntries) {
    const isGeneric = isHtmlSnippetName(snippet.name) || isHtmlSnippetName(snippet.prefix);
    if (isGeneric) {
      continue;
    }

    const snippetName = normalizeName(snippet.prefix || snippet.name);
    upsert(snippetName, "pattern", {
      description: `Snippet-backed pattern: ${snippet.description}.`,
      example: snippet.body.slice(0, 4).join(" ").replace(/\$\{\d+:?/g, "").replace(/\$0/g, "").trim(),
      validation: "confirmed",
      sources: ["plugin-snippets"],
    });
  }

  const corpusDriven = [
    {
      name: "$ACTION",
      category: "event-pattern",
      description: "Entry dispatch block frequently used to route object or screen actions to Gosub labels.",
      invariants: ["Return after the Case block.", "Keep labels explicit and action names stable."],
      example: "$ACTION / Case ACTION / When \"OUVRE\" : Gosub OUVRE / Endcase / Return",
      notes: ["Strongly represented in snippets and corpus."],
    },
    {
      name: "Local File",
      category: "data-access",
      description: "Declares a local table handle for the current routine, often guarded by clalev checks in reusable code.",
      invariants: ["Avoid reopening already-open aliases.", "Keep abbreviations stable inside the routine."],
      example: "If clalev([F:BPC])=0 : Local File BPCUSTOMER [BPC] : Endif",
      notes: ["Observed as a standard safety idiom in project code."],
    },
    {
      name: "Link",
      category: "data-access",
      description: "Creates a joined alias for iterating across related tables with explicit keys.",
      invariants: ["Name the joined alias explicitly.", "Prefer readable join keys over implicit coupling."],
      example: "Link [BPC] With [BPA]BPRNUM=[BPC]BPRNUM As [BPLNK]",
      notes: ["Common in selection and list-style routines."],
    },
    {
      name: "Trbegin",
      category: "transaction",
      description: "Starts an explicit transaction block that should end with Commit or Rollback after checking fstat.",
      invariants: ["Always pair with explicit error handling.", "Do not leave transaction outcome implicit."],
      example: "Trbegin [BPC] / Rewrite [BPC] / If fstat : Rollback : Else : Commit : Endif",
      notes: ["Promoted by snippets and aligned with explicitness requirements."],
    },
    {
      name: "Onerrgo",
      category: "error-handling",
      description: "Declares an error label and redirects runtime errors to an explicit recovery or resume path.",
      invariants: ["Keep the error label close to the routine.", "Resume only when the failure path is understood."],
      example: "Onerrgo ERR_HANDLER / ... / $$ERR_HANDLER / Resume",
      notes: ["Useful for legacy-style guarded sections, but should remain explicit."],
    },
  ];

  for (const item of corpusDriven) {
    upsert(item.name, item.category, {
      description: item.description,
      invariants: item.invariants,
      example: item.example,
      notes: item.notes,
      validation: "confirmed",
      sources: ["plugin-snippets", "v12-corpus"],
    });
  }

  for (const term of Object.values(CURATED_CORPUS_TERMS)) {
    const commandCount = corpusModel.observedCommands.get(term.name) || 0;
    const assignmentCount = corpusModel.observedAssignments.get(term.name) || 0;
    if (commandCount > 0 || assignmentCount > 0) {
      upsert(term.name, term.category, {
        description: term.description,
        signature: term.signature || "",
        example: term.example,
        invariants: term.invariants || [],
        notes: [`Corpus signal: commandCount=${commandCount}, assignmentCount=${assignmentCount}.`],
        validation: "observed",
        sources: ["v12-corpus"],
      });
    }
  }

  for (const entry of entries.values()) {
    if (!entry.example) {
      if (entry.category === "function") {
        entry.example = `${entry.name}(VALUE)`;
      } else if (entry.category === "keyword") {
        entry.example = `${titleCaseLabel(entry.name)} ...`;
      } else if (entry.category === "type") {
        entry.example = `Local ${titleCaseLabel(entry.name)} MY_VALUE`;
      } else if (entry.category === "runtime-variable") {
        entry.example = `${entry.name}`;
      } else {
        entry.example = `${entry.name} - see category notes and syntax guide.`;
      }
    }
  }

  const byCategory = {};
  for (const entry of Array.from(entries.values()).sort((a, b) => a.name.localeCompare(b.name))) {
    if (!byCategory[entry.category]) {
      byCategory[entry.category] = [];
    }
    byCategory[entry.category].push(entry);
  }

  const entriesList = Array.from(entries.values()).sort((a, b) => a.name.localeCompare(b.name));
  const unresolvedObservedCommands = Array.from(corpusModel.observedCommands.entries())
    .filter(([name, count]) => count >= 5 && !entries.has(toKey(name)))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([name, count]) => ({
      name,
      count,
      example: corpusModel.commandExamples.get(name) || "",
    }));
  const unresolvedObservedAssignments = Array.from(corpusModel.observedAssignments.entries())
    .filter(([name, count]) => count >= 20 && !entries.has(toKey(name)))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([name, count]) => ({
      name,
      count,
      example: corpusModel.assignmentExamples.get(name) || "",
    }));

  return {
    entries: entriesList,
    byCategory,
    summary: {
      totalEntries: entriesList.length,
      categories: Object.fromEntries(Object.entries(byCategory).map(([key, value]) => [key, value.length])),
      corpus: corpusModel.stats,
      curatedCorpusTerms: Object.keys(CURATED_CORPUS_TERMS).length,
      unresolvedObservedCommands: unresolvedObservedCommands.length,
      unresolvedObservedAssignments: unresolvedObservedAssignments.length,
    },
    refinement: {
      unresolvedObservedCommands,
      unresolvedObservedAssignments,
    },
  };
}

function renderDictionary(dictionary) {
  const lines = [];
  lines.push("# 4GL Dictionary");
  lines.push("");
  lines.push("Canonical dictionary for Sage X3 4GL, rewritten from mined sources and normalized for daily skill use.");
  lines.push("");
  lines.push("## Validation markers");
  lines.push("");
  lines.push("- `confirmed`: supported by the normative help/plugin set and consistent with the skill model.");
  lines.push("- `confirmed-help-only`: present in the help set but not surfaced directly by the plugin grammar.");
  lines.push("- `observed`: seen in corpus patterns and kept with caution.");
  lines.push("");
  lines.push("## Category summary");
  lines.push("");

  for (const [category, count] of Object.entries(dictionary.summary.categories).sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(`- ${category}: ${count}`);
  }

  const categories = Object.keys(dictionary.byCategory).sort((a, b) => a.localeCompare(b));
  for (const category of categories) {
    lines.push("");
    lines.push(`## ${category}`);
    lines.push("");

    for (const entry of dictionary.byCategory[category]) {
      lines.push(`### ${entry.name}`);
      lines.push("");
      lines.push(`- Description: ${entry.description}`);
      if (entry.signature) {
        lines.push(`- Signature: \`${entry.signature}\``);
      }
      lines.push(`- Validation: \`${entry.validation}\``);
      lines.push(`- Sources: ${entry.sources.join(", ")}`);
      if (entry.invariants.length) {
        lines.push(`- Invariants: ${entry.invariants.join(" ")}`);
      }
      if (entry.notes.length) {
        lines.push(`- Notes: ${entry.notes.join(" ")}`);
      }
      lines.push(`- Example: \`${entry.example}\``);
      lines.push("");
    }
  }

  return lines.join("\n");
}

function renderSyntaxGuide(pluginModel, corpusModel) {
  const commands = pluginModel.packageJson.contributes.commands.length;
  const snippets = Object.keys(pluginModel.snippets).length;
  const extensions = pluginModel.packageJson.contributes.languages[0].extensions.join(", ");

  return [
    "# 4GL Syntax and Structure",
    "",
    "This guide condenses the structural rules and working conventions that the skill should follow before consulting any external source.",
    "",
    "## Language identity",
    "",
    `- Primary language id in the plugin: \`4gl\`.`,
    `- File extensions recognized by the plugin: \`${extensions}\`.`,
    `- Plugin surface mined for the skill: ${commands} commands and ${snippets} snippets.`,
    "",
    "## Core structure",
    "",
    "- Prefer explicit labels for event-driven code such as `$ACTION`, `$INIT`, `$CONTROL`, and custom handler labels.",
    "- Use `Subprog` or `Funprog` for reusable logic and terminate them explicitly with `End` or `End VALUE`.",
    "- Use `Case ... When ... Endcase` for action dispatch rather than implicit fall-through.",
    "- Keep file access visible with `Local File`, `Default File`, `Read`, `Readlock`, `Write`, `Rewrite`, and `Delete`.",
    "- Wrap transactional writes in `Trbegin`, followed by an explicit `fstat` check and `Commit` or `Rollback`.",
    "",
    "## Data access conventions",
    "",
    "- Guard repeated `Local File` declarations with `clalev([F:ABV])=0` in shared routines.",
    "- Keep aliases short and stable because many corpus patterns rely on `[F:ABV]FIELD` readability.",
    "- Use `Link ... With ... As [...]` to make joins readable before iterating with `For [ALIAS]`.",
    "- Apply `Filter` and `Order By` explicitly instead of relying on hidden selection state.",
    "",
    "## UI and mask control",
    "",
    "- Treat `Onevent`, `Setmok`, `Transmask`, `Additm`, `Discombo`, and `Addmen` as corpus-backed UI constructs.",
    "- Treat `mkstat` and `pcolor` as runtime UI state rather than business data.",
    "- When these constructs appear, explain that they are observed in the corpus and may depend on framework context.",
    "",
    "## Error and runtime control",
    "",
    "- Use `Onerrgo` only with a clear recovery label and a known resume strategy.",
    "- Read `fstat`, `errn`, `errl`, `errp`, and related runtime variables directly after sensitive operations.",
    "- Prefer trace, popup, or logging helpers for diagnostics over silent failures.",
    "",
    "## Corpus-backed observations",
    "",
    `- Files analyzed in the corpus scan: ${corpusModel.stats.totalFiles}.`,
    `- Heavy-use constructs: ${Object.entries(corpusModel.stats.features)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, count]) => `${name}=${count}`)
      .join(", ")}.`,
    "",
    "## Safe defaults for generation",
    "",
    "- Prefer small, explicit routines over compact but opaque one-liners.",
    "- Keep action names, aliases, and labels stable once introduced.",
    "- Generate defensive examples that show `fstat` handling and open-file guards when data is touched.",
    "- Treat corpus idioms as hints, not as normative overrides of the help/plugin model.",
    "",
  ].join("\n");
}

function renderPatternsGuide(corpusModel) {
  const prefixLines = corpusModel.topPrefixes.map((item) => `- ${item.prefix}: ${item.count} files in the scanned sample`);
  const patternLines = corpusModel.samplePatterns.map((item) => `- ${item.file}: \`${item.example}\``);

  return [
    "# 4GL Patterns",
    "",
    "Corpus-derived patterns synthesized from the V12 codebase without copying long client-specific routines.",
    "",
    "## What the corpus is used for",
    "",
    "- Confirm naming habits and structural idioms used in real projects.",
    "- Detect recurring file, transaction, join, event, and mask-control patterns.",
    "- Flag practices that are common in the field but still need normative confirmation.",
    "",
    "## Naming signals",
    "",
    ...prefixLines,
    "",
    "## Reusable idioms",
    "",
    "- Event scripts usually start with a dispatch block and short `Gosub` branches.",
    "- Shared routines often guard `Local File` declarations with `clalev` to avoid reopening aliases.",
    "- Data-oriented scripts favor explicit joins, explicit default aliases, and explicit transaction outcomes.",
    "- Screen-oriented code often combines event bindings with mask-state commands that deserve explicit explanation.",
    "- Legacy-friendly routines often keep labels and `Return` statements visually separated for maintenance.",
    "",
    "## Sanitized corpus examples",
    "",
    ...patternLines,
    "",
    "## Anti-pattern warnings",
    "",
    "- Do not treat commented legacy skeletons as normative syntax guides.",
    "- Do not inherit client prefixes or table names into general-purpose generated examples.",
    "- Do not assume every frequent corpus habit is best practice when the help/plugin model suggests stricter structure.",
    "",
  ].join("\n");
}

function renderTroubleshooting(pluginModel, dictionary) {
  const configurationKeys = Object.keys(pluginModel.packageJson.contributes.configuration.properties).slice(0, 10);

  return [
    "# 4GL Troubleshooting",
    "",
    "Operational notes for explaining failures, lint-like issues, and environment friction around Sage X3 4GL.",
    "",
    "## Typical problem classes",
    "",
    "- Alias not opened before use: check `Local File`, `Default File`, and `clalev` guards.",
    "- Silent data write failure: inspect `fstat` immediately after `Write`, `Rewrite`, or `Delete`.",
    "- Action branch not firing: verify `$ACTION` structure, `Case ACTION`, and exact label naming.",
    "- Join loops returning nothing: verify `Link` keys, `Filter`, and the active default alias.",
    "- Popup or debug helpers doing nothing: confirm classic-context usage and user/runtime assumptions.",
    "- Screen flow behaving unexpectedly: inspect `Onevent`, `Setmok`, `Transmask`, `mkstat`, and `pcolor` together.",
    "",
    "## Plugin-backed clues",
    "",
    `- The plugin exposes a dedicated debugger, grammar, snippets, and language help surface.`,
    `- Useful configuration keys include: ${configurationKeys.map((key) => `\`${key}\``).join(", ")}.`,
    "- Commands like compile, show help, refresh dictionary, evaluate expression, and run linter indicate the expected workflow around authoring and verification.",
    "",
    "## Refinement status",
    "",
    `- Remaining unresolved observed commands: ${dictionary.refinement.unresolvedObservedCommands.length}.`,
    `- Remaining unresolved observed assignments: ${dictionary.refinement.unresolvedObservedAssignments.length}.`,
    "- Review the refinement report before promoting new observed-only constructs to stronger guidance.",
    "",
    "## Review checklist",
    "",
    "- Confirm the file extension and language mode are correct.",
    "- Confirm each alias referenced as `[F:ABV]` was opened or defaulted first.",
    "- Confirm transactional code terminates in a visible success or failure path.",
    "- Confirm event labels, `Gosub`, and `Return` structure are consistent.",
    "- Confirm generated examples avoid client-specific abbreviations from the corpus.",
    "",
  ].join("\n");
}

function renderPrecedenceGuide(dictionary) {
  return [
    "# Precedence and Validation",
    "",
    "This skill is designed to become operationally independent from the mined sources, but its claims still follow a strict provenance policy.",
    "",
    "## Source precedence",
    "",
    "1. `X3-Helper` and the plugin grammar/snippets define the normative baseline.",
    "2. The V12 corpus contributes usage patterns, naming tendencies, UI constructs, and field-proven idioms.",
    "3. When corpus usage conflicts with normative sources, the skill keeps the corpus note but preserves the normative interpretation.",
    "",
    "## Dictionary policy",
    "",
    "- The generated dictionary is the primary reference for day-to-day skill execution.",
    "- Entries are rewritten into original wording and normalized structure.",
    "- Long literal excerpts from mined sources are intentionally avoided.",
    "- Client-specific details from the corpus are removed or generalized before publication.",
    "- Observed-only entries remain explicitly marked until they are intentionally promoted.",
    "",
    "## Validation workflow",
    "",
    "- Rebuild the skill artifacts from the mining scripts after source updates.",
    "- Run the local validator to confirm folder integrity and data coverage.",
    "- Spot-check critical entries against the help set and plugin grammar.",
    "- Review the refinement report for unresolved high-frequency constructs.",
    "- Forward-test the skill on explanation, generation, review, and troubleshooting tasks.",
    "",
    "## Current coverage snapshot",
    "",
    `- Total normalized entries: ${dictionary.summary.totalEntries}.`,
    `- Categories covered: ${Object.keys(dictionary.summary.categories).length}.`,
    `- Curated corpus-only terms tracked: ${dictionary.summary.curatedCorpusTerms}.`,
    `- Unresolved observed commands: ${dictionary.summary.unresolvedObservedCommands}.`,
    `- Unresolved observed assignments: ${dictionary.summary.unresolvedObservedAssignments}.`,
    `- Corpus files scanned: ${dictionary.summary.corpus.totalFiles}.`,
    "",
  ].join("\n");
}

function renderRefinementReport(dictionary) {
  const lines = [
    "# 4GL Refinement Report",
    "",
    "Cross-check between the current dictionary and high-frequency constructs observed in the corpus.",
    "",
    "## Summary",
    "",
    `- Total dictionary entries: ${dictionary.summary.totalEntries}`,
    `- Curated corpus-only terms tracked explicitly: ${dictionary.summary.curatedCorpusTerms}`,
    `- Remaining unresolved observed commands: ${dictionary.summary.unresolvedObservedCommands}`,
    `- Remaining unresolved observed assignments: ${dictionary.summary.unresolvedObservedAssignments}`,
    "",
    "## Unresolved observed commands",
    "",
  ];

  if (dictionary.refinement.unresolvedObservedCommands.length === 0) {
    lines.push("- None");
  } else {
    for (const item of dictionary.refinement.unresolvedObservedCommands) {
      lines.push(`- ${item.name}: count=${item.count}; example=\`${item.example}\``);
    }
  }

  lines.push("");
  lines.push("## Unresolved observed assignments");
  lines.push("");

  if (dictionary.refinement.unresolvedObservedAssignments.length === 0) {
    lines.push("- None");
  } else {
    for (const item of dictionary.refinement.unresolvedObservedAssignments) {
      lines.push(`- ${item.name}: count=${item.count}; example=\`${item.example}\``);
    }
  }

  lines.push("");
  lines.push("## Interpretation");
  lines.push("");
  lines.push("- Review unresolved commands to decide whether they are framework constructs, local utilities, or client-specific artifacts.");
  lines.push("- Assignment-heavy unresolved names are often screen or business variables and should not be promoted automatically.");
  lines.push("- A term should move from `observed` to `confirmed` only after deliberate curation or stronger normative support.");
  lines.push("");

  return lines.join("\n");
}

function renderSkillMarkdown(dictionary) {
  return [
    "---",
    "name: sage-x3-4gl-copilot",
    "description: Comprehensive Sage X3 4GL skill with a self-contained dictionary, syntax guide, project idioms, UI-framework observations, and troubleshooting workflow. Use when Codex needs to explain 4GL constructs, generate or refactor Sage X3 routines, review .src/.tra/.stc files, map plugin/help semantics into code, or troubleshoot runtime and authoring issues in Sage X3 4GL projects.",
    "---",
    "",
    "# Sage X3 4GL Copilot",
    "",
    "Use the skill's own dictionary first. Treat the mined sources as build-time inputs, not as the primary runtime dependency.",
    "",
    "## Quick start",
    "",
    "- Read [references/4gl-dictionary.md](references/4gl-dictionary.md) first for any symbol, command, type, function, runtime variable, or curated corpus-only construct lookup.",
    "- Read [references/4gl-syntax.md](references/4gl-syntax.md) when the task involves control flow, file structure, declarations, joins, transactions, event layout, or mask behavior.",
    "- Read [references/4gl-patterns.md](references/4gl-patterns.md) when you need realistic but sanitized project idioms derived from field code.",
    "- Read [references/4gl-troubleshooting.md](references/4gl-troubleshooting.md) when debugging, linting, or reviewing suspicious runtime behavior.",
    "- Read [references/4gl-precedence-and-validation.md](references/4gl-precedence-and-validation.md) if you need provenance rules or must judge conflicts between normative semantics and corpus habits.",
    "- Read [references/4gl-refinement-report.md](references/4gl-refinement-report.md) before promoting observed-only constructs into stronger guidance.",
    "",
    "## Working rules",
    "",
    "- Prefer the dictionary's normalized entry over ad hoc guesses.",
    "- Keep generated code explicit: visible aliases, visible transaction outcome, visible `fstat` checks, visible labels.",
    "- Avoid client-specific names and table abbreviations unless the user supplied them.",
    "- When the corpus suggests a habit that lacks normative support, say so explicitly instead of presenting it as a rule.",
    "- When reviewing code, prioritize bugs, hidden state, missing file guards, broken action routing, mask-state confusion, and transaction safety.",
    "",
    "## Generation defaults",
    "",
    "- Use small examples with clear labels and comments only where structure would otherwise be ambiguous.",
    "- Prefer patterns aligned with `$ACTION`, `Subprog`, `Funprog`, `Local File`, `Link`, `Filter`, `Trbegin`, and explicit screen-event wiring.",
    "- Show error or status checks near the operation that can fail.",
    "",
    "## Coverage snapshot",
    "",
    `The current generated dictionary contains ${dictionary.summary.totalEntries} normalized entries across ${Object.keys(dictionary.summary.categories).length} categories.`,
    "",
  ].join("\n");
}

function renderOpenAiYaml() {
  return [
    "interface:",
    "  display_name: \"Sage X3 4GL Copilot\"",
    "  short_description: \"Self-contained Sage X3 4GL skill\"",
    "  default_prompt: \"Use $sage-x3-4gl-copilot to explain, generate, review, or troubleshoot Sage X3 4GL code with its built-in dictionary.\"",
    "",
    "policy:",
    "  allow_implicit_invocation: true",
    "",
  ].join("\n");
}

function writeOutputs(dictionary, pluginModel, corpusModel, helperModel) {
  ensureDir(DATA_DIR);
  ensureDir(REFS_DIR);

  fs.writeFileSync(path.join(DATA_DIR, "dictionary.json"), JSON.stringify(dictionary, null, 2));
  fs.writeFileSync(
    path.join(DATA_DIR, "source-index.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        sources: SOURCES,
        helperTopics: helperModel.length,
        pluginCommands: pluginModel.packageJson.contributes.commands.length,
        corpusFiles: corpusModel.stats.totalFiles,
      },
      null,
      2
    )
  );
  fs.writeFileSync(
    path.join(DATA_DIR, "refinement-report.json"),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        unresolvedObservedCommands: dictionary.refinement.unresolvedObservedCommands,
        unresolvedObservedAssignments: dictionary.refinement.unresolvedObservedAssignments,
      },
      null,
      2
    )
  );

  fs.writeFileSync(path.join(REFS_DIR, "4gl-dictionary.md"), renderDictionary(dictionary));
  fs.writeFileSync(path.join(REFS_DIR, "4gl-syntax.md"), renderSyntaxGuide(pluginModel, corpusModel));
  fs.writeFileSync(path.join(REFS_DIR, "4gl-patterns.md"), renderPatternsGuide(corpusModel));
  fs.writeFileSync(path.join(REFS_DIR, "4gl-troubleshooting.md"), renderTroubleshooting(pluginModel, dictionary));
  fs.writeFileSync(path.join(REFS_DIR, "4gl-precedence-and-validation.md"), renderPrecedenceGuide(dictionary));
  fs.writeFileSync(path.join(REFS_DIR, "4gl-refinement-report.md"), renderRefinementReport(dictionary));
  fs.writeFileSync(path.join(ROOT, "SKILL.md"), renderSkillMarkdown(dictionary));
  fs.writeFileSync(path.join(ROOT, "agents", "openai.yaml"), renderOpenAiYaml());
}

function main() {
  ensureDir(path.join(ROOT, "agents"));
  const pluginModel = buildPluginModel();
  const helperModel = buildHelperModel();
  const corpusModel = buildCorpusModel();
  const dictionary = createDictionary(pluginModel, helperModel, corpusModel);
  writeOutputs(dictionary, pluginModel, corpusModel, helperModel);

  console.log(
    JSON.stringify(
      {
        generated: true,
        dictionaryEntries: dictionary.summary.totalEntries,
        helperTopics: helperModel.length,
        corpusFiles: corpusModel.stats.totalFiles,
        unresolvedObservedCommands: dictionary.summary.unresolvedObservedCommands,
        unresolvedObservedAssignments: dictionary.summary.unresolvedObservedAssignments,
      },
      null,
      2
    )
  );
}

main();
