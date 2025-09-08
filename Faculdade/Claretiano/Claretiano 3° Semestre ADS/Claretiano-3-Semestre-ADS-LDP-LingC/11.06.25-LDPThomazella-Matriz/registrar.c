#include <stdio.h>

int main(){

  int M[3][3]; // Declarando a matriz

  for(int i=0; i<3; i++){
    for (int j=0; j <3; j++){
      M[i][j] = (i+j)*20;//Pode ser utilizado qualquer cálculo
    }
  };

    for(int i=0; i<3; i++){
    for (int j=0; j <3; j++){
      printf("%d\t",M[i][j]);
    };
    printf("\n");
  };

  return 0; 
}