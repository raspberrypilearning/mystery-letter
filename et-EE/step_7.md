## Loo uus klass

Loome stiili, mis näib olevat koomiksist välja lõigatud. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> pakub hulgaliselt fonte, mis on vabas kasutuses.

+ Anna `comic` klass **style.css** failile. Pärast klassi `magazine2` on hea koht. Ära unusta klassi nime ees olevat punkti. 

![kuvatõmmis](images/letter-comic1.png)

Ära muretse, kui saad hoiatuse, mis ütleb, et "Reegel on tühi"; selle parandad järgmisena.

+ Nüüd lisa natuke CSS-i koomiksi CSS-klassi. Võid soovi korral kasutada erinevaid värve. Värvide nimekirja leiad: <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![kuvatõmmis](images/letter-comic2.png)

+ Kasuta HTML-dokumendis mõnede `<span>` siltide puhul koomiksistiili ja testi oma lehte:

![kuvatõmmis](images/letter-comic-output.png)

+ Nüüd saad lisada lõbusa fondi. Ava uus brauseri vahekaart või aken. Mine <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> ja otsi **'bangers'**:

![kuvatõmmis](images/letter-gfonts-1-annotated.png)

+ Click on the font preview box then click on '+ Select this style':

![kuvatõmmis](images/letter-gfonts-2-annotated.png)

View your selected fonts by clicking on the 'View your selected families' icon in the top right menu bar:

![kuvatõmmis](images/letter-gfonts-3.png)

+ Go to the 'Use on the web' section, copy the text from the <link />
    box:

![kuvatõmmis](images/letter-gfonts-4.png)

+ Kleebi `<link>` kood, mille sa just Google'i fontidest oma veebilehe `<head>` kopeerisid:

![kuvatõmmis](images/letter-fonts-head.png)

See võimaldab sul oma veebilehel kasutada Bangersi fonti.

+ Return to Google fonts and scroll further down to copy the CSS font-family code:

![kuvatõmmis](images/letter-fonts-bangers.png)

+ Nüüd mine tagasi oma **'style.css'** faili juurde trinketis ja kleebi fondiperekonna kood koomiksistiili:

![kuvatõmmis](images/letter-fonts-comic.png)

+ Testi oma veebilehte. Tulemus peaks välja nägema umbes selline: 

![kuvatõmmis](images/letter-fonts-output.png)