const { Livros } = require('./modelLivros.js');
const { Users } = require('./modelUsuarios.js');
const { Emprestimos } = require('./modelEmprestimos.js');

Users.hasMany(Emprestimos, { foreignKey: 'idUsuario', as: 'emprestimos'});
Emprestimos.belongsTo(Users, { foreignKey: 'idUsuario', as: 'usuario' });

Livros.hasMany(Emprestimos, { foreignKey: 'idLivro', as: 'emprestimos'});
Emprestimos.belongsTo(Livros, { foreignKey: 'idLivro', as: 'livro'});

module.exports = { Livros, Users, Emprestimos };