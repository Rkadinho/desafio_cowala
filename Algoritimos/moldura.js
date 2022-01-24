var readline = require('readline');
var rl = readline.createInterface(
  process.stdin, process.stdout);

rl.question('digite um numero ', (x) => {
  var linhas = x
  rl.question('digite um segundo numero ', (y) => {
    var colunas = y
    var i,j
    var moldura = ['+','-']
    for(i=1; i<=colunas;i++){
      console.log(moldura[0])
    for(j=1; i<=linhas;i++){
      console.log(moldura[1])
    }
  } 
  rl.close()  
  })
})
