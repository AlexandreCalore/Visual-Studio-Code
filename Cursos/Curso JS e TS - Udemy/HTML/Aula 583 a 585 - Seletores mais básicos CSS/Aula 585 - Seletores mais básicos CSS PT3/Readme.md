## Seletores CSS

A aula da continuidade ao assunto de CSS e seletores de classes:

**SELETORES DE ATRIBUTOS:**

Além de selecionar classes e elementos diretamente, o CSS permite selecionar elementos com base em atributos personalizados usando colchetes [].

**EXEMPLO BÁSICO:**

[atributomeu="valor"]
Seleciona apenas os elementos que tenham exatamente o atributo atributomeu com o valor "valor".

[atributomeu~="valor1"]
Seleciona elementos onde o atributo atributomeu contenha a palavra valor1 como uma palavra isolada, separada por espaços.

[atributomeu|="valor"]
Seleciona elementos com atributomeu igual a "valor" ou começando com "valor-".

[atributomeu^="comecou"]
Seleciona elementos cujo valor do atributo começa com "comecou".

[atributomeu$="lll"]
Seleciona elementos cujo valor do atributo termina com "lll".

[atributomeu*="faca"]
Seleciona elementos cujo valor do atributo contém a sequência "faca" em qualquer parte.
