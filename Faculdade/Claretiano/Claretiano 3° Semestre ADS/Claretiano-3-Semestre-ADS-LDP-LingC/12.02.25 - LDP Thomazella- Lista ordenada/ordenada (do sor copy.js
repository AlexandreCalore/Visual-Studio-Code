const numeroLista = [43, 12, 89, 5, 34, 77, 21, 66, 9, 50]

const numeroOrder = numeroLista.sort(function(a,b) {return a-b;});

console.log("Númeors Desordenados", numeroLista)

console.log("Números Ordenados", numeroOrder)