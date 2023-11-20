## Crearea unei noi clase

Hai să creăm un stil care arată ca și cum a fost decupat dintr-o carte de benzi desenate. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> oferă o mulțime de fonturi care pot fi folosite gratuit.

+ Adaug o clasă `comic` în fișierul **style.css**. După `magazine2` e un loc potrivit. Nu uita punctul din fața numelui clasei. 

![captură de ecran](images/letter-comic1.png)

Nu-ți face griji dacă primești o eroare care spune „The Rule is empty”; o vei remedia imediat.

+ Acum, adaugă câteva proprietăți CSS la clasa CSS comic. Poți folosi diferite culori dacă dorești. Poți găsi o listă cu o mulțime de culori pe <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![captură de ecran](images/letter-comic2.png)

+ Folosește stilul comic într-o etichetă `<span>` din documentul tău HTML și testează-ți pagina:

![captură de ecran](images/letter-comic-output.png)

+ Acum, poți adăuga un font amuzant. Deschide o nouă filă sau fereastră în browser-ul tău. Mergi la <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> și caută **„bangers”**:

![captură de ecran](images/letter-gfonts-1-annotated.png)

+ Click on the font preview box then click on '+ Select this style':

![captură de ecran](images/letter-gfonts-2-annotated.png)

View your selected fonts by clicking on the 'View your selected families' icon in the top right menu bar:

![captură de ecran](images/letter-gfonts-3.png)

+ Go to the 'Use on the web' section, copy the text from the <link />
    box:

![captură de ecran](images/letter-gfonts-4.png)

+ Lipește codul `<link>` pe care l-ai copiat din fonturile Google în interiorul etichetei `<head>` din pagina ta web:

![captură de ecran](images/letter-fonts-head.png)

Acesta îți permite să folosești fontul Bangers în pagina ta web.

+ Return to Google fonts and scroll further down to copy the CSS font-family code:

![captură de ecran](images/letter-fonts-bangers.png)

+ Acum, mergi înapoi la fișierul tău **„style.css”** din trinket și lipește codul font-family în stilul comic:

![captură de ecran](images/letter-fonts-comic.png)

+ Testează-ți pagina web. Rezultatul ar trebui să arate așa: 

![captură de ecran](images/letter-fonts-output.png)