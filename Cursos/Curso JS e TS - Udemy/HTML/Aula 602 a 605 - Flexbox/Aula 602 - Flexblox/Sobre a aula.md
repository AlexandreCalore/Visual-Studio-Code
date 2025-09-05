# Flexbox em CSS

## Conceito
O **Flexbox** permite criar caixas flexíveis, possibilitando alinhar e distribuir elementos de forma dinâmica.  
Por padrão, o conteúdo vem com `display: block`, ocupando toda a largura da tela. Ao usar `display: flex`, ganhamos diversas configurações avançadas.

---

## Direção dos Eixos

- **flex-direction** → define a direção do **main axis**:
  - `row` → eixo principal horizontal
  - `column` → eixo principal vertical
  - `row-reverse` / `column-reverse` → inverte a ordem dos elementos no eixo

> O eixo perpendicular ao principal é chamado de **cross axis**.

- **Main axis** → eixo principal (ex.: horizontal em `row`)  
- **Cross axis** → eixo perpendicular (ex.: vertical em `row`)  

---

## Alinhamento no Main Axis

- **justify-content** → alinha os elementos ao longo do main axis:
  - `flex-start` → início do eixo principal  
  - `flex-end` → fim do eixo principal  
  - `center` → centralizado  
  - `space-around` → distribui espaços proporcionais ao redor dos elementos  
  - `space-between` → distribui o espaço igualmente entre elementos  
  - `space-evenly` → distribui o espaço igualmente, incluindo as extremidades

---

## Alinhamento no Cross Axis

- **align-items** → alinha os elementos ao longo do cross axis:
  - `flex-start` → início do eixo perpendicular  
  - `flex-end` → fim do eixo perpendicular  
  - `center` → centralizado  
  - `baseline` → alinha pela base do texto, útil quando fontes têm tamanhos diferentes  
  - `stretch` → estica os elementos até ocupar todo o cross axis  

> Se o eixo principal for `column`, o `stretch` esticará horizontalmente; se for `row`, esticará verticalmente.

---

## Observações Adicionais

- Podemos combinar `flex-start`, `end`, `center`, etc., conforme a necessidade do layout.  
- É possível estilizar itens específicos usando **`:nth-child`**, como feito para o item 3 na aula, permitindo ajustes finos de alinhamento ou tamanho.

---

## Exemplo Prático
```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.container div:nth-child(3) {
  font-size: 20px;
}
```
