let num1 = 1; // number
let num2 = 2.5; // number
let num3 = 1500;
let num4 = 10.47892734;
let temp = num1 * 'Ola'; // Resultado será NaN, pois não podemos multiplicar número por string

// O JS possui vários métodos associados a number, acessíveis com ponto após a variável

// Transformando número em string apenas na hora da exibição
console.log(num1.toString() + num2); // concatena como string
console.log(typeof num1); // aqui ainda é number

// Convertendo número para binário
console.log(num3.toString(2)); // representação binária de num3

// Limitando casas decimais na exibição
console.log(num4.toFixed(3)); // exibe apenas 3 casas decimais

// Verificando se número é inteiro
console.log(Number.isInteger(num1)); // true
console.log(Number.isInteger(num4)); // false

// Trabalhando com valores inválidos
console.log(temp); // NaN
console.log(Number.isNaN(temp)); // true, confirma que não é número

// Boas práticas: tratar os dados antes de operar, evitar cálculos com strings

// Problema de precisão com ponto flutuante (IEEE 754-2008)
let num5 = 0.7;
let num6 = 0.1;

num5 += num6;

console.log(num5); // resultado impreciso: 0.7999999999999999

// Corrigindo imprecisão
num5 = parseFloat(num5.toFixed(2)); // arredonda para 2 casas e converte de volta para number
console.log(num5);

// Alternativa: multiplicar/dividir para trabalhar com inteiros antes de converter para float
