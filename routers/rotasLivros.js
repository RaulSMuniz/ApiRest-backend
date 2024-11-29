const { Router } = require("express");
const router = Router();
const controllerLivro = require("../controllers/controllerLivros.js");

// GET
router.get("/livros", (req, res) => {
    controllerLivro.buscar()
        .then((livros) => res.status(200).json(livros))
        .catch((err) => res.status(400).json(err.message));
});

// POST
router.post("/livros", (req, res) => {
    const novoLivro = req.query;
    console.log("Livro recebido:", novoLivro);
    controllerLivro.criar(novoLivro)
        .then((livroCriado) => res.status(201).json(livroCriado))
        .catch((err) => res.status(400).json(err.message));
});


// PUT
router.put("/livro/:id", (req, res) => {
    const { id } = req.params;
    const atualizarLivro = req.query;
    controllerLivro.atualizar(atualizarLivro, id)
        .then((livroAtualizado) => res.status(200).json(livroAtualizado))
        .catch((err) => res.status(400).json(err.message));
});

// DELETE
router.delete("/livro/:id", (req, res) => {
    const { id } = req.params;
    controllerLivro.deletar(id)
        .then(() => res.status(200).json({ sucesso: `Livro ${id} deletado com sucesso!` }))
        .catch((err) => res.status(400).json(err.message));
});

module.exports = router;