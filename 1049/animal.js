const input = require('fs').readFileSync('./arquivo.txt', 'utf8')
let eco = input.split('\n')
let subfilo = eco[0]
let classe = eco[1]
let ordem = eco[2]
let animal = ''
/*Vertebrados */
if (subfilo === 'vertebrado' && classe === 'ave' && ordem === 'carnivoro'){
    animal = 'aguia'
}

if (subfilo === 'vertebrado' && classe === 'ave' && ordem === 'onivoro'){
    animal = 'pomba'
}

if (subfilo === 'vertebrado' && classe === 'mamifero' && ordem === 'onivoro'){
    animal = 'homem'
}

if (subfilo === 'vertebrado' && classe === 'mamifero' && ordem === 'herbivoro'){
    animal = 'vaca'
}
/* -----------------------Invertebrados-------------------------------------------- */
if (subfilo === 'invertebrado' && classe === 'inseto' && ordem === 'hematofago'){
    animal = 'pulga'
}

if (subfilo === 'invertebrado' && classe === 'inseto' && ordem === 'herbivoro'){
    animal = 'lagarta'
}

if (subfilo === 'invertebrado' && classe === 'anelideo' && ordem === 'hematofago'){
    animal = 'sanguessuga'
}

if (subfilo === 'invertebrado' && classe === 'anelideo' && ordem === 'onivoro'){
    animal = 'minhoca'
}
console.log(animal)