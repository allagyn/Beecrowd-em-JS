const input = require('fs').readFileSync('./arquivo.txt', 'utf-8')
let dados = input.split(' ')
let x = parseInt(dados[0])
let y = parseInt(dados[1])
let z = parseInt(dados[2])
let vetor = [x, y, z].sort((a, b) => a - b)
/* Método Sort ira organizar os valores em ordem crescente */
let A = vetor[2]
let B = vetor[1]
let C = vetor[0]
/*se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO */
if (A >= B + C) {
    console.log('NAO FORMA TRIANGULO')
}
/*se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO */
if ((A * A) === (B * B + C * C)) {
    console.log('TRIANGULO RETANGULO')
}
/*se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO */
if ((A * A) > (B * B + C * C)) {
    console.log('TRIANGULO OBTUSANGULO')
}
/*se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO */
if ((A * A) < (B * B + C * C)) {
    console.log('TRIANGULO ACUTANGULO')
}
/*se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO */
if (A === B && B === C) {
    console.log('TRIANGULO EQUILATERO')
}
/*se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES */
if (A != B && B === C) {
    console.log('TRIANGULO ISOSCELES')
}