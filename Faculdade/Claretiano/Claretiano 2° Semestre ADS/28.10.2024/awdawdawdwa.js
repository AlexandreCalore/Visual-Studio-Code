// Gera o número aleatório entre 1 e 100
const numAleatorio = Math.floor(Math.random() * 100) + 1;
// Contagem das tentativas
let tentativas = 0;
// Máximo de tentativas
const limiteMaximo = 10;

function verificarPalpite() {
    while (tentativas <= limiteMaximo )
    tentativas++;

    const palpite = parseInt(document.getElementById("palpite").value);

    if (palpite===numAleatorio){
        mensagem.innerHTML = `Você acertou o número ${numAleatorio} em ${tentativas} tentativas.`; return;
    } else if (palpite<numAleatorio){
        mensagem.innerHTML = `Errou, o número sorteado é menor. Restam ${tentativas} tentativas.`; return;
    } else (palpite>numAleatorio){
        mensagem.innerHTML = `Errou, o número sorteado é maior. Restam ${tentativas} tentativas.`; return;
    }
mensagem.innerHTML = `Você atingiu o limite de ${limiteMaximo} tentativas. O jogo acabou! O número era ${numAleatorio}.`;
}

    // Variável mensagem para ser utilizada ao devolver ao HTML
    

    // Condição 01
    // Verifica se o número de tentativas já atingiu o limite
    //If... caso seja verdadeiro devolver uma mensagem de que já deu o limite em seguida inserir a palavra return.
    // return será utilizado para finalizar o processo. ok

    // Condição 02
    // Incrementa o contador de tentativas
    // coloca a variável de tentativas para + 1

    // Condição 03
    // Verifica se o palpite é maior, menor ou igual ao número aleatório
    // Criar as condições if e else para validar as informações se é maior ou menor
    // Exemplo de devolução da mensagem para o HTML    
    // mensagem.innerHTML = `O número é maior. Tentativa ${tentativas} de ${limiteMaximo}.`;
    
    // Condição 04
    // Verifica se atingiu o limite após o último palpite
    // Faz a ultima validação para verificar se o registro já atingiu o valor máximo
    // IF (TENTATIVA = LIMITE MAXIMO) E (PALPITE SEJA DIFERENTE DO NUMERO ALEATÓRIO)
    // Caso a condição seja verdade o sistema deve retornar alem da mensagem da condição 04 a mensagem a seguir
    //   mensagem.innerHTML += `<br>Você atingiu o limite de ${limiteMaximo} tentativas. O jogo acabou! O número era ${numAleatorio}.`;
 
}
