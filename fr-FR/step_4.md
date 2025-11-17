## Editing Classes

\--- task \---

Click on the **'style.css'** tab. Find the style for the `newspaper` CSS class.

## \--- code \---

language: css line_numbers: true

## line_number_start: 14

.newspaper { background-color: antiquewhite; font-family: "Times New Roman", Times, serif; font-weight: bold; }

\--- /code \---

As-tu remarqué le `class = ""` dans les balises `<span>` ?

\--- /task \---

Now look for the other CSS classes that you used to style your mystery letter.

\--- task \---

Can you find out how the `magazine1` style changes the text to all uppercase (capital) letters?

## \--- collapse \---

## title: Answer

## \--- code \---

language: css line_numbers: true line_number_start: 20

## line_highlights: 25

.magazine1 { background-color: teal; color: white; font-family: Verdana; font-weight: 900; text-transform: uppercase; }

\--- /code \---

\--- /collapse \---

\--- /task \---

\--- task \---

Can you find out how the `magazine2` style puts an image behind the text?

## \--- collapse \---

## title: Answer

## \--- code \---

language: css line_numbers: true line_number_start: 28

## line_highlights: 29

.magazine2 { background-image: url('pink-pattern.png'); color: fuchsia; font-family: Verdana; font-weight: 900; }

\--- /code \---

\--- /collapse \---

\--- /task \---

\--- task \---

Change the `background-image` for `magazine2` to `canvas.png`.

## \--- code \---

language: css line_numbers: true line_number_start: 28

## line_highlights: 29

.magazine2 { background-image: url('canvas.png'); color: fuchsia; font-family: Verdana; font-weight: 900; }

\--- /code \---

\--- /task \---

\--- task \---

Click **Run** to see what happens.

![A message where the second word 'me' has a beige canvas background.](images/canvas.png)

(If you prefer `pink-pattern.png` you can change it back.)

\--- /task \---

\--- task \---

Find the CSS classes that rotate and skew (tilt) your words:

## \--- code \---

language: css line_numbers: true line_number_start: 50

* * *

.rotateleft { transform: rotate(-5deg); }

.rotateright { transform: rotate(5deg); }

.skewleft { transform: skewX(10deg); }

.skewright { transform: skewX(-10deg); }

\--- /code \---

Try changing the numbers to create different effects.

\--- /task \---

\--- task \---

Click **Run** to see the changes.

\--- /task \---