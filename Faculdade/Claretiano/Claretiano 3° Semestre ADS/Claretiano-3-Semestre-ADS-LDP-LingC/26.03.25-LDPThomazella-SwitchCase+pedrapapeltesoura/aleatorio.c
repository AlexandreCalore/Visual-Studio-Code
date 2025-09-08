#include <stdio.h>
#include <time.h> //bibilioteca para trabalhar com operadores de tempo
#include <stdlib.h> //biblioteca para trabalhar com operadores randomico e de memória

int main() {
    int aleatorio;
    
    srand(time(NULL));
    aleatorio = rand();
    printf("Randomico:%d\n", aleatorio);
    printf("Resto da divisao:%d\n", (aleatorio % 5) + 1);

    return 0;
}