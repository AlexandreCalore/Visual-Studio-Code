const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(pares); // [2, 4]