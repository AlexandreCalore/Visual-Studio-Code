#include <stdio.h>

int main(){

    int valores [5] = {5, 10, 15, 30, 18};
    int maiorValor = 0;

for (int i = 0; i<5; i++)
{
    if(valores[i]>maiorValor){
        maiorValor = valores[i];
    }else{
        maiorValor = maiorValor;
    };
    printf("%d\n", maiorValor);
}



    printf("O maior valor do vetor eh %d\n", maiorValor);
    return 0;
    
}