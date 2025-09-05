# Posicionamento em CSS

## Top / Left / Right / Bottom
Definem a posição do elemento em relação ao **topo, esquerda, direita ou base** da página.  
Exemplo: `top: 50px;` move o elemento 50px para baixo a partir do topo.  
Podem receber valores negativos, ultrapassando os limites visíveis da tela.

---

## Static
É o comportamento padrão.  
Um elemento estático não responde a `top`, `left`, `right` ou `bottom`.  
Ele apenas ocupa sua posição normal no fluxo da página.

---

## Position: Relative
Permite usar `top`, `left`, `right` e `bottom`, tornando o posicionamento **relativo ao local original** do elemento.  
Ele se desloca, mas mantém o espaço que ocupava, como se ainda estivesse ali.  

Exemplo: se existem dois blocos acima e definirmos `top: 30px` no terceiro bloco, ele ficará 30px abaixo **em relação ao que já estaria normalmente**, sem empurrar os outros.

---

## Position: Absolute
O elemento passa a ter posição **absoluta**, independente dos demais, como se estivesse em outra camada.  
Ele **sobrepõe** os outros elementos e não influencia no fluxo da página.  

Exemplo clássico: uma caixa de destaque ou modal que escurece o fundo e aparece acima de tudo.

---

## Z-Index
Define a ordem das camadas (profundidade).  
Valores maiores ficam **acima** e valores menores ou negativos podem colocar elementos **atrás de todos os outros**.  
Funciona como as camadas no Canva ou Photoshop.

---

## Relative + Absolute
Quando um elemento com `position: absolute` está dentro de outro com `position: relative`,  
os limites (`top`, `left`, `right`, `bottom`) passam a ser definidos **a partir do elemento pai relativo**,  
e não mais da página inteira.

---

## Position: Fixed
Semelhante ao `absolute`, mas fica fixo **na tela**.  
Mesmo rolando a página, o elemento continua no mesmo lugar.  
Usado em menus fixos ou botões flutuantes.

---

## Position: Sticky
Comportamento híbrido.  
O elemento segue o fluxo normal até certo ponto, mas quando a rolagem o alcança, ele fica **fixo no topo** da página.  
Assim permanece até que outro elemento ocupe sua posição e o substitua.

---

## Resumo Visual
- **Static** → posição padrão, não se move.  
- **Relative** → desloca a partir da posição original.  
- **Absolute** → sai do fluxo, sobrepõe e ignora os outros.  
- **Fixed** → fixo na tela, não rola junto.  
- **Sticky** → fica fixo durante a rolagem em um ponto definido.  
