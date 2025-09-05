# Breakpoints em CSS

## Conceito
Breakpoints são **pontos de quebra** que definem larguras de tela específicas, permitindo que o layout se adapte automaticamente ao dispositivo (celular, tablet, desktop, etc.).  
Eles são usados para criar **responsividade**, garantindo que o site mantenha boa usabilidade em diferentes tamanhos de tela.

---

## Funcionamento
Um breakpoint cria uma **condição** que aplica determinadas regras de estilo somente quando a tela atinge os limites definidos.  
Podemos **negar condições** ou **adicionar critérios extras** para ativar os estilos.

---

## Estratégias
- **Desktop-first** → o estilo base é feito para telas grandes, ajustando depois para telas menores.  
- **Mobile-first** → o estilo base é feito para telas pequenas, adaptando para maiores conforme necessário.  

---

## Exemplos de Media Queries
```css
/* Mobile pequeno */
@media (max-width: 320px) {
  .grid .col {
    width: 100%;
  }
}

/* Mobile médio a tablet */
@media (min-width: 321px) and (max-width: 768px) {
  .grid .col {
    width: 50%;
  }
}

/* Tablet a desktop médio */
@media (min-width: 769px) and (max-width: 1200px) {
  .grid .col {
    width: 33.33%;
  }
}

/* Desktop grande */
@media (min-width: 1201px) {
  .grid .col {
    width: 25%;
  }
}
