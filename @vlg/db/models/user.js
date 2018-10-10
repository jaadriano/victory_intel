//class User
const jwt = require('jsonwebtoken');
const db = require('sequelize');
const crypto = require('crypto');
const schema = require('./schema');

var User = function (data) {
	this.data = schema.user.build(data);
}

User.prototype.data = {}

User.prototype.get = function (name) {
	return this.data[name];
}

User.prototype.set = function (name, value) {
	this.data[name] = value;
}

User.methods = {}

User.methods.findById = function (id, callback) {
	db.sequelize.get('users', {id: id}).run(function (err, data) {
	if (err) return callback(err);
		callback(null, new User(data));
	});
}
User.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

User.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

User.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
}

module.exports = User;