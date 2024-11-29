
const {modelLivros} = require('../models/modelLivros'); 

class controllerLivros {
    constructor() {
        this.model = new modelLivros(); 
    }

    buscar() {
        return this.model.listar();
    }

    criar(novoLivro) {
        return this.model.criar(novoLivro)
            .then((livroCriado) => livroCriado)
            .catch((err) => {
                console.error("Erro ao criar livro:", err.message);
                throw err;
            });
    }

    atualizar(atualizarLivro, id) {
        return this.model.atualizar(atualizarLivro, id);
    }

    deletar(id) {
        return this.model.deletar(id);
    }
}

module.exports = new controllerLivros();  
