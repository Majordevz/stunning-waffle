# SW-001 — Slice Plan

## Slice

The first slice will make Blacksmith accept one name as a command-line argument and print a greeting using that name.

**Input:** One name passed as a command-line argument.

**Output:** A greeting containing the name that was provided.

## Done

This slice is done when:

* Blacksmith accepts one name from the command line.
* Blacksmith prints a greeting containing that name.
* Blacksmith exits after printing the greeting.

A teammate can verify this by running Blacksmith with a name, such as `Korede`, and seeing a greeting that contains `Korede`.

## Boundary case

If no name is provided, Blacksmith will print `Error: name is required.` and exit without producing a greeting.

## Deliberately out

* **Multiple names** — not needed to prove the first input/output flow works.
* **Saving names or greetings** — persistence is not needed for this slice.
* **A web interface** — the command line is enough to prove the behaviour.

## Review

There will be one review of this plan. Feedback will either be incorporated into the plan or answered with a reason for keeping the original decision.
