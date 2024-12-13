class Tables {
    init(connection) {
        this.connection = connection;
        this.criarTabelaAtendimentos();
    };

    criarTabelaAtendimentos() {
        const sql = `
        create table if not exists atendimentos (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            DATA DATE, 
            SERVIÇO varchar(100),
            cliente varchar(100) not null,
            status enum("ativo", "completo", "cancelado") default "ativo"
        );
        `;
        this.connection.query(sql, (error) => {
            if (error) {
                console.log("Erro ocorreu aqui: ")
                console.log(error.message);
                return;
            };
            console.log("A tabela foi criada.");
        });
    }
};

module.exports = new Tables();