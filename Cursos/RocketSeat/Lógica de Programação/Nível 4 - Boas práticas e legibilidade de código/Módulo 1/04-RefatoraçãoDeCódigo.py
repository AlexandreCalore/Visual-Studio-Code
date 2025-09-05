# Refatorar é reescrever partes do código, para que continue fazendo a mesma coisa de uma forma melhorada, deixando mais otimizado, performatico etc.

# O código que trabalharemos em cima será esse:

# nota1 = 7
# nota2 = 6
# media = (nota1 + nota2) / 2
# if media >= 6:
#     print("Aprovado")
# else:
#     print("Reprovado")

# nota3 = 8
# nota4 = 9
# media2 = (nota3 - nota4) / 2
# if media2 > 6:
#     print("Aprovado")
# else:
#     print("Reprovado")

# Conforme o professor comentou, este código é redundante e se torna inconsistente por ter varios pontos a serem verificados. Além de conter erro semântico.

nota1 = 7
nota2 = 6
nota3 = 8
nota4 = 9

def calcular_media(a, b):
    return (a + b)/2

def verifica_situacao(calcular_media):
    return 'Aprovado' if calcular_media >=6 else 'Reprovado'


media1 = calcular_media(nota1, nota2)
print(f'O aluno foi: {verifica_situacao(media1)}')

media2 = calcular_media(nota3, nota4)
print(f'O aluno foi: {verifica_situacao(media2)}')



