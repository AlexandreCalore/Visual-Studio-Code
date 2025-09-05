/**
 * Criar uma calculadora
 * solicitar o operador
 * em seguida o valor1
 * em seguida o valor2
 * o sistema deve verificar
 * qual é seu operador (se senão)
 * em seguida validar a conta
 * usar os operadores
 * (+ - / *)
 */

alert('Calculadora, insira o tipo de conta e os valores')


const valor1 = parseFloat(prompt('Informe o valor 1:'))
const operador =(prompt('Informe o operador da conta:'))
const valor2 = parseFloat(prompt('Informe o valor 2:'))

switch (operador) {
    case "+":
        alert(valor1+valor2)
        break
    case '-':
        alert(valor1-valor2)
        break
    case '*':
        alert(valor1*valor2)
        break
    case '/':
        alert(valor1/valor2)
        break
    case '**':
        alert(valor1**valor2)
        break
    case 'v':
        alert(Math.sqrt(valor1))
        break
    default:
        alert("Operadores inválidos")
    }