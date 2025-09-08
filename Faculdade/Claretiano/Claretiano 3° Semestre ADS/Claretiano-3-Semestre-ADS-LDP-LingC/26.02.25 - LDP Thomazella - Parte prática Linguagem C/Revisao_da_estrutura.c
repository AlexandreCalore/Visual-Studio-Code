// #include <stdio.h>

// int main () {
//     // int valor=25;
//     int idade;
//     printf("Defina a idade do ser");
//     scanf("%d", &idade);
//     printf("Idade é de: %d \n", idade);

//     float altura = 1.70;
//     printf("Altura é de: %2f \n", altura);
    
//     double peso = 70.70;
//     printf("Altura é de: %.2lf \n", peso);

//     char inicial = 'T';
//     printf ("Inicial eh: %c \n", inicial);

//     char nome [] = "Thiago";
//     printf ("O nome é de: ");
//     return 0;
// }

#include <stdio.h>

int main () {
    // int valor=25;
    int idade;
    printf("Defina a idade do ser: ");
    scanf("%d", &idade);
    printf("Idade é de: %d \n", idade);
    
    double peso;
    printf("Qual é o peso?  \n");
    scanf("%lf", &peso);
    
    double altura = 1.70;
    printf("Qual é a altura? \n");
    scanf("%lf", &altura);
    
    double imc;
    
    imc = peso / altura*altura;
    printf("O imc dele é de: %.2lf");

    char inicial = 'T';
    printf ("Inicial eh: %c \n", inicial);

    char nome [] = "Thiago";
    printf ("O nome é de: ");
    return 0;
}