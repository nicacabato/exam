const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 7 === 0) {
      console.log('Knose Pet Care Made Easy');
    } else if (i % 5 === 0) {
      console.log('Knose');
    } else if (i % 7 === 0) {
      console.log('Pet Care Made Easy');
    } else {
      console.log(i);
    }
  }

  rl.close();
});
