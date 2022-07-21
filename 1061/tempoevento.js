const input = require('fs').readFileSync('./arquivo.txt', 'utf8')
let tempo = input.split('\n')
let comeco = tempo[0].split(' ') /*Dia */
let relogio_comeco = tempo[1].split(':')/*Tempo */
let fim_day = tempo[2].split(' ') /*Dia */
let relogio_fim = tempo[3].split(':') /*Tempo */
/*Separando os valores nas suas respectivas variáveis*/

let dia = parseInt(comeco[1])
let Horas = parseInt(relogio_comeco[0])
let Minutos = parseInt(relogio_comeco[1])
let Segundos = parseInt(relogio_comeco[2])

/*Capturando os valores do Horário Final */
let dia_fim = parseInt(fim_day[1])
let Hora_fim = parseInt(relogio_fim[0])
let Minutos_fim = parseInt(relogio_fim[1])
let Segundos_fim = parseInt(relogio_fim[2])

/*Setando e calculando os novos valores para variáveis */
Segundos = Segundos_fim - Segundos
Minutos = Minutos_fim - Minutos
Horas = Hora_fim - Horas
dia = dia_fim - dia

/*Teste de Seleção para valores negativos de Tempo */
if (Segundos < 0) {
    Segundos += 60
    Minutos--
}
if (Minutos < 0) {
    Minutos += 60
    Horas--
}
if (Horas < 0) {
    Horas += 24
    dia--
}
/*PRINT */
console.log(dia+' dia(s)')
console.log(Horas+' hora(s)')
console.log(Minutos+' minuto(s)')
console.log(Segundos+' segundo(s)')