const Sequelize = require('sequelize');
const sequelize = require('../utils/database.js');

const Table = sequelize.define('tables', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preferred_code_language: {
        type: Sequelize.STRING,
        allowNull: false
    },
    stdin: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    source_code: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Table;
