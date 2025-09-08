#include <stdio.h>
#include <string.h>

typedef struct{
    int matricula;
    char nome [50];
    float nota;
}Aluno;

#define TAM 3

int main (){

    Aluno turma [TAM];

    for (int i = 0; i < TAM; i++)
    {
        printf("Informe a Matricula:\n");
        scanf("%d", &turma[i].matricula);
        getchar();// Limpar o enter e seguir para o proximo ponto
        printf("Informe o Nome: \n");
        fgets(turma[i].nome,50,stdin);
        turma[i].nome[strcspn(turma[i].nome,"\n")] = 0;
        getchar();
        printf("Nota: %f\n\n", turma[i].nota);
        scanf("%f", &turma[i].nota);
        getchar();
    };

    

    /* turma[0].matricula = 1001;
    strncpy (turma[0].nome, "Maria",50);
    turma [0].nota = 8.5;

    turma[1].matricula = 1002;
    strncpy (turma[1].nome, "Alexandre",50);
    turma [0].nota = 5.5;

    turma[2].matricula = 1003;
    strncpy (turma[2].nome, "Julia",50);
    turma [2].nota = 2.7; */

    for (int i = 0; i < TAM; i++)
    {
        printf("Matricula: %d\n", turma[i].matricula);
        printf("Nome: %s\n", turma[i].nome);
        printf("Nota: %f\n\n", turma[i].nota);
    };
    

    return 0;
}