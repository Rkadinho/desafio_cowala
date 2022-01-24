var readline = require('readline');
var rl = readline.createInterface(
  process.stdin, process.stdout);

rl.question('digite um numero ', (n) => {
  var fib = [0, 1];
  for(var i=fib.length; i<n; i++) {
      fib[i] = fib[i-2] + fib[i-1];
  rl.close();
  }
  console.log(fib);  
})