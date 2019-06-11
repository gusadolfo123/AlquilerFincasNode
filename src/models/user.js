const bcryt = require('bcryptjs');
const mongoose = require('mongoose');
const { Schema } = mongoose;

// definicion del esquema del documento User
const UserSchemma = new Schema({
	firtName: { type: String, required: true },
	lastName: { type: String },
	email: { type: String, required: true },
	birtday: { type: Date, default: Date.now },
	date: { type: Date, default: Date.now },
});

/* se crean metodo al esquema correspondientes */

// metodo de encriptacion de la contraseña
UserSchemma.methods.encrypPassword = async password => {
	const salt = await bcryt.genSalt(15); // cantidad de veces que aplicara el algoritmo
	const hash = bcryt.hash(password, salt); // genera contraseña encriptada en hash
	return hash;
};

// metodo de comprobacion de la contraseña
// no se usa arrow function ya que se necesita acceder a una propiedad del objeto
UserSchemma.methods.matchPassword = async function(password) {
	return await bcryt.compare(password, this.password);
};

// genera el modelo en la base de datos y retorna dicho modelo
module.exports = mongoose.model('User', UserSchemma);
