const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');

const Livros = sequelize.define("Livros", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
            min: 1500,
            max: new Date().getFullYear()
        }
    },
    qtd_emprestimos: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: "livros",
    timestamps: false
});

class modelLivros {
    listar() {
        return Livros.findAll()
            .then((res) => res)
            .catch((err) => console.log("Erro: " + err.message));
    };

    criar(novoLivro) {
        return Livros.create(novoLivro)
            .then((res) => res)
            .catch((err) => console.log("Erro: " + err.message));
    };

    atualizar(atualizarLivro, id) {
        return Livros.update(atualizarLivro, { where: { id } })
            .then((res) => res)
            .catch((err) => console.log("Erro: " + err.message));
    };

    deletar(id) {
        return Livros.destroy({ where: { id } })
            .then((res) => res)
            .catch((err) => console.log("Erro: " + err.message));
    };
}

module.exports = { modelLivros, Livros };
