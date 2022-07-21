var input = require('fs').readFileSync('./arquivo.txt', 'utf8')
var entrada = input.split('\n')
var vetor = []
var contPar = 0
var contImpar = 0
var contNegative = 0
var contPositive = 0
/*Entrada no Laço */
for (i = 0; i < 5; i++) {
    vetor[i] = parseInt(entrada.shift())
    if (vetor[i] % 2 === 0) {
        contPar++
    }
    else if (vetor[i] % 2 !== 0) {
        contImpar++
    }
    if (vetor[i] > 0) {
        contPositive++
    }
    else if (vetor[i] < 0) {
        contNegative++
    }

}
console.log(contPar + ' valor(es) par(es)')
console.log(contImpar + ' valor(es) impar(es)')
console.log(contPositive + ' valor(es) positivo(s)')
console.log(contNegative + ' valor(es) negativo(s)')