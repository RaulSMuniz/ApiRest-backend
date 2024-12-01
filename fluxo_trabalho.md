# Tutorial para Fluxo de Trabalho com Git

## Clonar o repositório
Para começar a trabalhar no projeto, clone o repositório com o seguinte comando:

```bash
git clone https://github.com/seu-usuario/LibraryAPI.git

## Criar uma nova branch
Para trabalhar em uma funcionalidade, crie uma nova branch a partir da branch `main`. realize o seguinte comando para criar uma branch:

```bash
git checkout -b nome-da-branch

## Fazer alterações no código

Depois de fazer as alterações necessárias no código, adicione os arquivos que você modificou para o Git com o comanda:

```bash
git add . # isso prepara os arquivos para serem commitados.

#Commitar as alterações

Depois de adiconar os arquivos, faça um commit das alterações com uma mensagem explicando o que foi alterado no código. Use este comando:

```bash
git commit -m "Explicação"

#Enviar as alterações para o repositório
 
 Agora que você fez o commit, envie sua branch com as alterações para o repositório. Use este comando:

 ```bash
git push origin nome-da-branch

#criar um Pull Request

Depois de enviar a sua branch para o repositório, abra um Pull Request no GitHub para mesclar a sua branch com a man. Esse Pull request será revisado por outros colaboradores antes de ser mesclado.

#Atualizar sua branch com a main

Antes de começar a trabalhar, é importante garantir que sua branch estteja atualizada com a branch main. Use este comando:

```bash
git pull origin main

#Mesclar a branch

Quando o desenvolvimento de uma funcionalidade estiver pronto, a branch pode ser mesclada com a main. Para fazer isso, primeiro mude a main e depois mescle:

```bash
git checkout main
git merge nome-da-branch

#Resolver conflitos
Se houver conflitos entre as branches, o Git irá avisar. Nesse caso, edite os arquivos com conflito, quando resolver, adicione e commit novamente:

```bash
git add .
git commit -m "Resolve conflitos"

git push origin main







