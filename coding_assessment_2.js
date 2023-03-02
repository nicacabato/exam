const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (n) => {
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n - x - 1; y++) {
      process.stdout.write('-');
    }
    for (let y = 0; y <= x; y++) {
      process.stdout.write('*');
    }
    process.stdout.write('\n');
  }
  rl.close();
});