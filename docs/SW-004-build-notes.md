# SW-004 — Build Notes

## Purpose

These notes record the increments used to build the first Blacksmith slice and how each increment was checked before continuing.

## Increment 1 — Read the name

### Added

Blacksmith reads the first command-line argument with `process.argv[2]`.

This gives the program the name supplied by the user.

### Check

Ran `npm run build`.

The build initially failed because TypeScript did not recognize Node's `process` object. The wall was recorded in the SW-003 wall log.

After adding the Node type definitions and configuring `tsconfig.json`, the build passed.

## Increment 2 — Handle missing input

### Added

Blacksmith checks whether a name was provided.

If no name is provided, it prints `Error: name is required.` and exits with status `1`.

This implements the boundary case from the slice plan.

### Check

Ran `node dist/index.js` with no name.

The program printed the expected error and exited with status `1`.

The automated check verifies the error message, exit status, and that no greeting is printed.

## Increment 3 — Print the greeting

### Added

Blacksmith prints `Hello, <name>!` using the supplied name.

### Check

Ran `node dist/index.js Korede`.

The program printed `Hello, Korede!`.

The automated check verifies the exact greeting.

## Final check

Ran `npm test`.

The check builds Blacksmith and verifies the greeting for a supplied name and the no-name boundary case.

The final check passed with 1 test passing and 0 failures.
