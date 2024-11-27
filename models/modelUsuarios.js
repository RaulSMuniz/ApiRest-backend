const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');

const Users = sequelize.define('Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereço: {
        type: DataTypes.STRING(800),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: "usuarios",
    timestamps: false
});

class modelUsuarios {
    listar() {
        return Users.findAll().then((res) => res)
        .catch((err) => console.log("Erro: " + err.message));
    };

    criar(novoUser) {
        return Users.create(novoUser)
        .then((res) => res)
        .catch((err) => console.log("Erro: " + err.message));
    };

    atualizar(atualizarUser, id) {
        return Users.update(atualizarUser, { where: { id }})
        .then((res) => res)
        .catch((err) => console.log("Erro: " + err.message));
    };

    deletar(id) {
        return Users.destroy({ where: { id }})
        .then((res) => res)
        .catch((err) => console.log("Erro: " + err.message));
    };
}

module.exports = new modelUsuarios();