tabuleiro =  [ [' ' for _ in range (3)] for _ in range (3)] 

jogador = 'X' 

def exibeTabuleiro():
    for linha in tabuleiro:
        print('|'.join(linha))
        print('-' *5) 

def jogada(linha, coluna): 
    global jogador
    if (
        not 0 <= linha <= 2 or 
        not 0 <= linha <= 2 or 
        tabuleiro[linha][coluna] != ' ' ):
        print ('Jogada inválida')
        return jogador
    linha = linha - 1 
    coluna = coluna - 1
    tabuleiro[linha][coluna] = jogador 
    return 'O' if jogador == 'X' else 'X'

def temGanhador(): #função criada para verificar e encerrar o jogo acaso houver ganhador observando as linhas e colunas
    for linha in range (3):
        if(
            tabuleiro[linha][0] != ' ' and
            tabuleiro[linha][0] == tabuleiro[linha][1] and
            tabuleiro[linha][0] == tabuleiro[linha][2]
        ):
            print(f'{tabuleiro[linha][0]}')
            return True
    for coluna in range (3):
        if(
            tabuleiro[0][coluna] != ' ' and
            tabuleiro[0][coluna] == tabuleiro[1][coluna] and
            tabuleiro[0][coluna] == tabuleiro[2][coluna]
        ):
            print(f'{tabuleiro[0][coluna]}')
            return True
    if(
        tabuleiro[1][1] != ' ' and #verifica as diagonais
            (
                (
                    tabuleiro[0][0] == tabuleiro[1][1] and
                    tabuleiro[0][0] == tabuleiro[2][2]
                ) or 
                (
                    tabuleiro[0][2] == tabuleiro[1][1] and
                    tabuleiro[1][1] == tabuleiro[2][0]
                )
            )
        ):
            print(f'{tabuleiro[1][1]}')
            return True

    return False #Se não ouver ganhador de qualquer forma

def temEmpate():
    for linha in range (3):
        for coluna in range (3):
            if tabuleiro[linha][coluna] == ' ':
                return False
    print ('Acabou em empate!')
    return True

while True:
    print(f'Jogador da vez: {jogador}')
    try:
        linha = int(input('Digite a linha: '))
        coluna = int(input('Digite a coluna: '))
        jogador = jogada(linha, coluna)
    except (ValueError, IndexError):
        print('Digite valores númericos entre 1 e 3')
    exibeTabuleiro()
    if temGanhador() or temEmpate():
        break

    

