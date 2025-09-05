# Prioridade e Especificidade no CSS

No CSS, a definição de prioridades segue uma hierarquia chamada **especificidade**. Essa hierarquia determina qual regra será aplicada quando houver conflito entre diferentes seletores.

A ordem geral de prioridade é a seguinte:

1. Especificidade  
2. Empate (ordem de declaração)  
3. `style` inline  
4. `!important`

Na prática, cada tipo de seletor recebe um peso numérico, que funciona como se fosse uma pontuação. A lógica básica pode ser entendida assim:

- `000` → Nada definido  
- `101` → Seleção de um **ID** junto de um elemento  
- `010` → Seleção de apenas uma **classe**  
- `001` → Seleção de apenas um **elemento**

Quanto maior a soma desses valores, maior será a prioridade da regra. Também é possível aumentar a força de um seletor combinando diferentes tipos.  

Por exemplo:

```css
body#b p #p.p::selection:hover
