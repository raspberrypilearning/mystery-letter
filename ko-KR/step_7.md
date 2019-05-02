## 새 클래스 만들기

만화에서 잘라온 것 같은 글자 스타일을 만들어 봅시다. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a>에서는 무료로 사용할 수 있는 웹 폰트를 제공합니다.

+ `comic` 클래스를 **style.css** 파일에 추가합니다. `magazine2` 다음에 넣는 것이 좋습니다. 앞에 찍어야 하는 '.'을 잊지 마세요! 

![screenshot](images/letter-comic1.png)

만약 'The Rule is empty'라는 오류가 뜬다고 해도 걱정하지 마십시오; 다음에서 해결할 것입니다.

+ 몇 CSS 코드를 CSS 클래스에 추가해 보도록 하겠습니다. 만약 다른 코드를 쓰고 싶다면 그래도 좋습니다. <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>에서는 다양한 색상을 보유하고 있습니다.

![스크린샷](images/letter-comic2.png)

+ 코믹 스타일을 `<span>` 태그에 아래와 같이 적용하여 페이지에 테스트해 보십시오.

![screenshot](images/letter-comic-output.png)

+ 이제 재미있는 폰트를 추가해 봅시다. 새로운 브라우저 탭이나 창을 켜 주세요. <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a>에서 **'Bangers'** 폰트를 검색해 보십시오. (이 폰트는 한국어가 지원되지 않아, 아래 예제에서는 임시로 수수께끼 편지 내용에 영어를 사용했음을 알려드립니다. 한국어가 지원되는 폰트는 링크에 들어가 보시면 많으니 다른 폰트도 적용해 보시기 바랍니다.)

![스크린샷](images/letter-gfonts-1-annotated.png)

+ + "Select this font" 버튼을 눌러주세요:

![스크린샷](images/letter-gfonts-2-annotated.png)

그럼, "1 Family Selected"라는 문구가 표출될 것입니다.

![스크린샷](images/letter-gfonts-3.png)

+ "1 Family Selected" 문구를 눌러 아래 코드를 복사합니다.

![<0>#outside-pic</0> CSS 코드에서 <0>width</0>(너비) 와 <0>height</0>(높이) 값을 수정하여, 바깥 쪽에 있는 이미지를 <0>200px</0>로 수정해보세요. (<0>px</0>는 픽셀을 의미합니다.)](images/letter-gfonts-4.png)

+ `<link>` 코드를 `<head>`부분에 아래와 같이 붙여 넣으세요.

![스크린샷](images/letter-fonts-head.png)

이릍 통해 Bangers 폰트를 웹 페이지에서 사용할 수 있습니다.

+ 다시 구글 폰트 창으로 돌아가서, 아래 내용을 복사합니다:

![스크린샷](images/letter-fonts-bangers.png)

+ 그 다음, **'style.css'** 파일에 아래와 같이 font-family 코드를 추가합니다.

![스크린샷](images/letter-fonts-comic.png)

+ 웹페이지를 테스트해 보세요. 아래와 같이 결과가 도출될 것입니다. 

![스크린샷](images/letter-fonts-output.png)