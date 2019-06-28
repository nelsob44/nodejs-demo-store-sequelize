const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-project', 'root', 'Mi201992', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;