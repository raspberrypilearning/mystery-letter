## Yeni Bir Sınıf Oluştur

Bir Comic'ten kesilmiş gibi görünen bir stil yaratalım. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> , kullanımı ücretsiz yazı tiplerini sağlar.

+ **style.css** dosyasına `komik` sınıfı ekleyin. `sonra magazine2` iyi bir yer. Sınıf adının önündeki noktayı unutma. 

![ekran görüntüsü](images/letter-comic1.png)

'Kural boş' diyen bir uyarı alırsanız endişelenmeyin; daha sonra düzelteceksin.

+ Şimdi komik CSS sınıfına bir miktar CSS ekleyin. İsterseniz farklı renkler kullanabilirsiniz. <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>adresinde birçok renk listesi vardır.

![ekran görüntüsü](images/letter-comic2.png)

+ Çizgi roman stilini, HTML belgenizdeki `<span>` etiketlerinden bazılarında kullanın ve sayfanızı test edin:

![ekran görüntüsü](images/letter-comic-output.png)

+ Şimdi eğlenceli bir yazı tipi ekleyebilirsiniz. Yeni bir tarayıcı sekmesi veya penceresi açın. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> ve **'bangers'**arayın:

![ekran görüntüsü](images/letter-gfonts-1-annotated.png)

+ + "Bu yazı tipini seç" düğmesini tıklayın:

![ekran görüntüsü](images/letter-gfonts-2-annotated.png)

Ekranın alt kısmında "Aile Seçildi" mesajı belirecektir.

![ekran görüntüsü](images/letter-gfonts-3.png)

+ Pencereyi açmak ve vurgulanan kodu kopyalamak için "Aile Seçileni Seç" mesajını tıklayın:

![ekran görüntüsü](images/letter-gfonts-4.png)

+ Yapıştır `<link>` sadece içine Google yazı kopyaladığınız kodu `<head>` web sayfanızın:

![ekran görüntüsü](images/letter-fonts-head.png)

Bu, web sayfanızdaki Bangers yazı tipini kullanmanızı sağlar.

+ Google fontlarına dönün ve sayfayı aşağı kaydırın ve font ailesi kodunu kopyalayın:

![ekran görüntüsü](images/letter-fonts-bangers.png)

+ Şimdi biblodaki **'style.css'** dosyasına geri dönün ve font-family kodunu çizgi roman stiline yapıştırın:

![ekran görüntüsü](images/letter-fonts-comic.png)

+ Web sayfanızı test edin. Sonuç şöyle görünmeli: 

![ekran görüntüsü](images/letter-fonts-output.png)