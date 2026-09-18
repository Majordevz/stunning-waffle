const name = process.argv[2];

if (!name) {
  console.error("Error: name is required.");
  process.exitCode = 1;
} else {
  console.log(`Hello, ${name}!`);
}
