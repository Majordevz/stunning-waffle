# SW-005 - Closeout Note

## What shipped

Blacksmith now accepts one name as a command-line argument and prints a greeting containing that name. It also handles the no-name boundary case by printing an error and returning exit status 1. The automated check verifies both paths.

## Run-through

I ran `npm start -- Korede` with Adaeze watching. Blacksmith printed `Hello, Korede!`. I then ran `npm test`, which passed with 1 test and 0 failures.

## Hardest wall

The hardest wall was getting TypeScript to recognize Node's `process` object. My first hypothesis was that the Node type definitions were missing, but installing `@types/node` did not fix the build. I then found that `tsconfig.json` also needed to include the Node types.

This is recorded in `docs/SW-003-wall-log.md`, under the entry `2026-09-17 - Node types are installed but process is still unknown`, which records the fix that resolved the wall.

## What still confuses me

I still cannot fully explain why installing `@types/node` was not enough by itself and why the `types: ["node"]` setting was needed in this project before TypeScript recognized `process`.
