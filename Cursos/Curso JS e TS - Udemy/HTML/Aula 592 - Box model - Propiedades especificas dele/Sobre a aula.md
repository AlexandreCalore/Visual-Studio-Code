# Comportamento da `div` no CSS

A tag `div` possui, por padrão, o comportamento **display: block**, ocupando toda a largura disponível e ajustando sua altura de acordo com o conteúdo. Esse comportamento é implícito no HTML, portanto declarar `display: block` explicitamente costuma ser redundante.  

Ao definir largura e altura, o bloco se ajusta conforme o valor estabelecido. Por exemplo, se a largura for definida como `50%`, a `div` ocupará metade da tela, ajustando-se dinamicamente ao tamanho da janela.

## Controle de conteúdo que ultrapassa o bloco

Quando o conteúdo interno excede o espaço da `div`, ele pode ultrapassá-la. Para lidar com isso utilizamos a propriedade `overflow`:

- `overflow: hidden` → esconde o conteúdo excedente.  
- `overflow-x` / `overflow-y` → controla o transbordamento no eixo horizontal ou vertical.  
- `overflow: scroll` → adiciona uma barra de rolagem sempre, mesmo que o conteúdo caiba.  
- `overflow: auto` → adiciona a barra de rolagem somente quando necessário.  

## Propriedades de tamanho

As principais propriedades para controlar o tamanho de uma `div` são:  

- `width`  
- `height`  

Para criar layouts mais responsivos, utilizamos:  

- `max-width` / `min-width`  
- `max-height` / `min-height`  

Essas propriedades definem limites mínimo e máximo, garantindo que ao redimensionar a janela do navegador, a `div` respeite os valores estabelecidos.  

## Centralização e espaçamento interno

O conteúdo pode ser centralizado dentro da `div`, e o uso de **padding** permite criar espaçamento interno, “afastando” o conteúdo das bordas do elemento e melhorando a legibilidade.  
