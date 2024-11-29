// models/modelEmprestimos.js
const { sequelize } = require("../config/db.js");
const { DataTypes } = require('sequelize');
const { Users } = require("./modelUsuarios"); 
const { Livros } = require("./modelLivros"); 


const Emprestimos = sequelize.define("Emprestimos", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    data_emprestimo: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idLivro: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "emprestimos",
    timestamps: false
});



class modelEmprestimo {
    listar() {
        return Emprestimos.findAll()
            .then(res => {
                if (res.length === 0) {
                    return { vazio: "Não há empréstimos feitos." }
                }
                return res;
            })
            .catch(err => {
                console.log("Erro ao listar empréstimos: " + err.message);
                throw err;
            });
    }


    criar(usuarioID, livroID) {
        return sequelize.transaction(async (t) => {
            try {

                const usuario = await Users.findByPk(usuarioID, { transaction: t });
                if (!usuario) {
                    throw new Error("Usuário não encontrado.");
                }


                if (usuario.emprestimos_feitos >= 2) {
                    throw new Error('Quantidade máxima de empréstimos alcançados.');
                }


                const livro = await Livros.findByPk(livroID, { transaction: t });
                if (!livro) {
                    throw new Error("Livro não encontrado.");
                }

                const emprestimo = await Emprestimos.create({
                    idUsuario: usuarioID,
                    idLivro: livroID,
                    data_emprestimo: new Date(),
                    data_devolucao: new Date(new Date().setMonth(new Date().getMonth() + 1))
                }, { transaction: t });


                await usuario.update({ emprestimos_feitos: usuario.emprestimos_feitos + 1 }, { transaction: t });
                await livro.update({ qtd_emprestimos: livro.qtd_emprestimos + 1 }, { transaction: t });

                return emprestimo;
            } catch (err) {
                console.error("Erro ao criar empréstimo: " + err.message);
            }
        });
    }
}

module.exports = {modelEmprestimo, Emprestimos };
