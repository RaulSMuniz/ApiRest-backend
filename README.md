# LibraryAPI
API Restful para gerenciar livros em uma biblioteca.

## Funcionalidades
- Cadastro de livros.
- Registro de usuários.
- Controle de empréstimos e devoluções.

## Tecnologias e Frameworks utilizados
- **Node.js**: Ambiente de execução JavaScript
- **Express.js**: Framework para criar a API.
- **Sequelize**: ORM para interação com o banco de dados.
- **MySQL**: Banco de dados relacional utilizado para armazenar as informações.
- **dotenv**: Para gerenciar variáveis de ambiente de forma segura.
**Nodemon**: Utilitário para reiniciar automaticamente o servidor durante o desenvolvimento.
- **MySQL Workbench**: Ferramenta gráfica para modelagagem e administração do MySQL

## Como baixar e configurar o projeto
```
bash
git clone https://github.com/RaulSMuniz/LibraryAPI
cd LibraryAPI
npm install
npm install sequelize
npm install express
```  
Configure as variáveis de ambiente:
• No terminal, rode o comando npm install -g nodemon
• Crie um arquivo .env na raiz do projeto.
• Após criar o arquivo .env, adicione o seguinte conteúdo, substituindo pelos valores corretos do seu banco de dados:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=1298319823
DB_NAME=minha_database

Para rodar o projeto no modo de desenvolvimento(com nodemon), utilize o seguinte comando:

nodemon

Por padrão, a API estará rodando em: http://localhost:3000 

