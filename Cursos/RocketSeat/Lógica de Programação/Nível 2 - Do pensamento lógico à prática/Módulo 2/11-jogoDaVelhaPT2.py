tabuleiro =  [ [' ' for _ in range (3)] for _ in range (3)] 

jogador = 'X' 

def exibeTabuleiro():
    for linha in tabuleiro:
        print('|'.join(linha))
        print('-' *5) 

def jogada(linha, coluna): 
    if (
        not 0 <= linha <= 2 or #Acrescentado esta condição para evitar números negativos, além de que esta prática que é usada em matematica, funciona em python também
        not 0 <= linha <= 2 or 
        tabuleiro[linha][coluna] != ' ' ):# Condição que verifica linha e coluna, para evitar que sobrescreva uma jogada ja existente
        print ('Jogada inválida')
        return jogador
    linha = linha - 1 
    coluna = coluna - 1
    global jogador 
    tabuleiro[linha][coluna] = jogador 
    # if jogador == 'X':
    #     return 'O'
    # else:
    #     return 'X'
    return 'O' if jogador == 'X' else 'X' # Abreviamos todo o if else feito anteriormente


while True:
    print(f'Jogador da vez: {jogador}')
    try: #Serve para "filtrar" o erro antes de aparecer para o usuario
        linha = int(input('Digite a linha: '))
        coluna = int(input('Digite a coluna: '))
        jogador = jogada(linha, coluna)
    except (ValueError, IndexError): #executa uma ação se acaso o erro for verdadeiro
        print('Digite valores númericos entre 1 e 3')
    exibeTabuleiro()

