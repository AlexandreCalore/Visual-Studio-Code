#include <stdio.h>

int main(){
    int idade; //número inteiro
    double peso; //decimal 1.6555
    float altura;
    char nome [50];
    printf("Informe a idade da pessoa:");
    scanf("%d", &idade); //explicação importante: quando o sor colocar "" entorno do tipo de dado, voce está dizendo para o sistema que aquilo é uma instrução, e nao somente caracteres avulsos
    printf("Informe a altura da pessoa (centimetros):");
    scanf("%f", &altura);
    printf("Informe o peso da pessoa (em kg):");
    scanf("%lf", &peso);     
    printf("Informe o nome da pessoa:");
    scanf("%s", &nome);     

 
    
    printf("==========================================\n");
    printf("A idade dele e de: %d\n",idade);
    printf("A altura dele e de: %f\n",altura);
    printf("O peso dele e de: %2.lf\n",peso);
    printf("O nome dele e: %s\n",nome);
    printf("==========================================\n");
}