module.exports = {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "test",
        "perf",
        "style",
        "merge",
        "revert",
        "refactor",
        "config",
        "improvement"
      ]
    ]
  }
};
