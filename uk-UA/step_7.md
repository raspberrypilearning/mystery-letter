## Створи новий клас

Давайте створимо стиль, що матиме вигляд, вирізаного з Коміксу. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a>тут є види шрифтів, які можна використовувати.

+ Додайте `comic`клас у файл **style.css** . Після `magazine2`є хороше місце. Не забудьте крапку перед назвою класу. 

![screenshot](images/letter-comic1.png)

Не хвилюйтеся, якщо ви побачили попередження " Правило пусте "; ви виправите це згодом.

+ Зараз додайте трохи CSS до комічного стилю CSS. Можете використовувати кольори, які забажаєте. Панель кольорів тут <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![screenshot](images/letter-comic2.png)

+ Використайте комічний стиль у деяких `<span>`тегах вашого документу HTML і протестуйте свою сторінку:

![screenshot](images/letter-comic-output.png)

+ Тепер можете додати веселий шрифт. Відкрийте нове вікно браузера. Перейдіть до<a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> і шукайте **'bangers'**:

![screenshot](images/letter-gfonts-1-annotated.png)

+ Click on the font preview box then click on '+ Select this style':

![screenshot](images/letter-gfonts-2-annotated.png)

View your selected fonts by clicking on the 'View your selected families' icon in the top right menu bar:

![screenshot](images/letter-gfonts-3.png)

+ Go to the 'Use on the web' section, copy the text from the <link />
    box:

![screenshot](images/letter-gfonts-4.png)

+ Вставте `<link>` код, який ви скопіювали з Goole шрифтів у `<head>` вашо веб-сторінки:

![screenshot](images/letter-fonts-head.png)

This allows you to use the Bangers font in your webpage.

+ Return to Google fonts and scroll further down to copy the CSS font-family code:

![screenshot](images/letter-fonts-bangers.png)

+ Тепер поверніться до вашого файлу **'style.css'** в trinket і вставте код гарнітури шрифтів у комічний стиль:

![screenshot](images/letter-fonts-comic.png)

+ Протестуйте сторінку. Результат повинен виглядати так: 

![screenshot](images/letter-fonts-output.png)