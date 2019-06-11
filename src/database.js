const database = require('mongoose');

database
	.connect('mongodb://localhost/alquiler', {
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: false,
	})
	.then(db => console.log('db is connected'))
	.catch(err => console.log(err));
