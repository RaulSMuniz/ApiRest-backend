
const {modelUsuarios} = require('../models/modelUsuarios');  

class controllerUsers {
    constructor() {
        this.model = new modelUsuarios();  
    }

    buscar() {
        return this.model.listar();
    };

    criar(novoUser) {
        return this.model.criar(novoUser)
            .then((userCriado) => userCriado)
            .catch((err) => {
                console.error("Erro ao criar Users:", err.message);
                throw err;
            });
    };

    atualizar(atualizarUser, id) {
        return this.model.atualizar(atualizarUser, id);
    };

    deletar(id) {
        return this.model.deletar(id);
    };
};

module.exports = new controllerUsers();
