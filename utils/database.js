const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME_DATABASE, process.env.DB_NAME_USER, process.env.DB_NAME_PASSWORD, {
  host: process.env.DB_NAME_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = sequelize; 