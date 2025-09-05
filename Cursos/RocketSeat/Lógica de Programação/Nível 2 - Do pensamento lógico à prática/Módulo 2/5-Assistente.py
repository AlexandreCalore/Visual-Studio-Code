print ('Olá, eu sou sua assistente Cortana, o que você gostaria de fazer hoje?')

comando = input('Informe o comando: ')

match comando:
  case 'oi' | 'olá':
    print('Oi, como vai você?')
  case 'tchau' | 'sair' | 'fim':
    print('Até mais!')
  case 'piada':
    print('o padroeiro dos dev é o são login')
  case _:
    print ('Desculpe, não entendi o comando')