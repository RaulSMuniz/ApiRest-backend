const rotaLivro = require("./rotasLivros.js");
const rotaUser = require("./rotasUsers.js");

module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(rotaLivro, rotaUser);
};