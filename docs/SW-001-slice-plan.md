\# SW-001 — Slice Plan



\## Slice



The first slice will make Blacksmith accept one name from the command line and print a greeting using that name.



\*\*Input:\*\* One name entered by the user when Blacksmith is run.



\*\*Output:\*\* A greeting containing the name that was entered.



\## Done



This slice is done when:



\* Running Blacksmith allows a user to provide a name.

\* Blacksmith prints a greeting containing that name.

\* The program exits after printing the greeting.



A teammate can verify this by running Blacksmith, entering a name such as `Korede`, and seeing a greeting that contains `Korede`.



\## Boundary case



If the user provides an empty name, Blacksmith will print an error message instead of producing a greeting.



\## Deliberately out



\* \*\*Multiple names\*\* — not needed to prove the first input/output flow works.

\* \*\*Saving names or greetings\*\* — persistence is not needed for this slice.

\* \*\*A web interface\*\* — the command line is enough to prove the behaviour before adding another interface.



\## Review



There will be one review of this plan. Feedback will either be incorporated into the plan or answered with a reason for keeping the original decision.



