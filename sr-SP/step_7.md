## Креирајте нову класу

Креирајмо стил који изгледа као да је изрезан из Comic. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> пружа мноштво фонтова који се могу слободно користити.

+ Додајте `comic` класу у **style.css** датотеку. Након ` magazine2` је добро место. Не заборавите тачку испред имена класе. 

![снимак екрана](images/letter-comic1.png)

Не брините ако добијете упозорење да је „The Rule is empty“; то ћеш поправити следеће.

+ Сада додајте ЦСС у comic ЦСС класу. Ако желите, можете користити различите боје. На списку <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a> постоји листа боја.

![слика екрана](images/letter-comic2.png)

+ Користите стил comic у неким од ознака `<span>` у ХТМЛ документу и тестирајте своју страницу:

![слика екрана](images/letter-comic-output.png)

+ Сада можете додати забаван фонт. Отворите нову картицу или прозор интернет прегледача. Идите на <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> и тражите **'bangers'**:

![слика екрана](images/letter-gfonts-1-annotated.png)

+ Click on the font preview box then click on '+ Select this style':

![снимак екрана](images/letter-gfonts-2-annotated.png)

View your selected fonts by clicking on the 'View your selected families' icon in the top right menu bar:

![слика екрана](images/letter-gfonts-3.png)

+ Go to the 'Use on the web' section, copy the text from the <link />
    box:

![слика екрана](images/letter-gfonts-4.png)

+ Залепите `<link>` код који сте управо копирали из Гоогле фонтова у `<head>` своје веб странице:

![слика екрана](images/letter-fonts-head.png)

Ово вам омогућава да користите фонт Бангерс на својој веб страници.

+ Return to Google fonts and scroll further down to copy the CSS font-family code:

![слика екрана](images/letter-fonts-bangers.png)

+ Сада се вратите на своју **'style.css'** датотеку у тринкету и залепите font-family код у стил comic:

![слика екрана](images/letter-fonts-comic.png)

+ Тестирајте своју страницу. Резултат би требало да изгледа овако: 

![слика екрана](images/letter-fonts-output.png)