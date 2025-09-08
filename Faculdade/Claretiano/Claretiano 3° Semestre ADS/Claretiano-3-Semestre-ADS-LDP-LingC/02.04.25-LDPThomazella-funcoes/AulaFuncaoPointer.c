#include <stdio.h>

void verifica(int *num){
    *num = *num + 3;
}

int main (){
    int v1 = 5;
    printf("Valor eh de: %d\n", v1);
    verifica(&v1);
    printf("Valor eh de: %d\n", v1);
    return 0; 
}