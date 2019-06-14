const Handlebars = require('handlebars');

Handlebars.registerHelper('trimString', function(passedString) {
	let theString = passedString.substring(0, 20);
	theString += '...';
	return new Handlebars.SafeString(theString);
});

Handlebars.registerHelper('times', function(n, block) {
	var accum = '';
	for (var i = 1; i <= n; ++i) accum += block.fn(i);
	return accum;
});

Handlebars.registerHelper('price', function(num) {
	let separador = '.'; // separador para los miles
	let sepDecimal = ','; // separador para los decimales

	num += '';
	var splitStr = num.split('.');
	var splitLeft = splitStr[0];
	var splitRight = splitStr.length > 1 ? sepDecimal + splitStr[1] : '';
	var regx = /(\d+)(\d{3})/;
	while (regx.test(splitLeft)) {
		splitLeft = splitLeft.replace(regx, '$1' + separador + '$2');
	}
	return splitLeft + splitRight;
});
