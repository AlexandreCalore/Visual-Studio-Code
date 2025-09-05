# Unidade de medida

Servem para determinar tamanho de algo. No CSS podemos usar vários tipos de unidade:

- **cm**
- **mm**
- **in**

## Medida absoluta
São medidas que não são baseadas em nada, que não podem ser alteradas por forças externas.

## Medida relativa

- **em**  
  O elemento se comporta baseando-se em um elemento pai (entra naquele conceito de herança, filhos e pais), de acordo com o tamanho do mesmo, trabalhando em escala no que diz respeito a tamanhos.  
  - 1em → 100% do elemento pai  
  - 0.5em → 50% do elemento pai  
  Exemplo: se o elemento pai está com `font-size: 50px`, o elemento "filho" vai herdar nesse caso 50px (em escala).

- **rem**  
  Ao invés de se basear no elemento próximo, vai se basear no elemento **root** (o `html`, por exemplo).  
  Funciona da mesma forma que o `em`, mas o ponto de referência é o elemento raiz.

### Como fazer com que o rem se pareça com pixels para acessibilidade?
O navegador deixa por padrão `16px`. Convertemos 16px em 1rem completo.  
Definindo `font-size: 62.5%` no `html`, temos:  
`16px × 62.5% = 10px`.  
A partir desse valor, podemos definir escalas de fontes sem impedir que o usuário altere o tamanho no navegador.

## Outras unidades

- **vw** → 1% da largura do viewport (área visível do navegador).
- **vh** → 1% da altura do viewport.
- **vmin** → menor parte do viewport.
- **vmax** → maior parte do viewport.
- **%** → baseada no elemento pai.

## Exemplo prático
Foram adicionadas 3 divs com classes `color-one`, `color-two` e `color-three`, simulando uma landing page.  
Antes da div foram adicionados links com `#one`, `#two`, `#three`, onde a cerquilha (`#`) + nome do id leva para o elemento correspondente.  

Também foi usado no CSS:

```css
html {
  scroll-behavior: smooth;
}

Assim, ao rolar pela página, o efeito será de deslizar suavemente.