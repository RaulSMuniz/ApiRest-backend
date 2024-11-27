const modelUsers = require('../models/modelUsuarios');

class controllerUsers {
    buscar() {
        return modelUsers.listar();
    };

    criar(novoUser) {
        return modelUsers.criar(novoUser)
            .then((userCriado) => userCriado)
            .catch((err) => {
                console.error("Erro ao criar Users:", err.message);
                throw err;
            });
    };
    

    atualizar(atualizarUser, id) {
        return modelUsers.atualizar(atualizarUser, id);
    };

    deletar(id) {
        return modelUsers.deletar(id);
    };
};

module.exports = new controllerUsers();