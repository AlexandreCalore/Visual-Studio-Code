// CRIAR VARIAVEL DO NOME
// CRIAR A VARIAVEL DA IDADE
// VARIAVEL DO PESO
// VARIAVEL DA ALTURA
// CALCULAR IMC
// IMC = PESO / (ALTURA/ALTURA)
// PRINT DO NOME E O IMC

let NOME = 'Alexandre Calore'
let IDADE = 21
let PESO = 78
let ALTURA = 1.76
let IMC = (PESO/(ALTURA*ALTURA)).toFixed(2)

    

if(IMC<16.9) {console.log('O',NOME,'de', IDADE,'anos, tem o IMC de =', IMC,'estando então: Muito abaixo do peso')}
else if (IMC<18.4) {console.log('O',NOME,'de', IDADE,'anos, tem o IMC de =', IMC,'estando então: Abaixo do peso')}
else if (IMC<24.9) {console.log('O',NOME,'de', IDADE,'anos, tem o IMC de =', IMC,'estando então: Peso normal')}
else if (IMC<29.9) {console.log('O',NOME,'de', IDADE,'anos, tem o IMC de =', IMC,'estando então: Acima do peso')}
else if (IMC<34.9) {console.log('O',NOME,'de', IDADE,'anos, tem o IMC de =', IMC,'estando então: Obesidade grau I')}
else if (IMC<40) {console.log('O',NOME,'de', IDADE,'anos, tem o IMC de =', IMC,'estando então: Obesidade grau II')}
else if (IMC>40) {console.log('O',NOME,'de', IDADE,'anos, tem o IMC de =', IMC,'estando então: Obesidade grau III')}