# Prioridade e Especificidade no CSS

No CSS, a definição de prioridades segue uma hierarquia chamada **especificidade**. Essa hierarquia determina qual regra será aplicada quando houver conflito entre diferentes seletores.

A ordem geral de prioridade é a seguinte:

1. Especificidade  
2. Empate (ordem de declaração)  
3. `style` inline  
4. `!important`

Na prática, cada tipo de seletor recebe um peso numérico, que funciona como se fosse uma pontuação. A lógica básica pode ser entendida assim:

- `000` → Nada definido  
- `101` → Seleção de um **ID** junto de um elemento  
- `010` → Seleção de apenas uma **classe**  
- `001` → Seleção de apenas um **elemento**

Quanto maior a soma desses valores, maior será a prioridade da regra. Também é possível aumentar a força de um seletor combinando diferentes tipos.  

Por exemplo:

```css
body#b p #p.p::selection:hover
```

Esse seletor tem peso `223`, resultado da soma dos seletores envolvidos.  

Além disso, existe o modificador `!important`, que ignora a pontuação de especificidade e aplica a regra com prioridade máxima. Porém, até mesmo o `!important` perde para o `style` escrito diretamente no HTML, que é a forma mais forte de aplicar estilos.

Em resumo, a definição de prioridades no CSS segue sempre esta ordem:

**Especificidade → Empate → `style` inline → `!important`**

---

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

---

# A propriedade `display` no CSS

A propriedade **display** define como os elementos HTML são exibidos na página. Por padrão, muitos elementos já vêm com `display: block`, o que significa que ocupam toda a largura disponível, mesmo que o conteúdo interno não preencha esse espaço.

## Tipos principais de display

- **block** → Elementos ocupam toda a largura disponível, forçando uma quebra de linha antes e depois.  
- **inline-block** → Transforma os blocos em elementos que permanecem na mesma linha, respeitando largura, altura, margens e paddings.  

## Margens e sobreposição

Por natureza, margens verticais de elementos adjacentes podem se sobrepor.  
Exemplo: dois blocos com `margin: 20px` não resultam em 40px entre eles, mas em apenas 20px, pois as margens colapsam.

## Uso do float

Quando aplicamos **float**, os elementos deixam de respeitar o colapso de margens, somando os valores. Assim, dois elementos com `margin: 20px` passam a ter efetivamente 40px de distância.  

Outro efeito do `float` é que elementos seguintes (como parágrafos) podem ser empurrados para a lateral, ocupando o espaço “livre” deixado. Isso pode causar desalinhamentos.

### Resolvendo com clear

Para evitar que elementos sejam empurrados para a lateral pelos blocos flutuantes, utiliza-se a propriedade **clear**:

- `clear: left` → impede sobreposição do lado esquerdo.  
- `clear: right` → impede sobreposição do lado direito.  
- `clear: both` → impede dos dois lados, empurrando o elemento para baixo dos flutuantes.

Exemplo aplicado ao parágrafo: com `clear: both`, ele se posiciona abaixo das divs flutuadas.

## Técnica com pseudo-elemento

Uma técnica comum era limpar o contexto de float utilizando um pseudo-elemento:

```css
.grid::after {
    content: '';
    clear: both;
    display: block;
}
```

Assim, a própria `.grid` faz a limpeza, evitando que conteúdos seguintes fiquem comprimidos nas laterais.

## Box-sizing e somatório de espaçamentos

No exemplo da aula, foi criada uma `div` com classe `.conteudo` dentro de outras divs.  
Ao aplicar `box-sizing: border-box`, o cálculo de largura passa a incluir `padding` e `border`, evitando que o layout “estoure”.  

Entretanto, quando se utilizava `float`, os paddings somavam. Exemplo:  
- `padding` interno de 15px na `.grid.col`  
- `padding` externo de 15px na `.grid`  
Resultado: total de 30px de espaçamento.

## Substituição do modelo antigo

O uso de `float` para criação de layouts está obsoleto. Atualmente, o recomendado é utilizar modelos mais modernos e eficientes, como:

- **flexbox** (`display: flex`)  
- **grid layout** (`display: grid`)  
