const rotas = require("./rotasLivros.js")
module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(rotas);
};