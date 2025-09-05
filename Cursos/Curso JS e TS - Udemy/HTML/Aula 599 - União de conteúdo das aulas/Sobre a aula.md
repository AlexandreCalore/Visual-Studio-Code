# Projeto Integrador: Barra de Navegação Fixa

## Objetivo
Unir os conhecimentos adquiridos em todas as aulas anteriores para criar um **site com barra de navegação fixa**, aplicando conceitos de:
- Display (`block`, `inline-block`, `grid`, `flex`)
- Especificidade e prioridade de seletores
- Cores e unidades de medida
- Posicionamento (`relative`, `absolute`, `fixed`, `sticky`)
- Overflow e dimensionamento (`width`, `height`, `max/min`)
- Responsividade e breakpoints (`@media`)

## Estrutura
A construção do site parte de uma **barra de navegação fixa**, que permanece visível mesmo com o scroll da página, permitindo navegação fluida.

Exemplo de estrutura base:
```html
<header class="navbar">
  <nav>
    <ul>
      <li><a href="#home">Início</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>
</header>
```

## Estilização
A barra de navegação utiliza `position: fixed` para permanecer no topo, combinando com conceitos de **display** e **box-sizing** para manter alinhamento e espaçamento.

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #333;
  color: white;
  padding: 10px 20px;
  box-sizing: border-box;
}

.navbar ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar li {
  margin-right: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
}
```

## Responsividade
Os **breakpoints** são aplicados para ajustar o menu conforme o tamanho da tela.  
Por exemplo, em telas menores, os links podem ser empilhados verticalmente.

```css
@media (max-width: 768px) {
  .navbar ul {
    flex-direction: column;
    text-align: center;
  }

  .navbar li {
    margin: 10px 0;
  }
}
```