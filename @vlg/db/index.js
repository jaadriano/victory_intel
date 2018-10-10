'use strict';
const Sequelize = require('sequelize');
var db = {};

const sequelize = new Sequelize('bingwit', 'root', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;