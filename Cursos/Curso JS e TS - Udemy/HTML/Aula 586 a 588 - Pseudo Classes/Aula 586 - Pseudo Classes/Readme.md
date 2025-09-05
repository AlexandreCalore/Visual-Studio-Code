## Pseudo classes

Uma pseudo classe, são estados que um elemento adota ao você passar o mouse por cima dele.

Durante a aula ele explicou varios tipos de código relacionados ao pseudocódigo, que para citar eles devemos seguir a seguinte estrutura:

**.heading:hover{}**

Após esse exemplo ele demonstrou como seria os demais códigos, podendo estilizar de varias maneiras:

*a:link/visited/active*

Estiliza um link href no html, neste caso podendo definir cores, decoração de texto e tudo mais se aquele link foi selecionado ou não e também segurando o mouse por cima.

*a:hover*

Estiliza algum elemento do qual o mouse está por cima, podendo mudar a cor por exemplo.

*input:focus*

Estiliza o elemento assim que ele é selecionado utilizando tab, neste caso usamos como exemplo uma caixa de texto.

*input:disable* 

Para os elementos com a caracteristica de desabilitado, podemos estiliza-los como bem entender

*input:enable* 

Parecido com o método acima, contudo como no input não precisa ser descrito enable, ele acaba estilizando qualquer elemento que não tenha em seu texto o disable.

*cursor: not-allowed* 

Serve para definir como característica para o elemento que você estilizou, que ao passar o mouse por cima do mesmo, aparece o símbolo de "bloqueado" no lugar do cursor.

*input:checked* 

Parecido com o caso do disable/enable. Estiliza o input (geralmente vai ser checkbox mesmo, não vejo outra aplicação para outro elemento) quando selecionado. No exemplo eu mudei o tamanho do texto.

*input:checked~p*

Funciona assim como estudado nos seletores de atributos, mas nesse caso, ao dar check na checkbox, ele estilizaria o proximo paragrafo abaixo dele.

*.pai .lista li:first-child*

Estilizamos com base no "filho" da lista, nesse caso, estilizado a primeira linha. 
OBS: ensinou também uma técnica onde quando fazemos li*3 conseguimos colocar 3 list itens de uma vez só, e usar TAB para inserir valores diretamente em cada uma delas.