// Declaração de constantes
const v1 = 5;
const v2 = 10;

// Operações usando constantes
const conta = v2 * v1;
const contadupl = conta * 2;

// Para valores que serão alterados, usamos let
let contatrpl = conta * 3; // Se fosse const, não poderíamos alterar depois
contatrpl = contatrpl + 117;

// Variável como string
let contatrpl2 = '3';

// Impressão dos valores
console.log(conta);       // 50
console.log(contadupl);   // 100
console.log(contatrpl);   // 267
console.log(typeof(contatrpl));   // number
console.log(typeof(contatrpl2));  // string
