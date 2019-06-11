const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(
	new LocalStrategy(
		{
			// indica atraves de que campo se va a autenticar
			usernameField: 'email',
		},
		async (email, password, done) => {
			const user = await User.findOne({ email });
			if (!user) return done(null, false, { message: 'Not user found' });

			const match = await user.matchPassword(password);
			if (!match) return done(null, false, { message: 'Incorrect Password' });

			return done(null, user);
		},
	),
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});
