function semaforo(estado) {
    switch (estado) {
        case 'VERMELHO':
            console.log('VERMELHO - 4 SEGUNDOS');
            cor(estado); // Exibe o estado das cores
            setTimeout(() => {
                semaforo('VERDE'); // Após 4 segundos, muda para VERDE
            }, 4000);
            break;

        case 'AMARELO':
            console.log('AMARELO - 2 SEGUNDOS');
            cor(estado); // Exibe o estado das cores
            setTimeout(() => {
                semaforo('VERMELHO'); // Após 2 segundos, muda para VERMELHO
            }, 2000);
            break;

        case 'VERDE':
            console.log('VERDE - 6 SEGUNDOS');
            cor(estado); // Exibe o estado das cores
            setTimeout(() => {
                semaforo('AMARELO'); // Após 6 segundos, muda para AMARELO
            }, 6000);
            break;

        default:
            console.log('COR NÃO ENCONTRADA');
            break;
    }
}

function cor(estado) {
    switch (estado) {
        case 'VERMELHO':
            console.log('VERMELHO - ATIVO');
            console.log('AMARELO  *******');
            console.log('VERDE    *******');
            break;

        case 'VERDE':
            console.log('VERMELHO *******');
            console.log('AMARELO  *******');
            console.log('VERDE    - ATIVO');
            break;

        case 'AMARELO':
            console.log('VERMELHO *******');
            console.log('AMARELO  - ATIVO');
            console.log('VERDE    *******');
            break;
    }
}

// Iniciar o ciclo do semáforo
semaforo('VERMELHO');
