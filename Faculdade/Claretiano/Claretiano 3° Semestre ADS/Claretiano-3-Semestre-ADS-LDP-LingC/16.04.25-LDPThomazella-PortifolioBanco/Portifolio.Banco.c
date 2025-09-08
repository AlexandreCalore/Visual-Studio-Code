#include <stdio.h>

float saldoGeral = 1000;
int contador = 0;

void mostraSaldo(){
    printf("Seu saldo eh de R$%.2f \n\n",saldoGeral);
};

void sacarDinheiro(float *tSaldo){
    float quantiaSaque;
        printf("\nQual o valor deseja sacar? ");
        scanf("%f", &quantiaSaque);
    if (quantiaSaque <= 0){
        printf("Coloque um numero valido\n");
    }else if(quantiaSaque > *tSaldo){
        printf("Saldo insuficiente\n");
    }else {
        *tSaldo = *tSaldo - quantiaSaque;
        contador++;
    }
}

void depositarDinheiro(float *tSaldo){
    float deposito;
    printf("\nQual o valor deseja depositar? ");
    scanf("%f", &deposito);
    
    if (deposito<=0){
         printf("Coloque um numero valido\n");
    }else {
        *tSaldo = *tSaldo + deposito;
        contador++;
    }  
}

void historico(){
    printf("Voce fez %d operacoes\n",contador);
};

int main (){

    int menu ;

    do
    {
    printf("Selecione uma opção:\n");
    printf("1-Saldo\n");
    printf("2-Sacar\n");
    printf("3-Depositar\n");
    printf("4-Historico\n");
    printf("5-Sair\n");
    scanf("%d",&menu);
    
    if(menu <1 ||menu>5){
        printf("Resposta INVALIDA, selecione uma resposta correta\n");
        continue;
    }

       
    switch (menu){
    
    case  1:
       mostraSaldo();
    break;
    case  2:
       sacarDinheiro(&saldoGeral);
       mostraSaldo();
    break;
    case  3:
       depositarDinheiro(&saldoGeral);
       mostraSaldo();
    break;    
    case  4:
       historico();
    break;   
    default:
        printf("Resposta invalida, tente novamente");
    break;
    }

 
    }while (menu!=5);
    return 0;}