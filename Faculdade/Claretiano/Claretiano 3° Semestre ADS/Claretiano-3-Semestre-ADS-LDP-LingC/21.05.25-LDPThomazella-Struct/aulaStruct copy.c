#include <stdio.h>
#include <string.h>

typedef struct {
    char login[50];
    char senha[50];
} Usuario;

int main() {
    Usuario u1;
    strcpy(u1.login, "admin");
    strcpy(u1.senha, "1234");

    char nomeDigitado[50];
    char senhaDigitada[50];

    printf("Digite o login: ");
    scanf("%s", nomeDigitado);

    printf("Digite a senha: ");
    scanf("%s", senhaDigitada);

    if (strcmp(nomeDigitado, u1.login) == 0) {
        printf("O usuario esta correto\n");
    } else {
        printf("O usuario nao esta correto\n");
    }

    if (strcmp(senhaDigitada, u1.senha) == 0) {
        printf("A senha esta correta\n");
    } else {
        printf("A senha nao esta correta\n");
    }

    return 0;
}
