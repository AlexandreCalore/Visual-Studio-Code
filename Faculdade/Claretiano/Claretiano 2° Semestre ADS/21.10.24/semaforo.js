function semaforo(estado) {
    
    switch (estado) {
        case 'VERMELHO':

        console.log ('\nVERMELHO - 4\n');
        cor(estado)

            setTimeout(() => {
                semaforo ('VERDE')},4000);
            break;

        case 'AMARELO':

        console.log ('\nAMARELO - 2\n');
        cor(estado)

            setTimeout (() => {
                semaforo ('VERMELHO')},2000)
            break;

            case 'VERDE':

            console.log ('\nVERDE - 6\n');
            cor(estado)
    
            setTimeout(() => {
                semaforo ('AMARELO')}, 6000);
            break;

        default:
        console.log ('COR NÃO ENCONTRADA')
        break;
    }
}

function cor(estado) {

    switch (estado){
        case 'VERMELHO':
            console.log('VERMELHO - ATIVO')
            console.log('AMARELO  *******')            
            console.log('VERDE    *******')
        break;
        
        case 'VERDE':
            console.log('VERMELHO *******')
            console.log('AMARELO  *******')            
            console.log('VERDE    - ATIVO')           
        break;

        case 'AMARELO':
            console.log('VERMELHO *******')
            console.log('AMARELO  - ATIVO')            
            console.log('VERDE    *******')
        break;
    default:
        console.log ('Cor não encontrada')
    break;
}}
semaforo ('VERMELHO')

//CRIAR UMA FUNÇÃO ONDE A TRATATIVA DE COR - ATIVO OU ****
// EXEMPLO VERMELHO -********
//         VERDE - ATIVO
//         AMARELO **********
// FOTO RETIRADA
