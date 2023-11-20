## Yeni Bir Sınıf Oluştur

Bir çizgi romandan kesilmiş gibi görünen bir stil yaratalım. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> , kullanımı ücretsiz yazı tiplerini sağlar.

+ **style.css** dosyasına `cizgiroman` sınıfı ekleyin. `magazine2`'den sonrası iyi bir yer. Sınıf adının önündeki noktayı unutma. 

![ekran görüntüsü](images/letter-comic1.png)

'Kural boş' diye bir uyarı alırsanız endişelenmeyin; daha sonra düzelteceksiniz.

+ Şimdi comic CSS sınıfına bir miktar CSS ekleyin. İsterseniz farklı renkler kullanabilirsiniz. <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a> adresinde bir sürü renk içeren bir liste var.

![ekran görüntüsü](images/letter-comic2.png)

+ Çizgi roman stilini, HTML belgenizdeki `<span>` etiketlerinden bazılarında kullanın ve sayfanızı test edin:

![ekran görüntüsü](images/letter-comic-output.png)

+ Şimdi eğlenceli bir yazı tipi ekleyebilirsiniz. Yeni bir tarayıcı sekmesi veya penceresi açın. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a>'a gidip **'bangers'**ı arayın:

![ekran görüntüsü](images/letter-gfonts-1-annotated.png)

+ Click on the font preview box then click on '+ Select this style':

![ekran görüntüsü](images/letter-gfonts-2-annotated.png)

View your selected fonts by clicking on the 'View your selected families' icon in the top right menu bar:

![ekran görüntüsü](images/letter-gfonts-3.png)

+ Go to the 'Use on the web' section, copy the text from the <link />
    box:

![ekran görüntüsü](images/letter-gfonts-4.png)

+ Google fontlarından kopyaladığınız `<link>` kodunu web sitenizin `<head>` kısmına yapıştırın:

![ekran görüntüsü](images/letter-fonts-head.png)

Bu, web sayfanızdaki Bangers yazı tipini kullanmanızı sağlar.

+ Return to Google fonts and scroll further down to copy the CSS font-family code:

![ekran görüntüsü](images/letter-fonts-bangers.png)

+ Şimdi trinketteki **'style.css'** dosyanıza geri dönün ve font-family kodunu çizgi roman stiline yapıştırın:

![ekran görüntüsü](images/letter-fonts-comic.png)

+ Web sayfanızı test edin. Sonuç şunun gibi olmalı: 

![ekran görüntüsü](images/letter-fonts-output.png)