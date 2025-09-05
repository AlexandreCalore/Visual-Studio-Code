# Resumo do Projeto de Landing Page

## Estrutura Inicial (até minuto 13:27)
- Criou uma `section` principal.
- Inseriu uma `nav` para a logo.
- Adicionou um `aside` com uma `ul` dentro, contendo os links do menu.
- Estilizou a `nav` com **flexbox**, mantendo os links como `display: block` para controlar o espaçamento (`space-between`).
- Ajustou cores da `nav` e criou a variável `--light-grey`.
- Aplicou `box-sizing: border-box` no menu.
- Removeu `padding-top` e `padding-bottom` da `nav`, deixando os links empurrarem os elementos corretamente.

## Organização de Arquivos
- Distribuiu os arquivos CSS de acordo com o tipo:
  - `variaveis.css`
  - `classes.css`
  - `elements.css`
  - `styles.css`
  - `menu.css`

## Primeira Seção
- Estruturou o título e a imagem dentro de uma `div` com **grid**.
- Alinhou o texto ao centro usando `flex-row wrap`.
- Ajustou espaçamento entre letras e centralizou verticalmente usando `top: -6rem` e `position: relative`.
- Inseriu imagem SVG na pasta do projeto, referenciou no CSS e definiu `width: 100%` e `height: auto`.
- Configurou `z-index` do menu para 1, garantindo que a imagem não sobreponha o menu ao rolar a página.

## Sessão Top 3 Jobs
- Aula 615-617: Criou a seção **Top 3 Jobs**.
- Ajustou `min-height` para melhor exibição e corrigiu erros de layout.
- Aula 618: Copiou o layout do Top 3 Jobs para criar a galeria.

## Referências
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/) – atalhos para agilizar escrita de CSS/HTML.
