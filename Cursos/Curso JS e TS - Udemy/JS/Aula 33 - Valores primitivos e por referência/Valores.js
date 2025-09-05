// Primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol)  
// Resumem-se em valores que podem ser copiados diretamente

// Referência (mutável): array, object, function (array = [], objetos {})  
// Valores que são referenciados por padrão, ou seja, diferentes variáveis podem apontar para o mesmo endereço de memória

// Mutável: podemos entender como "passagem de referência" — a variável guarda o endereço de memória e não apenas o valor

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b); // Adiciona 4 no array A; B também reflete a alteração pois referencia o mesmo array

b.pop();
console.log(a, b); // Mesma lógica: pop em B altera o array referenciado por A

// Para copiar de fato os valores de A para B sem referência:
b = [...a];
b.push(20);
console.log(a, b); // Agora somente B é alterado, A permanece intacto

let c = {
    nome: 'Lucas',
    sobrenome: 'Silva'
};

let d = c;
console.log(d); // D referencia C, alterações em C refletem em D

// Para copiar somente os valores do objeto:
d = {...c};

c.nome = 'Alexandre';
console.log(d, c); // D permanece com os valores originais, C foi alterado
