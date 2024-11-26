const { Livros } = require("../config/db.js");

class modelLivros {
    listar() {
        return Livros.findAll().then((res) => res)
        .catch((err) => console.log("Erro: " + err.message));
    };

    criar(novoLivro) {
        return Livros.create(novoLivro)
        .then((res) => res)
        .catch((err) => console.log("Erro: " + err.message));
    };

    atualizar(atualizarLivro, id) {
        return Livros.update(atualizarLivro, { where: { id }})
        .then((res) => res)
        .catch((err) => console.log("Erro: " + err.message));
    };

    deletar(id) {
        return Livros.destroy({ where: { id }})
        .then((res) => res)
        .catch((err) => console.log("Erro: " + err.message));
    };
};

module.exports = new modelLivros();