do{alert('Teste alert')
prompt('Teste prompt')

let num1, num2, conta, operador;

num1 = parseInt(prompt('Digite o primeiro valor'));
num2 = parseInt(prompt('Digite o segundo valor'));
operador = prompt('Digite o operador');

switch (operador){
    case '+':
    conta = num1 + num2
        break;
    case '-':
    conta = num1 - num2
        break;
    case '/':
    conta = num1 / num2
        break;
    case '*':
    conta = num1 * num2
        break;
    case '**':
    conta = num1 ** num2
        break;
}

alert(`Resultado da operação: dos valores ${num1} ${operador} ${num2} = ${conta}`);

let teste = true;

teste = confirm('Deseja repetir o calculo?')

}while(teste == true);
