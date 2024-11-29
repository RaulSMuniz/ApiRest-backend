// models/modelUsuarios.js
const { sequelize } = require('../config/db.js');
const { DataTypes } = require('sequelize');

const Users = sequelize.define('Users', {
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
        type: DataTypes.STRING(),
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
        unique: true,
        set(tel) {
            const telFormatado = tel.replace(/\D/g, '');
            this.setDataValue('telefone', telFormatado);
        }
    },
    emprestimos_feitos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 2
        }
    }
}, {
    tableName: "usuarios",
    timestamps: false
});

class modelUsuarios {
    listar() {
        return Users.findAll().catch((err) => {
            console.log("Erro ao listar usuários: " + err.message);
            throw err;
        });
    }

    criar(novoUser) {
        return Users.create(novoUser).catch((err) => {
            console.log("Erro ao criar usuário: " + err.message);
            throw err;
        });
    }

    atualizar(atualizarUser, id) {
        return Users.update(atualizarUser, { where: { id } }).catch((err) => {
            console.log("Erro ao atualizar usuário: " + err.message);
            throw err;
        });
    }

    deletar(id) {
        return Users.destroy({ where: { id } }).catch((err) => {
            console.log("Erro ao deletar usuário: " + err.message);
            throw err;
        });
    }
}

module.exports = { modelUsuarios, Users };
