# Grid: Gap e Espaçamento entre Linhas e Colunas

## Conceito
**Gap** define o **espaçamento entre linhas e colunas** dentro de uma grid.

---

## Propriedades

- **row-gap** → espaçamento entre **linhas**
```css
row-gap: 20px;
```

- **column-gap** → espaçamento entre **colunas**
```css
column-gap: 20px;
```

- **gap** → define **linha e coluna** em uma única propriedade:
```css
gap: 30px 20px; /* 30px linhas, 20px colunas */
```

---

## Alternativa sem Gap

- Antes do suporte completo a `gap`, era comum criar **gambiarras**:
  - Adicionar `margin-bottom` e `margin-right` aos itens  
  - Criar um container extra para compensar espaços  
  - Usar `overflow-x: hidden` para esconder barras de rolagem que apareciam devido ao espaçamento extra

> É importante testar nos navegadores e suas versões para garantir compatibilidade com `gap` e outras propriedades modernas.
