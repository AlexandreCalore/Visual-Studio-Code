// Vamos aprender sobre o Math

let num1 = 9.456;

// arredondar para baixo
let num2 = Math.floor(num1); 
console.log(`O número arredondado para baixo é ${num2}`);

// arredondar para cima
num2 = Math.ceil(num1);
console.log(`O número arredondado para cima é ${num2}`);

// arredondar automaticamente para o mais próximo (>5 +1, <5 -1)
num2 = Math.round(num2);
console.log(`O número arredondado automaticamente é ${num2}`);

// Procurar o maior número de uma lista
console.log(`O maior número dentre essa sequência é: ${Math.max(1,24,751,543,12830,4352,5643,-1321,564-128,-14782189,-528,5435462)}`);

// Procurar o menor número da mesma lista
console.log(`O menor número dentre essa sequência é: ${Math.min(1,24,751,543,12830,4352,5643,-1321,564-128,-14782189,-528,5435462)}`);

// Criar números aleatórios
console.log(`O número aleatório é: ${Math.random()}`); // entre 0 e 1 (1 não incluso)

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // número aleatório entre 5 e 10 arredondado
console.log(`O número aleatório é: ${aleatorio}`);

// Potenciação
console.log(`2 elevado a 10 usando Math.pow: ${Math.pow(2, 10)}`);
console.log(`2 elevado a 10 usando **: ${(2 ** 10)}`);

// Número PI
console.log(`O número PI: ${Math.PI}`);

// Raiz quadrada
console.log(`Raiz quadrada usando expoente: ${aleatorio ** 0.5}`);

// Número infinito
console.log(`Número infinito: ${100 / 0}`); // resultado Infinity

// Observação: o professor também utilizou getElementById + ID.innerHTML para exibir valores no HTML
