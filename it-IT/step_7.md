## Creazione di una nuova classe

Creiamo uno stile che sembri essere stato ritagliato da un fumetto. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> offre moltissimi caratteri che possono essere utilizzati gratuitamente.

+ Aggiungi la classe `comic` nel file __style.css__. La posizione ideale sarebbe dopo `magazine2`. Non dimenticare il punto davanti al nome della classe.

![screenshot](images/letter-comic1.png)

Non ti preoccupare se appare la scritta "The Rule is empty" (La regola è vuota); risolverai dopo il problema.

+ Ora aggiungi codice CSS alla classe CSS comic. Se vuoi, puoi utilizzare diversi colori. C’è un elenco con moltissimi colori su <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![screenshot](images/letter-comic2.png)

+ Utilizza lo stile comic per alcuni dei tag `<span>` del documento HTML e verifica la pagina:

![screenshot](images/letter-comic-output.png)

+ Aggiungi adesso un carattere divertente. Apri una nuova finestra o scheda del browser. Vai a <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> e cerca __"bangers"__:

![screenshot](images/letter-fonts1.png)

+ Fai clic sul pulsante Quick-use (Utilizzo rapido):

![screenshot](images/letter-fonts2.png)

+ Si caricherà una nuova pagina. Scorri verso il basso finché non vedrai:

![screenshot](images/letter-fonts-link.png)

e copia il codice evidenziato.

+ Incolla il codice `<link>` che hai appena copiato da Google Fonts nel tag `<head>` della pagina Web:

![screenshot](images/letter-fonts-head.png)

In tal modo, potrai utilizzare il carattere Bangers nella pagina Web.

+ Torna a Google Fonts, scorri più in basso e copia il codice font-family:

![screenshot](images/letter-fonts-bangers.png)

+ Torna ora al file __"style.css”__ in trinket e incolla il codice font-family nello stile comic:

![screenshot](images/letter-fonts-comic.png)

+ Verifica la pagina Web. Il risultato dovrebbe essere simile a:

![screenshot](images/letter-fonts-output.png)



