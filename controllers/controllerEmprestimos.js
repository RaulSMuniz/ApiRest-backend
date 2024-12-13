
const { modelEmprestimo } = require('../models/modelEmprestimos');
const { Users } = require('../models/modelUsuarios.js');

class controllerEmprestimos {
    constructor() {
        this.model = new modelEmprestimo();
    }

    buscar() {
        return this.model.listar()
            .then(res => {
                if (res.length == 0) {
                    res.json({ vazio: "Não há empréstimos feitos." });
                }
                return res;
            });
    }

    criar(req, res) {
        const { idUsuario, idLivro } = req.query;
        console.log('idUsuario:', idUsuario, 'idLivro:', idLivro);

        if (!idUsuario || !idLivro) {
            if (!res.headersSent) {
                return res.status(400).json({ erro: 'Parâmetros idUsuario e idLivro são obrigatórios.' });
            }
        }

        return Users.findByPk(idUsuario)
            .then(usuario => {
                if (usuario.emprestimos_feitos >= 2) {
                    return res.status(400).json({ erro: "Quantidade máxima de empréstimos atingida." })
                }

                return this.model.criar(idUsuario, idLivro)
                    .then(emprestimoCriado => {
                        console.log('Empréstimo criado:', emprestimoCriado);
                        if (!res.headersSent) {
                            return res.status(201).json({ sucesso: "Empréstimo feito com sucesso." });
                        }
                    })
                    .catch(err => {
                        console.error("Erro ao criar empréstimo: ", err);
                        if (!res.headersSent) {
                            if (err.message === 'Quantidade máxima de empréstimos alcançados.') {
                                return res.status(400).json({ erro: err.message });
                            }

                            return res.status(500).json({ error: 'Erro interno do servidor.' });
                        }
                    });
            })
    }

    async atualizar(req, res) {
        const { id } = req.params; 
        const { devolucao } = req.query; 
    
        try {

            if (!['pendente', 'devolvido'].includes(devolucao)) {
                return res.status(400).json({ erro: "Parâmetro 'novoStatus' inválido. Aceito 'pendente' ou 'devolvido'." });
            }

            const emprestimoAtualizado = await this.model.atualizar(id, devolucao);

            if (!emprestimoAtualizado) {
                return res.status(404).json({ erro: "Empréstimo não encontrado." });
            }
    
            return res.status(200).json({
                sucesso: "Status do empréstimo atualizado com sucesso.",
                emprestimo: emprestimoAtualizado
            });
        } catch (err) {
            console.error("Erro: " + err.message);
            return res.status(400).json({ erro: err.message });
        }
    }

    deletar(id) {
        return this.model.deletar(id);
    };
    async livrosMaisEmprestados(req, res) {  //Relatório de livros mais emprestados 
        try {
            const resultado = await this.model.livrosMaisEmprestados();
            res.status(200).json(resultado);
        } catch (err) {
            console.error("Erro ao gerar relatório de livros mais emprestados:", err.message);
            res.status(500).json({ error: "Erro interno ao gerar relatório." });
        }
    }
    async usuariosComPendencias(req, res) { //Relatório de emprestimos pendentes
        try {
            const resultado = await this.model.usuariosComPendencias();
            res.status(200).json(resultado);
        } catch (err) {
            console.error("Erro ao gerar relatório de usuários com pendências:", err.message);
            res.status(500).json({ error: "Erro interno ao gerar relatório." });
        }
    }

}

module.exports = new controllerEmprestimos(); 
