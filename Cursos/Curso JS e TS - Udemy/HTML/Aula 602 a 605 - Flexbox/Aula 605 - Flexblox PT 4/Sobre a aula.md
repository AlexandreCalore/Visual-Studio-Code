# Flexbox Aninhado em CSS

## Conceito
É possível **criar Flexboxes dentro de outros Flexboxes**, permitindo layouts mais complexos e estruturados.  
O elemento pai define o **main axis principal**, enquanto os filhos podem ter seu próprio eixo.

---

## Exemplo
- **Container principal** → `display: flex` e `flex-direction: row` (eixo horizontal)  
- **Colunas internas** → `display: flex` e `flex-direction: column` (eixo vertical para organizar conteúdo interno)

```html
<div class="container">
  <div class="coluna">
    <div class="lorem">Lorem 1</div>
    <div class="lorem">Lorem 2</div>
  </div>
  <div class="coluna">
    <div class="lorem">Lorem 3</div>
    <div class="lorem">Lorem 4</div>
  </div>
</div>
```

```css
.container {
  display: flex;
  flex-direction: row; /* eixo horizontal */
}

.coluna {
  display: flex;
  flex-direction: column; /* eixo vertical dentro da coluna */
  margin: 10px;
}

.lorem {
  padding: 10px;
  background-color: #ddd;
  margin-bottom: 10px;
}
```

> Cada coluna se comporta como um Flexbox independente, alinhando seus elementos internos na **vertical**, enquanto o container principal alinha as colunas na **horizontal**.
