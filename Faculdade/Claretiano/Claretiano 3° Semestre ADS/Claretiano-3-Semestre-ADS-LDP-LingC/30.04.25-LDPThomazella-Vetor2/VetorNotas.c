#include <stdio.h>

float calcularMedia (int v[], int tamanho){
    int soma = 0;
    for(int i = 0; i<tamanho; i++){
        soma +=v[i];
    }
    return (float) soma / tamanho;
} //esta declarando que é um vetor que está indo

int main(){

    int notas [3] = {7,3,9};
    
    float media=calcularMedia(notas, 3); //notas é o vetor, 3 é a quantidade de posições, podendo usar a contagem de vetor para a quantidade

    printf("media da turma eh de: %.2f\n", media);

    return 0; 
}