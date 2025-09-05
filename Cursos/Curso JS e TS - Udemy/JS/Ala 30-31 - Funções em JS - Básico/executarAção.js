// O que queremos fazer com uma função é mandar um valor para ela e retornar um valor

/*
function saudacao(nome) {
    console.log(`Olá ${nome}`)
    return 123456; // *1
} // Podemos executar quantas linhas de código quisermos, podendo incluir parâmetros
*/
 
saudacao('João'); // Colocamos parênteses para indicar que a função está sendo executada
// Todo valor que incluímos dentro dos parênteses é passado como argumento, sendo usado durante a execução da função.

// Para salvar o resultado da função em uma variável:

const variavel = saudacao('Carlos'); // Estamos salvando o valor retornado da função na variável
console.log(variavel); // Antes de adicionar o return, retornaria undefined, pois a função apenas imprimia

// Para contornar isso, colocamos return no final da função, indicando que queremos pegar o resultado

// Se rodar agora, vai aparecer o número 123456

function saudacao(nome) {
    return `Olá ${nome}`;
}

console.log(variavel); // Agora printa o valor da variável, aquilo que escrevemos como nome passado, pois agora a função retorna um valor

// Criando uma função de soma

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 5));
console.log(soma(5, 5));
console.log(soma(20, 5)); // Passando valores como parâmetros e printando o resultado retornado

// Comentário sobre constantes: não é possível redeclarar constantes fora da função, mas dentro da função os valores são isolados

const resultado = soma(3, 3);
console.log(resultado);

// Após o interpretador ler 'return', a execução da função é encerrada

// Chamando a função sem todos os parâmetros pode retornar NaN, mas não dá erro

let resultado1 = soma();
console.log(resultado1); // Retorna NaN

// Definindo valores padrão para parâmetros evita NaN

function soma1(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

let resultado2 = soma1(4); // x é 4, y assume valor padrão 1
console.log(resultado2);

resultado2 = soma1(4, 4); // Ambos os parâmetros definidos
console.log(resultado2); // Substitui o valor padrão de y

// Outra forma de criar funções: atribuindo a uma variável

const raiz = function(n) {
    return n ** 0.5;
};

console.log(`Raiz quadrada de 9: ${raiz(9)}`);
console.log(`Raiz quadrada de 30: ${raiz(30)}`);
console.log(`Raiz quadrada de 81: ${raiz(81)}`);

// Arrow function simplifica a escrita de funções

/*
const raiz2 = function(n) {
    return n ** 0.5;
}; // Modo tradicional
*/

const raiz2 = n => n ** 0.5; // Se temos apenas um parâmetro, podemos omitir parênteses e return

console.log(`Raiz quadrada usando Arrow Function 9: ${raiz2(9)}`);
console.log(`Raiz quadrada usando Arrow Function 30: ${raiz2(30)}`);
console.log(`Raiz quadrada usando Arrow Function 81: ${raiz2(81)}`);

// Boa prática: criar funções pequenas que realizem tarefas específicas
