function semafaro(estado) {  // ERRO: O nome da função está escrito como 'semafaro', mas você chama 'semaforo' dentro da função.
    
    switch (estado) {
        case 'VERMELHO':

        console.log ('VERMELHO - 4')  // Isso está correto, apenas exibe no console.

            setTimeout(() => {
                semaforo ('VERDE')  // ERRO: Aqui você chama 'semaforo', mas a função foi declarada como 'semafaro'.
            }, 4000);
            break;

        case 'AMARELO':

            setTimeout (() => {
                semaforo ('VERMELHO')  // ERRO: Mesmo problema, a função chamada deve ser 'semafaro'.
            },2000)
            break;

        case 'VERDE':
    
            setTimeout(() => {
                semaforo ('AMARELO - 2')  // ERRO: Você está passando 'AMARELO - 2', mas o esperado seria apenas 'AMARELO'.
            }, 2000);
            break;

        default:
        console.log ('COR NÃO ENCONTRADA')  // Caso padrão para cores não encontradas, está correto.
        break;
    }
}

semafaro ('VERMELHO')  // Aqui o nome está correto, mas dentro da função os erros mencionados ocorrem.

//CRIAR UMA FUNÇÃO ONDE A TRATATIVA DE COR - ATIVO OU ****
