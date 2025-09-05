# Estilização de texto no CSS

Na aula foi mostrado que praticamente tudo pode ser controlado diretamente pelo **CSS**.  
Os códigos são intuitivos e permitem estilizar textos em todos os aspectos, como:

- **Cor** → `color`
- **Tamanho** → `font-size`
- **Alinhamento** → `text-align`
- **Sombreamento** → `text-shadow`
- **Altura da linha** → `line-height`
- **Espaçamento entre letras** → `letter-spacing`
- **Espaçamento entre palavras** → `word-spacing`
- **Transformação de texto** → `text-transform` (uppercase, lowercase, capitalize)
- **Decoração** → `text-decoration` (sublinhado, tachado etc.)
- **Estilo da fonte** → `font-style`
- **Peso da fonte** → `font-weight`
- **Família da fonte** → `font-family`

## Exemplo prático
```css
p {
  color: #333;                  /* Cor do texto */
  font-size: 18px;              /* Tamanho */
  text-align: center;           /* Centralizado */
  text-shadow: 2px 2px 5px #000;/* Sombreamento */
  line-height: 1.5;             /* Altura da linha */
  letter-spacing: 2px;          /* Espaçamento entre letras */
  word-spacing: 5px;            /* Espaçamento entre palavras */
  text-transform: uppercase;    /* Texto em maiúsculas */
  text-decoration: underline;   /* Sublinhado */
  font-style: italic;           /* Itálico */
  font-weight: bold;            /* Negrito */
  font-family: Arial, sans-serif; /* Família da fonte */
}
Esse exemplo cobre os principais aspectos mostrados na prática da aula, permitindo alterar a aparência do texto de forma completa.