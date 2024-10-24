Feature: Frontend ServeRest

    Deve realizar as validações de frontend

@login
Scenario: Realizar um login com sucesso
Given que eu esteja na pagina de serverRest
When informar dados validos de login
Then serei redirecionado para pagina inicial com sucesso

@loginInvalido
Scenario: Validar o login com dados invalidos
Given que eu esteja na pagina de serverRest
When informar dados invalidos de login
Then verei a mensagem de email ou senha invalidos

@logout
Scenario: Realiar um logout com sucesso
Given que eu esteja logado serverRest
When clicar no botao de logout
Then serei redirecionado para pagina de login com sucesso