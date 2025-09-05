# Projeto de Site com CSS Grid

## Estrutura do Layout
O projeto consiste em um site básico com as seguintes áreas:

- **Menu** → barra de navegação  
- **Barra de pesquisa lateral**  
- **Conteúdo principal**  
- **Rodapé**

---

## Exemplo de Grid Template

```css
body {
  display: grid;
  grid-template-areas: 
    "menu menu"
    "sidebar conteudo"
    "footer footer";
  grid-template-columns: 250px 1fr; /* sidebar fixa, conteúdo flexível */
  grid-template-rows: 60px 1fr 40px; /* menu, conteúdo, rodapé */
  gap: 10px;
  height: 100vh;
}

.menu {
  grid-area: menu;
  background-color: #333;
  color: #fff;
}

.sidebar {
  grid-area: sidebar;
  background-color: #f4f4f4;
}

.conteudo {
  grid-area: conteudo;
  background-color: #eaeaea;
}

.footer {
  grid-area: footer;
  background-color: #333;
  color: #fff;
}
```

> O uso de **grid-template-areas** permite nomear regiões do layout, facilitando o posicionamento e a manutenção do código.
