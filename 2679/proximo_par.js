var input = require('fs').readFileSync('./arquivo.txt','utf-8')
var dados = input.split('\n')
var X = parseInt(dados.shift())
if (X % 2 === 0) {
    console.log(X + 2)
}
else {
    console.log(X + 1)
}