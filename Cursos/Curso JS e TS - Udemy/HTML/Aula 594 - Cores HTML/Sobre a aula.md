# Tipos de cores no CSS

No CSS, existem diferentes formas de definir cores. Cada tipo de notação possui suas características e usos específicos.

## Pelo nome

Algumas cores podem ser declaradas diretamente pelo nome, de forma autoexplicativa, como:

```css
color: red;
color: blue;
color: green;
```

## Hexadecimal

O formato **hexadecimal** utiliza uma combinação de números e letras (0–9 e A–F) para representar os valores de vermelho, verde e azul (RGB).  
A notação segue o padrão:

- `#RRGGBB` → dois dígitos para vermelho, dois para verde e dois para azul.  

Exemplo:

```css
color: #FFFFFF; /* branco */
color: #FF0000; /* vermelho */
```

Quando os valores são repetidos, é possível abreviar para apenas 3 caracteres:  

```css
color: #FFF; /* branco */
color: #000; /* preto */
```

## RGB e RGBA

O formato **RGB** utiliza números de 0 a 255 para representar as intensidades de vermelho, verde e azul.  

Exemplo:

```css
color: rgb(128, 128, 128); /* cinza */
```

Já a versão **RGBA** adiciona um quarto valor, o **alpha**, que define a opacidade (0 = totalmente transparente, 1 = totalmente opaco).  

Exemplo:

```css
color: rgba(128, 128, 128, 0.6); /* cinza com 60% de opacidade */
```

## HSL e HSLA

O formato **HSL** utiliza três parâmetros:  

- **Hue (matiz)** → grau na roda de cores (0 a 360).  
  - 0 = vermelho  
  - 120 = verde  
  - 240 = azul  
- **Saturation (saturação)** → percentual.  
  - 0% = tons de cinza  
  - 100% = cor pura  
- **Lightness (luminosidade)** → percentual.  
  - 0% = preto  
  - 100% = branco  

Exemplo:

```css
color: hsl(120, 100%, 50%); /* verde puro */
```

O formato **HSLA** adiciona o **alpha** (opacidade), de forma semelhante ao RGBA:  

```css
color: hsla(240, 100%, 50%, 0.5); /* azul puro com 50% de opacidade */
```
