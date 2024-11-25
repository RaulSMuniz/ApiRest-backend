const rotas = require("./rotasAtendimento.js")
module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(rotas);
};