# SW-003 Wall Log

This log records build walls using three parts: reproduction, hypothesis, and fix.

## Entry - 2026-09-17 - TypeScript does not recognize process

### Reproduction

At this point, `src/index.ts` had been changed to use Node's `process` object:

```ts
const name = process.argv[2];

if (!name) {
  console.error("Error: name is required.");
  process.exit(1);
}

console.log(`Hello, ${name}!`);
```

Run:

```bash
npm run build
```

The build fails with `TS2591: Cannot find name process` on `process.argv[2]` and `process.exit(1)`.

### Hypothesis

TypeScript does not have the Node type definitions available, so it does not recognize the Node `process` object.

### Fix

Installed `@types/node` as a development dependency. The build still failed, so this hypothesis was incomplete.

## Entry - 2026-09-17 - Node types are installed but process is still unknown

### Reproduction

After installing `@types/node`, run:

```bash
npm run build
```

The build still fails with `TS2591: Cannot find name process` on `process.argv[2]` and `process.exit(1)`.

### Hypothesis

The Node type definitions are installed, but `tsconfig.json` is not configured to include the Node types.

### Fix

Added `"types": ["node"]` to `tsconfig.json`. `npm run build` then passed successfully.

## Entry - 2026-09-17 - Existing check still expects scaffold behavior

### Reproduction

After changing Blacksmith to require a name, run:

```bash
npm test
```

The build passes, but the existing check runs:

```bash
node dist/index.js
```

without a name. Blacksmith exits with status 1, so the test fails before reaching its output assertion.

### Hypothesis

The existing check still invokes Blacksmith using the old no-argument scaffold behavior, so it needs to be updated to exercise the new slice input.

### Fix

Updated the check to pass `Korede` and expect `Hello, Korede!`. Added a boundary check for no name. `npm test` then passed.
