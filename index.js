const express = require("express");
const app = express();
const { sequelize } = require("./config/db");
const rotaLivro = require("./routers/rotasLivros.js");
const rotaUser = require("./routers/rotasUsers.js");
const rotaEmprestimo = require("./routers/rotasEmprestimos.js");
require('./models/relacionamento.js');  // Certifique-se de que os modelos estão carregados

const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Definindo as rotas
app.use(rotaLivro);
app.use(rotaUser);
app.use(rotaEmprestimo);

// Rota de boas-vindas
app.get('/', (req, res) => {
    res.send('Bem-vindo à API da biblioteca!');
});

// Testando a conexão com o banco de dados e sincronizando as tabelas
sequelize.authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados feita com sucesso.");
        return sequelize.sync({ alter: true });  // Sincroniza as tabelas com o banco
    })
    .then(() => {
        console.log("Tabelas sincronizadas com sucesso.");
    })
    .catch((err) => {
        console.error("Erro ao conectar ou sincronizar o banco de dados:", err.message);
    });

// Inicia o servidor na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
