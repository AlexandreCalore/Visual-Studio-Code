# Estruturação de Projeto HTML e CSS: Fontes e Variáveis

## Fontes
- Buscamos fontes no **Google Fonts** e anexamos no projeto via `<link>` no HTML.
- Estilizamos fontes globais para:
  - `html`  
  - `body`  
  - `h1` a `h6`

```css
html {
  font-size: 62.5%; /* 1rem = 10px */
  font-family: 'Roboto', sans-serif; /* exemplo de fonte importada */
}

body {
  font-size: 1.6rem; /* equivalente a 16px */
}
```

- Utilizamos **rem** para definir tamanhos de fonte relativos ao root (`html`), permitindo escalabilidade e acessibilidade.

---

## Variáveis CSS
- Definidas com `--nome-da-variavel: valor;`  
- Usadas novamente com `var(--nome-da-variavel)`, facilitando manutenção e consistência do design.

```css
:root {
  --cor-principal: #3498db;
  --padding-geral: 2rem;
}

body {
  color: var(--cor-principal);
  padding: var(--padding-geral);
}
```

> Variáveis tornam o CSS mais eficiente, permitindo alterar valores globais sem precisar modificar cada seletor individualmente.
