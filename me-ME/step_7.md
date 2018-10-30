## Kreiraj novu klasu

Kreirajmo stil koji izgleda kao da je izrezan iz stripa (comic). Na <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> možeš pronaći veliki broj fontova besplatnih za upotrebu.

+ Dodaj klasu `comic` u **style.css** datoteku. Poslije `magazine2` je dobro mjesto. Ne zaboravi tačku ispred naziva klase. 

![screenshot](images/letter-comic1.png)

Ne brini ako dobiješ upozorenje 'The rule is empty' (Pravilo je prazno); to ćeš uskoro popraviti.

+ Sada dodaj malo CSS-a u CSS klasu comic. Ako želiš, možeš da koristiš različite boje. Na <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a> možeš naći spisak velikog broja boja.

![screenshot](images/letter-comic2.png)

+ Upotrijebi stil comic u nekoliko `<span>` oznaka u svom HTML dokumentu i provjeri svoju stranicu:

![screenshot](images/letter-comic-output.png)

+ Sada možeš da dodaš neki zabavan font. Otvori novu karticu ili prozor pregledača. Idi na <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> i potraži **'bangers'**:

![screenshot](images/letter-gfonts-1-annotated.png)

+ Klikni na dugme + ''Select this font'' (Odaberi ovaj font):

![screenshot](images/letter-gfonts-2-annotated.png)

Na dnu ekrana pojaviće se poruka "1 Family Selected".

![screenshot](images/letter-gfonts-3.png)

+ Klikni na poruku "1 Family Selected" da se otvori prozor i kopiraj označeni kôd:

![screenshot](images/letter-gfonts-4.png)

+ Unesi kôd `<link>` kopiran iz Google fonts u `<head>` svoje veb-stranice:

![screenshot](images/letter-fonts-head.png)

To će ti omogućiti da koristiš font Bangers na svojoj veb-stranici.

+ Vrati se na Google fonts, pomjeri sadržaj stranice nadolje i kopiraj sljedeći 'font-family' kôd:

![screenshot](images/letter-fonts-bangers.png)

+ Sada se vrati u svoju **'style.css'** datoteku u trinketu i prenesi kopirani 'font-family' kôd u stil comic:

![screenshot](images/letter-fonts-comic.png)

+ Isprobaj svoju veb-stranicu. Rezultat bi trebalo da izgleda slično ovome: 

![screenshot](images/letter-fonts-output.png)