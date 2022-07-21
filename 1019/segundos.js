var input = require('fs').readFileSync('./arquivo.txt','utf-8')
var entrada = input.split('\n')
var qtda_secs = parseInt(entrada.shift())
/*Horas */
var H = parseInt(qtda_secs / 3600)
/* Ressantando o novo valor da quantidade de segundos */
qtda_secs = qtda_secs % 3600
/* Minutos*/
var M = parseInt(qtda_secs / 60)
/* Ressantando o valor de segundos novamente para Finalizar */
qtda_secs = qtda_secs % 60
var S = qtda_secs
console.log(H+':'+M+':'+S)