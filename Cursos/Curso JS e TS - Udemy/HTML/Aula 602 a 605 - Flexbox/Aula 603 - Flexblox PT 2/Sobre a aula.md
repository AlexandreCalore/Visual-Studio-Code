# Flexbox: Quebra de Linha e Alinhamento de Conteúdo

## Flex Wrap

- **flex-wrap** → permite que os elementos **quebrem para a próxima linha** caso não haja espaço suficiente na tela.  
  Sem ele, todos os itens tentam se encaixar em uma única linha.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

---

## Align Content

- **align-content** → alinha o **conjunto de linhas** dentro do container, diferente do `align-items` que afeta cada item individual.  
- Pode usar os mesmos valores do `align-items`:
  - `flex-start`
  - `flex-end`
  - `center`
  - `space-between`
  - `space-around`
  - `stretch`
  
```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
```
