soma = 0
n = 1

#while n <= 10: While para quando não sabemos quantas vezes vai se repetir
#  soma = soma + n
#  n = n + 1
#  print(f'Soma:{soma}')
#  print(f'n:{n}') #O "f" serve para formatar automaticamente a variavel

for i in range(1,11):
#  soma = soma + i
#  soma += i
  soma = sum([i for i in range (1,11)]) # método para chegarmos no resultado através de fórmulas
  print(f'Soma:{soma}')
  print(f'index:{i}') #Reaproveitamos o i "index" como adição na soma.

print(f'A soma dos números de 1 a 10 é {soma}')