/*Exercício 2 – Estatísticas de um Vetor
Peça para o usuário informar 10 números inteiros e armazene-os em um vetor. Em seguida:
Use uma função que receba o ponteiro do vetor para calcular:
• maior valor
• menor valor
• quantos são pares
O exercício deve conter estrutura de repetição, if else ou switch, função e ponteiro

Mostre os resultados
Maior: 98
Menor: 12
Pares: 6*/

#include <stdio.h>

// Função que analisa o vetor e retorna os valores por referência
void analisarVetor(int *valores, int tamanho, int *maior, int *menor, int *qtdPares) {
    *maior = valores[0];
    *menor = valores[0];
    *qtdPares = 0;

    for (int i = 0; i < tamanho; i++) {
        if (valores[i] > *maior) {
            *maior = valores[i];
        }
        if (valores[i] < *menor) {
            *menor = valores[i];
        }
        if (valores[i] % 2 == 0) {
            (*qtdPares)++;
        }
    }
}

int main() {
    int numeros[10];
    int maiorValor, menorValor, pares;
    int i;

    for (i = 0; i < 10; i++) {
        printf("Digite o %d numero inteiro: ", i + 1);
        scanf("%d", &numeros[i]);
    }

    analisarVetor(numeros, 10, &maiorValor, &menorValor, &pares);

    printf("Maior: %d\n", maiorValor);
    printf("Menor: %d\n", menorValor);
    printf("Pares: %d\n", pares);

    return 0;
}
