#include <stdio.h>

 void saudacao(){ //é uma função que não possui retorno, executando apenas a função quando chamada no int main, e dpeois continua o código. Em codigos maiores, sera chamado inumeras vezes
        printf("Ola, bem vindo! \n");
    }

int main(){
    saudacao();
    saudacao();
    saudacao();
    saudacao();
    saudacao();
    saudacao();
    saudacao();
    return 0;
}