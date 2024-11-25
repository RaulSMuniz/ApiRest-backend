const connection = require("../infraestrutura/connection.js");

class modelAtendimento {
    listar() {
        const sql = 'SELECT * FROM ATENDIMENTOS';
        return new Promise((resolve, reject) => {
            connection.query(sql, {}, (err, res) => {
                if (err){
                    console.log("Erro no listar: ")
                    reject(err);
                }
                console.log("Funcionou o listar.");
                resolve(res);
            });
        });
    };

    criar(novoAtendimento) {
        const sql = 'INSERT INTO atendimentos SET ?';
        console.log(novoAtendimento);
        return new Promise((resolve, reject) => {
            connection.query(sql, novoAtendimento, (err, res) => {
                if(err) {
                    console.log("Erro ao criar.");
                    reject(err);
                }
                resolve(res);
            });
        });
    };

    atualizar(atualizarAtendimento, id) {
        const sql = 'UPDATE atendimentos SET ? where id = ?';
        console.log(atualizarAtendimento);
        return new Promise((resolve, reject) => {
            connection.query(sql, [atualizarAtendimento, id], (err, res) => {
                if(err) {
                    console.log("Erro ao atualizar.");
                    reject(err);
                }
                resolve(res);
            });
        });
    };

    deletar(id) {
        const sql = 'DELETE FROM atendimentos where id = ?';
        return new Promise((resolve, reject) => {
            connection.query(sql, id, (err, res) => {
                if(err) {
                    console.log("Erro ao deletar.");
                    reject(err);
                }
                resolve(res);
            });
        });
    };
};

module.exports = new modelAtendimento();