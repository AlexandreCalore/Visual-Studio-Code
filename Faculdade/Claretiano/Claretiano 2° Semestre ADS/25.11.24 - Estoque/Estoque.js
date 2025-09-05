/**
 * Enunciado do ExercÃ­cio:
Crie um programa que gerencie o estoque de uma loja. O programa deve:

Ter uma lista de produtos no estoque, onde cada produto possui:
* Nome do produto.
* Quantidade em estoque.
* PreÃ§o unitÃ¡rio.
O algorÃ­tmo deve calcular a quantidade total de itens no estoque.
Calcular o valor total do estoque.
Determinar o produto com maior quantidade em estoque.
Determinar o produto de maior valor total no estoque (quantidade Ã— preÃ§o unitÃ¡rio).
Exibir as informaÃ§Ãµes calculadas no console.
*/

// Lista de produtos no estoque
const estoque = [
    { nome: "Camiseta", quantidade: 50, preco: 20.0 },
    { nome: "CalÃ§a", quantidade: 30, preco: 50.0 },
    { nome: "Sapato", quantidade: 20, preco: 100.0 },
    { nome: "BonÃ©", quantidade: 80, preco: 15.0 }
];

// FunÃ§Ã£o para calcular a quantidade total de itens no estoque
function calcularQuantidadeTotal(estoque) {
    for (i=0, )
    // Completar
}

// FunÃ§Ã£o para calcular o valor total do estoque
function calcularValorTotal(estoque) {
    // Completar
}

// FunÃ§Ã£o para encontrar o produto com maior quantidade em estoque
function produtoMaiorQuantidade(estoque) {
    // Completar
}

// FunÃ§Ã£o para encontrar o produto de maior valor total no estoque
function produtoMaiorValor(estoque) {
    // Completar
}

// Executar cÃ¡lculos e exibir resultados
console.log("Quantidade total de itens no estoque:", calcularQuantidadeTotal(estoque));
console.log("Valor total do estoque: R$", calcularValorTotal(estoque).toFixed(2));
console.log("Produto com maior quantidade:", produtoMaiorQuantidade(estoque));
console.log("Produto com maior valor total no estoque:", produtoMaiorValor(estoque));