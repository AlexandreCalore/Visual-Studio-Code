
const numAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
const limiteMaximo = 10;

function verificarPalpite() {
    const mensagem = document.getElementById("mensagem");
    if (tentativas >= limiteMaximo) {
        mensagem.innerHTML = `Limite de tentativas atingido. O jogo acabou! O número era ${numAleatorio}.`;
        return; 
    }

    tentativas++;

    const palpite = parseInt(document.getElementById("palpite").value);

    
    if (palpite === numAleatorio) {
        mensagem.innerHTML = `Parabéns! Você acertou o número ${numAleatorio} em ${tentativas} tentativas.`;
        return; 
    } else if (palpite < numAleatorio) {
        mensagem.innerHTML = `O número é maior. Tentativa ${tentativas} de ${limiteMaximo}.`;
    } else {
        mensagem.innerHTML = `O número é menor. Tentativa ${tentativas} de ${limiteMaximo}.`;
    }
    if (tentativas === limiteMaximo && palpite !== numAleatorio) {
        mensagem.innerHTML += `<br>Você atingiu o limite de ${limiteMaximo} tentativas. O jogo acabou! O número era ${numAleatorio}.`;
    }
}