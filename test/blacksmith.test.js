const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");

const output = execFileSync("node", ["dist/index.js"], {
  encoding: "utf8",
});

assert.equal(output, "stunning-waffle scaffold ready\n");