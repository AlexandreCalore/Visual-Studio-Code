let umaString = "Um \"Texto\""; // A barra invertida serve para escapar o texto

console.log(umaString);

console.log(umaString[4]); // Uma string é baseada em índice [0,1,2,...], cada letra tem um índice de 0 até o tamanho máximo
console.log(umaString.charAt(4)); // Mesma função, porém com método explícito
console.log(umaString.concat(4)); // Concatenar, ou usar template string `${}`
console.log(umaString.indexOf('Texto')); // Retorna onde começa a palavra, nesse caso o 'T' de Texto
console.log(umaString.indexOf('Texto', 3)); // Retorna o índice da palavra a partir do índice 3
console.log(umaString.lastIndexOf('Texto', 3)); // Retorna o índice da palavra do final para trás, até o índice 3
console.log(umaString.match(/[a-z]/g)); // Expressão regular para encontrar todas as letras minúsculas (retorna array)
console.log(umaString.match(/[a-z]/)); // Expressão regular para encontrar a primeira letra minúscula
console.log(umaString.search(/x/)); // Similar ao indexOf, mas aceita expressão regular
console.log(umaString.replace(/T/,'Teste')); // Substitui 'T' por 'Teste'
console.log(umaString.length); // Retorna o tamanho da string
console.log(umaString.slice(1, 6)); // Fatiamento da string do índice 1 até 5
console.log(umaString.slice(-6, -1)); // Fatiamento da string usando índices negativos
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // Mesma função que slice, usando substring
console.log(umaString.split('t', 3)); // Divide a string em array usando 't' como separador, com limite de 3 elementos
console.log(umaString.toUpperCase()); // Converte todo o texto para maiúsculo
console.log(umaString.toLowerCase()); // Converte todo o texto para minúsculo
