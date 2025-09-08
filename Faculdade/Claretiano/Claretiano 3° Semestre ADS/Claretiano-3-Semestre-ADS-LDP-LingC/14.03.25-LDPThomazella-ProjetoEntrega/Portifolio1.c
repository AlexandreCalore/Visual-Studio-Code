#include <stdio.h>

int main(){

    int nota;

    printf("Insira uma nota: ");
    scanf("%d", &nota);

    if (nota >= 9)
    {
        printf("Conceito A");
    } else if (nota >= 7)
    {
        printf("Conceito B");
    } else if (nota >= 5)
    {
        printf("Conceito C");
    } else if (nota >= 3)
    {
        printf("Conceito D");
    } else{
        printf("REPROVADO");
    };
    
    return 0;
}