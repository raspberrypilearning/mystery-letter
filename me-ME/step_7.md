## Izradi novu klasu

Izradimo stil koji izgleda kao da je izrezan iz stripa (comic). Na <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> možeš pronaći veliki broj fontova besplatnih za upotrebu.

+ Dodaj klasu `comic` u datoteku **style.css**. Poslije klase `magazine2` je dobro mjesto. Ne zaboravi tačku ispred naziva klase. 

![screenshot](images/letter-comic1.png)

Ne brini ako dobiješ poruku 'The rule is empty' (Pravilo je prazno); to ćemo uskoro popraviti.

+ Sada dodaj malo CSS-a u CSS klasu comic. Ako želiš, možeš da koristiš različite boje. Na <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a> možeš pronaći spisak velikog broja boja.

![screenshot](images/letter-comic2.png)

+ Upotrijebi stil comic u nekoj od `<span>` oznaka u svom HTML dokumentu i provjeri svoju stranicu:

![screenshot](images/letter-comic-output.png)

+ Sada možeš da dodaš neki zabavan font. Otvori novu karticu ili prozor pregledača. Idi na <a href="http://jumpto.cc/web-fonts" target="_blank"> jumpto.cc/web-fonts</a> i potraži **bangers**:

![screenshot](images/letter-gfonts-1-annotated.png)

+ Click on the + "Select this font" button:

![screenshot](images/letter-gfonts-2-annotated.png)

A message saying "1 Family Selected" will appear at the bottom on the screen.

![screenshot](images/letter-gfonts-3.png)

+ Click on the "1 Family Selected" message to open the window and copy the highlighted code:

![screenshot](images/letter-gfonts-4.png)

+ Unesi `<link>` kôd kopiran iz 'Google fonts’' u `<head>` svoje veb-stranice:

![screenshot](images/letter-fonts-head.png)

This allows you to use the Bangers font in your webpage.

+ Vrati se na 'Google fonts', listaj stranicu nadolje i kopiraj sljedeći 'font-family' kôd:

![screenshot](images/letter-fonts-bangers.png)

+ Sada se vrati na **'style.css'** i prenesi kopirani 'font-family' kôd u stil comic:

![screenshot](images/letter-fonts-comic.png)

+ Test your webpage. The result should look something like this: 

![screenshot](images/letter-fonts-output.png)