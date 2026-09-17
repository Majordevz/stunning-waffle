const name = process.argv[2];

if (!name) {
  console.error("Error: name is required.");
  process.exit(1);
}

console.log(`Hello, ${name}!`);
