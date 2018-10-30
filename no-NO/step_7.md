## Opprett en ny klasse

La oss lage en stil som ser ut som den er blitt kuttet fra en tegneserie. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> gir mange skrifter som er gratis å bruke.

+ Legg til en `tegneserie` klasse i **style.css** filen. Etter `magazine2` er et bra sted. Ikke glem punktet foran klassenavnet. 

![skjermbilde](images/letter-comic1.png)

Ikke bekymre deg hvis du får en advarsel som sier at 'Regelen er tom'; du vil fikse det neste.

+ Legg nå litt CSS til den komiske CSS-klassen. Du kan bruke forskjellige farger hvis du vil. Det er en liste over mange farger på <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![skjermbilde](images/letter-comic2.png)

+ Bruk tegneseriestilen i noen av `<span>` kodene i HTML-dokumentet ditt, og test siden din:

![skjermbilde](images/letter-comic-output.png)

+ Nå kan du legge til en morsom skrift. Åpne en ny nettleserfane eller et vindu. Gå til <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> og søk etter **'bangers'**:

![skjermbilde](images/letter-gfonts-1-annotated.png)

+ Klikk på + "Velg denne skrift" -knappen:

![skjermbilde](images/letter-gfonts-2-annotated.png)

En melding som sier "1 familie valgt" vises nederst på skjermen.

![skjermbilde](images/letter-gfonts-3.png)

+ Klikk på meldingen "1 familie valgt" for å åpne vinduet og kopiere den uthevede koden:

![skjermbilde](images/letter-gfonts-4.png)

+ Lim inn `<link>` koden du nettopp kopiert fra Google-skrifter til `<head>` på nettsiden din:

![skjermbilde](images/letter-fonts-head.png)

Dette lar deg bruke Bangers-skrifttypen på websiden din.

+ Gå tilbake til Google-skrifttyper og bla lenger ned på siden og kopier fontfamiliekoden:

![skjermbilde](images/letter-fonts-bangers.png)

+ Gå nå tilbake til din **'style.css'** fil i pyntegjenstander og lim inn font-familien koden til tegneseriestilen:

![skjermbilde](images/letter-fonts-comic.png)

+ Test nettsiden din. Resultatet skal se slik ut: 

![skjermbilde](images/letter-fonts-output.png)