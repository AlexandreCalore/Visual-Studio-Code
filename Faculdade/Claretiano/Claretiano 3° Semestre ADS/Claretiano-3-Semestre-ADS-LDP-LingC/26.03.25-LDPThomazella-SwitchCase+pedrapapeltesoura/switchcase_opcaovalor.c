#include <stdio.h>

int main(int argc, char const *argv[])
{

    
    char opcao = 'B';
    switch (opcao) {
    case 'A':
        printf("opcao eh A\n");
        break;
    case 'B':
        printf("opcao eh B\n");
        break;
    case 'C':
        printf("opcao eh C\n");
        break;
    default:
        printf("Nenhum valor\n");
    }
    return 0;
}