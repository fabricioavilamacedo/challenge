Feature: Api ServeRest

    Deve realizar as validações na Api ServeRest

@buscaValida
Scenario: Validar a busca de um usuario por id com sucesso
When enviar uma requisição com id valido na Api de busca de usuarios
Then terei o status code 200 com os dados do usuario exibido no response com sucesso

@buscaInvalida
Scenario: Validar a busca de um usuario com id invalido
When enviar uma requisição com id invalido na Api de busca de usuarios
Then terei o status code 400 com a mensagem de usuario não encontrado

@cadastroInvalido
Scenario: Validar um cadastro com email existente
When enviar uma requisição com email ja cadastrado na Api de criacao de usuarios
Then terei o status code 400 com a mensagem de este email ja esta sendo usado