/* 
Operadores Aritméticos:
+  → Adição ou concatenação de strings
-  → Subtração
/  → Divisão
*  → Multiplicação
** → Potenciação
%  → Resto da divisão
++ → Incremento de 1 (só funciona em variáveis LET)
-- → Decremento de 1 (só funciona em variáveis LET)
Precedência de cálculo: *, / → +, - (pode ser alterada usando parênteses)
Boas práticas: calcular valores antes de exibir no console.log()
Erros comuns: NaN (Not a Number)
Conversão de strings para números usando parseInt() ou Number()
*/

let contador = 1;
contador++;
contador++;
contador--;
contador--;
contador++;
contador++; // valor final: 3
console.log(`Valor é de ${contador}`);

const num1 = 5; // number
const num2 = 10;
console.log(num1 + num2); // soma

const num3 = '10'; // string
const num4 = '15'; // string
console.log(num3 + num4); // concatenação

const num5 = parseInt('5.2'); // converte para inteiro
const num6 = Number('5.2');   // converte para ponto flutuante
console.log(`Valor do parseInt: ${num5}`);
console.log(`Valor do Number: ${num6}`);

console.log(num3 ** num4); // potenciação (string pode gerar NaN)
console.log(num4 % num3);  // resto da divisão
