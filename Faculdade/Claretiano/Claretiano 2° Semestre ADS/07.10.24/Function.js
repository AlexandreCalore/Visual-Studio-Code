/** Hoje vamos aprender sobre funções, definindo uma e podendo usar em qualquer parte do código
 * Função = assinatura
 */ 

let v1 = 10
let v2 = 15

let resultado = 0 

resultado = somar (v1, v2)

console.log(resultado)

function somar (x,y) {
    return x + y 
}