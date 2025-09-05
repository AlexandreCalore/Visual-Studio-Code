let varA = 'A'; // Valor inicial A
let varB = 'B'; // Valor inicial B
let varC = 'C'; // Valor inicial C

/*
Tentativa inicial de troca:
varA = varB;
varB = varC;
varC = varA;
*/

// Solução do vídeo utilizando variável temporária:
/*
let varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;
*/

// Solução moderna com destruturação de arrays
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC); // Exibe os valores após a troca
