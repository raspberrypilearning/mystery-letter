## إنشاء فئة جديدة 

لننشئ نمطًا يبدو كأنه قُصَّ من مجلة هزلية. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> يوفر الكثير من الخطوط للاستخدام المجاني. 



+ أضف فئة `comic` في الملف __style.css__. وسيكون من الأفضل إضافته بعد الفئة `magazine2`. لا تنسَ وضع النقطة قبل اسم الفئة. 

![screenshot](images/letter-comic1.png)

إذا ظهرت لك رسالة التحذير 'The Rule is empty'، فلا داعي للقلق؛ ستصلح هذا الخطأ لاحقًا.

+ أضف الآن بعض قيم CSS إلى الفئة (comic) في ملف CSS. ويمكنك استخدام ألوان مختلفة إذا أردتَ. توجد قائمة تتضمن ألوانًا كثيرة على <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>.

![screenshot](images/letter-comic2.png)

+ استخدم نمط الفئة (comic) في بعض أوسمة `<span>` في مستند HTML واختبر الصفحة:

![screenshot](images/letter-comic-output.png)

+ يمكنك الآن إضافة خط هزلي. افتح علامة تبويب أو نافذة جديدة على المتصفح. انتقل إلى <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> وابحث عن __'bangers'__:

![screenshot](images/letter-fonts1.png)

+ انقر فوق الزر Quick-use (استخدام سريع):

![screenshot](images/letter-fonts2.png)

+ سيتم تحميل صفحة جديدة. مرِّر إلى أسفل إلى أن ترى هذا الجزء من الصفحة:

![screenshot](images/letter-fonts-link.png)

وانسخ التعليمة البرمجية المظللة. 

+ ألصق التعليمة البرمجية `<link>` التي نسختَها للتو من Google Fonts داخل الوسم `<head>` في صفحة الويب:

![screenshot](images/letter-fonts-head.png)

يسمح لك ذلك باستخدام الخط Bangers في صفحة الويب. 

+ عُد إلى Google Fonts ومرِّر إلى أسفل الصفحة مرة أخرى ثم انسخ التعليمة البرمجية font-family:

![screenshot](images/letter-fonts-bangers.png)

+ عُد الآن إلى الملف __'style.css'__ على trinket وألصق التعليمة البرمجية font-family داخل نمط الفئة (comic):

![screenshot](images/letter-fonts-comic.png)

+ اختبر صفحة الويب. ستكون النتيجة بالشكل التالي تقريبًا: 

![screenshot](images/letter-fonts-output.png)



