#include <stdio.h>
#include <string.h>

/* struct aluno
{
    int matricula;
    char nome[50];
    float media;
}; */

typedef struct 
{
    char login[50];
    char senha[50];
}Usuario;  


int main(){

   /* struct aluno a1, a2;
    a1.matricula = 123;
    a1.media = 8.5;//ate aqui tudo certo, apenas atribuindo valores
    strcpy(a1.nome, "Alexandre"); //copia a string para outra em uma struct quando o valor do tamanho da variavel esta definido (variavel, atribui)
    strncpy(a1.nome, "Alexandre", 50); //destino, origem, tamanho

    a2.matricula = 123;
    a2.media = 8.5;//ate aqui tudo certo, apenas atribuindo valores
    strcpy(a2.nome, "Alexandre"); //copia a string para outra em uma struct quando o valor do tamanho da variavel 

    printf("Nome: %s\n", a1.nome);
    printf("Matricula: %d\n", a1.matricula);
    printf("Media: %.2f\n", a1.media);*/
    

    //agora vamos trabalhar typedef
    Usuario u1;

    char nomeDigitado[50];
    char senhaDigitada[50];
    int situacao, valido = 0;

    //se igual a 0, está correto, se > 0 strl vem depois de strl2 e vice versa

    printf("digite o login");
    scanf("%s", u1.login);
    printf("digite o senha");
    scanf("%s", u1.senha);
    printf("digite o login");
    scanf("%s", nomeDigitado);
    printf("digite o senha");
    scanf("%s", senhaDigitada);
    do
    {

    
    
    if(strcmp(nomeDigitado, u1.login)==0 && strcmp(senhaDigitada, u1.senha)==0){
        printf("Usuario valido");
        valido += 1;
    }else{
        printf("Senha/Login errado");
        situacao += 1;
    };

    } while (situacao<=3 || valido == 1);
 
    return 0;
}
