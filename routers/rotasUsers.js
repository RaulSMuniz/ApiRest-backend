const { Router } = require("express");
const router = Router();
const controllerUsers = require("../controllers/controllerUsers.js");

// GET
router.get("/usuarios", (req, res) => {
    controllerUsers.buscar()
        .then((users) => res.status(200).json(users))
        .catch((err) => res.status(400).json(err.message));
});

// POST
router.post("/usuarios", (req, res) => {
    const novoUser = req.query;
    console.log("Usuário criado:", novoUser);
    controllerUsers.criar(novoUser)
        .then((userCriado) => res.status(201).json(userCriado))
        .catch((err) => res.status(400).json(err.message));
});


// PUT
router.put("/usuario/:id", (req, res) => {
    const { id } = req.params;
    const atualizarUser = req.query;
    controllerUsers.atualizar(atualizarUser, id)
        .then((userAtualizado) => res.status(200).json(userAtualizado))
        .catch((err) => res.status(400).json(err.message));
});

// DELETE
router.delete("/usuario/:id", (req, res) => {
    const { id } = req.params;
    controllerUsers.deletar(id)
        .then(() => res.status(200).json({ sucesso: `Usuário ${id} deletado com sucesso!` }))
        .catch((err) => res.status(400).json(err.message));
});

module.exports = router;