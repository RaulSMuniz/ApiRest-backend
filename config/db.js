const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => console.log("Conexão com o banco de dados feita."))
.catch((err) => console.log(err.message));

module.exports = {sequelize};