const input = require('fs').readFileSync('./arquivo.txt','utf-8')
/*Fazendo um Split para pegar somente a parte pos o ponto */
let moeda_string = input.split('.')
let moeda = moeda_string[1]
moeda = parseFloat(moeda / 100)
let especie = parseFloat(input)
/*Valores Notas */
let notas = [100, 50, 20, 10, 5, 2]
/* Calculo dos Valores em Especies */
let cedulas = parseInt(especie / 100)
console.log('NOTAS:')
console.log(cedulas+' nota(s) de R$ '+notas[0]+'.00')
/* Calculo dos Valores 50,00 */
let resto_valor = parseInt(especie - (cedulas * 100))
/*Resto_Valor Armazena os valores que sobram na decomposição */
cedulas = parseInt( resto_valor / 50)
console.log(cedulas+' nota(s) de R$ '+notas[1]+'.00')
/* Calculo dos Valores 20,00 */
resto_valor = resto_valor - (cedulas * 50)
cedulas =  parseInt( resto_valor / 20)
console.log(cedulas+' nota(s) de R$ '+notas[2]+'.00')
/* Calculo dos Valores 10,00 */
resto_valor = resto_valor - (cedulas * 20)
cedulas =  parseInt( resto_valor / 10)
console.log(cedulas+' nota(s) de R$ '+notas[3]+'.00')
/* Calculo dos Valores 5,00 */
resto_valor = resto_valor - (cedulas * 10)
cedulas =  parseInt( resto_valor / 5)
console.log(cedulas+' nota(s) de R$ '+notas[4]+'.00')
/* Calculo dos Valores 2,00 */
resto_valor = resto_valor - (cedulas * 5)
cedulas =  parseInt( resto_valor / 2)
console.log(cedulas+' nota(s) de R$ '+notas[5]+'.00')
/* Somando o valor de Moeda com resto do valor em Especie */
/*Valores Moedas */
let vetor_moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
moeda = resto_valor + moeda
console.log('MOEDAS:')
let cont_moedas = parseInt( moeda / 1)
console.log(cont_moedas+' moeda(s) de R$ '+vetor_moedas[0].toFixed(2))
/* 0.50 Centavos */
let resto_moedas = moeda - (cont_moedas * 1)
cont_moedas = parseInt(resto_moedas / 0.50)
console.log(cont_moedas+' moeda(s) de R$ '+vetor_moedas[1].toFixed(2))
/* 0.25 Centavos */
resto_moedas = resto_moedas - (cont_moedas * 0.50)
cont_moedas = parseInt(resto_moedas / 0.25)
console.log(cont_moedas+' moeda(s) de R$ '+vetor_moedas[2].toFixed(2))
/* 0.10 Centavos */
resto_moedas = resto_moedas - (cont_moedas * 0.25)
cont_moedas = parseInt(resto_moedas / 0.10)
console.log(cont_moedas+' moeda(s) de R$ '+vetor_moedas[3].toFixed(2))
/* 0.05 Centavos */
resto_moedas = resto_moedas - (cont_moedas * 0.10)
cont_moedas = parseInt(resto_moedas / 0.05)
console.log(cont_moedas+' moeda(s) de R$ '+vetor_moedas[4].toFixed(2))
/* 0.01 Centavos */
console.log(resto_moedas)
resto_moedas = resto_moedas - (cont_moedas * 0.05)
cont_moedas = parseInt(resto_moedas / 0.01)
console.log(cont_moedas+' moeda(s) de R$ '+vetor_moedas[5].toFixed(2))
