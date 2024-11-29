const { Router } = require("express");
const router = Router();
const controllerEmprestimos = require("../controllers/controllerEmprestimos.js");

router.get("/emprestimos", (req, res) => {
    controllerEmprestimos.buscar()
        .then((emprestimo) => res.status(200).json(emprestimo))
        .catch((err) => res.status(400).json(err.message));
});

// POST
router.post("/emprestimos", (req, res) => {
        controllerEmprestimos.criar(req, res);  // Deixe o controlador lidar com a resposta
    
});


// PUT
router.put("/emprestimo/:id", (req, res) => {
    const { id } = req.params;
    const atualizarEmprestimos = req.query;
    controllerEmprestimos.atualizar(atualizarEmprestimos, id)
        .then((emprestimoAtualizado) => res.status(200).json(emprestimoAtualizado))
        .catch((err) => res.status(400).json(err.message));
});

// DELETE
router.delete("/emprestimo/:id", (req, res) => {
    const { id } = req.params;
    controllerEmprestimos.deletar(id)
        .then(() => res.status(200).json({ sucesso: `Emprestimo ${id} removido com sucesso!` }))
        .catch((err) => res.status(400).json(err.message));
});

module.exports = router;