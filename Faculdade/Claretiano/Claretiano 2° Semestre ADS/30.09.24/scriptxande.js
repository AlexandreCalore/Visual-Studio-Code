let saldo = 0;

function realizarOperacao() {
    while (true) {
        const operacao = prompt("Escolha uma operação:\n1. Depósito\n2. Saque\n3. Ver Saldo\n4. Sair");

        // Convertendo a operação para número
        const op = parseInt(operacao);
        
        // Usando switch para determinar a operação
        switch (op) {
            case 1:
                const valorDeposito = parseFloat(prompt("Digite o valor para depósito:"));
                if (valorDeposito<=0){
                    alert('Número inválido');
                } else (saldo = saldo + valorDeposito, alert("Saldo atual de R$" + saldo))
                /**
                 * Fazer a logica de programação para o valor de deposito
                 * Não pode ser nulo o valor 
                 * Não pode ser menor que Zero o valor
                 * Tem que somar no saldo para depois apresentar no extrato
                 */
                break;

            case 2: // Saque
                const valorSaque = parseFloat(prompt("Digite o valor para saque:"));
                
                if (valorSaque>saldo){
                    alert('Valor maior que o saldo');
                } else (saldo -= valorSaque, alert("Valor sacado R$" +valorSaque),alert("Saldo atual de  R$" + saldo))
                  /**
                 * Fazer a logica de programação para o valor de Saque
                 * Se não tiver valor em saldo maior ou igual ao valor do saque não permitir
                 * Não pode ser nulo o valor 
                 * Não pode ser menor que Zero o valor
                 * Tem que somar no saldo para depois apresentar no extrato* 
                 */
                break;

            case 3: // Ver Saldo
                /**Fazer a função para imprimir o saldo na tela */
                alert(`Saldo R$ ${saldo}`);
                break;

            case 4: return alert ("Saindo do sistema") // Sair
            
                /**Fazer a função para sair */
            default: alert ('Opção inválida') // Opção inválida
            
                /**Validar uma função inválida */
        }
    }
}