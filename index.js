const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index.js");
const connection = require("./infraestrutura/connection.js");
const tables = require("./infraestrutura/tables.js");

router(app, express);
tables.init(connection);


app.listen(port, (error) => {
    if (error){
        console.log("Erro.");
        return;
    }
    console.log(`Rodando na porta ${port}.`);
});