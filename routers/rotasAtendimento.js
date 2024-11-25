const { Router } = require("express");
const router = Router();
const controllerAtendimento = require("../controllers/controllerAtendimento");

// HTTP Verbs

// Get
router.get("/atendimentos", (req, res) => {
    const listaAtendimentos = controllerAtendimento.buscar();
    listaAtendimentos
    .then(atendimentos => res.status(200).json(atendimentos))
    .catch(err => res.status(400).json(err.message));
});

// Post
router.post("/atendimentos", (req, res) => { 
    const novoAtendimento = req.query;
    const atendimento = controllerAtendimento.criar(novoAtendimento);
    atendimento
    .then(atendimentoCriado => res.status(201).json(atendimentoCriado))
    .catch(err => res.status(400).json(err.message));
});

// Put
router.put("/atendimento/:id", (req, res) => {
    const { id } = req.params;
    const atualizarAtendimento = req.query;
    const atendimento = controllerAtendimento.atualizar(atualizarAtendimento, id);
    atendimento
    .then(atendimentoAtualizado => res.status(200).json(atendimentoAtualizado))
    .catch(err => res.status(400).json(err.message));
});

// Delete
router.delete("/atendimento/:id", (req, res) => {
    const { id } = req.params;
    const atendimento = controllerAtendimento.deletar(id);
    atendimento
    .then(atendimentoDeletado => res.status(200).json(atendimentoDeletado))
    .catch(err => res.status(400).json(err.message));
});

module.exports = router;