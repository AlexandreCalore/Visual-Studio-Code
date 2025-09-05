listas = [1,2,3,4] #varios tipos de valores 
tupla = (1,2,3,4)  #um valor só com varios elementos,mas é imutavel, nao pode ser alterado

tarefas = []

def adicionaTarefa(tarefa):
    novaTarefa = (tarefa, 'pendente')
    tarefas.append(novaTarefa)

def exibeTarefas():
    for tarefa in tarefas: #tarefas seria nossa lista, e tarefa é uma variavel que criamos para receber todos os itens da lista
        print(f'tarefa n°:{tarefa[0]}, {tarefa[1]}')

def concluirTarefa(tarefa): #até este momento, criamos uma nova lista de fato para ser utilizado no lugar da tupla pois a tupla é imutavel, e para nossa tarefa que visava atualizar a condição da tupla, fica inviável.
    global tarefas
    novaLista = []
    for t in tarefas:
        if t[0] == tarefa:
            novaLista.append(tarefa, 'concluida')
        else:
            novaLista.append(t)
        # forma abreviada do if/else: novaLista.append(t if t[0] != tarefa else (tarefa, 'concluida'))
        tarefas = novaLista

        # parei faltando 2:56



adicionaTarefa('Arrumar Cama')
adicionaTarefa('Arrumar Casa')
adicionaTarefa('Arrumar Carro')
adicionaTarefa('Arrumar Cavalo')
exibeTarefas()