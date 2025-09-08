#include <stdio.h>

void dobrar (int *valor){
    *valor = *valor + 1;
}

int main (){
    int v1 = 5;
    printf("Antes %d\n",v1);
    dobrar(&v1);
    printf("Depois %d\n",v1);

    return 0;
}

// professor explicou sobre ponteiros, e eu entendi num primeiro momento, mas ja esqueci.