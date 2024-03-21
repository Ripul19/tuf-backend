const Sequelize = require('sequelize');
const mysql2 = require('mysql2');

let sequelize;

try {
  sequelize = new Sequelize(process.env.DB_NAME_DATABASE, process.env.DB_NAME_USER, process.env.DB_NAME_PASSWORD, {
    host: process.env.DB_NAME_HOST,
    dialect: 'mysql',
    dialectModule: mysql2,
  });
} catch (error) {
  console.error('Error connecting to the database:', error);
}

module.exports = sequelize;
