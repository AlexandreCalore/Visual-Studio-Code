x = [1,2,3]

x[0] = 10
x[1] = 20
x[2] = 30

# temos em python:
# append(coloca no final)
# sort(ordena)
# reverse (inverte a ordem da lista)
# pop(remove o ultimo)
# insert(1,7) (insere nesse caso, na pos. 1 o valor 7)
# O array permite você mesclar tipo de valores dentro dela: (x[1] = a; x[2] = 1) 
# Além de deixar incluir uma lista dentro de outra lista (x.insert[2,[1,2,3]])

notas = [1.5,9.3,5.9,8.9]
media = 0

for nota in notas:
  media += nota

media/=4

print(f'A média de notas foi de {media}')