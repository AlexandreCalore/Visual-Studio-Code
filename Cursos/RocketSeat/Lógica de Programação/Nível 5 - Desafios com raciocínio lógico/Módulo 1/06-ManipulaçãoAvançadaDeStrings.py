# frase = 'O curso de Lógica é TOP!'
# print(f'Primeira letra: {frase[1]}')
# print(f'Ultima letra: {frase[-1]}')
# print(f'Tamanho da frase: {len(frase)}')

# print(f'Maiúscula: {frase.upper()}')
# print(f'Minúscula: {frase.lower()}')
# print(f'Fatia todos os espaços vazios ou caractere que queremos que seja usado como referencia para cortar a frase: {frase.split()}')

# print(f'Remove os espaços vazio: {frase.strip()}')

# print(f'Conta o tamanho da frase ja com os caracteres sem os espaços vazio: {(len(frase.strip()))}')

def analisadorDeTexto(texto):
  palavras = texto.split()
  num_palavras = len(palavras)
  num_caracteres = len(texto)
  num_caracteres_sem_espacos = num_caracteres - texto.count(' ')
  return num_caracteres, num_caracteres_sem_espacos, num_palavras

num_p, num_c, num_cse = analisadorDeTexto()
print(f'Num palavras{num_p}')
print(f'Num caracteres: {num_c}')
print(f'Num caracteres sem espaço: {num_cse}')
