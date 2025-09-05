# Grid em CSS

## Conceito
O **CSS Grid** é semelhante ao Flexbox, mas específico para criar **grades e tabelas**.  
Uma grid possui **linhas e colunas**, permitindo organizar elementos de forma estruturada.

---

## Propriedades Básicas

- **grid-template-columns / grid-template-rows** → define a estrutura da grid (quantidade e tamanho das colunas/linhas)  
- **FR (Fraction)** → unidade proporcional. Ex.: 2 colunas com `1fr` cada ocupam igualmente o espaço disponível.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* primeira coluna 1fr, segunda 2fr */
  grid-template-rows: 100px 200px;
  gap: 10px; /* espaço entre itens */
}
```

---

## Repeat
- **repeat()** → facilita a repetição de padrões na grid:

```css
grid-template-columns: repeat(10, 1fr); /* 10 colunas de tamanho 1fr */
grid-template-columns: repeat(3, 1fr 2fr); /* repete padrão 1fr, 2fr três vezes */
```

- **auto-fill / auto-fit** com **minmax()** → cria grids responsivas sem necessidade de múltiplos breakpoints:

```css
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
```
> `auto-fill` quebra as colunas automaticamente e joga para a próxima linha conforme o tamanho máximo definido.

---

## Posicionamento de Itens

- **grid-column-start / grid-column-end** → define início e fim da coluna de um item  
- **grid-row-start / grid-row-end** → define início e fim da linha de um item  
- **grid-row-span / grid-column-span** → define quantas linhas ou colunas o item ocupa  

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3; /* ocupa 2 colunas */
  grid-row-start: 1;
  grid-row-end: 2; /* ocupa 1 linha */
}
```

- Pode-se usar **z-index** para sobrepor itens, caso linhas ou colunas se sobreponham.

---

## Resumo
O Grid permite:
- Criar grades proporcionais com `fr`  
- Repetir colunas facilmente com `repeat()`  
- Tornar layouts responsivos com `auto-fill` + `minmax()`  
- Mesclar colunas e linhas para controlar o tamanho e posicionamento dos itens  
