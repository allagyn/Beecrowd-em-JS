const input = require('fs').readFileSync('./arquivo.txt','utf-8')
let entrada = input.split(' ')
let N1 = parseFloat(entrada.shift())
let N2 = parseFloat(entrada.shift())
let N3 = parseFloat(entrada.shift())
let N4 = parseFloat(entrada.shift())

/*Calculando a Média */
let media = (N1 * 2 + N2 * 3 + N3 * 4 + N4 * 1) / 10

console.log('Media: '+media.toFixed(1))
/*Teste de seleção para Situação de Aprovado */
if (media >= 7.0) {
    console.log('Aluno aprovado.')
}
/*Teste de seleção para Situação de Reprovado */
else if (media < 5.0) {
    console.log('Aluno reprovado.')
}
/*Teste de seleção para Situação de Exame */
else if (media >= 5.0 && media <= 6.9) {
    let EXAME = input.split('\n')
    let NOTA_EXAME = parseFloat(EXAME[1])
    console.log('Aluno em exame.')
    console.log('Nota do exame: '+NOTA_EXAME.toFixed(1))
    let media_final = (media + NOTA_EXAME) / 2
        if (media_final >= 5.0){
            console.log('Aluno aprovado.')
            console.log('Media final: '+media_final.toFixed(1))
        }
        else if (media_final <= 4.9) {
            console.log('Aluno reprovado.')
            console.log('Media final: '+media_final.toFixed(1))
        }
    
}