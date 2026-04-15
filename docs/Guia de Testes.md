# **Guia de Testes — Gamer Registry**

**Sistema**: Gamer Registry  
**Equipe**: João Vicente Riffel Bertazi  
**Data**: 09/03/2026  
**Versão** utilizada: indisponível

# Descrição geral do Sistema

O sistema Gamer Registry tem como objetivo cadastrar jogos e jogadores, além de ser capaz de realizar uma associação entre os mesmos. Esse sistema pode ser utilizado entre “comunidades gamers” como forma de organização entre jogadores e os jogos em que estão jogando ativamente. Nele o usuário é capaz de cadastrar e organizar jogadores, jogos e associar ambos.

# Ambientes e Preparação

1. Clonar Repositório do GitHub Web para a máquina local;  
2. Abrir a pasta do sistema no app VSCode;  
3. Abrir o PgAdmin;  
4. Criar o banco conforme script;  
5. Executar o arquivo “database/schema.sql”;  
6. Executar o arquivo “database/seeds.sql”;  
7. Criar o arquivo “.env” dentro da pasta backend;  
8. Abrir Terminal da pasta “backend” do sistema;  
9. Executar o comando npm install;  
10. Iniciar servidor;  
11. Abrir servidor em: http://localhost:3000

# Telas do Sistema

### Tela Inicial

**Objetivo**  
Ela serve de ponto de referência para as outras páginas do sistema. Assim, ela possui uma barra de navegação com o link para todas as outras páginas do sistema. Nela o usuário também pode visualizar dois cards com botões para as páginas de “Cadastro de Gamer” e “Cadastro de Games”.

**Passo a Passo de uso**

1. Acessar o sistema em: [http://localhost:3000](http://localhost:3000);  
2. O usuário já está na página inicial;  
3. Navegar para as outras páginas através dos cards ou da barra de navegação;

**Resultado Esperado**   
A página deve abrir sem problemas de carregamento e deve possuir todos os elementos básicos, como os cards, barra de navegação, títulos, botões e footer. Deve possibilitar a navegação para as outras páginas sem qualquer interferência.

**Erros Observados**   
O footer não está no lugar esperado, pois não está no fim da página. Erros básicos de responsividade, como quando a tela diminui os cards desaparecem nos cantos ao invés de se modificarem para caber no formato esperado.

### Cadastro de Gamer

**Objetivo**  
Essa página serve para o cadastro e listagem dos jogadores.

**Passo a Passo de uso**

4. Acessar o sistema em: [http://localhost:3000](http://localhost:3000);  
5. O usuário já está na página inicial;  
6. Navegar para as a página através do card ou da barra de navegação;  
7. Entrar na página;  
8. Preencher o campo de “nickname”;  
9. Preencher o campo de “email”;  
10. Clicar no botão de “Adicionar” para concluir cadastro;  
11. Clicar no botão de “Excluir” para deletar algum jogador da lista;

**Resultado Esperado**   
A página deve abrir sem problemas de carregamento e deve possuir todos os elementos básicos, como o formulário, lista dos jogadores, barra de navegação, títulos, botões e footer. Deve possibilitar a navegação para as outras páginas sem qualquer interferência. Deve cadastrar os jogadores com seus nicknames e emails. Não deve permitir o cadastro com nenhuma das lacunas vazias no formulário. Não deve permitir o cadastro de jogadores com o mesmo nickname ou email. Deve permitir que o usuário delete ou edite jogadores já cadastrados. 

**Erros Observados**   
O footer não está no lugar esperado, pois não está no fim da página. O formulário possibilita o cadastro de jogadores com apenas uma lacuna preenchida. O formulário possibilita o cadastro de jogadores com o mesmo nickname. O formulário não mostra nenhum aviso de sucesso ou erro ao cadastrar os jogadores. Não possui nenhum botão para editar jogadores já cadastrados.

### Cadastro de Games 

**Objetivo**  
Essa página serve para o cadastro e listagem de jogos..

**Passo a Passo de uso**

12. Acessar o sistema em: [http://localhost:3000](http://localhost:3000);  
13. O usuário já está na página inicial;  
14. Navegar para a página através do card ou da barra de navegação;  
15. Entrar na página;  
16. Preencher o campo de “Nome” com o nome do jogo;  
17. Preencher o campo de “Gênero” com o gênero do jogo;  
18. Preencher o campo de “Ano” com o ano de lançamento;  
19. Clicar no botão de “Adicionar” para concluir o cadastro;

**Resultado Esperado**   
A página deve abrir sem problemas de carregamento e deve possuir todos os elementos básicos, como o formulário, lista dos jogos cadastrados, barra de navegação, títulos, botões e footer. Deve possibilitar a navegação para as outras páginas sem qualquer interferência. Deve cadastrar os jogos com seu nome, gênero e ano de lançamento. Não deve permitir o cadastro com nenhuma das lacunas vazias no formulário. Não deve permitir o cadastro de jogos já cadastrados. Deve permitir que o usuário delete ou edite jogos já cadastrados.

**Erros Observados**   
O footer não está no lugar esperado, pois não está no fim da página. O formulário possibilita o cadastro de jogos com apenas a lacuna de “Ano” preenchida. O formulário não mostra nenhum aviso de sucesso ou erro ao cadastrar os jogadores. Não possui nenhum botão para deletar ou editar algum jogo cadastrado.

### Cadastro de Gamer

**Objetivo**  
Essa página serve para o cadastro e listagem dos jogadores.

**Passo a Passo de uso**

20. Acessar o sistema em: [http://localhost:3000](http://localhost:3000);  
21. O usuário já está na página inicial;  
22. Navegar para as a página através do card ou da barra de navegação;  
23. Entrar na página;  
24. Preencher o campo de “Gamer” com o nickname do jogador cadastrado;  
25. Preencher o campo de “Game” com o nome do jogo cadastrado;  
26. Clicar no botão de “Associar” para associar o jogador ao jogo;

**Resultado Esperado**   
A página deve abrir sem problemas de carregamento e deve possuir todos os elementos básicos, como o formulário, lista dos jogadores e jogos associados, barra de navegação, títulos, botões e footer. Deve possibilitar a navegação para as outras páginas sem qualquer interferência. Deve associar os jogadores com os jogos desejados. Não deve permitir o cadastro com nenhuma das lacunas vazias no formulário. Não deve permitir a associação de jogadores com o mesmo jogo mais de uma vez. Deve permitir que o usuário delete alguma associação já existente.

**Erros Observados**   
O footer não está no lugar esperado, pois não está no fim da página. A barra de navegação não funciona completamente de forma responsiva. O formulário não mostra nenhum aviso de sucesso ou erro ao cadastrar os jogadores. Não existe nenhum botão para remover associações já existentes.

# Casos de Teste 

| Funcionalidade | Ação | Resultado  |
| :---- | :---- | :---- |
| Cadastrar Jogador  | Preencher o Formulário | Jogador cadastrado na lista |
| Cadastrar Jogo | Preencher o Formulário  | Jogo cadastrado na lista  |
| Associar Jogos à Jogadores | Preencher o Formulário  | Associação cadastrada na lista |
| Visualizar Lista de Jogadores | Abrir página de Jogadores | Lista disponível para visualização |
| Visualizar Lista de Jogos | Abrir página de Jogos  | Lista disponível para visualização |
| Visualizar Lista de Associações | Abrir página de Associações | Lista disponível para visualização |
| Remover Jogador | Selecionar Botão para excluir Jogador na lista de Jogadores | Jogador Removido da Lista |

# Conclusão

O sistema não funcionou corretamente no que se propôs, pois algumas funcionalidades estavam faltando ou não foram construídas da melhor maneira para atender o usuário final.  
Foram observadas falhas de responsividades em algumas páginas; falhas em formulários que aceitam cadastro com lacunas vazias; cadastros com o conteúdo de lacunas repetidos; falta de botões para ações pertinentes (como editar e excluir campos); falta de avisos de ações ao usuário (como erro ou sucesso).  
É de extrema importância que sejam feitas melhorias nos formulários, listas, respostas ao usuário (como avisos de sucesso ou erro) e responsividade de todas as páginas. 