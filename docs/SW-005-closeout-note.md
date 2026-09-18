# SW-005 - Closeout Note

## What shipped

Blacksmith now accepts one name as a command-line argument and prints a greeting containing that name. It also handles the no-name boundary case by printing an error and returning exit status 1. The automated check verifies both paths.

## Hardest wall

The hardest wall was getting TypeScript to recognize Node's `process` object. My first hypothesis was that the Node type definitions were missing, but installing `@types/node` did not fix the build. I then found that `tsconfig.json` also needed to include the Node types.

This is recorded in `docs/SW-003-wall-log.md`, under the entry `2026-09-17 - TypeScript does not recognize process`.

## What still confuses me

I still cannot fully explain why installing `@types/node` was not enough by itself and why the `types: ["node"]` setting was needed in this project before TypeScript recognized `process`.
