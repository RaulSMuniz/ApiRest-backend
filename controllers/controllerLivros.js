const modelLivro = require("../models/modelLivros.js");

class controllerLivros {
    buscar() {
        return modelLivro.listar();
    };

    criar(novoLivro) {
        return modelLivro.criar(novoLivro)
            .then((livroCriado) => livroCriado)
            .catch((err) => {
                console.error("Erro ao criar livro:", err.message);
                throw err;
            });
    };
    

    atualizar(atualizarLivro, id) {
        return modelLivro.atualizar(atualizarLivro, id);
    };

    deletar(id) {
        return modelLivro.deletar(id);
    };
}

module.exports = new controllerLivros();
