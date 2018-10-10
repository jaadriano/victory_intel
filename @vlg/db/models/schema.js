const db = require('../index.js');
schemas = {};

var user = db.sequelize.define('user', {
	id: { type: db.Sequelize.STRING, allowNull: false, defaultValue: true, primaryKey: true},
	type: { type: db.Sequelize.STRING, allowNull: false, defaultValue: true},
	full_name: { type: db.Sequelize.TEXT, allowNull: false, defaultValue: true},
	username: { type: db.Sequelize.STRING, allowNull: false, defaultValue: true},
	password: { type: db.Sequelize.STRING, allowNull: false, defaultValue: true},
	contact_number: { type: db.Sequelize.TEXT, allowNull: false, defaultValue: true},
	address: { type: db.Sequelize.TEXT, allowNull: false, defaultValue: true},
	image_url: { type: db.Sequelize.STRING, allowNull: true, defaultValue: null, unique:true},
	area_id: { type: db.Sequelize.INTEGER, allowNull: true, defaultValue: 0, foreignKey: true},
	rating:  { type: db.Sequelize.INTEGER, allowNull: true, defaultValue: null},
	status: { type: db.Sequelize.STRING, allowNull: true, defaultValue: null},
	createdAt: { type: db.Sequelize.DATE, allowNull: false, defaultValue: db.Sequelize.DATE.NOW},
	approvedAt: { type: db.Sequelize.DATE, allowNull: true},
	updatedAt: { type: db.Sequelize.DATE, allowNull: true},
	deletedAt: { type: db.Sequelize.DATE, allowNull: true}
});

const area = db.sequelize.define('area', {
	id: { type: db.Sequelize.INTEGER, allowNull: false, defaultValue: true, primaryKey: true},
	area_address: { type: db.Sequelize.TEXT, allowNull: false, defaultValue: true},
	createdAt: { type: db.Sequelize.DATE, allowNull: false, defaultValue: db.Sequelize.DATE.NOW},
	updatedAt: { type: db.Sequelize.DATE, allowNull: true, defaultValue: null},
	deletedAt: { type: db.Sequelize.DATE, allowNull: true, defaultValue: null}
});
// const product = db.sequelize.define('product', {
	// id: { type: db.Sequelize.INTEGER, allowNull: false, defaultValue: true, primaryKey: true},
	// product_type_id: { type: db.Sequelize.TEXT, allowNull: false, defaultValue: true},

	// name: { type: db.Sequelize.TEXT, allowNull: false, defaultValue: true},
	// image_url: { type: db.Sequelize.TEXT, allowNull: false, defaultValue: true},
	// stock: { type: db.Sequelize.TEXT, allowNull: false, defaultValue: true},
	// price_per_kilo: { type: db.Sequelize.TEXT, allowNull: false, defaultValue: true},
	// producer: { type: db.Sequelize.TEXT, allowNull: false, defaultValue: true},
	// createdAt: { type: db.Sequelize.DATE, allowNull: false, defaultValue: db.Sequelize.DATE.NOW},
	// updatedAt: { type: db.Sequelize.DATE, allowNull: true, defaultValue: null},
	// deletedAt: { type: db.Sequelize.DATE, allowNull: true, defaultValue: null}
// });


user.hasOne(area, {foreignKey: 'area_id'});

schemas.user = user;
schemas.area = area;

module.exports = schemas;