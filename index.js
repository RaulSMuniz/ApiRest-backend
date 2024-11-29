const express = require("express");
const app = express();
const { sequelize } = require("./config/db");
const rotaLivro = require("./routers/rotasLivros.js");
const rotaUser = require("./routers/rotasUsers.js");
const rotaEmprestimo = require("./routers/rotasEmprestimos.js");
require('./models/relacionamento.js');

const port = 3000;

app.use(express.json());
// Rotas
app.use(rotaLivro);
app.use(rotaUser);
app.use(rotaEmprestimo);

// Sincroniza tabelas
sequelize.sync({ alter: true })
    .then(() => console.log("Tabelas sincronizadas."))
    .catch((err) => console.log(err.message));

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
