var input = require('fs').readFileSync('./arquivo.txt','utf-8')
var entrada = input.split('\n')
var vetor = []
var cont = 0
/*Entrada no Laço */
for (i = 0; i < 6; i++) {
    vetor[i] = parseInt(entrada.shift())
    if (vetor[i] > 0){
        cont = cont + 1
    }
}
console.log(cont+' valores positivos')