const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (input) => {
  const str = input.toLowerCase();
  const reversedStr = str.split('').reverse().join('');

  if (str === reversedStr) {
    console.log('Entered string is a palindrome.');
  } else {
    console.log('Entered string is not a palindrome.');
  }

  rl.close();
});
