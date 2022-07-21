const input = require('fs').readFileSync('./arquivo.txt', 'utf-8')
let salario = parseFloat(input)
/*15% Aumento */
let NewSalario = 0
let reajuste = 0
/* Reajuste :: 15% */
if (salario >= 0 && salario <= 400.00) {
    reajuste = 0.15 * salario
    NewSalario = salario + reajuste
    console.log('Novo salario: ' + NewSalario.toFixed(2))
    console.log('Reajuste ganho: ' + reajuste.toFixed(2))
    console.log('Em percentual: 15 %')
}
/* Reajuste :: 12% */
else if (salario >= 400.01 && salario <= 800.00) {
    reajuste = 0.12 * salario
    NewSalario = salario + reajuste
    console.log('Novo salario: ' + NewSalario.toFixed(2))
    console.log('Reajuste ganho: ' + reajuste.toFixed(2))
    console.log('Em percentual: 12 %')
}
/* Reajuste :: 10% */
else if (salario >= 800.01 && salario <= 1200.00) {
    reajuste = 0.10 * salario
    NewSalario = salario + reajuste
    console.log('Novo salario: ' + NewSalario.toFixed(2))
    console.log('Reajuste ganho: ' + reajuste.toFixed(2))
    console.log('Em percentual: 10 %')
}
/* Reajuste :: 7% */
else if (salario >= 1200.01 && salario <= 2000.00) {
    reajuste = 0.07 * salario
    NewSalario = salario + reajuste
    console.log('Novo salario: ' + NewSalario.toFixed(2))
    console.log('Reajuste ganho: ' + reajuste.toFixed(2))
    console.log('Em percentual: 7 %')
}
/* Reajuste :: 4% */
else if (salario > 2000.00) {
    reajuste = 0.04 * salario
    NewSalario = salario + reajuste
    console.log('Novo salario: ' + NewSalario.toFixed(2))
    console.log('Reajuste ganho: ' + reajuste.toFixed(2))
    console.log('Em percentual: 4 %')
}