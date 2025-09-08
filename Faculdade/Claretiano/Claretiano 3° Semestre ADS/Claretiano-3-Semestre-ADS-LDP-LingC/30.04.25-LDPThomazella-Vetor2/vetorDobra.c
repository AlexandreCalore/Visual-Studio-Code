#include <stdio.h>

void dobraValores (int *vetor, int tamanho){
    for (int i=0; i < tamanho; i++)
    {
        *(vetor + i) = *(vetor + i)*2; 
    };
    
}

int main(){

    int numeros [5] = {1,2,3,4,5};
    dobraValores (numeros,sizeof(numeros) / sizeof(numeros[0]));
    int tamanho = sizeof(numeros) / sizeof(numeros[0]);
    printf("O valor após a dobra eh de: \n");

    for(int i = 0; i<tamanho; i++)
    {
        printf("%d\n", numeros[i]);
    };
    
    


    return 0; 
}