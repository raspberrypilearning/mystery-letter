## Crear una nueva categoría

Vamos a crear un estilo que parezca sacado de una historieta. <a href="http://jumpto.cc/web-fonts" target="_blank">junto.cc/web-fonts</a> contiene un montón de fuentes de libre uso.

+ Adicione la categoría `comic` en el archivo **style.css**. Un buen lugar es después de `magazine2`. No olvide poner el punto en frente del nombre de la categoría. 

![captura de pantalla](images/letter-comic1.png)

No te preocupes si aparece una advertencia diciendo que 'The Rule is empty'; lo arreglarás después.

+ Ahora añada algún CSS a la categoría CSS comic. Puedes usar diferentes colores si prefieres. Hay una lista con montones de colores en <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![captura de pantalla](images/letter-comic2.png)

+ Use el estilo historieta en alguna de las etiquetas `<span>` en tu documento HTML y verifica tu página:

![screenshot](images/letter-comic-output.png)

+ Now you can add a fun font. Open a new browser tab or window. Go to <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> and search for **'bangers'**:

![captura de pantalla](images/letter-gfonts-1-annotated.png)

+ Click on the + "Select this font" button:

![captura de pantalla](images/letter-gfonts-2-annotated.png)

A message saying "1 Family Selected" will appear at the bottom on the screen.

![captura de pantalla](images/letter-gfonts-3.png)

+ Click on the "1 Family Selected" message to open the window and copy the highlighted code:

![screenshot](images/letter-gfonts-4.png)

+ Paste the `<link>` code that you just copied from Google fonts into the `<head>` of your webpage:

![captura de pantalla](images/letter-fonts-head.png)

This allows you to use the Bangers font in your webpage.

+ Return to Google fonts and scroll further down the page and copy the font-family code:

![captura de pantalla](images/letter-fonts-bangers.png)

+ Now go back to your **'style.css'** file in trinket and paste the font-family code into the comic style:

![captura de pantalla](images/letter-fonts-comic.png)

+ Test your webpage. The result should look something like this: 

![captura de pantalla](images/letter-fonts-output.png)