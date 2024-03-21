const Sequelize = require('sequelize');

const sequelize = new Sequelize('tuf', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;