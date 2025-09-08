#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {

    int menu;
    
    do{
	srand(time(NULL));
	int jogadamaquina = (rand() %3)+1;
	int jogadausuario = 0;
    
    printf("seleciona uma opcao:\n");
    printf("1 - Pedra\n");
	printf("2 - Papel\n");
	printf("3 - Tesoura\nSua jogada: ");
	scanf("%d",&jogadausuario);
	printf("\n");

    while(jogadausuario == 0 ||jogadausuario >3 ||jogadausuario <1){
		                printf("Opcao invalida, tente novamente:\n");
		                printf("1 - Pedra\n");
		                printf("2 - Papel\n");
		                printf("3 - Tesoura\n");
		                scanf("%d",&jogadausuario);
	}
	
    if (jogadausuario == jogadamaquina){
        printf("=============Empate, tente novamente=============\n");
    } else if ((jogadausuario == 1 && jogadamaquina == 3) ||
              (jogadausuario == 2 && jogadamaquina == 1) ||
              (jogadausuario == 3 && jogadamaquina == 2)){
        printf("=============Você venceu=============\n");
    } else{
        printf("=============Você perdeu=============\n");
    }
    
    printf("Resultado da partida:\n");
    
    	switch (jogadausuario)
	{
	case 1:
		printf("voce escolheu Pedra");
		break;
	case 2:
		printf("voce escolheu Papel");
		break;
	case 3:
		printf("voce escolheu Tesoura");
		break;
	default:
		printf("Opcao invalida");
		break;
	}
	
	  printf("   X   ");
	  
    	switch (jogadamaquina)
	{
	case 1:
		printf("CPU escolheu Pedra");
		break;
	case 2:
		printf("CPU escolheu Papel");
		break;
	case 3:
		printf("CPU escolheu Tesoura");
		break;
	default:
		printf("Opcao invalida");
		break;
	}
		printf("\n");
		printf("\n");
		printf("Deseja continuar?\n");
		printf("1 - sim \n2 - nao\nResposta: ");
		scanf("%d",&menu);
	    while(menu <1 || menu>2){
		printf("Resposta invalida, tente novamente:\n");
		printf("1 - sim \n2 - nao\nResposta: ");
		scanf("%d",&menu);
		}
		printf("\n=============\n");
    }while(menu==1);
	return 0;
}