const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete-test', 'root', 'diddba1@@', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
