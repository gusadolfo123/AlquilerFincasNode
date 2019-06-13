const Handlebars = require('handlebars');

Handlebars.registerHelper('trimString', function(passedString) {
	let theString = passedString.substring(0, 40);
	theString += '...';
	return new Handlebars.SafeString(theString);
});

Handlebars.registerHelper('times', function(n, block) {
	var accum = '';
	for (var i = 1; i <= n; ++i) accum += block.fn(i);
	return accum;
});
