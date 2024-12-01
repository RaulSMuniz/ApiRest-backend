--inserindo dados de exemplo na tabela usuário
INSERT INTO Usuario (nome, email, telefone, endereco, emprestimos_feitos) VALUES
('Rafael Viana', 'rafael@gmail.com', '81985624163', 'Rua Londres, 123', 0),
('Alana Viana', 'alana@gmail', '819843786324', 'Rua Amsterdam, 321', 1);

--inserindo dados de exemplo na tabela livro
INSERT INTO Livro (titulo, autor, genero, ano_de_publicacao, qtd_emprestimos) VALUES
('O Hobbit', 'J.R.R. Tolkien', 'Fantasia', '1937-09-21', 0),
('Como treinar o seu dragão', 'Cressida Cowell', 'Aventura', '2010-03-26', 1);

--inserindo dados de exemplo na tabela emprestimo
INSERT INTO Emprestimo (data_emprestimo, data_devolucao, devolucao, idUsuario, idLivro) VALUES
('2024-11-01', '2024-12-01', 'pendente', 1, 1),
('2024-11-15', '2024-12-15', 'pendente', 2, 2);