# Legibilidade = fácil de ler e compreender

# 5 caracteristicas de um bom dev:
# 1- lê códigos
# 2- escrever bons códigos
# 3- entrega códigos (que vão ser usados de fato)
# 4- resolve problemas
# 5- compartilha o que sabe

# Pode se considerar, que o manifesto de boas práticas (pelo menos em pyhton) é o seguinte:

# Beautiful is better than ugly.
# Explicit is better than implicit.
# Simple is better than complex.
# Complex is better than complicated.
# Flat is better than nested.
# Sparse is better than dense.
# Readability counts.
# Special cases aren't special enough to break the rules.
# Although practicality beats purity.
# Errors should never pass silently.
# Unless explicitly silenced.
# In the face of ambiguity, refuse the temptation to guess.
# There should be one-- and preferably only one --obvious way to do it.
# Although that way may not be obvious at first unless you're Dutch.
# Now is better than never.
# Although never is often better than *right* now.
# If the implementation is hard to explain, it's a bad idea.
# If the implementation is easy to explain, it may be a good idea.
# Namespaces are one honking great idea -- let's do more of those!


#Exemplo de legibilidade ruim de um código:

a = 10
b = 20
c = a+b

if c > 25:
  print('OK') #caso onde o código para a máquina é correto, mas a legibilidade para quem vai ler é ruim.

#Exemplo de boa legibilidade de um código:

notas_prova1 = 10
notas_prova2 = 20
soma_notas = notas_prova1 + notas_prova2

if soma_notas > 25:
  print('OK') #Nomeação adequada para um bom entendimento e compreensão do código.