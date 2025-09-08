#include <stdio.h>

int main(){

    int numeros [5];

   // numeros[0] = 10;
   // numeros[1] = 20;
   // numeros[2] = 30;
   // numeros[3] = 40;
   // numeros[4] = 50;
   // numeros[5] = 60; //aqui ele deixou criar um novo valor no vetor, pois não definimos a quantidade do vetor
    //   0    1    2    3    4
    // [10 , 20 , 30 , 40 , 50]

    for(int i = 0; i<5; i++){
    printf("Insira o Valor: %d\n", numeros[i]);
    scanf("%d", &numeros[i]);
    }

    for(int i = 0; i<5; i++){
    printf("Valor: %d\n", numeros[i]);
    }
    return 0;
    
}