var input = require('fs').readFileSync('./arquivo.txt','utf-8')
var entrada = input.split('\n')
var tempo = parseInt(entrada.shift())
var vel_med = parseInt(entrada.shift())
var qtda_combustivel = (tempo * vel_med)/12
console.log(qtda_combustivel.toFixed(3))