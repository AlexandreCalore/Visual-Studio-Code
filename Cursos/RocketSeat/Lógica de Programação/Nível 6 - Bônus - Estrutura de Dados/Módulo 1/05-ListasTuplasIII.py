listas = [1,2,3,4] #varios tipos de valores 
tupla = (1,2,3,4)  #um valor só com varios elementos,mas é imutavel, nao pode ser alterado

tarefas = []

def adicionaTarefa(tarefa):
    novaTarefa = (tarefa, 'pendente')
    tarefas.append(novaTarefa)

def exibeTarefas():
    if not tarefas:
        print('Lista vazia')
        return
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

def removerTarefa(tarefa):
    global tarefas
    tarefas = [t for t in tarefas if t[0] != tarefa]

def buscarTarefa(tarefa): 
    resultado = [t for t in tarefas if t[0].lower() == tarefa.lower]
    if len(resultado) > 0:
        for titulo, status in resultado:
            print(f'Encontrada: {titulo} - Status {status}')
    else:
        print(f'Tarefa não encontrada {tarefa}')

while True:

    print('Boas vindas ao gerenciador de lista de tarefas')
    print()
    print('O que você quer fazer agora?')
    print('1 - Listar tarefas')
    print('2 - Adicionar tarefas')
    print('3 - Remover tarefas')
    print('4 - Marcar tarefas como concluída')
    print('5 - Buscar tarefas')
    print('0 - Sair')
    opcao = int(input('Digite uma opção'))

    match opcao:
        case 1:
            exibeTarefas()
        case 2:
            tarefa = input('Digite a tarefa')
            adicionaTarefa(tarefa)
        case 3:
            tarefa = input('Digite a tarefa')
            removerTarefa(tarefa)
        case 4:
            tarefa = input('Digite a tarefa')
            concluirTarefa(tarefa)
        case 5:
            tarefa = input('Digite a tarefa')
            buscarTarefa(tarefa)
        case 0:
            break
        case _:
            print('Opção inválida')
    print()
    input('Pressione ENTER para continuar..')