const num1 = 10; // number inteiro
const num2 = 10.52; // number ponto flutuante

let nomeAluno; // undefined: variável declarada mas não inicializada
const sobrenomeAluno = null; // null: variável intencionalmente sem valor
const aprovado = true; // boolean: verdadeiro ou falso, usado em condicionais

// Dados primitivos: string, number, undefined, null, boolean

console.log(typeof num1, num1); // imprime tipo e valor: number 10
console.log(typeof sobrenomeAluno, sobrenomeAluno); // imprime tipo e valor: object null

const a = [1, 2];
const b = a; // b aponta para o mesmo array que a
console.log(a, b);

b.push(3); // modifica ambos os arrays, pois compartilham o mesmo endereço de memória
console.log(a, b);
