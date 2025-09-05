listas = [1,2,3,4] #varios tipos de valores 
tupla = (1,2,3,4)  #um valor só com varios elementos,mas é imutavel, nao pode ser alterado

tarefas = []

def adicionaTarefa(tarefa):
    novaTarefa = (tarefa, 'pendente')
    tarefas.append(novaTarefa)

def exibeTarefas():
    for tarefa in tarefas:
        print(f'tarefa n°:{tarefa[0]}, {tarefa[1]}')

def concluirTarefa(tarefa):
    global tarefas
    novaLista = []
    for t in tarefas:
        if t[0] == tarefa:
            novaLista.append(tarefa, 'concluida')
        else:
            novaLista.append(t)
        tarefas = novaLista

def removerTarefa(tarefa): #Criamos a função para remover tarefas se estiverem na lista
    global tarefas
    tarefas = [t for t in tarefas if t[0] != tarefa]

# Código incial feito professor
# def buscarTarefa(tarefa): 
#     for t in tarefas:
#         if t[0] == tarefa:
#             print (f'Tartefa encontrada: {t[0]} - Status: {t[1]}')
#             return
#     print(f'Não achei: {tarefa}')

# Código otimizado
def buscarTarefa(tarefa): 
    resultado = [t for t in tarefas if t[0].lower() == tarefa.lower]
    if len(resultado) > 0:
        for titulo, status in resultado:
            print(f'Encontrada: {titulo} - Status {status}')
    else:
        print(f'Tarefa não encontrada {tarefa}')

            

adicionaTarefa('Arrumar Cama')
adicionaTarefa('Arrumar Casa')
adicionaTarefa('Arrumar Carro')
adicionaTarefa('Arrumar Cavalo')
exibeTarefas()