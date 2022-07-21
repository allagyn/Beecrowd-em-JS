const input = require('fs').readFileSync('./arquivo.txt','utf-8')
let entrada = input.split('\n')
let N = parseInt(entrada.shift())
let X = []
let dentro = 0
let fora = 0
/* Laço de Leitura de Valores para Comparação */
for (i = 0; i < N; i++) {
    X[i] = parseInt(entrada.shift())
    if (X[i] >= 10 && X[i] <= 20) {
        dentro++
    }/*FIM IF */
    else  {
        fora++
    } /*FIM ELSE */

}/*Fechamento do For de leitura */
console.log(dentro + ' in')
console.log(fora + ' out')