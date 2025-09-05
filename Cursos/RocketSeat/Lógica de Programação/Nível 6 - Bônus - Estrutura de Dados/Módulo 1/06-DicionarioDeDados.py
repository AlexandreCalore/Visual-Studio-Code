estudantes = {
    1: {'nome': 'joana', 'idade': 45, 'curso': 'Computação'},
    2: {'nome': 'Cleiton', 'idade': 35, 'curso': 'ADM'},
    3: {'nome': 'Roberto', 'idade': 78, 'curso': 'Computação'}
}

cursos = {'Computação', 'Matemática', 'ADM'}

estudantes_cursos = {
    'Computação': {1,3},
    'ADM': {2}
}

def adicionarEstudantes(matricula, nome, idade, curso):
    pessoa = {'nome': nome, 'idade': idade, 'curso': curso},
    estudantes[matricula] = pessoa
    if curso not in estudantes_cursos:
        estudantes_cursos[curso] = set()
    estudantes_cursos[curso].add(matricula)