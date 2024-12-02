# Contribuindo com o projeto

Obrigado por contribuir para o nosso projeto! Siga os passos abaixo para colaborar.

## Fluxo de trabalho no Git

1. **Faça o fork do repositório**: 
   - Para começar a contribuir, faça um *fork* do repositório para a sua conta do GitHub. Isso cria uma cópia do projeto para você trabalhar sem afetar diretamente o repositório principal.

2. **Crie uma branch para a sua tarefa**:
   - Depois de fazer o *fork*, clone o repositório para o seu computador e crie uma nova branch para a tarefa que você vai trabalhar. Nomeie sua branch de forma descritiva, por exemplo:
     ```bash
     git checkout -b minha-tarefa
     ```

3. **Faça o commit das suas alterações**:
   - Após fazer suas alterações no código, adicione os arquivos alterados e faça um commit com uma mensagem clara sobre o que foi feito:
     ```bash
     git add .
     git commit -m "Descrição do que foi feito"
     ```

4. **Envie a sua branch para o GitHub**:
   - Depois de fazer o commit, envie a branch para o repositório remoto:
     ```bash
     git push origin minha-tarefa
     ```

5. **Abra um Pull Request**:
   - No GitHub, abra um **pull request** (PR) para que os mantenedores do projeto revisem o seu código antes de mesclar (fazer merge) no repositório principal. Eles irão revisar e dar feedback.

## Regras para o Pull Request

- Certifique-se de que suas alterações estão bem testadas.
- As mensagens de commit devem ser claras e descritivas.
- Faça o **fork e clone** do repositório **sempre a partir da branch principal** (`main`).
- Não envie código que não foi **testado** ou **revisado**.
- Se assegure de que **todas as dependências** do projeto estejam instaladas corretamente e que o código esteja funcionando em sua máquina local.

## Documentação de Apoio

- [Tutorial para Fluxo de Trabalho com Git](fluxo_trabalho.pdf): Explica os comandos Git e o fluxo de trabalho utilizado no projeto.

## Documentação de Apoio

- [Ferramentas, Bibliotecas e Frameworks](ferramentas_tecnologias.pdf): Documento explicando as tecnologias utilizadas no projeto.

