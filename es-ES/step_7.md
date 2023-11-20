## Crear una nueva categoría

Vamos a crear un estilo que parezca sacado de una historieta. <a href="http://jumpto.cc/web-fonts" target="_blank">junto.cc/web-fonts</a> contiene un montón de fuentes de libre uso.

+ Añade la categoría `comic` en el archivo **style.css**. Un buen lugar es después de `magazine2`. No olvides poner el punto delante del nombre de la categoría. 

![captura de pantalla](images/letter-comic1.png)

No te preocupes si aparece una advertencia diciendo que 'The Rule is empty'; lo arreglarás después.

+ Ahora añade algo de CSS a la categoría CSS comic. Puedes usar diferentes colores si prefieres. Hay una lista con montones de colores en <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![captura de pantalla](images/letter-comic2.png)

+ Usa el estilo cómic en alguna de las etiquetas `<span>` en tu documento HTML y prueba tu página:

![captura de pantalla](images/letter-comic-output.png)

+ Ahora puedes añadir una fuente divertida. Abre una nueva pestaña o ventana en tu navegador. Ve a <a href="http://jumpto.cc/web-fonts" target="_blank">jump.cc/web.fonts</a> y busca por **'bangers'**:

![captura de pantalla](images/letter-gfonts-1-annotated.png)

+ Click on the font preview box then click on '+ Select this style':

![captura de pantalla](images/letter-gfonts-2-annotated.png)

View your selected fonts by clicking on the 'View your selected families' icon in the top right menu bar:

![captura de pantalla](images/letter-gfonts-3.png)

+ Go to the 'Use on the web' section, copy the text from the <link />
    box:

![captura de pantalla](images/letter-gfonts-4.png)

+ Pega el código `<link>` que acabas de copiar de las fuentes Google en el `<head>` de tu página web:

![captura de pantalla](images/letter-fonts-head.png)

Eso te permitirá usar la fuente Bangers en tu página web.

+ Return to Google fonts and scroll further down to copy the CSS font-family code:

![captura de pantalla](images/letter-fonts-bangers.png)

+ Ahora vuelve a tu archivo **'style.css'** en trinket y pega el código font-family en el estilo cómic:

![captura de pantalla](images/letter-fonts-comic.png)

+ Prueba tu página web. El resultado debe parecerse con esto: 

![captura de pantalla](images/letter-fonts-output.png)