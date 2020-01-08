/ **
 * A StyleFix 1.0.3 és a PrefixFree 1.0.7
 * @author Lea Verou
 * MIT licenc
 * /

(funkció(){

if (! window.addEventListener) {
	Visszatérés;
}

var self = window.StyleFix = {
	link: function (link) {
		próbálja meg {
			// Figyelmen kívül hagyja az data-noprefix attribútummal rendelkező stíluslapokat, valamint az alternatív stíluslapokat
			if (link.rel! == 'stíluslap' || link.hasAttribute ('data-noprefix')) {
				Visszatérés;
			}
		}
		fogás (e) {
			Visszatérés;
		}

		var url = link.href || link.getAttribute ( 'data-href'),
		    base = url.csere (/ [^ \ /] + $ /, ''),
		    base_scheme = (/ ^[a-z]{3,10}: /. Exe (alap) || [''])[0],
		    base_domain = (/ ^[a-z]{3,10}: \ / \ / [^ \ /] + /. exec (base) || [''])[0],
		    base_query = /^([^?**)\??/.exec(url)[1],
		    parent = link.parentNode,
		    xhr = új XMLHttpRequest (),
		    folyamat;
		
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				folyamat();
			}
		};

		folyamat = függvény () {
				var css = xhr.responseText;
				
				if (css && link.parentNode && (! xhr.status || xhr.status <400 || xhr.status> 600)) {
					css = self.fix (css, true, link);
					
					// Szükség esetén konvertálja a relatív URL-eket abszolút értékre
					if (alap) {
						css = css.replace (/ url (\ s *? ((?: "| ')?) (. +?) \ 1 \ s *? \) / gi, function ($ 0, árajánlat, url) {
							if (/ ^ ([a-z]{3,10}: | #) / i.test (url)) {// abszolút & vagy hash-relatív
								vissza 0 dollár;
							}
							egyébként, ha (/ ^ \ / \ //. teszt (url)) {// Rendszer-relatív
								// Tartalmazhat olyan sorozatokat, mint a /../ és /./, de ezek működnek
								return 'url (' '+ base_scheme + url +' ") ';
							}
							egyébként, ha (/ ^ \ //. teszt (URL)) {// Tartomány-relatív
								return 'url (' '+ alap_domain + url +' ") ';
							}
							egyébként, ha (/ ^ \? /. teszt (url)) {// Lekérdezés-relatív
								return 'url (' '+ base_query + url +' ") ';
							}
							más {
								// Út-relatív
								visszatér 'url (' '+ bázis + url +' ')';
							}
						});

						// a viselkedés URL-jeit nem szabad konvertálni (19. szám)
						// az alapról el kell kerülni, mielőtt hozzáadná a RegExp-hez (81. szám)
						var escaped_base = base.replace (/( ^ \\\\\\\\\\\\\\\\\\\\\\\\\((())) / g, "\\ $ 1");
						css = css.replace (RegExp ('\\ b (viselkedés: \\ s *? url \\ (\'? "?) '+ menekülési alap,' gi '),' $ 1 ');
						}
					
					var stílus = document.createElement ('stílus');
					style.textContent = css;
					style.media = link.media;
					style.disabled = link.disabled;
					style.setAttribute ('data-href', link.getAttribute ('href'));
					
					parent.insertBefore (stílus, link);
					parent.removeChild (link);
					
					style.media = link.media; // A másolat szándékos. Lásd a 31. számot
				}
		};

		próbálja meg {
			xhr.open ('GET', url);
			xhr.send (null);
		} fogás (e) {
			// Visszaváltás az XDomainRequesthez, ha rendelkezésre áll
			if (typeof XDomainRequest! = "meghatározatlan") {
				xhr = új XDomainRequest ();
				xhr.onerror = xhr.onprogress = function () {};
				xhr.onload = folyamat;
				xhr.open ("GET", url);
				xhr.send (null);
			}
		}
		
		link.setAttribute ('adat-folyamatban', '');
	},

	styleElement: függvény (stílus) {
		if (style.hasAttribute ('data-noprefix')) {
			Visszatérés;
		}
		var tiltva = style.disabled;
		
		style.textContent = self.fix (style.textContent, true, style);
		
		style.disabled = letiltva;
	},

	styleAttribute: function (elem) {
		var css = element.getAttribute ('stílus');
		
		css = self.fix (css, hamis, elem);
		
		element.setAttribute ('stílus', css);
	},
	
	folyamat: function () {
		// Összekapcsolt stíluslapok
		$ ('link [rel = "stíluslap"]: nem ([data-inprogress])'). forEach (StyleFix.link);
		
		// Beépített stíluslapok
		$ ( 'Stílus'). Foreach (StyleFix.styleElement);
		
		// Beépített stílusok
		$ ('[style]') .forEach (StyleFix.styleAttribute);
	},
	
	regisztráció: funkció (rögzítő, index) {
		(self.fixers = self.fixers || [])
			.splice (index === nincs meghatározva? self.fixers.length: index, 0, fixer);
	},
	
	javítás: függvény (css, nyers, elem) {
		for (var i = 0; i <self.fixers.length; i++) {
			css = önálló rögzítők[i](css, nyers, elem) || css;
		}
		
		visszatérési css;
	},
	
	camelCase: function (str) {
		return str.replace (/ - ([a-z]) / g, function ($ 0, $ 1) {return $ 1.toUpperCase ();}).
	},
	
	deCamelCase: function (str) {
		return str.replace (/[A-Z]/ g, függvény ($ 0) {return '-' + $ 0.toLowerCase ()});
	}
};

/ **************************************
 * Folyamatstílusok
 ************************************** /
(funkció(){
	setTimeout (function () {
		$ ( 'Link [rel = "stylesheet"]'). Foreach (StyleFix.link);
	}, 10);
	
	document.addEventListener ('DOMContentLoaded', StyleFix.process, hamis);
}) ();

függvény $ (expr, con) {
	visszatérés [] .slicice.call ((con || dokumentum) .querySelectorAll (expr));
}

}) ();

/ **
 * PrefixFree
 * /
(Funkció (root) {

if (! window.StyleFix ||! window.getComputedStyle) {
	Visszatérés;
}

// Magántulajdonos
funkciója javítás (mi, csere előtt, után, css) {
	mi = ön[what];
	
	if (mi.hossz) {
		var regex = RegExp (+ 'előtt (' + mi.join ('|') + ')' + után, 'gi');

		css = css.replace (regex, pótlás);
	}
	
	visszatérési css;
}

var self = window.PrefixFree = {
	prefixCSS: function (css, raw, elem) {
		var prefix = self.prefix;
		
		// Színátmeneti szögek gyorsjavítása
		if (self.functions.indexOf ('lineáris gradiens')> -1) {
			// A színátmeneteket előtag támogatja, a szöget örökössé konvertálva
			css = css.replace (/ (\ s |: |,) (ismétlődő -)? lineáris gradiens \ (\ s * (-? \ d * \.? dd) deg / ig, function ($ 0, delim , ismétlődő, deg) {
				return delim + (ismétlődő || '') + 'lineáris gradiens (' + (90 fok) + 'deg';
			});
		}
		
		css = fix ('funkciók', '(\\ s |: |,)', '\\ s * \\ (', '$ 1' + előtag + '$ 2 (', css);
		css = fix ('kulcsszavak', '(\\ s | :)', '(\\ s |; | \\} | $)', '$ 1' + előtag + '$2$3', css);
		css = fix ('tulajdonságok', '(^ | \\ {| \\ s |;)', '\\ s *:', '$ 1' + előtag + '$ 2:', css);
		
		// Prefix tulajdonságok * belül * értékek (8. szám)
		if (saját.tulajdon.hossz) {
			var regex = RegExp ('\\ b (' + saját.tulajdonságok.join ('|') + ') (?! :)', 'gi');
			
			css = fix ('valueProperties', '\\ b', ': (. +?);', function ($ 0) {
				vissza 0 dollár csere (regex, előtag + "$ 1")
			}, css);
		}
		
		if (nyers) {
			css = fix ('választók', '', '\\ b', self.prefixSelector, css);
			css = fix ('atrules', '@', '\\ b', '@' + előtag + '$ 1', css);
		}
		
		// Dupla előtag javítása
		css = css.replace (RegExp ('-' + előtag, 'g'), '-');
		
		// Előtag helyettesítő karakter
		css = css.csere (/ - \ * - (? =[a-z]+) / gi, self.prefix);
		
		visszatérési css;
	},
	
	tulajdonság: funkció (tulajdonság) {
		visszatérés (self.properties.indexOf (ingatlan)> = 0? self.prefix: '') + tulajdonság;
	},
	
	érték: függvény (érték, tulajdonság) {
		érték = javítás ('függvények', '(^ | \\ s |,)', '\\ s * \\ (', '$ 1' + saját.prefix + '$ 2 (', érték);
		value = fix ('kulcsszavak', '(^ | \\ s)', '(\\ s | $)', '$ 1' + saját.prefix + '$2$3', érték);

		if (self.valueProperties.indexOf (tulajdonság)> = 0) {
			value = fix ('tulajdonságok', '(^ | \\ s |,)', '($ | \\ s |,)', '$ 1' + saját.prefix + '$2$3', érték);
		}

		visszatérési érték;
	},
	
	// Figyelem: Az előtagok nem számítanak, még akkor is, ha a választókészülék előtag nélküli
	prefixSelector: funkció (választó) {
		return selector.replace (/ ^:{1,2}/, függvény ($ 0) {return 0 $ + self.prefix})
	},
	
	// Figyelem: Az előtagok nem számítanak, még akkor is, ha a tulajdonság előtag nélküli
	prefixProperty: function (tulajdonság, camelCase) {
		var prefixed = self.prefix + tulajdonság;
		
		vissza a camelCase? StyleFix.camelCase (prefixed): prefixed;
	}
};

/ **************************************
 * Tulajdonságok
 ************************************** /
(függvény () {
	var prefixes = {},
		tulajdonságok = [],
		shorthands = {},
		style = getComputedStyle (document.documentElement, null),
		dummy = document.createElement ('div') stílus;
	
	// Miért csináljuk ezt ahelyett, hogy egy .style objektum tulajdonságait iteráljuk? Mert a Webkit nem ismétlődik ezek felett.
	var iterate = függvény (tulajdonság) {
		if (property.charAt (0) === '-') {
			properties.push (tulajdonság);
			
			var parts = property.split ('-'),
				előtag =[1]rész;
				
			// A gróf előtag használata
			előtagok[prefix] = ++ előtagok[prefix] || 1;
			
			// Ez segít meghatározni a rövidítményeket
			míg (alkatrészhossz> 3) {
				parts.pop ();
				
				var shorthand = parts.join ('-');

				if (támogatott (rövidített) && tulajdonságok.indexOf (rövidített) === -1) {
					properties.push (rövidítés);
				}
			}
		}
	},
	támogatott = funkció (tulajdonság) {
		visszaadja a StyleFix.camelCase (tulajdonságot) dummy-ban;
	}
	
	// Néhány böngészőnek numerikus indexei vannak a tulajdonságokra, mások nem
	if (stílus.hossz> 0) {
		for (var i = 0; i <style.length; i++) {
			iterál ([i]stílus)
		}
	}
	más {
		for (var tulajdonság stílusban) {
			iterate (StyleFix.deCamelCase (tulajdonság));
		}
	}

	// Keresse meg a leggyakrabban használt előtagot
	var legmagasabb = {uses:0};
	for (var prefix az előtagokban) {
		var használja = előtagok[prefix];

		if (legmagasabb.felhasználás <felhasználás) {
			legmagasabb = {prefix: prefix, uses: uses};
		}
	}
	
	self.prefix = '-' + legmagasabb.prefix + '-';
	self.Prefix = StyleFix.camelCase (self.prefix);
	
	öntulajdon = =];

	// Tulajdonságok beszerzése CSAK előtaggal támogatva
	for (var i = 0; i <properties.length; i++) {
		var tulajdonság = tulajdonságok[i];
		
		if (property.indexOf (self.prefix) === 0) {// több előtaggal is rendelkezhetünk, például az Opera
			var unprefixed = tulajdonság.selyem (saját.prefix.hossz);
			
			if (! támogatott (nem rögzített)) {
				self.properties.push (előtag nélküli);
			}
		}
	}
	
	// IE fix
	if (self.Prefix == 'Ms' 
	  &&! ("átalakítás" a próbabábutban) 
	  &&! ('MsTransform' in dummy) 
	  && ('msTransform' in dummy)) {
		self.properties.push ('átalakítás', 'átalakulás eredete');	
	}
	
	self.properties.sort ();
}) ();

/ **************************************
 * Értékek
 ************************************** /
(függvény () {
// Azok az értékek, amelyek előtagot igényelhetnek
var funkciók = {
	'lineáris gradiens': {
		tulajdonság: 'backgroundImage',
		params: 'vörös, kékeszöld'
	},
	'calc': {
		tulajdonság: „szélesség”,
		params: '1xx + 5%'
	},
	'elem': {
		tulajdonság: 'backgroundImage',
		params: '#foo'
	},
	„kereszteződés”: {
		tulajdonság: 'backgroundImage',
		params: „url (a.png), url (b.png), 50%”
	}
};


függvények ['ismétlődő-lineáris-gradiens'] =
függvények ['ismétlődő-radiális-gradiens'] =
függvények ['radiális gradiens'] =
funkciók [ 'lineáris-gradiens'];

// Megjegyzés: A hozzárendelt tulajdonságok csak * tesztelés * támogatására vonatkoznak. 
// A kulcsszavak előtaggal vannak ellátva mindenütt.
var kulcsszavak = {
	'kezdeti': 'szín',
	'nagyítás': 'kurzor',
	'kicsinyítés': 'kurzor',
	'box': 'display',
	'flexbox': 'display',
	'inline-flexbox': 'display',
	'flex': 'display',
	'inline-flex': 'kijelző',
	'rács': 'kijelző',
	'inline-grid': 'display',
	„maximális tartalom”: „szélesség”,
	„minimális tartalom”: „szélesség”,
	„fit-content”: „szélesség”,
	'kitölthető': 'szélesség'
};

önfunkciók = [];
self.keywords = [];

var stílus = document.createElement ('div'). stílus;

támogatott funkció (érték, tulajdonság) {
	stílus[property] = '';
	stílus[property] = érték;

	visszatérés !! stílus[property];
}

for (függvények függvényében) {
	var teszt =[func]függvény,
		tulajdonság = teszt.tulajdon,
		value = func + '(' + test.params + ')';
	
	if (! támogatott (érték, tulajdonság)
	  && támogatott (self.prefix + érték, tulajdonság)) {
		// Támogatott, de előtaggal
		self.functions.push (func);
	}
}

for (var kulcsszó a kulcsszavakban) {
	var tulajdonság =[keyword]kulcsszó;

	if (! támogatott (kulcsszó, tulajdonság)
	  && támogatott (self.prefix + kulcsszó, tulajdonság)) {
		// Támogatott, de előtaggal
		self.keywords.push (kulcsszó);
	}
}

}) ();

/ **************************************
 * Kiválasztók és @ szabályok
 ************************************** /
(függvény () {

var 
választók = {
	': csak olvasható': null,
	': read-write': null,
	': any-link': null,
	':: válogatás': null
},

atrules = {
	„kulcskeretek”: „név”,
	'nézetablak': null,
	'document': 'regexp (".")'
};

önválasztók = [];
self.atrules = [];

var style = root.appendChild (document.createElement ('style'));

támogatott funkció (választó) {
	style.textContent = választó + '{}'; // A Safari 4 problémái vannak a style.innerHTML-rel
	
	visszatérés !! style.sheet.cssRules.length;
}

for (var választó a választókban) {
	var teszt = választó + (választók[selector]? '(' +[selector] + 'választógomb)': '');
		
	if (! támogatott (teszt) && támogatott (self.prefixSelector (teszt))) {
		self.selectors.push (választó);
	}
}

for (var atrule in atrules) {
	var teszt = atrule + '' + (atrules[atrule] || '');
	
	if (! támogatott ('@' + teszt) && támogatott ('@' + self.prefix + teszt)) {
		self.atrules.push (atrule);
	}
}

root.removeChild (stílus);

}) ();

// Tulajdonságok, amelyek tulajdonságokat értékként fogadnak el
self.valueProperties = [
	'átmenet',
	„Átmenetifém-tulajdonság”
]

// Osztály hozzáadása az aktuális előtaghoz
root.className + = '' + self.prefix;

StyleFix.register (self.prefixCSS);


}) (Document.documentElement);
