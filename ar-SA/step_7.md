## قم بإنشاء فئة جديدة

دعنا ننشأ نمطاً يبدو كأنه تم قصه من مقطع فكاهي. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> يوفر الكثير من الخطوط المجانية للاستخدام.

+ أضف صنف `comic` في ملف **style.css**. بعد `magazine2` هو مكان جيد. لا تنسى النقطة أمام اسم الصنف. 

![لقطة الشاشة](images/letter-comic1.png)

لا تقلق إذا تلقيت تحذيراً يقول "'The Rule is empty" ؛ عليك إصلاح ذلك في الخطوة التالية.

+ أضف الآن بعض CSS إلى فئة comic CSS. يمكنك استخدام ألوان مختلفة إذا أردت. هناك قائمة مليئة بالألوان المختلفة في <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![لقطة الشاشة](images/letter-comic2.png)

+ استخدم الصنف comic في `<span>` في مستند HTML الخاص بك واختبر صفحتك:

![لقطة الشاشة](images/letter-comic-output.png)

+ الآن يمكنك إضافة خط ممتع. افتح علامة تبويب أو نافذة متصفح جديدة. إنتقل إلى <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> وابحث عن **'Mada'**:

![لقطة الشاشة](images/letter-gfonts-1-annotated.png)

+ Click on the font preview box then click on '+ Select this style':

![لقطة الشاشة](images/letter-gfonts-2-annotated.png)

View your selected fonts by clicking on the 'View your selected families' icon in the top right menu bar:

![لقطة الشاشة](images/letter-gfonts-3.png)

+ Go to the 'Use on the web' section, copy the text from the <link />
    box:

![لقطة الشاشة](images/letter-gfonts-4.png)

+ الصق الكود `<link>` الذي نسخته للتو من خطوط Google إلى `<head>` في ملف ال HTML الخاص بك:

![لقطة الشاشة](images/letter-fonts-head.png)

هذا يسمح لك باستخدام الخط Bangers في صفحة الويب الخاصة بك.

+ Return to Google fonts and scroll further down to copy the CSS font-family code:

![لقطة الشاشة](images/letter-fonts-bangers.png)

+ انتقل الآن إلى ملف **'style.css'** في trinket والصق رمز عائلة الخط في النمط comic:

![لقطة الشاشة](images/letter-fonts-comic.png)

+ اختبر صفحة الويب الخاصة بك. يجب أن تبدو النتيجة كالتالي: 

![لقطة الشاشة](images/letter-fonts-output.png)