const express = require("express");
const app = express();
const { sequelize } = require("./config/db");
const rota = require("./routers/rotasLivros");

const port = 3000;

app.use(express.json());
// Rotas
app.use(rota);

// Sincroniza tabelas
sequelize.sync({ alter: true })
    .then(() => console.log("Tabelas sincronizadas."))
    .catch((err) => console.log(err.message));

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
