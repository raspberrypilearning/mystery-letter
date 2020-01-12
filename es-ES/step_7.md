## Crear una nueva categoría

Vamos a crear un estilo que parezca sacado de una historieta. <a href="http://jumpto.cc/web-fonts" target="_blank">junto.cc/web-fonts</a> contiene un montón de fuentes de libre uso.

+ Añade la categoría `comic` en el archivo **style.css**. Un buen lugar es después de `magazine2`. No olvides poner el punto en frente del nombre de la categoría. 

![captura de pantalla](images/letter-comic1.png)

No te preocupes si aparece una advertencia diciendo que 'The Rule is empty'; lo arreglarás después.

+ Ahora añada algún CSS a la categoría CSS comic. Puedes usar diferentes colores si prefieres. Hay una lista con montones de colores en <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![captura de pantalla](images/letter-comic2.png)

+ Usa el estilo historieta en alguna de las etiquetas `<span>` en tu documento HTML y verifica tu página:

![screenshot](images/letter-comic-output.png)

+ Ahora puedes añadir una fuente graciosa. Abre una nueva pestaña o ventana. Ve a <a href="http://jumpto.cc/web-fonts" target="_blank">jump.cc/web.fonts</a> y busca por **'bangers'**:

![captura de pantalla](images/letter-gfonts-1-annotated.png)

+ Haz clic en el botón + "Select this font":

![captura de pantalla](images/letter-gfonts-2-annotated.png)

Un mensaje diciendo "1 Family Selected" aparecerá en la parte inferior de la pantalla.

![captura de pantalla](images/letter-gfonts-3.png)

+ Haz clic en el mensaje "1 Family Selected" para abrir la ventana y copiar el código resaltado:

![screenshot](images/letter-gfonts-4.png)

+ Pega el código `<link>` que acabas de copiar de las fuentes Google en el `<head>` de tu página web:

![captura de pantalla](images/letter-fonts-head.png)

Eso te permitirá usar la fuente Bangers en tu página web.

+ Regrese a las fuentes de Google, desplácese más abajo en la página y copie el código font-family:

![captura de pantalla](images/letter-fonts-bangers.png)

+ Ahora vuelve a tu archivo **'style.css'** en trinket y pega el código font-family en el estilo cómic:

![captura de pantalla](images/letter-fonts-comic.png)

+ Prueba tu página web. El resultado debe parecerse con esto: 

![captura de pantalla](images/letter-fonts-output.png)