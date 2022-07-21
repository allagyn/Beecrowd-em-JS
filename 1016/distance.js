var input = require('fs').readFileSync('./arquivo.txt','utf-8')
var entrada = input.split('\n')
var distancia = parseInt(entrada.shift())
var T = distancia * 2
console.log(T+' minutos')