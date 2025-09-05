# tabuleiro = [
#     [' ',' ',' ']
#     [' ',' ',' ']
#     [' ',' ',' ']
# ]

tabuleiro =  [ [' ' for _ in range (3)] for _ in range (3)] # Aqui, seria como se estivessimos falando ao código: "Crie uma lista com 3 elementos, e crie 3 linhas desses elementos"

jogador = 'X' #criamos ele como uma variavel global

def exibeTabuleiro():
    for linha in tabuleiro:
        #print(f'{linha[0]}|{linha[1]}|{linha[2]}') - primeiro método utilizado para imprimir o jogo
        print('|'.join(linha)) #juntamos todos os elementos
        #print('------') primeiro método utilizado para imprimir a divisória do jogo
        print('-' *5) # Assim, vamos imprimir 5x o caractere na tela.

def jogada(linha, coluna): #vamos passar os parametros, sendo eles o local que vamos jogar
    linha = linha - 1 #"converti" os números, para que uma pessoa comum jogue sem ter que se preocupar com o fato de que as posições são "0,1,2"
    coluna = coluna - 1
    global jogador #serve para termos acesso a variavel jogador que definimos globalmente, do contrario, daria erro pois localmente não teria nada atraibuido a ela
    tabuleiro[linha][coluna] = jogador #Ou seja, na posição de linha e coluna que inserirmos, ele vai receber o 'x' que foi associado a variável jogador no global.
    if jogador == 'X':
        return 'O'
    else:
        return 'X'

jogador = jogada(1,2)
jogador = jogada(2,2)
jogador = jogada(3,2)
exibeTabuleiro()

#Na próxima aula, trataremos erros e garantir que não será feito jogadas em cima dos locais que ja foram escolhidos.