
// Aqui é a continuação da parte 1, mas nesse caso, após entendermos melhor sobre os operadores, (continua abaixo)*
// ele definiu para nós uma função condicional quanto ao uso de operadores, como está no código abaixo,*
// a depender da operação (somar,dividir,multiplicar,subtrair) ele iria executar um cálculo diferente.* 
// Por isso fizemos uso do if/else e else if. 
//  Significado do: "If" = se / "else" = outro. e os dois juntos "else if" = é um código mais polido.

let valor1 = 10
let valor2 = 23
let operador = '-'

if (operador === '+') {
    console.log('Soma: ', valor1 + valor2)
} else if (operador === '/') {
    console.log('Divisão: ', valor1 / valor2)   
} else if (operador === '*') {
    console.log('Multiplicação: ', valor1 * valor2)   
} else if (operador === '-') {
    console.log('Subtração: ', valor1 - valor2)   
}    