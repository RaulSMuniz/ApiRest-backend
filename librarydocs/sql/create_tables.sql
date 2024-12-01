--Criação da tabela Usuário
CREATE TABLE IF NOT EXISTS Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY, -- campo 'id' como primary key
    nome VARCHAR(100),
    email VARCHAR(150) UNIQUE,
    telefone VARCHAR(20),
    endereco VARCHAR(255),
    emprestimos_feitos INT DEFAULT 0
);

--Criação da tabela livro
CREATE TABLE IF NOT EXISTS Livro (
    id INT AUTO_INCREMENT PRIMARY_KEY, --campo 'id' como primary key
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL, 
    genero VARCHAR(100) NOT NULL, 
    ano_de_publicacao DATE NOT NULL, 
    qtd_emprestimos INT DEFAULT 0
);

--Criação da tabela empréstimo
CREATE TABLE IF NOT EXISTS Emprestimo (
    id INT AUTO_INCREMENT PRIMARY KEY, -- campo 'id' como primary key
    data_emprestimo DATE NOT NULL, 
    data_devolucao DATE NOT NULL, 
    devolucao ENUM('pendente', 'devolvido') DEFAULT 'pendente',
    idUsuario INT, --campo 'idUsuario' para referenciar a tabela usuário
    idLivro INT, --campo 'idLivro' para referenciar a tabela livro

    --Defiindo as chaves estrangeiras (Foreign Keys)
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id) ON DELETE CASCADE, 
    FOREIGN KEY (idLivro) REFERENCES Livro(id) ON DELETE CASCADE
);