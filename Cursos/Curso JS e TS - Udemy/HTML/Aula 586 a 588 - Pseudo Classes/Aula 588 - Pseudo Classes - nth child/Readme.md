## Pseudo classes

**NTH-Child:**

Vai selecionar a partir de um grupo de irmãos alguns "irmãos" especificos e aplicar a eles a estilização definida.

Entende se como irmãos tudo aquilo que tenha o mesmo pai, por exemplo podemos considerar uma sequencia de <p></p> ou varias <li> dentro de uma Ul por exemplo, como sendo "irmãos".

E na hora de estilizar, aplicamos o código: "ul li:nth-child", podendo acrescentar as seguintes caracteristicas:

:nth-child(odd) - ODD: impar - Seleciona os numeros impar e os estiliza

:nth-child(even) - Even: Par - Seleciona os pares assim como acima.

:nth-child(2) - Seleciona aquela linha/sequencia em especifico e o estiliza (no caso, o item de n°2).

:nth-child(3n) - Vai estilizar a linha de 3 em 3 por exemplo.

:nth-child(2n+12) - A partir da linha n°12, ele começa a estilizar de 2 em 2

