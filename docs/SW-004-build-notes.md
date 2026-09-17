\# SW-004 — Build Notes



\## Purpose



These notes record the increments used to build the first Blacksmith slice and how each increment was checked before continuing.



\## Increment 1 — Read the name



\### Added



Blacksmith reads the first command-line argument:



```ts

const name = process.argv\[2];

