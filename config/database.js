const Sequelize = require('sequelize');

const sequelize = new Sequelize('marina', 'root', 'mysqluser', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;