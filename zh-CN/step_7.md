## 创建一个新类

让我们创造一个样式，它看起来像是从漫画中剪下来的。 <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> 提供了很多可以免费使用的字体。

+ 把 `comic` 类加到 **style.css** 文件中。 在 `magazine2` 之后比较好。 别忘记在类名之前加一个点。 

![截图](images/letter-comic1.png)

如果你看到一个警告写着“规则是空的（The Rule is empty）”，不要担心；我们一会儿就解决。

+ 现在在comic CSS类中写一些CSS代码。 你喜欢的话可以用不同颜色。 这个文件中包含了许多不同的颜色列表： <a href="http://jumpto.cc/colours" target="_blank">jumpto.cc/colours</a>。

![截屏](images/letter-comic2.png)

+ 在HTML文件的一些`<span>`标签中使用漫画（comic）样式，并测试页面：

![截图](images/letter-comic-output.png)

+ 现在你可以添加有意思的字体。 打开一个新的浏览器窗口。 进入 <a href="http://jumpto.cc/web-fonts" target="_blank">jumpto.cc/web-fonts</a> 并找到 **'bangers'**：

![截屏](images/letter-gfonts-1-annotated.png)

+ Click on the font preview box then click on '+ Select this style':

![截屏](images/letter-gfonts-2-annotated.png)

View your selected fonts by clicking on the 'View your selected families' icon in the top right menu bar:

![截屏](images/letter-gfonts-3.png)

+ Go to the 'Use on the web' section, copy the text from the <link />
    box:

![截屏](images/letter-gfonts-4.png)

+ 把你刚复制的 Google 字体的 `<link>` 代码添加到网页的 `<head>`中：

![截屏](images/letter-fonts-head.png)

这样你就可以在你的网页中使用 Bangers 字体了。

+ Return to Google fonts and scroll further down to copy the CSS font-family code:

![截屏](images/letter-fonts-bangers.png)

+ 在 trinket 中回到**'style.css'** 文件，把字体类型代码粘贴到漫画样式中：

![截屏](images/letter-fonts-comic.png)

+ 测试你的网页。 结果应该看起来像这样： 

![截屏](images/letter-fonts-output.png)