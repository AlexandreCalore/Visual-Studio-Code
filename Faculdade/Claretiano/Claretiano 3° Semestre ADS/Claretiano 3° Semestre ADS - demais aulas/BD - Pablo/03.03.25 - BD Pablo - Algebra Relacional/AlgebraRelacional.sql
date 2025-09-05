CREATE DATABASE aula_algebra_relacional;
USE aula_algebra_relacional;

CREATE TABLE alunos_computacao (
    matricula INT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT,
    semestre INT
);

CREATE TABLE alunos_matematica (
    matricula INT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT,
    semestre INT
);

INSERT INTO alunos_computacao VALUES
(1001, 'Ana Silva', 20, 3),
(1002, 'Bruno Santos', 22, 5),
(1003, 'Carla Oliveira', 19, 2),
(1004, 'Daniel Lima', 21, 4),
(1005, 'Eduardo Pereira', 23, 6);

INSERT INTO alunos_matematica VALUES
(1003, 'Carla Oliveira', 19, 2),
(1005, 'Eduardo Pereira', 23, 6),
(1006, 'Fernanda Costa', 20, 3),
(1007, 'Gabriel Martins', 22, 5),
(1008, 'Helena Souza', 21, 4);

CREATE TABLE disciplinas_computacao (
    codigo VARCHAR(10) PRIMARY KEY,
    nome VARCHAR(100),
    creditos INT
);

CREATE TABLE disciplinas_matematica (
    codigo VARCHAR(10) PRIMARY KEY,
    nome VARCHAR(100),
    creditos INT
);

INSERT INTO disciplinas_computacao VALUES
('COMP101', 'Introdução à Programação', 4),
('COMP102', 'Estruturas de Dados', 4),
('COMP103', 'Banco de Dados', 4),
('COMP104', 'Redes de Computadores', 3),
('COMP105', 'Sistemas Operacionais', 3);

INSERT INTO disciplinas_matematica VALUES
('MAT101', 'Cálculo I', 4),
('MAT102', 'Álgebra Linear', 4),
('MAT103', 'Estatística', 3),
('COMP103', 'Banco de Dados', 4),
('MAT105', 'Cálculo Numérico', 3);
