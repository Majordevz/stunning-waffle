# Stunning Waffle

Blacksmith is a small TypeScript command-line program.

## Requirements

- Node.js 22+
- npm 10+

## Install

```bash
npm install
```

## Run Blacksmith

Pass one name as a command-line argument:

```bash
npm start -- Korede
```

You should see:

```text
Hello, Korede!
```

If no name is provided, Blacksmith reports an error and exits with status 1:

```bash
npm start
```

Expected output:

```text
Error: name is required.
```

## Check Blacksmith

Run the automated check:

```bash
npm test
```

The check builds Blacksmith, verifies the greeting for a supplied name, and verifies the no-name boundary case.

## Wall Log

Build problems and the hypotheses and fixes used to resolve them are recorded in:

`docs/SW-003-wall-log.md`
	