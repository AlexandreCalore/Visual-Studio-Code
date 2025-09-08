#include <stdio.h>

int main()
{
    int idade =25; //Professor comentou que, não é valido apenas pedir para printar na tela, é neccessário "formatar o dado", dizendo ao console o que queremos imprimir, tendo que ser bem específico, com a instrução certa.
    printf ("Idade eh de: %d", idade);

//%d é o código que define por exmeplo, que aquele valor é um número inteiro
// além de que, você pode citar a varivael no código, mas o que dita aonde ele vai aparecer é o formato dela: ("Idade eh de: %d(aqui que vai aparecer o valor na hora de imprimir o valor)", idade (aqui só vai puxar a variavel, nao imprimi-la));

    char inicial = 'T';
    printf ("Idade eh de: %c", inicial);

//%c é o código que define por exmeplo, que aquele valor é um caracterer
// Importante que, professor fez um teste, colocando a letra para imprimir mas manteu o %d, o que o programa fez foi converter o caracterer em binario, retornando o valor em binario, ou seja, ao invés de dar erro, ele converteu o caracterer e retornou no código um número.

    char nome[] = "Thiago";
    printf ("Idade eh de: %s", nome);
    return 0; 
    //aqui é para definir uma string, onde você define a quantidade de caracteres que vão aparecer no console.
}


