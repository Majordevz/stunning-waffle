const assert = require("node:assert/strict");
const { execFileSync, spawnSync } = require("node:child_process");

const output = execFileSync("node", ["dist/index.js", "Korede"], {
  encoding: "utf8",
});

assert.equal(output, "Hello, Korede!\n");

const boundary = spawnSync("node", ["dist/index.js"], { encoding: "utf8" });

assert.equal(boundary.status, 1);
assert.equal(boundary.stderr, "Error: name is required.\n");
