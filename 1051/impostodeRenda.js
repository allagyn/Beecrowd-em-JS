const input = require('fs').readFileSync('./arquivo.txt','utf-8')
let salario = parseFloat(input)
let IRF = 0
let desconto = 0
let diference18 = 0
/* Imposto Isento*/
if (salario <= 2000.00) {
    console.log('Isento')
}
else if (salario <= 3000.00) { /*faixa de  8% */
    IRF = (salario - 2000.00) * 0.08
    console.log('R$ '+IRF.toFixed(2))
}
else if (salario <= 4500.00) { /*faixa de  18% */

    IRF = 1000.00 * 0.08 + ((salario - 3000.00) * 0.18)
    console.log('R$ '+IRF.toFixed(2))
}
else  { /*faixa de  28% */

IRF = 1000.00 * 0.08 + 1500.00 * 0.18 + ((salario - 4500.00) * 0.28)
    console.log('R$ '+IRF.toFixed(2))
}