const input = require('fs').readFileSync('./arquivo.txt','utf-8')
let valor = parseInt(input)
/*Entrada por Vetor */
const notas = [100,50,20,10,5,1]
/* Primeira Saída */
console.log(valor)
/*Entrada Laço */
for (let nota of notas) {
    let qtd_Notas = parseInt( valor / nota)
    console.log(`${qtd_Notas} notas(s) de R$ ${nota},00`)
    valor = valor % nota
}