const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const hbs = require('./helpers/handlebars-helpers');

const app = express();
require('./database');
require('./config/passport');

app.set('port', process.env.PORT || 9595);
app.set('views', path.join(__dirname, 'views'));

app.engine(
	'.hbs',
	exphbs({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
		helpers: hbs,
	}),
);

app.set('view engine', '.hbs');
app.use(methodOverride('_method'));
app.use(
	session({
		secret: 'mySecredKey',
		resave: true,
		saveUninitialized: true,
	}),
);

app.use(passport.initialize());
app.use(passport.session());

// para enviar mensajes entre controlador y vista
app.use(flash());

app.use(express.json());

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Global Variables

//para habilitar mensajes en todas las vistas
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
});

// Routes
app.use(require('./routes/index.route'));
app.use(require('./routes/user.route'));
app.use(require('./routes/farm.route'));

// Server Running
app.listen(app.get('port'), () => {
	console.log(`Server is Running in Port ${app.get('port')}`);
});
