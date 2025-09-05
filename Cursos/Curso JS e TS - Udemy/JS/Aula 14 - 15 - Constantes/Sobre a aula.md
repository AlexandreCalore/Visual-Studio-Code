Profesor passou sobre variáveis para imprimir com `console.log`.

Explicou sobre o **LET**: variável que pode variar (redundante para fixar o conceito).  
**VAR**: funciona de forma similar ao LET, mas é mais antigo, por isso não se usa tanto.  
Toda vez que citarmos a variável, o motor do JS vai buscar o valor atribuído a ela.

Também mostrou que, ao declarar uma variável sem valor, dizemos ao JS que ela não tem valor definido. O JS segue uma sequência de execução, onde cada linha será lida e executada na ordem.

Se redeclararmos variáveis, dará erro.

`console.log(typeof(contatrpl))` — esse `typeof` (tipo de) serve para identificar o tipo da variável.

============================================================  
### Sobre criar variáveis
- Não podemos criar variáveis com palavras reservadas pelo próprio JS, ex: `let let` / `let console`.  
- Variáveis precisam ter nomes significativos, para facilitar o entendimento em um código extenso (exemplo: `nome = 'n'` / `nome = 'nomeCliente'`).  
- Não podemos criar variáveis começando com número.  
- Nome de variável não pode ter traço ou espaços.  
- Instruiu a criar variáveis usando **Camel Case**.  
- Variáveis são sensíveis a maiúsculas e minúsculas; aplicar a regra acima evita criar duas variáveis diferentes por engano.  
- `const` não pode ter seu valor redefinido; se quiser alterar, use `let`.
