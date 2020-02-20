/ **
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @auteur Lea Verou
 * Licence MIT
 * /

(une fonction(){

if (! window.addEventListener) {
	revenir;
}

var self = window.StyleFix = {
	lien: fonction (lien) {
		essayer {
			// Ignorer les feuilles de style avec l'attribut data-noprefix ainsi que les feuilles de style alternatives
			if (link.rel! == 'stylesheet' || link.hasAttribute ('data-noprefix'))) {
				revenir;
			}
		}
		catch (e) {
			revenir;
		}

		var url = link.href || link.getAttribute ('data-href'),
		    base = url.replace (/ [^ \ /] + $ /, ''),
		    base_scheme = (/ ^[a-z]{3,10}: /. exec (base) || [''])[0],
		    base_domain = (/ ^[a-z]{3,10}: \ / \ / [^ \ /] + /. exec (base) || [''])[0],
		    base_query = /^([^?]*)\??/.exec(url)[1],
		    parent = link.parentNode,
		    xhr = new XMLHttpRequest (),
		    processus;
		
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				processus();
			}
		};

		processus = fonction () {
				var css = xhr.responseText;
				
				if (css && link.parentNode && (! xhr.status || xhr.status <400 || xhr.status> 600)) {
					css = self.fix (css, true, lien);
					
					// Convertit les URL relatives en absolu, si nécessaire
					si (base) {
						css = css.replace (/ url \ (\ s *? ((?: "| ')?)?) (. +?) \ 1 \ s *? \) / gi, fonction ($ 0, citation, url) {
							if (/ ^ ([a-z]{3,10}: | #) / i.test (url)) {// Absolute & ou hash-relative
								retourne 0 $;
							}
							else if (/ ^ \ / \ //. test (url)) {// schéma-relatif
								// Peut contenir des séquences telles que /../ et /./ mais celles-ci fonctionnent
								retourne 'url ("' + base_scheme + url + '")';
							}
							else if (/ ^ \ //. test (url)) {// domaine relatif
								retourne 'url ("' + base_domain + url + '")';
							}
							else if (/ ^ \? /. test (url)) {// Relatif à la requête
								retourne 'url ("' + base_query + url + '")';
							}
							else {
								// relatif au chemin
								retourne 'url ("' + base + url + '")';
							}
						});

						// les URL de comportement ne doivent pas être converties (numéro 19)
						// base devrait être échappé avant d'être ajouté à RegExp (numéro 81)
						var escaped_base = base.replace (/([\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\/?&&&&&&&&&&&&&&&&&& c'est plus encore.
						css = css.replace (RegExp ('\\ b (comportement: \\ s *? url \\ (\'? "?)) '+ bases_échappées,' gi '),' $ 1 ');
						}
					
					var style = document.createElement ('style');
					style.textContent = css;
					style.media = link.media;
					style.disabled = link.disabled;
					style.setAttribute ('data-href', link.getAttribute ('href'));
					
					parent.insertBefore (style, lien);
					parent.removeChild (lien);
					
					style.media = link.media; // La duplication est intentionnelle. Voir le numéro 31
				}
		};

		essayer {
			xhr.open ('GET', url);
			xhr.send (null);
		} catch (e) {
			// Repli sur XDomainRequest si disponible
			if (typeof XDomainRequest! = "undefined") {
				xhr = new XDomainRequest ();
				xhr.onerror = xhr.onprogress = function () {};
				xhr.onload = process;
				xhr.open ("GET", url);
				xhr.send (null);
			}
		}
		
		link.setAttribute ('data-inprogress', '');
	},

	styleElement: fonction (style) {
		if (style.hasAttribute ('data-noprefix'))) {
			revenir;
		}
		var disabled = style.disabled;
		
		style.textContent = self.fix (style.textContent, true, style);
		
		style.disabled = désactivé;
	},

	styleAttribute: function (element) {
		var css = element.getAttribute ('style');
		
		css = self.fix (css, false, element);
		
		element.setAttribute ('style', css);
	},
	
	processus: function () {
		// feuilles de style liées
		$ ('link [rel = "stylesheet"]: not ([data-inprogress])'). forEach (StyleFix.link);
		
		// feuilles de style en ligne
		$ ('style'). forEach (StyleFix.styleElement);
		
		// styles en ligne
		$ ('[style]') .forEach (StyleFix.styleAttribute);
	},
	
	registre: fonction (fixateur, index) {
		(self.fixers = self.fixers || [])
			.splice (index === undefined? self.fixers.length: index, 0, fixateur);
	},
	
	correctif: fonction (css, raw, element) {
		pour (var i = 0; i <self.fixers.length; i++) {
			css = self.fixers[i](css, raw, element) || css;
		}
		
		return css;
	},
	
	camelCase: function (str) {
		return str.replace (/ - ([a-z]) / g, fonction ($ 0, $ 1) {return $ 1.toUpperCase ();}). replace ('-', '');
	},
	
	deCamelCase: function (str) {
		return str.replace (/[A-Z]/ g, fonction ($ 0) {return '-' + $ 0.toLowerCase ()});
	}
};

/ ***************************************
 * Styles de processus
 *************************************** /
(une fonction(){
	setTimeout (function () {
		$ ('link [rel = "stylesheet"]'). forEach (StyleFix.link);
	}, 10);
	
	document.addEventListener ('DOMContentLoaded', StyleFix.process, false);
}) ();

fonction $ (expr, con) {
	return [] .slice.call ((con || document) .querySelectorAll (expr));
}

}) ();

/ **
 * PrefixFree
 * /
(fonction (racine) {

if (! window.StyleFix ||! window.getComputedStyle) {
	revenir;
}

// aide privée
fonction fix (quoi, avant, après, remplacement, css) {
	quoi = soi[what];
	
	si (quelle.longueur) {
		var regex = RegExp (before + '(' + what.join ('|') + ')' + après, 'gi');

		css = css.replace (regex, remplacement);
	}
	
	return css;
}

var self = window.PrefixFree = {
	prefixCSS: fonction (css, raw, element) {
		préfixe var = self.prefix;
		
		// correctif des angles de dégradé
		if (self.functions.indexOf ('linear-gradient')> -1) {
			// Les dégradés sont supportés avec un préfixe, convertissent les angles en héritage
			css = css.replace (/ (\ s |: |,) (en répétant -)? gradient-linéaire \ (\ s * (-? \ d * \.? \ \ d *) deg / ig, fonction ($ 0, délimiter , en répétant, deg) {
				retourne delim + (en répétant || '') + 'gradient-linéaire (' + (90-deg) + 'deg';
			});
		}
		
		css = fix ('fonctions', '(\\ s |: |,)', '\\ s * \\ (', '$ 1' + préfixe + '$ 2 (', css);
		css = fix ('keywords', '(\\ s | :)', '(\\ s |; | \\} | $)', '$ 1' + préfixe + '$2$3', css);
		css = fix ('propriétés', '(^ | \\ {| \\ s |;)', '\\ s *:', '$ 1' + préfixe + '$ 2:', css);
		
		// Propriétés du préfixe * à l'intérieur * des valeurs (numéro 8)
		si (self.properties.length) {
			var regex = RegExp ('\\ b (' + self.properties.join ('|') + ') (?! :)', 'gi');
			
			css = fix ('valueProperties', '\\ b', ': (. +?);', function ($ 0) {
				return $ 0.replace (regex, préfixe + "$ 1")
			}, css);
		}
		
		si (brut) {
			css = fix ('sélecteurs', '', '\\ b', self.prefixSelector, css);
			css = fix ('atrules', '@', '\\ b', '@' + préfixe + '$ 1', css);
		}
		
		// Correction du double préfixe
		css = css.replace (RegExp ('-' + préfixe, 'g'), '-');
		
		// préfixe joker
		css = css.replace (/ - \ * - (? =[a-z]+) / gi, self.prefix);
		
		return css;
	},
	
	property: fonction (propriété) {
		return (self.properties.indexOf (property)> = 0? self.prefix: '') + propriété;
	},
	
	valeur: fonction (valeur, propriété) {
		value = fix ('functions', '(^ | \\ s |,)', '\\ s * \\ (', '$ 1' + self.prefix + '$ 2 (', valeur);
		value = fix ('keywords', '(^ | \\ s)', '(\\ s | $)', '$ 1' + self.prefix + '$2$3', valeur);

		if (self.valueProperties.indexOf (propriété)> = 0) {
			value = fix ('properties', '(^ | \\ s |,)', '($ | \\ s |,)', '$ 1' + self.prefix + '$2$3', value);
		}

		valeur de retour;
	},
	
	// Avertissement: les préfixes quoi qu'il arrive, même si le sélecteur est pris en charge sans préfixe
	prefixSelector: fonction (sélecteur) {
		return selector.replace (/ ^:{1,2}/, function ($ 0) {return $ 0 + self.prefix})
	},
	
	// Attention: les préfixes peu importe les circonstances, même si la propriété est supportée sans préfixe
	prefixProperty: function (propriété, camelCase) {
		var prefixed = self.prefix + property;
		
		retourner camelCase? StyleFix.camelCase (préfixé): préfixé;
	}
};

/ ***************************************
 * Propriétés
 *************************************** /
(une fonction() {
	préfixes var = {},
		propriétés = [],
		Raccourcis = {},
		style = getComputedStyle (document.documentElement, null),
		dummy = document.createElement ('div'). style;
	
	// Pourquoi faisons-nous cela au lieu d'itérer sur les propriétés d'un objet .style? Parce que Webkit n'ira pas dessus.
	var iterate = fonction (propriété) {
		if (property.charAt (0) === '-') {
			properties.push (propriété);
			
			var parts = property.split ('-'),
				préfixe = parties[1];
				
			// Nombre de préfixes utilisés
			préfixes[prefix] = ++ préfixes[prefix] || 1;
			
			// Cela aide à déterminer les raccourcis
			while (parts.length> 3) {
				parties.pop ();
				
				var shorthand = parts.join ('-');

				if (supporté (raccourci) && properties.indexOf (raccourci) === -1) {
					properties.push (en abrégé);
				}
			}
		}
	},
	pris en charge = fonction (propriété) {
		renvoie StyleFix.camelCase (propriété) dans le mannequin;
	}
	
	// Certains navigateurs ont des indices numériques pour les propriétés, d'autres non
	if (style.length> 0) {
		pour (var i = 0; i <style.length; i++) {
			itérer (style[i])
		}
	}
	else {
		for (propriété var dans le style) {
			itérer (StyleFix.deCamelCase (propriété));
		}
	}

	// Trouver le préfixe le plus utilisé
	var le plus élevé = {uses:0};
	pour (préfixe var dans les préfixes) {
		var utilise = préfixes[prefix];

		si (plus.utilisations <utilisations) {
			le plus élevé = {prefix: prefix, uses: uses};
		}
	}
	
	self.prefix = '-' + upper.prefix + '-';
	self.Prefix = StyleFix.camelCase (self.prefix);
	
	self.properties = [];

	// Obtenir les propriétés UNIQUEMENT prises en charge avec un préfixe
	pour (var i = 0; i <properties.length; i++) {
		var propriété = propriétés[i];
		
		if (property.indexOf (self.prefix) === 0) {// nous pourrions avoir plusieurs préfixes, comme Opera
			var unprefixed = property.slice (self.prefix.length);
			
			si (! pris en charge (non préfixé)) {
				self.properties.push (sans préfixe);
			}
		}
	}
	
	// correctif IE
	if (self.Prefix == 'Ms' 
	  &&! («transformer» en mannequin) 
	  &&! ('MsTransform' dans le mannequin) 
	  && ('msTransform' dans le mannequin)) {
		self.properties.push ('transformer', 'transformer-origin');	
	}
	
	self.properties.sort ();
}) ();

/ ***************************************
 * Valeurs
 *************************************** /
(une fonction() {
// Valeurs pouvant nécessiter un préfixe
fonctions var = {
	'gradient linéaire': {
		propriété: 'backgroundImage',
		params: 'rouge, sarcelle'
	},
	«calc»: {
		propriété: 'largeur',
		paramètres: '1px + 5%'
	},
	'élément': {
		propriété: 'backgroundImage',
		params: '#foo'
	},
	"fondu enchaîné": {
		propriété: 'backgroundImage',
		params: 'url (a.png), url (b.png), 50%'
	}
};


fonctions ['repeating-linear-gradient'] =
fonctions ['repeating-radial-gradient'] =
fonctions ['radial-gradient'] =
fonctions ['linear-gradient'];

// Note: Les propriétés assignées sont juste pour * tester * le support. 
// Les mots-clés seront préfixés partout.
var keywords = {
	'initial': 'color',
	'zoom-in': 'curseur',
	'zoom arrière': 'curseur',
	'box': 'display',
	'flexbox': 'affichage',
	'inline-flexbox': 'display',
	'flex': 'display',
	'inline-flex': 'display',
	'affichage de grille',
	'inline-grid': 'display',
	'max-content': 'width',
	'min-content': 'largeur',
	'fit-content': 'width',
	'remplir-disponible': 'largeur'
};

self.functions = [];
self.keywords = [];

var style = document.createElement ('div'). style;

fonction prise en charge (valeur, propriété) {
	style[property] = '';
	style[property] = valeur;

	retour !! style[property];
}

for (var func dans les fonctions) {
	var test = fonctions[func],
		property = test.property,
		valeur = func + '(' + test.params + ')';
	
	if (! pris en charge (valeur, propriété)
	  && supporté (self.prefix + value, property)) {
		// Il est supporté, mais avec un préfixe
		self.functions.push (func);
	}
}

for (mot-clé var dans mots-clés) {
	var propriété = mots-clés[keyword];

	if (! supporté (mot-clé, propriété)
	  && pris en charge (self.prefix + mot clé, propriété)) {
		// Il est supporté, mais avec un préfixe
		self.keywords.push (mot clé);
	}
}

}) ();

/ ***************************************
 * Sélecteurs et règles @
 *************************************** /
(une fonction() {

var 
sélecteurs = {
	': lecture seule': null,
	': lecture-écriture': null,
	': n'importe quel lien': null,
	':: selection': null
},

atrules = {
	'images clés': 'nom',
	'viewport': null,
	'document': 'regexp (".")'
};

sélecteurs autonomes = [];
self.atrules = [];

var style = root.appendChild (document.createElement ('style'));

fonction supportée (sélecteur) {
	style.textContent = sélecteur + '{}'; // Safari 4 a des problèmes avec style.innerHTML
	
	return !! style.sheet.cssRules.length;
}

pour (sélecteur var dans les sélecteurs) {
	var test = sélecteur + (sélecteurs[selector]? '(' + sélecteurs[selector] + ')': '');
		
	if (! supported (test) && supporté (self.prefixSelector (test)))) {
		self.selectors.push (sélecteur);
	}
}

pour (var atrule dans atrules) {
	var test = atrule + '' + (atrules[atrule] || '');
	
	if (! supporté ('@' + test) && supporté ('@' + self.prefix + test)) {
		self.atrules.push (atrule);
	}
}

root.removeChild (style);

}) ();

// Propriétés qui acceptent les propriétés comme valeur
self.valueProperties = [
	'transition',
	'propriété de transition'
]

// Ajouter une classe pour le préfixe actuel
root.className + = '' + self.prefix;

StyleFix.register (self.prefixCSS);


}) (document.documentElement);
