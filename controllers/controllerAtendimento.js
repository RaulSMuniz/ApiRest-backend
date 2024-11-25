const modelAtendimento = require("../models/modelAtendimento.js");

class controllerAtendimento {
    buscar() {
        return modelAtendimento.listar();
    };

    criar(novoAtendimento) {
       return modelAtendimento.criar(novoAtendimento);
    };

    atualizar(atualizarAtendimento, id) {
        return modelAtendimento.atualizar(atualizarAtendimento, id);
    };

    deletar(id) {
        return modelAtendimento.deletar(id);
    };
};

module.exports = new controllerAtendimento();