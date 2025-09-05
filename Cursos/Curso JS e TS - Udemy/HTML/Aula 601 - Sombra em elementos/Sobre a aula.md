# Sombreamento de Elementos em CSS

## Conceito
Diferente do **text-shadow**, o **box-shadow** é usado para adicionar sombra a elementos, criando profundidade e destaque visual.

## Sintaxe Básica
```css
box-shadow: 10px 0 0 0 blue;
```

## Parâmetros

1. **Primeiro e segundo valores** → direção da sombra (horizontal e vertical)  
2. **Terceiro valor** → blur, dissipamento da sombra em pixels  
3. **Quarto valor** → espalhamento uniforme, se comporta como um "padding" da sombra  
4. **Quinto valor** → cor da sombra  

## Exemplos Avançados
É possível adicionar múltiplas sombras em um mesmo elemento, separando cada sombra por vírgula:

```css
box-shadow: 10px 0 5px 0 blue, -5px 5px 10px 2px red;
```
Cada sombra é aplicada seguindo a mesma lógica, permitindo efeitos complexos de profundidade.
