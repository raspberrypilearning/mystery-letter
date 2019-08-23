/ **
 * StyleFix 1.0.3 و PrefixFree 1.0.7
 * @ Author ليا فيرو
 * رخصة معهد ماساتشوستس للتكنولوجيا
 * /

(وظيفة(){

if (! window.addEventListener) {
	إرجاع؛
}

var self = window.StyleFix = {
	الرابط: وظيفة (رابط) {
		محاولة {
			// تجاهل صفحات الأنماط ذات سمة noprefix للبيانات وكذلك أوراق الأنماط البديلة
			if (link.rel! == 'stylesheet' || link.hasAttribute ('data-noprefix')) {
				إرجاع؛
			}
		}
		قبض (ه) {
			إرجاع؛
		}

		var url = link.href || link.getAttribute ( 'بيانات أ href')،
		    base = url.replace (/ [^ \ /] + $ /، '')،
		    base_scheme = (/ ^[a-z]{3,10}: /. exec (base) || [''])[0]،
		    base_domain = (/ ^[a-z]{3,10}: \ / \ / [^ \ /] + /. exec (base) || [''])[0]،
		    base_query = /^([^؟]*)\؟؟/.exec(url)[1]،
		    الوالد = link.parentNode ،
		    xhr = XMLHttpRequest () جديد ،
		    معالجة؛
		
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				معالجة()؛
			}
		}؛

		العملية = الوظيفة () {
				var css = xhr.responseText؛
				
				if (css && link.parentNode && (! xhr.status || xhr.status <400 || xhr.status> 600)) {
					css = self.fix (css، true، link)؛
					
					/ / قم بتحويل عناوين URL النسبية إلى مطلق ، إذا لزم الأمر
					إذا (الأساس) {
						css = css.replace (/ url \ (\ s *؟ ((؟: "| ')؟) (. +؟) \ 1 \ s *؟ \) / gi ، الدالة ($ 0 ، اقتباس ، url) {
							إذا (/ ^ ([a-z]{3,10}: | #) / i.test (url)) {// مطلق & أو has-النسبي
								إرجاع $ 0؛
							}
							آخر إذا (/ ^ \ / \ / /. اختبار (رابط)) {// مخطط النسبي
								// قد يحتوي على تسلسلات مثل /../ و /./ لكن تلك تعمل
								إرجاع 'url ("' + base_scheme + url + '")'؛
							}
							آخر إذا (/ ^ \ //. test (url)) {// المجال النسبي
								إرجاع 'url ("' + base_domain + url + '")'؛
							}
							آخر إذا كان (/ ^ \؟ /. test (url)) {// استعلام نسبي
								إرجاع 'url ("' + base_query + url + '")'؛
							}
							else {
								// المسار النسبي
								إرجاع 'url ("' + base + url + '")'؛
							}
						})؛

						// عناوين URL للسلوك لا يجب تحويلها (العدد 19)
						يجب الهروب // base قبل إضافتها إلى RegExp (الإصدار رقم 81)
						var escaped_base = base.replace (/( Budap\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*)
						css = css.replace (RegExp ('\\ b (السلوك: \\ s *؟ url \\ (\'؟ "؟) '+ escaped_base،' gi ')،' $ 1 ')؛
						}
					
					var style = document.createElement ('style')؛
					style.textContent = css؛
					style.media = link.media؛
					style.disabled = link.disabled؛
					style.setAttribute ('data-href'، link.getAttribute ('href'))؛
					
					parent.insertBefore (النمط ، الرابط) ؛
					parent.removeChild (وصلة).
					
					style.media = link.media؛ // التكرار مقصود. انظر القضية رقم 31
				}
		}؛

		محاولة {
			xhr.open ('GET'، url)؛
			xhr.send (خالية)؛
		} catch (e) {
			// احتياطي إلى XDomainRequest إذا كانت متوفرة
			if (typeof XDomainRequest! = "undefined") {
				xhr = جديد XDomainRequest () ؛
				xhr.onerror = xhr.onprogress = function () {}؛
				xhr.onload = process؛
				xhr.open ("GET" ، url) ؛
				xhr.send (خالية)؛
			}
		}
		
		link.setAttribute ('data-inprogress'، '')؛
	}،

	styleElement: function (style) {
		if (style.hasAttribute ('data-noprefix')) {
			إرجاع؛
		}
		var معطل = style.disabled؛
		
		style.textContent = self.fix (style.textContent، true، style)؛
		
		style.disabled = معطل ؛
	}،

	styleAttribute: function (element) {
		var css = element.getAttribute ('style')؛
		
		css = self.fix (css، false، element)؛
		
		element.setAttribute ('style'، css)؛
	}،
	
	العملية: وظيفة () {
		// أوراق الأنماط المرتبطة
		$ ('link [rel = "stylesheet"]: not ([data-inprogress])'). forEach (StyleFix.link)؛
		
		// أوراق الأنماط المضمنة
		. $ ( 'أسلوب') forEach (StyleFix.styleElement)؛
		
		// الأنماط المضمنة
		$ ('[style]') .forEach (StyleFix.styleAttribute) ؛
	}،
	
	تسجيل: وظيفة (المثبت ، الفهرس) {
		(self.fixers = self.fixers || [])
			.splice (الفهرس === غير محدد؟ self.fixers.length: index، 0، fixer)؛
	}،
	
	إصلاح: وظيفة (المغلق ، الخام ، عنصر) {
		من أجل (var i = 0 ؛ i <self.fixers.length; i++) {
			css = self.fixers[i](css، raw، element) || المغلق.
		}
		
		العودة المغلق.
	}،
	
	camelCase: function (str) {
		return str.replace (/ - ([a-z]) / g ، دالة ($ 0 ، $ 1) {return $ 1.toUpperCase ()؛}). replace ('-'، '')؛
	}،
	
	deCamelCase: function (str) {
		return str.replace (/[A-Z]/ g، function ($ 0) {return '-' + $ 0.toLowerCase ()})؛
	}
}؛

/ **************************************
 * أساليب العملية
 ************************************** /
(وظيفة(){
	setTimeout (وظيفة () {
		$ ( 'الرابط [يختلط = "أنماط"]') forEach (StyleFix.link)؛
	}, 10);
	
	document.addEventListener ('DOMContentLoaded' ، StyleFix.process ، false) ؛
}) ()؛

الدالة $ (expr ، con) {
	return [] .slice.call ((con || document) .querySelectorAll (expr))؛
}

}) ()؛

/ **
 * PrefixFree
 * /
(وظيفة (الجذر) {

if (! window.StyleFix ||! window.getComputedStyle) {
	إرجاع؛
}

// المساعد الخاص
إصلاح الوظيفة (ما ، قبل ، بعد ، الاستبدال ، المغلق) {
	ماذا = الذات[what]؛
	
	if (what.length) {
		var regex = RegExp (قبل + '(' + what.join ('|') + ')' + بعد ، 'gi') ؛

		css = css.replace (regex، replacement)؛
	}
	
	العودة المغلق.
}

var self = window.PrefixFree = {
	prefixCSS: function (css، raw، element) {
		فار بادئة = self.prefix؛
		
		// زوايا التدرج الإصلاح
		if (self.functions.indexOf ('linear-gradient')> -1) {
			يتم دعم // التدرجات مع بادئة ، وتحويل الزوايا إلى إرث
			css = css.replace (/ (\ s |: |،) (التكرار -) - التدرج الخطي \ (\ s * (-؟ \ d * \.؟ \ d *) deg / ig ، الدالة ($ 0 ، delim ، تكرار ، درجة) {
				return delim + (التكرار || '') + 'التدرج الخطي (' + (90 درجة) + 'deg'؛
			})؛
		}
		
		css = fix ('jobs'، '(\\ s |: |،)'، '\\ s * \\ ('، '$ 1' + بادئة + '$ 2 ('، css)؛
		css = fix ('الكلمات الأساسية'، '(\\ s | :)'، '(\\ s |؛ | \\} | $)'، '$ 1' + بادئة + '$2$3'، css)؛
		css = fix ('properties'، '(^ | \\ {| \\ s |؛)'، '\\ s *:'، '$ 1' + بادئة + '$ 2:'، css)؛
		
		خصائص البادئة * داخل * القيم (القضية رقم 8)
		إذا (self.properties.length) {
			var regex = RegExp ('\\ b (' + self.properties.join ('|') + ') (؟! :)'، 'gi')؛
			
			css = fix ('valueProperties'، '\\ b'، ': (. +؟)؛'، function ($ 0) {
				إرجاع $ 0.replace (regex ، بادئة + "$ 1")
			} ، المغلق) ؛
		}
		
		إذا (الخام) {
			css = fix ('المحددات' ، '' ، '\\ b' ، self.prefixSelector ، css) ؛
			css = fix ('atrules'، '@'، '\\ b'، '@' + بادئة + '$ 1'، css)؛
		}
		
		// إصلاح البادئة مزدوجة
		css = css.replace (RegExp ('-' + بادئة ، 'g') ، '-')؛
		
		// البدل البدل
		css = css.replace (/ - \ * - (؟ =[a-z]+) / gi، self.prefix)؛
		
		العودة المغلق.
	}،
	
	الخاصية: وظيفة (الملكية) {
		الإرجاع (self.properties.indexOf (property)> = 0؟ self.prefix: '') + property؛
	}،
	
	القيمة: وظيفة (القيمة ، الممتلكات) {
		value = fix ('وظائف' ، '(^ | \\ s | ،)' ، '\\ s * \\ ('، '$ 1' + self.prefix + '$ 2 ('، value)؛
		value = fix ('الكلمات الأساسية' ، '(^ | \\ s)' ، '(\\ s | $)' ، '$ 1' + self.prefix + '$2$3' ، value)؛

		if (self.valueProperties.indexOf (property)> = 0) {
			value = fix ('properties'، '(^ | \\ s |،)'، '($ | \\ s |،)'، '$ 1' + self.prefix + '$2$3'، value)؛
		}

		قيمة الإرجاع؛
	}،
	
	// تحذير: البادئات لا يهم ، حتى لو كان المحدد مدعومًا بادئة أقل
	prefixSelector: وظيفة (محدد) {
		return selector.replace (/ ^:{1,2}/، function ($ 0) {return $ 0 + self.prefix})
	}،
	
	// تحذير: البادئات لا يهم ، حتى لو كانت الخاصية مدعومة بادئة أقل
	prefixProperty: function (property، camelCase) {
		var prefixed = self.prefix + property؛
		
		العودة camelCase؟ StyleFix.camelCase (مسبوقة): بادئة ؛
	}
}؛

/ **************************************
 * الخصائص
 ************************************** /
(وظيفة() {
	بادئات var = {} ،
		الخصائص = [] ،
		الاختصارات = {} ،
		style = getComputedStyle (document.documentElement، null)،
		dummy = document.createElement ('div'). style؛
	
	// لماذا نقوم بهذا بدلاً من التكرار على الخصائص في كائن .style؟ قضية Webkit لن تتكرر على هؤلاء.
	var iterate = function (property) {
		if (property.charAt (0) === '-') {
			properties.push (الملكية)؛
			
			var parts = property.split ('-') ،
				بادئة = أجزاء[1]؛
				
			يستخدم // بادئة العد
			بادئات[prefix] = ++ بادئات[prefix] || 1؛
			
			// هذا يساعد على تحديد الاختزال
			بينما (أجزاء. طول> 3) {
				parts.pop ()؛
				
				فار الاختزال = parts.join ('-') ؛

				إذا (معتمد (اختزال) && properties.indexOf (اختزال) === -1) {
					properties.push (اختزال)؛
				}
			}
		}
	}،
	مدعوم = وظيفة (خاصية) {
		إرجاع StyleFix.camelCase (property) في دمية ؛
	}
	
	// بعض المتصفحات بها مؤشرات رقمية للخصائص ، وبعضها لا
	if (style.length> 0) {
		من أجل (var i = 0 ؛ i <style.length; i++) {
			التكرار (النمط[i])
		}
	}
	else {
		لـ (خاصية var بأسلوب) {
			أعاد (StyleFix.deCamelCase (الملكية))؛
		}
	}

	/ / البحث عن البادئة الأكثر استخداما
	فار أعلى = {uses:0}؛
	لـ (بادئة var في البادئات) {
		يستخدم var = بادئات[prefix]؛

		إذا (top.uses <الاستخدامات) {
			أعلى = {prefix: prefix, uses: uses}؛
		}
	}
	
	self.prefix = '-' + higher.prefix + '-'؛
	self.Prefix = StyleFix.camelCase (self.prefix)؛
	
	self.properties = []؛

	// احصل على العقارات المدعومة فقط مع بادئة
	من أجل (var i = 0 ؛ i <properties.length; i++) {
		var property = properties[i]؛
		
		if (property.indexOf (self.prefix) === 0) {// قد يكون لدينا بادئات متعددة ، مثل Opera
			var unprefixed = property.slice (self.prefix.length)؛
			
			إذا كانت (! مدعومة (غير مثبتة)) {
				self.properties.push (غير المسبوقة ببادئة)؛
			}
		}
	}
	
	// IE fix
	إذا (self.Prefix == 'Ms' 
	  &&! ("تحويل" في دمية) 
	  &&! ("MsTransform" في دمية) 
	  && ('msTransform' in dummy)) {
		self.properties.push ("تحويل" ، "تحويل أصل") ؛	
	}
	
	self.properties.sort ()؛
}) ()؛

/ **************************************
 * القيم
 ************************************** /
(وظيفة() {
// القيم التي قد تحتاج إلى بادئة
وظائف var = {
	'الخطي التدرج': {
		الخاصية: "backgroundImage" ،
		params: "الأحمر ، البط البري"
	}،
	'calc': {
		الخاصية: "العرض" ،
		params: "1px + 5٪"
	}،
	'جزء': {
		الخاصية: "backgroundImage" ،
		params: '#foo'
	}،
	"التلاشي المتقاطع": {
		الخاصية: "backgroundImage" ،
		params: "url (a.png) ، url (b.png) ، 50٪"
	}
}؛


الدوال ['التدرج المتكرر الخطي'] =
الدوال ['التدرج المتكرر نصف القطري'] =
الدوال ['التدرج الشعاعي'] =
وظائف [ 'الخطية التدرج'].

// ملاحظة: الخصائص المعينة هي فقط ل * اختبار * الدعم. 
/ / سيتم بادئة الكلمات الرئيسية في كل مكان.
فار الكلمات الرئيسية = {
	"الأولي": "اللون" ،
	"التكبير": "المؤشر" ،
	"التصغير": "المؤشر" ،
	"المربع": "عرض" ،
	"فليكس بوكس": "عرض" ،
	'inline-flexbox': 'display'،
	"المرن": "العرض" ،
	"المضمنة المرنة": "عرض" ،
	'عرض الشبكة'،
	"الشبكة المضمنة": "عرض" ،
	"أقصى محتوى": "عرض" ،
	"المحتوى الأقل": "العرض" ،
	"محتوى مناسب": "عرض" ،
	"ملء متاح": "عرض"
}؛

وظائف الذات = [] ؛
self.keywords = []؛

var style = document.createElement ('div'). style؛

وظيفة مدعومة (القيمة ، الممتلكات) {
	النمط[property] = '' ؛
	النمط[property] = القيمة ؛

	return !! style[property]؛
}

من أجل (var func في الوظائف) {
	فار اختبار = وظائف[func]،
		خاصية = test.property ،
		value = func + '(' + test.params + ')'؛
	
	إذا (! المدعومة (القيمة ، الممتلكات)
	  && مدعوم (self.prefix + value ، property)) {
		// إنه مدعوم ، لكن مع بادئة
		self.functions.push (ظائفها)؛
	}
}

لـ (var الكلمة الأساسية في الكلمات الأساسية) {
	var property = الكلمات الأساسية[keyword]؛

	إذا (! المدعومة (الكلمة الرئيسية ، الممتلكات)
	  && مدعوم (self.prefix + الكلمة الأساسية ، الملكية)) {
		// إنه مدعوم ، لكن مع بادئة
		self.keywords.push (الكلمة)؛
	}
}

}) ()؛

/ **************************************
 * محددات و @ قواعد
 ************************************** /
(وظيفة() {

فار 
محددات = {
	': للقراءة فقط': لاغية ،
	': القراءة والكتابة': لاغية ،
	': أي رابط': لاغٍ ،
	':: التحديد': فارغة
}،

atrules = {
	'إطارات مفتاحية': 'name' ،
	"viewport": لاغٍ ،
	'المستند': 'regexp (".")'
}؛

مختارات ذاتية = [] ؛
ذبائح ذاتية = [] ؛

var style = root.appendChild (document.createElement ('style')) ؛

وظيفة مدعومة (محدد) {
	style.textContent = selector + '{}'؛ // Safari 4 لديه مشاكل مع style.innerHTML
	
	return !! style.sheet.cssRules.length؛
}

من أجل (var select في المحددات) {
	فار اختبار = محدد + (محددات[selector]؟ '(' + محددات[selector] + ')': '')؛
		
	إذا (! المدعومة (اختبار) && المدعومة (self.prefixSelector (اختبار))) {
		self.selectors.push (محدد)؛
	}
}

من أجل (var atrule at atules) {
	var test = atrule + '' + (atrules[atrule] || '')؛
	
	إذا (! المدعومة ('@' + اختبار) && المدعومة ('@' + self.prefix + test)) {
		self.atrules.push (atrule)؛
	}
}

root.removeChild (نمط)؛

}) ()؛

// الخصائص التي تقبل الخصائص كقيمة لها
self.valueProperties = [
	'انتقال'،
	"انتقال الملكية"
]

/ / أضف فئة للبادئة الحالية
root.className + = '' + self.prefix؛

StyleFix.register (self.prefixCSS)؛


}) (document.documentElement)؛
