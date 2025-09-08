/*Exercício 3 – Jogo de Adivinhação com Tentativas
1- O computador sorteia um número de 1 a 100.
2- O usuário tenta adivinhar o número digitando tentativas.
3- A cada tentativa:
4- O programa indica se o número digitado é maior ou menor que o sorteado.
5- O programa deve parar quando o usuário acerta.
6- O exercício deve conter estrutura de repetição, if else ou switch, função e ponteiro

Digite seu palpite: 50
Muito alto!
Digite seu palpite: 30
Muito baixo!
Digite seu palpite: 42
Parabéns! Você acertou em 3 tentativas.*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>


int palpite(int *secreto, int *tentativa) {
    if (*tentativa > *secreto) {
        return 1;
    } else if (*tentativa < *secreto) {
        return -1;
    } else {
        return 0;
    }
}

int main() {
    int numeroSecreto, chute, contador = 0;
    int resultado;

    srand(time(NULL));
    numeroSecreto = (rand() % 100) + 1;

    do {
        printf("Digite seu chute: ");
        scanf("%d", &chute);
        contador++;

        resultado = palpite(&numeroSecreto, &chute);

        if (resultado == 1) {
            printf("alto!\n");
        } else if (resultado == -1) {
            printf("baixo!\n");
        }
    } while (resultado != 0);

    printf("Você acertou em %d tentativas.\n", contador);

    return 0;
}

