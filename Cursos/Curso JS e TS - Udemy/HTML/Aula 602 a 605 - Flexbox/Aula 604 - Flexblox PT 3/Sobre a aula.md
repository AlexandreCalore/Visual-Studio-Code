# Flexbox: Flex Grow, Flex Shrink, Flex Basis e Order

## Flex Grow
- **flex-grow** → divide o espaço disponível entre os elementos de acordo com sua proporção.  
- Evita que fiquem **espaços vazios** no container.

```css
.item {
  flex-grow: 1; /* elemento ocupa espaço proporcional */
}
```

> Exemplo: `flex-grow: 2` em um item faz com que ele receba **2x mais espaço** que os demais.

---

## Flex Basis
- **flex-basis** → define um **tamanho inicial pré-determinado** para o item antes do espaço restante ser distribuído pelo `flex-grow`.  
- Pode ser definido em **px**, `%` ou outras unidades.

```css
.item {
  flex-basis: 320px; /* tamanho inicial definido */
}
```

> Se houver espaço restante após aplicar `flex-basis`, ele será distribuído conforme `flex-grow`.

---

## Flex Shrink
- **flex-shrink** → permite que o item **diminua ou não** quando o container for menor que o tamanho do elemento.

```css
.item {
  flex-shrink: 1; /* elemento pode encolher */
}
```

---

## Flex shorthand
- A propriedade `flex` é uma **abreviação** de `flex-grow`, `flex-shrink` e `flex-basis`:

```css
.item {
  flex: 1 0 320px; /* flex-grow 1, flex-shrink 0, flex-basis 320px */
}
```

---

## Manipulação com nth-child
- É possível aplicar estilos específicos para itens individuais usando **`:nth-child`**:

```css
.container div:nth-child(2) {
  flex-grow: 2; /* recebe 2x mais espaço */
}

.container div:nth-child(3) {
  flex-wrap: nowrap;
  justify-content: flex-end; /* posiciona no final */
}

.container div:nth-child(4) {
  align-self: stretch; /* estica o item */
}
```

---

## Order
- **order** → define a **ordem de exibição** dos itens no container flex.  
- O valor numérico determina a posição; itens com **mesmo valor** permanecem na ordem original do HTML.

```css
.item:nth-child(2) {
  order: 1;
}

.item:nth-child(3) {
  order: 3;
}
```