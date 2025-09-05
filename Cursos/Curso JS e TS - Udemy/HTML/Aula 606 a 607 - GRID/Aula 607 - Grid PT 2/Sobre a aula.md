# Grid: Nomeando Frações e Atalhos para Posicionamento

## Conceito
É possível **nomear frações (tracks)** na grid para facilitar o posicionamento de elementos.  
Cada fração pode receber um **nome simbólico**, ex.: `[um] 1fr`.

---

## Posicionamento de Colunas

- **grid-column** → define início e fim da coluna usando **nomes ou números**:

```css
.item {
  grid-column: 2 / 3;       /* do 2 ao 3 */
  grid-column: dois / tres; /* usando nomes */
  grid-column: span 2 / span 4; /* ocupa 2 a 4 colunas */
}
```

---

## Atalho: grid-area

- **grid-area** → define início e fim de **linha e coluna** em uma única propriedade:

```css
.item {
  grid-area: 1 / 1 / 4 / 4; /* linha inicial / coluna inicial / linha final / coluna final */
}
```

> Ordem a seguir: **linha inicial - coluna inicial - linha final - coluna final**  
> Utilizado apenas em casos específicos para simplificar o código.
