const input = require('fs').readFileSync('./arquivo.txt', 'utf8')
let mes = parseInt(input)
let meses_ano = ['January','February','March','April','May','June','July','August','September','October','November','December']
console.log(meses_ano[mes - 1])