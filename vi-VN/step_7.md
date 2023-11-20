## Create a New Class

Let's create a style that looks like it has been cut from a Comic. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> provides loads of fonts that are free to use.

+ Add a `comic` class in the **style.css** file. After `magazine2` is a good place. Don't forget the dot in front of the class name. 

![screenshot](images/letter-comic1.png)

Don't worry if you get a warning saying that 'The Rule is empty'; you'll fix that next.

+ Now add some CSS to the comic CSS class. You can use different colours if you like. There's a list of loads of colours at <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![screenshot](images/letter-comic2.png)

+ Use the comic style in some of the `<span>` tags in your HTML document and test your page:

![screenshot](images/letter-comic-output.png)

+ Now you can add a fun font. Open a new browser tab or window. Go to <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> and search for **'bangers'**:

![screenshot](images/letter-gfonts-1-annotated.png)

+ Click on the font preview box then click on '+ Select this style':

![screenshot](images/letter-gfonts-2-annotated.png)

View your selected fonts by clicking on the 'View your selected families' icon in the top right menu bar:

![screenshot](images/letter-gfonts-3.png)

+ Go to the 'Use on the web' section, copy the text from the <link />
    box:

![screenshot](images/letter-gfonts-4.png)

+ Paste the `<link>` code that you just copied from Google fonts into the `<head>` of your webpage:

![screenshot](images/letter-fonts-head.png)

This allows you to use the Bangers font in your webpage.

+ Return to Google fonts and scroll further down to copy the CSS font-family code:

![screenshot](images/letter-fonts-bangers.png)

+ Now go back to your **'style.css'** file in trinket and paste the font-family code into the comic style:

![screenshot](images/letter-fonts-comic.png)

+ Test your webpage. The result should look something like this: 

![screenshot](images/letter-fonts-output.png)