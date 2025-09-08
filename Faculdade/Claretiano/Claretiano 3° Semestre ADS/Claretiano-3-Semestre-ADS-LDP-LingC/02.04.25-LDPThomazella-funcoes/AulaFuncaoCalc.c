#include <stdio.h>

int somar(int a, int b){
    return a+b;
}

int main (){
    int resultado = somar(5,3);
    printf("A soma eh de: %d", resultado);
    return 0; 
}