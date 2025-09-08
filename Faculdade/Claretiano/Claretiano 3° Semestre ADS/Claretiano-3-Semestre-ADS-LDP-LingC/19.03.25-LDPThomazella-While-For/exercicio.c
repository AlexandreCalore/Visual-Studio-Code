#include <stdio.h>

main(){

int opcao;

do{
    printf("===MENU===\n");
    printf("1 - Contagem progressiva\n");
    printf("2 - Contagem regressiva\n");
    printf("3 - Contagem regressiva\n");
    printf("2 - Sair\n");
    printf("Escolha uma opcao\n");
    scanf("%d", &opcao);
    if (opcao == 1)
    {
        printf("Esoclha contagem progressiva\n");
        for (int i = 1; i <= 5; i++)
        {
            printf("Valor eh %d\n", i);
        }
        
    }
    
}while (opcao !=2);
{
    
}

    return 0;
}