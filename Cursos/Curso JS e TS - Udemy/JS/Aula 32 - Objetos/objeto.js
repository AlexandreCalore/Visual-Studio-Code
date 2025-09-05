// Básico de objetos

// Para criarmos um objeto, utilizamos {}

const pessoa1 = { // Criamos um objeto sobre a constante pessoa1
    nome: 'Lucas',
    sobrenome: 'Silva',
    idade: 28
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade); // Forma direta, mas não é muito prática para múltiplos objetos

// Função para criar objetos de forma prática
function criaPessoa(nome, sobrenome, idade) { // Recebe argumentos para definir propriedades
    return {
        nome: nome, // Define a propriedade nome com o valor recebido no argumento
        sobrenome: sobrenome,
        idade: idade 
    };
}

const pessoa2 = criaPessoa('Ana', 'Oliveira', 22);
console.log(pessoa2); // Mais prático para criar e imprimir múltiplos objetos

console.log(`${this.pessoa2}`); // Serve para acessar contexto de propriedades em objetos ou funções
