#include <stdio.h>

int main()
{
    int verificar;
    int numero;
    int v1;

    printf("Informe um numero para saber se eh par ou impar:");
    scanf("%lf", &verificar);
    printf("Informe um numero para saber se eh positivo ou negativo ou 0:");
    scanf("%d", &numero);
    printf("Informe o valor1:");
    scanf("%d", &v1);

   if(verificar %2 == 0){
    printf("O numero %d e par:\n",verificar);
   }else{
    printf("O numero %d e impar\n",verificar);
   }

   if(numero > 0){
    printf("O numero %d eh positivo\n", numero);
   }else if(numero < 0){
    printf("O numero %d eh negativo\n", numero);
   }else{
    printf("O numero %d eh ZERO\n", numero);
   }

   if (v1 > 5 && v1 < 15){
    printf("O numero %d eh maior que 5 e menor que 15",v1);
   }else{
    printf("Valor %d menor do que 5 ou 15",v1);
   }
   
return 0;
}



