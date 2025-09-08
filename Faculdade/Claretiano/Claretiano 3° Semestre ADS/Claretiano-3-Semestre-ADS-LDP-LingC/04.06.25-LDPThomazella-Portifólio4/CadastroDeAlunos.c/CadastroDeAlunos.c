/*Crie um programa em linguagem C que:

Cadastre até 5 alunos, utilizando uma struct com os seguintes campos:

Nome (string)
Idade (int)
Nota final (float)

Comandos adicionados via teclado (use fgets para o nome).

Após o cadastro, o programa deve:

Exibir todos os alunos cadastrados.

Utilizar uma função para verificar e informar

Qual a média da sala.

Quantos alunos foram aprovados e reprovados. 

   * Aprovado (nota ≥ 6.0)

   * Reprovado (nota < 6.0),

Mostrar os alunos como reprovado apresentando nota e nome.*/

#include <stdio.h>
#include <string.h>


typedef struct{
  char nome[50];
  int idade;
  float notaFinal;
}aluno;

float calcMedia(aluno alunos[], int qntdAlunos){
  float soma = 0;
  for (int i = 0; i < qntdAlunos; i++){
  soma += alunos[i].notaFinal;
  } 
  return soma / qntdAlunos;
}

int alunoReprovado(aluno alunos[], int qntdAlunos){
  int aprov = 0, reprv = 0;
  for (int i = 0; i < qntdAlunos; i++){
  if (alunos[i].notaFinal<6)
  {
    printf ("Nome do aluno reprovado: %s \nNota do aluno %.2f \n",alunos[i].nome,alunos[i].notaFinal);
    reprv ++;
  } else{
    printf ("Nome do aluno aprovado: %s \nNota do aluno %.2f\n",alunos[i].nome,alunos[i].notaFinal);
    aprov ++;
  }
  }
  printf("Relatorio de alunos que passaram: \n Aprovados %d \n Reprovados %d\n",aprov, reprv);

  return 0;
}

int main (){

  int qntdAlunos = 0;

  printf("Quantos alunos voce deseja cadastrar?: ");
  scanf("%d",&qntdAlunos);

  aluno alunos [qntdAlunos];

     for (int i = 0; i < qntdAlunos; i++)
    {
        printf("Informe a idade: ");
        scanf("%d", &alunos[i].idade);
        getchar();

        printf("Informe o Nome: ");
        fgets(alunos[i].nome,50,stdin);
        alunos[i].nome[strcspn(alunos[i].nome,"\n")] = 0;
        
        printf("Informe a nota: ");
        scanf("%f", &alunos[i].notaFinal);
        getchar();
    };

    printf("=======================================\n\n");
    printf("Nome dos alunos cadastrados: \n");
    printf("Total: %d \n", qntdAlunos);
    printf("=======================================\n\n");
    for (int i = 0; i < qntdAlunos; i++)
    {
       printf ("Nome: %s \n",alunos[i].nome);
    };
    alunoReprovado(alunos, qntdAlunos);
    printf("=======================================\n\n");

    printf("A media da sala foi de: %.2f", calcMedia(alunos, qntdAlunos));

  return 0;
}