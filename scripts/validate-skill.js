const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

function fail(message) {
  console.error(message);
  process.exit(1);
}

function assertFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing required file: ${filePath}`);
  }
}

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function main() {
  const required = [
    path.join(ROOT, "SKILL.md"),
    path.join(ROOT, "agents", "openai.yaml"),
    path.join(ROOT, "references", "4gl-dictionary.md"),
    path.join(ROOT, "references", "4gl-syntax.md"),
    path.join(ROOT, "references", "4gl-patterns.md"),
    path.join(ROOT, "references", "4gl-troubleshooting.md"),
    path.join(ROOT, "references", "4gl-precedence-and-validation.md"),
    path.join(ROOT, "references", "4gl-refinement-report.md"),
    path.join(ROOT, "data", "dictionary.json"),
    path.join(ROOT, "data", "source-index.json"),
    path.join(ROOT, "data", "refinement-report.json"),
  ];

  required.forEach(assertFile);

  const skill = readText(path.join(ROOT, "SKILL.md"));
  if (!skill.startsWith("---\nname: ")) {
    fail("SKILL.md must start with YAML frontmatter containing name.");
  }
  if (!skill.includes("\ndescription: ")) {
    fail("SKILL.md frontmatter must contain description.");
  }

  const dictionary = JSON.parse(readText(path.join(ROOT, "data", "dictionary.json")));
  const sourceIndex = JSON.parse(readText(path.join(ROOT, "data", "source-index.json")));
  const refinementReport = JSON.parse(readText(path.join(ROOT, "data", "refinement-report.json")));

  if (!Array.isArray(dictionary.entries) || dictionary.entries.length < 200) {
    fail("Dictionary coverage is too small; expected at least 200 entries.");
  }
  if (!dictionary.summary || dictionary.summary.totalEntries !== dictionary.entries.length) {
    fail("Dictionary summary mismatch.");
  }
  if (!sourceIndex.helperTopics || !sourceIndex.corpusFiles) {
    fail("Source index must record helper and corpus coverage.");
  }
  if (!sourceIndex.sourceConfiguration || !sourceIndex.sourceConfiguration.pluginRoot) {
    fail("Source index must describe sanitized source configuration.");
  }
  if (!Array.isArray(refinementReport.unresolvedObservedCommands) || !Array.isArray(refinementReport.unresolvedObservedAssignments)) {
    fail("Refinement report must expose unresolved command and assignment arrays.");
  }

  console.log(
    JSON.stringify(
      {
        valid: true,
        entries: dictionary.entries.length,
        helperTopics: sourceIndex.helperTopics,
        corpusFiles: sourceIndex.corpusFiles,
        unresolvedObservedCommands: refinementReport.unresolvedObservedCommands.length,
        unresolvedObservedAssignments: refinementReport.unresolvedObservedAssignments.length,
      },
      null,
      2
    )
  );
}

main();
