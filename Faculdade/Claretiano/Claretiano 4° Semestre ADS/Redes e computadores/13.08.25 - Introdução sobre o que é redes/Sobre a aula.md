## REDES E COMPUTADORES

**Funcionalidade das notas do semestre**

2 atividades com data para nota
1 atividade com prazo (talvez surpresa) para nota

Essas 3 vão constituir a nota da primeira parte do semestre.

##

**O que é rede**

Abordou o conceito de rede, podendo ser definido como:

'estruturas interconectadas como redes de tranporte, comunicação ou mais mordernamente, redes de computadores (internet).'

**O que veremos durante o semestre**

-Conhecimentos básicos de comunicação

-cabeamento estruturado

-certificação de redes

-modelo osi

-arquiteturas de redes

-arquitetura TCP/IP

**O que é comunicação**

resumidamente, é o ato de passar uma mensagem. 

Contextualizou sobre a evolução dos meios de comunicação.

**Rede de computadores**

Abordou sobre Emissor e Receptor, além da importância de ambos falarem a mesma "língua"/"linguagem"

-Uma rede deve ser composta de dispositivos autonomos conectados entre si

-Deve haver pelo menos um transmissor e receptor.

**Como chamamos a linguagem de comunicação?**

Por meio de protocolos, onde cada linguagem tem sua linguagem.

**Elementos**

Nós de rede -  Computadores e dispositivos de rede (PC por exemplo)

Meios de rede - Ligação na qual ocorre a comunicação (Wifi por exemplo)

exemplo prático de rota de ip feita pelo cmd:

Rastreando a rota para dns.google [8.8.8.8]
com no máximo 30 saltos:

  1   116 ms    18 ms     5 ms  10.0.80.1
  2    38 ms   103 ms     9 ms  187-032-025-030.static.ctbctelecom.com.br [187.32.25.30]
  3    81 ms    89 ms    79 ms  100.110.131.130
  4    46 ms    13 ms    48 ms  ge-1-1-0-0.edge-a.cao001.algartelecom.com.br [170.84.34.210]
  5    41 ms     8 ms     7 ms  100.126.5.85
  6    28 ms    77 ms    32 ms  100.127.11.29
  7    25 ms    25 ms    32 ms  74.125.48.112
  8    26 ms    27 ms    12 ms  142.250.58.67
  9    14 ms    11 ms    12 ms  192.178.110.243
 10    78 ms   140 ms    41 ms  dns.google [8.8.8.8]

Rastreamento concluído.

**Código morse**

abordou sobre o formato dos telegrafos, trasmissão, meio (luz son ou elétrico) dependencia (humanos) e aplicação (comunicação de longa distancia*

**código baudot**
formato: 5 bits

representação (1 e 0 sendo presença e ausencia)
enviar mensagem simultaneamente em telégrafos

automação: codigo murray passou a usar teclado

**Ondas**

2 tipos de ondas:

mecânica : depende de um mecânismo materiaç (ar, água, corda etc), vibrações no geral.

eletromagnética: representada por duas ondas perpendiculares (azul campo elétrico; vermelha simboliza o campo magnético) entre si e entre a propagação, nao necessitando de nenhum meio material, exemplo (luz, onda de ráido, micro-onda, raio x)

**Medida Analógica**

Variação contínua, podendo assumir infinitos valores dentro de um intervalo.

representa grandezas de forma suave e contínua.

vantagem: riqueza a detalhes, maior fidelidade na captura de variações
desvantagens: mais sensível a ruídos e interferencias, dificil de armazenar e processar diretamente por computadores

**Medidor digital**

Variação discreta: assume apenas valores pré determinados (passos fixo)

Representa grandezas em números (binários 1 e 0)

Exemplo: temperatura mostrada em um visor digital, sinal de áudio convertido para MP3, posição do interruptor (ligado e desligado)

vantagens: resistente a ruídos, facil de armazenas, processar e transmitir
desvantagens: perda de detalhes finos na conversão (depende da resolução)