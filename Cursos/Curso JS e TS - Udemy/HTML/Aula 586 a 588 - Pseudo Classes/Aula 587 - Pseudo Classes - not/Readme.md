## Pseudo classes

Demonstrou a negação na prática.

Usamos nesse caso como exemplo a estilização para vários paragrafos, e definimos uma classe nomeada como .meio em apenas uma div, para então colocar em prática a "negação" da estilização somente para esta classe:

p:not(.meio){
    color: blue
}

ignorando somente aquele que tinha .meio como classe.

Outro exemplo válido, apresentado no curso, foi utilizando input:checkbox:

input:not(:checked)+p{
    backgroundcolor: yellow
}

ou seja, sinalizou que se não estivesse habilitado o checkbox, seria estilizado o fundo do próximo paragrafo como sendo amarelo.