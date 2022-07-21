var input = require('fs').readFileSync('./arquivo.txt', 'utf8');
var entrada = input.split(' ')
var A = parseFloat(entrada.shift())
var B = parseFloat(entrada.shift())
var C = parseFloat(entrada.shift())
/*Area Triangulo - Area = B*C/2 - onde A = Area e C = Altura*/
var area_triang = (A*C)/2
/*Area Circulo de Raio - Area = pi*raio² - onde pi = 3.14159 e raio é o C*/
var pi = 3.14159
var area_raio = pi*(C*C)
/*Area do Trapézio - Area = ((B+b)*h)/2 - onde B=Base Maior e b=base menor C = Altura*/
var area_trapz = ((A + B)*C)/2
/*Area Quadrado- Area = B*B*/
var area_quad = B * B
/*Area do retângulo A = B*H*/
var area_reta = A * B
console.log('TRIANGULO: '+area_triang.toFixed(3))
console.log('CIRCULO: '+area_raio.toFixed(3))
console.log('TRAPEZIO: '+area_trapz.toFixed(3))
console.log('QUADRADO: '+area_quad.toFixed(3))
console.log('RETANGULO: '+area_reta.toFixed(3))