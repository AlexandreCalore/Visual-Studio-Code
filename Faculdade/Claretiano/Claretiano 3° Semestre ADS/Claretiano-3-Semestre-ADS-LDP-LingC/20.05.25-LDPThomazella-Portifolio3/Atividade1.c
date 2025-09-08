/*Exercício 1 – Análise de Notas
Leia as notas de 5 alunos e:
1. Calcule a média com uma função que recebe um ponteiro para o vetor.
2. Mostre quais alunos estão aprovados (nota ≥ média).
3. Exiba a média geral.
4. O exercício deve conter estrutura de repetição, if else ou switch, função e ponteiro

Digite a nota do aluno 1: 7.5
Digite a nota do aluno 2: 6.0
Digite a nota do aluno 3: 8.0
Digite a nota do aluno 4: 5.5
Digite a nota do aluno 5: 9.0
Média das notas: 7.2
Aluno 1: Aprovado
Aluno 2: Reprovado
Aluno 3: Aprovado
Aluno 4: Reprovado
Aluno 5: Aprovado*/

#include <stdio.h>

float mediaNotas(float *vetor, int qtd) {
    float total = 0;
    for (int i = 0; i < qtd; i++) {
        total += vetor[i];
    }
    return total / qtd;
}

int main() {
    float notas[5];
    float resultado;
    int i;

    for (i = 0; i < 5; i++) {
        printf("Informe a nota %d: ", i + 1);
        scanf("%f", &notas[i]);
    }

    resultado = mediaNotas(notas, 5);

    printf("Media das notas: %.1f\n", resultado);

    for (i = 0; i < 5; i++) {
        printf("Aluno %d: ", i + 1);
        if (notas[i] >= resultado) {
            printf("Aprovado\n");
        } else {
            printf("Reprovado\n");
        }
    }

    return 0;
}
