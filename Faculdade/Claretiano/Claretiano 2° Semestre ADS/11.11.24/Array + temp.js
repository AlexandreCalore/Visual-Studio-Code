let temperatura = [22.8, 18.9, 17.6, 28.5, 12.9]

let mediaTemperatura = calcMediaTemp(temperatura)
let maiorTemperatura = calcMaiorTemp(temperatura)

function calcMediaTemp(temperatura){
    let soma = 0;
    for (let i = 0; i<temperatura.length; i++) {
        soma += temperatura[i];
    } 
    return soma / temperatura.length;  
}

function calcMaiorTemp(temperatura) {
    let maiorTemp = temperatura[0];
    for (i=1;i<temperatura.length;i++){
    if (temperatura[i] > maiorTemp){
        maiorTemp = temperatura[i] 
        }
    }
    return maiorTemp
}

function calcMenorTemp(temperatura) {
    let menorTemp = temperatura[0];
    for (i=1;i<temperatura.length;i++){ 
    if (temperatura[i] < menorTemp){
        menorTemp = temperatura[i] 
        }
    }
    return menorTemp
}

console.log(`Media da temperatura: ${calcMediaTemp(temperatura).toFixed(2)}`);
console.log(`Media da temperatura: ${calcMaiorTemp(temperatura).toFixed(2)}`);
console.log(`Media da temperatura: ${calcMenorTemp(temperatura).toFixed(2)}`);