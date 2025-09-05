# f(x) = y
# f(x,y,z) = 2x
# f(2) = 4
# f(5) = 10 são exemplos de casos onde seria usado uma função

def olaMundo(): #sintaxe para definir (def) uma função
  print('Ola mundo')

olaMundo()
olaMundo()
olaMundo()
olaMundo()
olaMundo()
olaMundo()

def olaPessoa(nome): #definimos uma função que tem um parametro a ser seguido
  print(f'Ola, {nome}!') #utilizado o 'f' para incluiur variaveis e texto dentro do print

olaPessoa('Alexandre') #passado o parametro 'Alexandre' para a função, que posteriormente ela coleta esse dado e printa na tela.
olaPessoa('Calore')
olaPessoa('Clemerson')

def dobro(numero):
  return numero * 2 #retornamos o valor na propia função, atribuindo a ela o resultado, e depois podendo trabalhar ele da maneira que bem entender.

print(dobro(5))

def multiplicaDoisNumeros(a, b):
  return a * b

print(multiplicaDoisNumeros(2,8)) #mesma linha de raciocinio, porém dessa vez passamos 2 parâmetros para a função

print(multiplicaDoisNumeros(2)) # por padrão vai retornar erro devido o 2° parâmetro não ter sido passado

# para retornar isso, podemos atribuir um valor padrão ao 'b' para que, quando não tiver valor, ele consiga efeturar a operação mesmo assim

def multiplicaDoisNumerosSemErro(a, b = 2):
  """multiplica 2 n°"""
  return a * b

print(multiplicaDoisNumerosSemErro(2))

x = 5 # Variavel global

def soma ():
  x = 10 # Variavel local
  print(x)
  return x + 1
soma() 
print(x) #Imprimi outro valor pois esse X é diferente do da função, sendo o escopo da função. Recomendavel ñ alterar variaveis globais, e sim usar o valor retornado da função