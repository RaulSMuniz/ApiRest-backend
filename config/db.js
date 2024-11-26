const { Sequelize, DataTypes } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql'
});

const Livros = sequelize.define("Livros", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano_de_publicacao: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1500,
            max: new Date().getFullYear()
        }
    }
}, {
    tableName: "livros",
    timestamps: false
});

sequelize.authenticate()
.then(() => console.log("Conexão com o banco de dados feita."))
.catch((err) => console.log(err.message));

module.exports = {sequelize, Livros};