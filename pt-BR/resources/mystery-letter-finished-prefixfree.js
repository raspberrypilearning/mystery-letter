/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */

(function(){

if(!window.addEventListener) {
	return;
}

var self = window.StyleFix = {
	link: function(link) {
		try {
			// Ignorar estilos com atributo data-noprefix bem como folhas de estilo alternativas
			if(link.rel !== 'stylesheet' || link.hasAttribute('data-noprefix')) {
				return;
			}
		}
		catch(e) {
			return;
		}

		var url = link.href || link.getAttribute('data-href'),
		    base = url.replace(/[^\/]+$/, ''),
		    base_scheme = (/^[a-z]{3,10}:/.exec(base) || [''])[0],
		    base_domain = (/^[a-z]{3,10}:\/\/[^\/]+/.exec(base) || [''])[0],
		    base_query = /^([^?]*)\??/.exec(url)[1],
		    parent = link.parentNode,
		    xhr = new XMLHttpRequest(),
		    process;
		
		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4) {
				process();
			}
		};

		process = function() {
				var css = xhr.responseText;
				
				if(css && link.parentNode && (!xhr.status || xhr.status < 400 || xhr.status > 600)) {
					css = self.fix(css, true, link);
					
					// Converte URLs relativos em absoluto, se necessário
					if(base) {
						css = css.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function($0, quote, url) {
							if(/^([a-z]{3,10}:|#)/i.test(url)) { // Absoluto & ou hash-relative
								return $0;
							}
							else if(/^\/\//.test(url)) { // Esquema relativo
								// Pode conter seqüências como /../ e /./, mas aqueles DO é um grande trabalhador
								return 'url("' + base_scheme + url + '")';
							}
							else if(/^\//.test(url)) { // Dominio relativo
								return 'url("' + base_domain + url + '")';
							}
							else if(/^\?/.test(url)) { // Consulta relativa
								return 'url("' + base_query + url + '")';
							}
							else {
								// Caminho relativo
								return 'url("' + base + url + '")';
							}
						});

						// as URLs de comportamento não devem ser convertidos (Issue #19)
						// base deve ter carácter de escape antes de ser adicionado ao RegExp (Issue #81)
						var escaped_base = base.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1");
						css = css.replace(RegExp('\\b(behavior:\\s*?url\\(\'?"?)' + escaped_base, 'gi'), '$1');
						}
					
					var style = document.createElement('style');
					style.textContent = css;
					style.media = link.media;
					style.disabled = link.disabled;
					style.setAttribute('data-href', link.getAttribute('href'));
					
					parent.insertBefore(style, link);
					parent.removeChild(link);
					
					style.media = link.media; // Duplicidade é intencional. Veja issue #31
				}
		};

		try {
			xhr.open('GET', url);
			xhr.send(null);
		} catch (e) {
			// Retorna para XDomainRequest se disponível
			if (typeof XDomainRequest != "undefined") {
				xhr = new XDomainRequest();
				xhr.onerror = xhr.onprogress = function() {};
				xhr.onload = process;
				xhr.open("GET", url);
				xhr.send(null);
			}
		}
		
		link.setAttribute('data-inprogress', '');
	},

	styleElement: function(style) {
		if (style.hasAttribute('data-noprefix')) {
			return;
		}
		var disabled = style.disabled;
		
		style.textContent = self.fix(style.textContent, true, style);
		
		style.disabled = disabled;
	},

	styleAttribute: function(element) {
		var css = element.getAttribute('style');
		
		css = self.fix(css, false, element);
		
		element.setAttribute('style', css);
	},
	
	process: function() {
		// Folhas de estilo vinculadas
		$('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);
		
		// Folhas de estilo em linha
		$('style').forEach(StyleFix.styleElement);
		
		// Estilo em linha
		$('[style]').forEach(StyleFix.styleAttribute);
	},
	
	register: function(fixer, index) {
		(self.fixers = self.fixers || [])
			.splice(index === undefined? self.fixers.length : index, 0, fixer);
	},
	
	fix: function(css, raw, element) {
		for(var i=0; i<self.fixers.length; i++) {
			css = self.fixers[i](css, raw, element) || css;
		}
		
		return css;
	},
	
	camelCase: function(str) {
		return str.replace(/-([a-z])/g, function($0, $1) { return $1.toUpperCase(); }).replace('-','');
	},
	
	deCamelCase: function(str) {
		return str.replace(/[A-Z]/g, function($0) { return '-' + $0.toLowerCase() });
	}
};

/**************************************
 * Process styles
 **************************************/
(function(){
	setTimeout(function(){
		$('link[rel="stylesheet"]').forEach(StyleFix.link);
	}, 10);
	
	document.addEventListener('DOMContentLoaded', StyleFix.process, false);
})();

function $(expr, con) {
	return [].slice.call((con || document).querySelectorAll(expr));
}

})();

/**
 * PrefixFree
 */
(function(root){

if(!window.StyleFix || !window.getComputedStyle) {
	return;
}

// Private helper
function fix(what, before, after, replacement, css) {
	what = self[what];
	
	if(what.length) {
		var regex = RegExp(before + '(' + what.join('|') + ')' + after, 'gi');

		css = css.replace(regex, replacement);
	}
	
	return css;
}

var self = window.PrefixFree = {
	prefixCSS: function(css, raw, element) {
		var prefix = self.prefix;
		
		// Correção de ângulos de gradiente
		if(self.functions.indexOf('linear-gradient') > -1) {
			// Gradientes são suportados com um prefixo, converter ângulos em legado
			css = css.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig, function ($0, delim, repeating, deg) {
				return delim + (repeating || '') + 'linear-gradient(' + (90-deg) + 'deg';
			});
		}
		
		css = fix('functions', '(\\s|:|,)', '\\s*\\(', '$1' + prefix + '$2(', css);
		css = fix('keywords', '(\\s|:)', '(\\s|;|\\}|$)', '$1' + prefix + '$2$3', css);
		css = fix('properties', '(^|\\{|\\s|;)', '\\s*:', '$1' + prefix + '$2:', css);
		
		// Prefixo de valor da propriedades *inside* (issue #8)
		if (self.properties.length) {
			var regex = RegExp('\\b(' + self.properties.join('|') + ')(?!:)', 'gi');
			
			css = fix('valueProperties', '\\b', ':(.+?);', function($0) {
				return $0.replace(regex, prefix + "$1")
			}, css);
		}
		
		if(raw) {
			css = fix('selectors', '', '\\b', self.prefixSelector, css);
			css = fix('atrules', '@', '\\b', '@' + prefix + '$1', css);
		}
		
		// Corrigir prefixos duplos
		css = css.replace(RegExp('-' + prefix, 'g'), '-');
		
		// Prefixo curinga(wildcard)
		css = css.replace(/-\*-(?=[a-z]+)/gi, self.prefix);
		
		return css;
	},
	
	property: function(property) {
		return (self.properties.indexOf(property) >=0 ? self.prefix : '') + property;
	},
	
	value: function(value, property) {
		value = fix('functions', '(^|\\s|,)', '\\s*\\(', '$1' + self.prefix + '$2(', value);
		value = fix('keywords', '(^|\\s)', '(\\s|$)', '$1' + self.prefix + '$2$3', value);

		if(self.valueProperties.indexOf(property) >= 0) {
			value = fix('properties', '(^|\\s|,)', '($|\\s|,)', '$1'+self.prefix+'$2$3', value);
		}

		return value;
	},
	
	// Aviso: os prefixos não importam, mesmo que o seletor seja suportado sem prefixo
	prefixSelector: function(selector) {
		return selector.replace(/^:{1,2}/, function($0) { return $0 + self.prefix })
	},
	
	// Aviso: os prefixos não importam, mesmo que a propriedade seja suportada sem prefixo
	prefixProperty: function(property, camelCase) {
		var prefixed = self.prefix + property;
		
		return camelCase? StyleFix.camelCase(prefixed) : prefixed;
	}
};

/**************************************
 * Propriedades
 **************************************/
(function() {
	var prefixes = {},
		properties = [],
		shorthands = {},
		style = getComputedStyle(document.documentElement, null),
		dummy = document.createElement('div').style;
	
	// Por que estamos fazendo isso em vez de iterar sobre propriedades em um objeto .style? Porque Webkit não irá iterar sobre os outros.
	var iterate = function(property) {
		if(property.charAt(0) === '-') {
			properties.push(property);
			
			var parts = property.split('-'),
				prefix = parts[1];
				
			// Count(contador) usa prefixo
			prefixes[prefix] = ++prefixes[prefix] || 1;
			
			// Isso ajuda a determinar atalhos
			while(parts.length > 3) {
				parts.pop();
				
				var shorthand = parts.join('-');

				if(supported(shorthand) && properties.indexOf(shorthand) === -1) {
					properties.push(shorthand);
				}
			}
		}
	},
	supported = function(property) {
		return StyleFix.camelCase(property) in dummy;
	}
	
	// Alguns navegadores têm índices numéricos para as propriedades, outros não
	if(style.length > 0) {
		for(var i=0; i<style.length; i++) {
			iterate(style[i])
		}
	}
	else {
		for(var property in style) {
			iterate(StyleFix.deCamelCase(property));
		}
	}

	// Encontrar prefixo usado com mais frequência
	var highest = {uses:0};
	for(var prefix in prefixes) {
		var uses = prefixes[prefix];

		if(highest.uses < uses) {
			highest = {prefix: prefix, uses: uses};
		}
	}
	
	self.prefix = '-' + highest.prefix + '-';
	self.Prefix = StyleFix.camelCase(self.prefix);
	
	self.properties = [];

	// Obter propriedades APENAS suportadas com um prefixo
	for(var i=0; i<properties.length; i++) {
		var property = properties[i];
		
		if(property.indexOf(self.prefix) === 0) { // podemos ter vários prefixos, como o Navegador Opera
			var unprefixed = property.slice(self.prefix.length);
			
			if(!supported(unprefixed)) {
				self.properties.push(unprefixed);
			}
		}
	}
	
	// Correção do Navegador IE
	if(self.Prefix == 'Ms' 
	  && !('transform' in dummy) 
	  && !('MsTransform' in dummy) 
	  && ('msTransform' in dummy)) {
		self.properties.push('transform', 'transform-origin');	
	}
	
	self.properties.sort();
})();

/**************************************
 * Valores
 **************************************/
(function() {
// Valores que podem precisar de prefixos
var functions = {
	'linear-gradient': {
		property: 'backgroundImage',
		params: 'red, teal'
	},
	'calc': {
		property: 'width',
		params: '1px + 5%'
	},
	'element': {
		property: 'backgroundImage',
		params: '#foo'
	},
	'cross-fade': {
		property: 'backgroundImage',
		params: 'url(a.png), url(b.png), 50%'
	}
};


functions['repeating-linear-gradient'] =
functions['repeating-radial-gradient'] =
functions['radial-gradient'] =
functions['linear-gradient'];

// Nota: As propriedades designadas são apenas para suprtar *teste*. 
// As palavras-chave serão prefixadas em todos os lugares.
var keywords = {
	'initial': 'color',
	'zoom-in': 'cursor',
	'zoom-out': 'cursor',
	'box': 'display',
	'flexbox': 'display',
	'inline-flexbox': 'display',
	'flex': 'display',
	'inline-flex': 'display',
	'grid': 'display',
	'inline-grid': 'display',
	'max-content': 'width',
	'min-content': 'width',
	'fit-content': 'width',
	'fill-available': 'width'
};

self.functions = [];
self.keywords = [];

var style = document.createElement('div').style;

function supported(value, property) {
	style[property] = '';
	style[property] = value;

	return !!style[property];
}

for (var func in functions) {
	var test = functions[func],
		property = test.property,
		value = func + '(' + test.params + ')';
	
	if (!supported(value, property)
	  && supported(self.prefix + value, property)) {
		// É suportado, mas com um prefixo
		self.functions.push(func);
	}
}

for (var keyword in keywords) {
	var property = keywords[keyword];

	if (!supported(keyword, property)
	  && supported(self.prefix + keyword, property)) {
		// É suportado, mas com um prefixo
		self.keywords.push(keyword);
	}
}

})();

/**************************************
 * Seletores e @-rules
 **************************************/
(function() {

var 
selectors = {
	':read-only': null,
	':read-write': null,
	':any-link': null,
	'::selection': null
},

atrules = {
	'keyframes': 'name',
	'viewport': null,
	'document': 'regexp(".")'
};

self.selectors = [];
self.atrules = [];

var style = root.appendChild(document.createElement('style'));

function supported(selector) {
	style.textContent = selector + '{}';  // O Safari 4 tem problemas com style.innerHTML
	
	return !!style.sheet.cssRules.length;
}

for(var selector in selectors) {
	var test = selector + (selectors[selector]? '(' + selectors[selector] + ')' : '');
		
	if(!supported(test) && supported(self.prefixSelector(test))) {
		self.selectors.push(selector);
	}
}

for(var atrule in atrules) {
	var test = atrule + ' ' + (atrules[atrule] || '');
	
	if(!supported('@' + test) && supported('@' + self.prefix + test)) {
		self.atrules.push(atrule);
	}
}

root.removeChild(style);

})();

// Propriedades que aceitam propriedades como seu valor
self.valueProperties = [
	'transition',
	'transition-property'
]

// Adicione a classe para o prefixo atual
root.className += ' ' + self.prefix;

StyleFix.register(self.prefixCSS);


})(document.documentElement);
