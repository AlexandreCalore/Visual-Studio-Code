perguntas = [['Seu animal gosta de bananas', 'macaco'], ['É laranja?', 'tigre']]

while True:
  print('Pense em um animal...')

  acertou = False
  for pergunta in perguntas:
    resposta = input(f'{pergunta[0]} (S/N)?: ')
    if resposta.lower() == 's': #O 'lower' serve para converter para letras minusculas
      print(f'Você pensou em {pergunta[1]}!')
      acertou = True
      break

  if not acertou: # Por ser booleana, podemos colocar um not para identificar se realmente é falsa, ou manter somente a variavel, que ele vai entender que tem que validar se é True.
    animal = input("Desisto! em qual animal você pensou? ")
    novapergunta = input('Qual pergunta você faria para difereniar esse animal? ')
    perguntas.append([novapergunta,animal])

 

  resposta = input('Quer jogar novamente? (S/N): ')
  if resposta.lower() !='s':
    print('Jogo encerrado!')
    break
