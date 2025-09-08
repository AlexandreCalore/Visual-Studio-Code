#include <stdio.h>

int main ()
{

    int v1, v2, resultado;
    char operador;

    printf("Insira o primeiro Numero:");
    scanf("%d", &v1);
    printf("Insira o segundo Numero:");
    scanf("%d", &v2);
    printf("Insira operador: ");
    scanf(" %c", &operador);

    if (operador =='+')
    {
        resultado = v1 + v2;
    } else if (operador =='-')
    {
        resultado = v1 - v2;
    }else if (operador =='*')
    {
        resultado = v1 * v2;
    }else if (operador == '/'){
        if (v2 != 0)
        {
            resultado = v1 / v2;
        } else {printf("Erro, Divisao por 0 não permitida \n");
        return 0;};
        }else{
        printf("Operador invalido, tente novamente.");
        
    };
    
    printf("Resultado: %d", resultado);

    
    return 0;
}