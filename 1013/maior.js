var input = require('fs').readFileSync('./arquivo.txt', 'utf8');
var entrada = input.split(' ')
var a = parseInt(entrada.shift())
var b = parseInt(entrada.shift())
var c = parseInt(entrada.shift())
var maior = Math.max(a,b,c)
console.log(maior+' eh o maior')
