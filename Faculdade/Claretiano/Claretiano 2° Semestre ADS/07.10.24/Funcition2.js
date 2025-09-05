/**
Em JavaScript, uma função (function) é um bloco de código projetado para executar uma tarefa específica. 
Você pode pensar em uma função como uma mini-ferramenta ou um conjunto de instruções que pode ser chamado sempre que necessário.
Elas são muito úteis para evitar repetição de código, organizar melhor o programa e melhorar a reutilização de código.

Estrutura básica de uma função
Uma função em JavaScript geralmente é composta pelos seguintes elementos:

Palavra-chave: Usamos a palavra-chave function para declarar uma função.
Nome da função: O nome que você dá à função para poder chamá-la posteriormente.
Parâmetros: Entre parênteses (), são variáveis usadas como entrada para a função.
Bloco de código: Entre chaves {}, define o que a função faz, o código a ser executado quando a função é chamada.
 
 */

function saudacao(nome) {
    console.log("Olá, " + nome);
}

saudacao("Alexandre gostosão"); // Isso imprimirá "Olá, João".
