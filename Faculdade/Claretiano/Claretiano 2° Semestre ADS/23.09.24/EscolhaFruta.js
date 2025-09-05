/*
Sor passou atividade sobre switch case, mas como eu ja usei ele na calculadora nao me darei o luxo de aprender novamente, segue abaixo meu código
*/

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