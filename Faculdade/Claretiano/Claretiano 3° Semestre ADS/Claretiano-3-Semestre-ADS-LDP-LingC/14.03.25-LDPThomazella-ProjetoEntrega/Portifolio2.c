#include <stdio.h>

int main()
{
    int idade;
    char nome [50];

    printf("Insira o nome da pessoa:");
    scanf("%s", &nome);
    printf("Insira a idade: ");
    scanf("%d", &idade);

    if (idade<=12)
    {printf("Classificacao: Crianca");
    }else if (idade>12 && idade <=18)
    {printf("Classificacao: Jovem");
    }else{
        printf("Classificacao: Adulto");
    }
    return 0;
}