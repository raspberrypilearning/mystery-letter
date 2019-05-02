## Criando uma nova classe

Vamos criar um estilo que parece ter sido cortado de um Comic. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> fornece fontes para estilizar os textos que são livres para usar.

+ Adicione uma classe `comic` no arquivo **style.css**. Depois de `magazine2` é um ótimo lugar. Lembre-se do ponto na frente do nome da classe. 

![screenshot](images/letter-comic1.png)

Não se preocupe se você receber um aviso dizendo que 'The Rule is empty'; você vai consertar isso em seguida.

+ Agora adicione um pouco de CSS à classe CSS em quadrinhos. Você pode usar cores diferentes, se quiser. Há uma lista de cargas de cores em <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![screenshot](images/letter-comic2.png)

+ Use o estilo de quadrinhos em algumas das tags `<span>` do seu documento HTML e teste sua página:

![screenshot](images/letter-comic-output.png)

+ Agora você pode adicionar uma fonte divertida. Abra uma nova guia ou janela do navegador. Vá para <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> e procure por **'Bangers'**:

![screenshot](images/letter-gfonts-1-annotated.png)

+ Click on the + "Select this font" button:

![screenshot](images/letter-gfonts-2-annotated.png)

A message saying "1 Family Selected" will appear at the bottom on the screen.

![screenshot](images/letter-gfonts-3.png)

+ Click on the "1 Family Selected" message to open the window and copy the highlighted code:

![screenshot](images/letter-gfonts-4.png)

+ Cole o `<link>` copiado do Google Fonts na `<head>` da sua página da Web:

![screenshot](images/letter-fonts-head.png)

Isso permite que você use a fonte Bangers na sua página da web.

+ Volte para o Google Fonts e vá até a página e copie o código da 'font-family':

![screenshot](images/letter-fonts-bangers.png)

+ Agora volte para o seu arquivo **'style.css'** no trinket e cole o código da família da fonte dentro do estilo comic:

![screenshot](images/letter-fonts-comic.png)

+ Teste sua página web. O resultado deve ser algo como isto: 

![screenshot](images/letter-fonts-output.png)