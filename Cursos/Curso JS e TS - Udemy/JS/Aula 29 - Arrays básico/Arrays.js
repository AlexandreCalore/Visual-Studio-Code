const alunos = ['Maria', 'Felipe', 'Carlos']; // Estrutura de um array. Geralmente usado para um tipo de dado, mas JS não restringe. Misturar tipos não é boa prática.

// Retornando ao conceito de índice, mas no caso de arrays: cada elemento tem um índice (0,1,2,...)

const nomeIsolado = 'Alexandre';

console.log(nomeIsolado[2]); // Imprime a 2ª letra da palavra
console.log(alunos[2]); // Imprime a 2ª palavra da lista (começa do índice 0)
console.log(alunos); // Imprime o array completo

// Editar um índice atribuindo um novo valor
alunos[2] = 'Julia';
console.log(alunos); // Array completo agora com Julia como último elemento

// Adicionar novos elementos
alunos[3] = 'Pipinha';
console.log(alunos); // Array completo com Pipinha na posição 3

// Saber o tamanho do array
console.log(alunos.length); // Similar ao C

// Adicionar elementos ao final do array
alunos[alunos.length] = 'Guilherme'; // Forma 1
console.log(alunos); 
alunos.push('Marta'); // Forma 2
console.log(alunos); 

// Adicionar elementos no começo do array
alunos.unshift('Luiz'); // Adiciona no índice 0
console.log(alunos); 

// Remover elementos do array
alunos.pop(); // Remove o último elemento (Marta)
console.log(alunos); 
let removidos = alunos.pop(); // Removeu o último
removidos = alunos.shift(); // Removeu o primeiro
console.log(alunos); 

