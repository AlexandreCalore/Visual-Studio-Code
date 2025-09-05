# Para nomes de funções, temos os seguintes padrões:

# snake_case - quando possui o undescore para nomeação, utilizadas em funções e variáveis em Python
# camelCase - Inicio de cada palavra após a primeira, sendo maiuscula para diferenciar, usado em JS e JAVA, mas não em  Pyhton
# PascalCase - Recomendado para nomes de classes em python, a diferença dela para a camelCase é que a primeira palavra começa maiuscula também
# kebab-case - Funciona como um "espeto", não podemos usar em variáveis por conta do '-' que pode ser confundido com um sinal de menos. exemplo: teste-de-variavel
# SCREAMING_SNAKE_CASE - Usado para constantes em Python

def calcular_media(notas):
    return sum(notas) / len(notas)

def verificar_aprovacao(media):
    if media >= 6:
        return "Aprovado"
    else:
        return "Reprovado"

#Por fim, abordou sobre separar responsabilidade de uma função. Por exemplo essa acima, está calculando média + verificando se foi aprovado ou não e imprimindo o resultado.

#No final, seria assim o código correto:

def calcular_media(notas):
    return sum(notas) / len(notas) #Desmembrado o if/else + print em outra função

def verificar_aprovacao(media):
    if media >= 6:
        return "Aprovado"
    else:
        return "Reprovado"     