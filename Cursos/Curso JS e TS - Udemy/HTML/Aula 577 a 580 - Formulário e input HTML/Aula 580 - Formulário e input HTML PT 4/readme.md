## Formulário

**PASSWORD:**
Te permite inserir senha, ocultando os caracteres quando inserido.

**RANGE:**
Input que te permite arrastar um marcador, para definir um valor com base na posição da seta. Ela tem algumas caracteristicas que podem ser definidas como: max;min. Além de step que seria a quantidade de "números" a se pular por movimentação. Possivel tambem colocar marcadores atraves de um datalist, onde você pode parametrizar aonde se encontram em % a seta, definidos por option para mostrar na label, e tambel usar label para definir %.

**URL:**
É apenas um campo para inserir uma url, assim como o email funciona, onde se você nao colocar uma URL valida ele nao vai aceita-la.

**SEARCH:**
É basicamente um campo que indica que você vai buscar algo dentro do site, sendo uma boa ferramenta de SEO pois o google consegue identificar e ranquear seu site nas buscas.

**SELECT:**
Permite selecionar algumas opções das quais voce mesmo insere dentro do input e label. São dadas pelas options <> e em cada uma delas voce deve colocar id, name e value, onde name vai para o servidor, e value aparece como opção. Também é possivel definir algumas caracteristicas, por exemplo: 

Disabled: desabilita a seleção daquele item. 

Select: Seleciona inicialmente esse item 

Optgroup: permite na visualização dos itens, separar por grupos cada seleção.

**TEXTAREA:**
Diferente dos demais passados aqui e nas outras aulas, este nao é dado por um <input>, mas sim por sua própia tag, sendo <textarea></textarea>, nela voce define os mesmos valores de id, name, e pode tambem definir cols e rows, mas que nao tem tanta eficacia na hora de delimitar algo, sendo mais viave delimitar pelo CSS. e dentro da tag é possivel colocar um texto pré descrito.