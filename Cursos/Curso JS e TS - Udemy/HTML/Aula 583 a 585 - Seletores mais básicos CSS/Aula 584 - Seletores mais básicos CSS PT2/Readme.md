## Seletores CSS

A aula da continuidade ao assunto de CSS e seletores de classes:

**SELETORES DE IRMÃOS:**

Você consegue selecionar por exemplo, elementos que estão seguidos de algum evento/caracteristica:

.pai2 h1+p (Esse + representa na prática como se eu estivesse falando para o CSS que eu quero selecionar todo P da classe pai2 que venha depois de um H1 somente.)

O mesmo vale para o inverso,

.pai2 p+h1 (Quero selecionar todo H1 que apareça depois de um paragrafo)

Existe também a opção de você selecionar todo o conteúdo/TAG/Classe que venha após alguma caracteristica, parecido com o que fizemos acima, porém seleciona todos sem exceção:

.pai2 h1~p (Depois de um titulo H1, selecione todos os paragrafos possiveis dentro da classe Pai2)

Por fim me ensina e permite que eu crie um atributo para qualquer classe ou tag, e na hora de você definir o CSS, você pode selecionar aquele atributo em especifico citando-o entre colchetes [meu-atributo="valorqualquer"] 

(Além da seleção por atributo, posso selecionar um atributo em especifico que contenha o "valorqualquer")