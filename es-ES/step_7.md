## Crear una nueva categoría

Vamos a crear un estilo que parezca sacado de una historieta. <a href="http://jumpto.cc/web-fonts" target="_blank">junto.cc/web-fonts</a> contiene un montón de fuentes de libre uso.

+ Añade la categoría `comic` en el archivo **style.css**. Un buen lugar es después de `magazine2`. No olvides poner el punto en frente del nombre de la categoría. 

![captura de pantalla](images/letter-comic1.png)

No te preocupes si aparece una advertencia diciendo que 'The Rule is empty'; lo arreglarás después.

+ Ahora añada algún CSS a la categoría CSS comic. Puedes usar diferentes colores si prefieres. Hay una lista con montones de colores en <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![captura de pantalla](images/letter-comic2.png)

+ Usa el estilo historieta en alguna de las etiquetas `<span>` en tu documento HTML y verifica tu página:

![captura de pantalla](images/letter-comic-output.png)

+ Ahora puedes añadir una fuente graciosa. Abre una nueva pestaña o ventana. Ve a <a href="http://jumpto.cc/web-fonts" target="_blank">jump.cc/web.fonts</a> y busca por **'bangers'**:

![captura de pantalla](images/letter-gfonts-1-annotated.png)

+ Haz clic en el botón + "Select this font":

![captura de pantalla](images/letter-gfonts-2-annotated.png)

Un mensaje diciendo "1 Family Selected" aparecerá en la parte inferior de la pantalla.

![captura de pantalla](images/letter-gfonts-3.png)

+ Click on the "1 Family Selected" message to open the window and copy the highlighted code:

![screenshot](images/letter-gfonts-4.png)

+ Paste the `<link>` code that you just copied from Google fonts into the `<head>` of your webpage:

![screenshot](images/letter-fonts-head.png)

This allows you to use the Bangers font in your webpage.

+ Return to Google fonts and scroll further down the page and copy the font-family code:

![screenshot](images/letter-fonts-bangers.png)

+ Now go back to your **'style.css'** file in trinket and paste the font-family code into the comic style:

![screenshot](images/letter-fonts-comic.png)

+ Test your webpage. The result should look something like this: 

![screenshot](images/letter-fonts-output.png)