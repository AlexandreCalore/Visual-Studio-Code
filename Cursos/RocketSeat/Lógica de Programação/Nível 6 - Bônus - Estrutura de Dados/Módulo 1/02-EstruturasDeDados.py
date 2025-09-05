# Estruturas de dados

# - Listas: conjunto de dados ordenados - mutável

# - Listas: conjunto de dados ordenados - mutável
lista = [1, 4, 3, 4]
frutas = ['banana', 'maçã']
mista = [1, 'texto', 5, True]

# Dicionários (dict): conjunto de pares na forma chave e valor
pessoa = { 'nome': 'João', 'idade': 18 }
carro = {
    'marca': 'Volks',
    'modelo': 'Fusca',
    'cor': 'azul',
    'ano': 1970
}

# Conjuntos (sets): Conjunto de dados não ordenados e sem repetição
c1 = {1, 2, 3}
c2 = {3, 2, 1}
c3 = {1, 2, 2, 2, 2, 2, 3, 3, 2, 1, 2, 3} #não importa a ordem, ele remove duplicatas.

 #Em seguida, passou operações que se pode fazer com os dados:

# criou os conjuntos:
# s : 2,3,4,5,6,7,8,42,56
# s2: 4,8,12,16

#s & s2 (vai selecionar somente os conjuntos em comum em ambas as listas)

#s | s2 (concatena todos os dados)

#s - s2 (Remova todos os dados em comum que tem no s que estão no s2)

#s < s2 (Aqui, estamos questionando se s2 é um subconjunto de s, se é igual por exemplo)

#pessoa['nome'] (Para acessar os nomes cadastrados)

#pessoa['nome'] = 'josé' (atribuimos um novo nome, para substituir o anterior)

#pessoa['cpf'] = '12' (Criamos um novo atributo e inserimos o valor)

#if (pessa[idade] >=18):
#   print('Pode dirigir') (podemos fazer operações com os dicionarios também)


#notas[8,8.6,9,3]
#sum(notas) (somamos automaticamente as notas)

#len(notas) (é o mesmo que length, onde conseguimos verificar o tamanho)

#media =  #sum(notas) / len(notas)