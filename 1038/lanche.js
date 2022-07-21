const input = require('fs').readFileSync('./arquivo.txt','utf-8')
let entrada = input.split(' ')
let cod = parseInt(entrada.shift())
let quantidade = parseInt(entrada.shift())
/* Com os código sao conhecidos e nao há valores de entrada diferentes
Não vou usar o SWITCH para trabalhar com OP - Opção
*/
if (cod === 1){ /* HotDog */
    let preco = parseFloat(4.00)
    console.log('Total: R$ '+(preco * quantidade).toFixed(2))
}
if (cod === 2){/* X-Salada */
    let preco = parseFloat(4.50)
    console.log('Total: R$ '+(preco * quantidade).toFixed(2))
}
if (cod === 3){ /* X-Bacon */
    let preco = parseFloat(5.00)
    console.log('Total: R$ '+(preco * quantidade).toFixed(2))
}
if (cod === 4){/* Torrada Simples */
    let preco = parseFloat(2.00)
    console.log('Total: R$ '+(preco * quantidade).toFixed(2))
}
if (cod === 5){/* Refrigerante */
    let preco = parseFloat(1.50)
    console.log('Total: R$ '+(preco * quantidade).toFixed(2))
}